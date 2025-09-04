import ManageParcels from "@/pages/Receiver/ManageParcels";
import MyProfile from "@/pages/Receiver/MyProfile";
import Overview from "@/pages/Receiver/Overview";
import ReceivedParcel from "@/pages/Receiver/ReceivedParcel";
import RecentParcels from "@/pages/Receiver/RecentParcels";
import { ISidebarItem } from "@/types";
import { LayoutDashboard, Clock, PackageSearch, Inbox, User } from "lucide-react";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Overview",
        url: "/receiver/overview",
        component: Overview,
        icon: LayoutDashboard,
      },
      {
        title: "Recent Parcel",
        url: "/receiver/parcel/recent",
        component: RecentParcels,
        icon: Clock,
      },
      {
        title: "All Parcel",
        url: "/receiver/all-parcel",
        component: ManageParcels,
        icon: PackageSearch,
      },
      {
        title: "Received Parcel",
        url: "/receiver/parcel/received",
        component: ReceivedParcel,
        icon: Inbox,
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        title: "Profile",
        url: "/receiver/profile",
        component: MyProfile,
        icon: User,
      },
    ],
  },
];
