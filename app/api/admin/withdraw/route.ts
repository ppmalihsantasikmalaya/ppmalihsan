import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { formatRupiah, isAdmin } from "@/lib/utils";
import { transactionSchema, withdrawSchema } from "@/schemas";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const currentUser = await getUserById(session.user.id!);

    if (!currentUser?.id || !currentUser?.email || !isAdmin(currentUser.role)) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body: z.infer<typeof withdrawSchema> = await req.json();

    const validatedFields = withdrawSchema.safeParse(body);

    if (!validatedFields.success) {
      return new NextResponse('Invalid inputs', { status: 400 })
    }

    const {
      amount,
      campaignId,
      description,
      withdrawAccountId
    } = validatedFields.data;

    const campaign = await db.campaign.findUnique({
      where: { id: campaignId }
    });

    const paymentMethod = await db.withdrawalAccount.findUnique({
      where: { id: withdrawAccountId }
    })

    if (!campaign || !paymentMethod) {
      return new NextResponse(`${!campaign ? 'Campaign' : 'Withdraw account'} not found`, {
        status: 404
      })
    }

    const newWithdrawal = await db.withdrawalRequest.create({
      data: {
        amount: +amount,
        methodAccountHolder: paymentMethod.accountHolder,
        methodAccountNumber: paymentMethod.accountNumber,
        methodBankName: paymentMethod.bankName,
        campaignId,
        userId: currentUser.id,
        description,
      },
    });

    if (newWithdrawal.amount > campaign.availableBalance) {
      return new NextResponse('Invalid inputs', { status: 400 })
    }

    await db.campaign.update({
      where: { id: campaign.id },
      data: {
        availableBalance: {
          decrement: newWithdrawal.amount
        }
      }
    })

    await db.notification.create({
      data: {
        userId: currentUser.id,
        title: 'Permintaan penarikan diproses',
        type: 'PENDING',
        message: `
          Permintaan penarikan pada kampanye <b>${campaign.title}</b> 
          dengan nominal ${formatRupiah(newWithdrawal.amount)} sedang diproses. 
          Lihat detail permintaan penarikan di halaman 
          <a href="/dashboard/request-withdrawal/${newWithdrawal.id}" target="_blank" rel="noopener noreferrer">
            detail penarikan
          </a>.
        `
      }
    })

    await db.notification.create({
      data: {
        role: 'SUPER_ADMIN',
        title: 'Permintaan penarikan baru',
        type: 'GENERAL',
        message: `
          Admin <b>${currentUser.name}</b> mengajukan permintaan penarikan pada 
          kampanye <b>${campaign.title}</b> dengan nominal 
          ${formatRupiah(newWithdrawal.amount)}. Silahkan lakukan pembayaran secepatnya dan 
          upload bukti pembayaran di halaman 
          <a href="/dashboard/request-withdrawal/${newWithdrawal.id}" target="_blank" rel="noopener noreferrer">
            detail penarikan
          </a>.
        `
      }
    })

    return NextResponse.json(newWithdrawal, {
      status: 201
    });
  } catch (error: any) {
    console.log('CREATE WITHDRAW ERROR: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}