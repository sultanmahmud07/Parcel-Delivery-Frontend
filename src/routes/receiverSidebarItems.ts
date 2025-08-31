import Receiver from "@/pages/Receiver/Receiver";
import { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "My Parcel",
        url: "/receiver/parcel",
        component: Receiver,
      },
    ],
  },
];
