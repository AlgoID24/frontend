import { NavType } from "./types";
import MageDashboard2 from '~icons/mage/dashboard-2.jsx';
import SolarCardTransferLinear from '~icons/solar/card-transfer-linear.jsx';
import SolarWalletMoneyOutline from '~icons/solar/wallet-money-outline.jsx';
import HugeiconsMessageNotification01 from '~icons/hugeicons/message-notification-01.jsx';
import IconamoonProfileLight from '~icons/iconamoon/profile-light.jsx';

const APP_NAVIGATION: NavType[] = [
  {
    title: "Dashboard",
    href: "/app",
    icon: <MageDashboard2 />
  },
  {
    title: "My Wallet",
    href: "/app/wallet",
    icon: <SolarWalletMoneyOutline />
  },
  {
    title: "Transfers",
    href: "/app/transfer",
    icon: <SolarCardTransferLinear />
  },
  {
    title: "Notifications",
    href: "/app/notifications",
    icon: <HugeiconsMessageNotification01 />
  },
  {
    title: "Profile",
    href: "/app/profile",
    icon: <IconamoonProfileLight />
  },
];

export default APP_NAVIGATION;
