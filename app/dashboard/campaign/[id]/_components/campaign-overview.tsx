'use client'
import React from 'react';
import { Progress } from '../../../../../components/ui/progress';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { IoMdShare } from 'react-icons/io';

interface IProps {
  className?: string;
}

function CampaignOverview({ className }: IProps) {
  return (
    <>
      <div
        className={cn(
          "bg-background rounded-md shadow-sm grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-4 p-4",
          className
        )}
      >
        <div className="w-full aspect-video rounded-md overflow-hidden">
          <img
            src="https://picsum.photos/id/83/1600/900"
            className="w-full h-full object-cover"
            alt="campaign 1"
          />
        </div>
        <div className="sm:space-y-2 flex flex-col justify-between">
          <div>
            <h2 className="text-sm sm:text-lg font-semibold leading-tight">
              Wakaf untuk Kebutuhan Mesjid
            </h2>
            <span className="text-sm sm:text-xl text-secondary font-bold tracking-wide">
              Rp12.000.000
            </span>
            <div className="flex flex-row justify-between text-gray-700 sm:mt-2">
              <div>
                <h4 className="text-xs sm:text-base leading-3 text-gray-500">Donatur</h4>
                <span className="block font-semibold text-sm sm:text-lg">89</span>
              </div>
              <div>
                <h4 className="text-xs sm:text-base leading-3 text-gray-500">Sisa Hari</h4>
                <span className="block font-semibold text-sm sm:text-lg text-right">1</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex gap-2 sm:mt-6">
            <Button variant="outline">
              <IoMdShare className="text-base" />
            </Button>
            <Button variant="secondary" className="relative flex-1">
              Donasi sekarang
              <span className="absolute -top-2 -right-2 bg-sky-200 text-secondary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                💰
              </span>
            </Button>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-row justify-between">
            <div>
              <h4 className="text-xs sm:text-base leading-3">Terkumpul</h4>
              <span className="block font-bold text-sm sm:text-lg text-green-500">
                Rp9.835.000
              </span>
            </div>
            <div className="text-right">
              <h4 className="text-xs sm:text-base leading-3">Kekurangan</h4>
              <span className="block font-bold text-sm sm:text-lg text-red-500">
                Rp805.000
              </span>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xs">Total: Rp12.000.000</span>
            <Progress value={82} className="h-1.5 sm:h-2" />
          </div>
          <div className="flex sm:hidden gap-2 mt-4">
            <Button variant="outline">
              <IoMdShare className="text-base" />
            </Button>
            <Button variant="secondary" className="relative flex-1">
              Donasi sekarang
              <span className="absolute -top-2 -right-2 bg-sky-200 text-secondary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                💰
              </span>
            </Button>
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md bg-muted">
          <p className="text-xs">
            <b>Disclaimer:</b> Kampanye ini diadakan secara resmi oleh pengurus dari Pondok Pesantren Mahasiswa Al-Ihsan dan menjadi tanggung jawabnya. Jika ada masalah atau kecurigaan silahkan <a href="#" className="text-secondary underline">laporkan kepada kami.</a>
          </p>
        </div>
      </div>
      <div className="bg-background rounded-md shadow-sm p-4 space-y-2 mt-4">
        <h2 className="text-xl font-bold">Detail</h2>
        <p className="leading-relaxed text-justify text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          eius praesentium atque modi consequatur dolor quod. Tenetur
          numquam doloremque officiis minus, ex recusandae inventore esse,
          autem obcaecati atque rem quia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit deserunt itaque quod ad
          dolorem facilis, nisi dolor temporibus nesciunt, commodi aliquid
          culpa nulla. Mollitia dolor suscipit quidem cum laborum!
          Cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Commodi omnis sint error dolore veniam harum, quibusdam
          consequuntur, aut repellendus ut consequatur laborum voluptate
          assumenda culpa. Debitis vitae est vel natus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Vero eius praesentium
          atque modi consequatur dolor quod. Tenetur numquam doloremque
          officiis minus, ex recusandae inventore esse, autem obcaecati
          atque rem quia? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Impedit deserunt itaque quod ad dolorem
          facilis, nisi dolor temporibus nesciunt, commodi aliquid culpa
          nulla. Mollitia dolor suscipit quidem cum laborum! Cupiditate.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Commodi omnis sint error dolore veniam harum, quibusdam
          consequuntur, aut repellendus ut consequatur laborum voluptate
          assumenda culpa. Debitis vitae est vel natus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Vero eius praesentium
          atque modi consequatur dolor quod. Tenetur numquam doloremque
          officiis minus, ex recusandae inventore esse, autem obcaecati
          atque rem quia? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Impedit deserunt itaque quod ad dolorem
          facilis, nisi dolor temporibus nesciunt, commodi aliquid culpa
          nulla. Mollitia dolor suscipit quidem cum laborum! Cupiditate.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Commodi omnis sint error dolore veniam harum, quibusdam
          consequuntur, aut repellendus ut consequatur laborum voluptate
          assumenda culpa. Debitis vitae est vel natus!
        </p>
      </div>
    </>
  );
}

export default CampaignOverview;
