import CreateParcel from "@/pages/Sender/CreateParcel";
import MyProfile from "@/pages/Sender/MyProfile";
import Overview from "@/pages/Sender/Overview";
import Parcels from "@/pages/Sender/Parcels";
import { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Overview",
        url: "/sender/overview",
        component: Overview,
      },
      {
        title: "My Parcels",
        url: "/sender/parcels",
        component: Parcels,
      },
      {
        title: "Add Listing",
        url: "/sender/parcel/create",
        component: CreateParcel,
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        title: "My Profile",
        url: "/sender/profile",
        component: MyProfile,
      },
    ],
  },
];
