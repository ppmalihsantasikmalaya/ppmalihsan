import { AiOutlineHome } from 'react-icons/ai';
import { TbMoneybag } from "react-icons/tb";
import { LuTrophy, LuUser2 } from "react-icons/lu";

export const sidebarNavItems = [
  {
    href: "/dashboard",
    icon: AiOutlineHome,
    text: "Beranda",
  },
  {
    href: "/dashboard/history",
    icon: TbMoneybag,
    text: "Riwayat Wakaf",
  },
  {
    href: "/dashboard/leaderboard",
    icon: LuTrophy,
    text: "Papan Peringkat",
  },
  {
    type: "divider",
  },
  {
    href: "/dashboard/profile",
    icon: LuUser2,
    text: "Profil",
  },
];