import ManageParcels from "@/pages/Receiver/ManageParcels";
import MyProfile from "@/pages/Receiver/MyProfile";
import Overview from "@/pages/Receiver/Overview";
import ReceivedParcel from "@/pages/Receiver/ReceivedParcel";
import RecentParcels from "@/pages/Receiver/RecentParcels";
import { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Overview",
        url: "/receiver/overview",
        component: Overview,
      },
      {
        title: "Recent Parcel",
        url: "/receiver/parcel/recent",
        component: RecentParcels,
      },
      {
        title: "All Parcel",
        url: "/receiver/all-parcel",
        component: ManageParcels,
      },
      {
        title: "Received Parcel",
        url: "/receiver/parcel/received",
        component: ReceivedParcel,
      },
    ],
  },
  {
    title: "manage",
    items: [
      {
        title: "Profile",
        url: "/receiver/profile",
        component: MyProfile,
      },
    ],
  },
];
