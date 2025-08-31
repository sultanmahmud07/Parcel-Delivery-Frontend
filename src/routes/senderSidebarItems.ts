import Parcels from "@/pages/Sender/Parcels";
import { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Parcel",
        url: "/sender/bookings",
        component: Parcels,
      },
    ],
  },
];
