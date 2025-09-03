import Parcels from "@/pages/Admin/Parcels";
// import Analytics from "@/pages/Admin/Analytics";
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "Pending Parcels",
        url: "/admin/parcel/pending",
        component: Parcels,
      },
      {
        title: "All Parcels",
        url: "/admin/parcels",
        component: Parcels,
      },
      {
        title: "Add Parcel",
        url: "/admin/parcel/create",
        component: Parcels,
      }
    ],
  },
  {
    title: "User Management",
    items: [
    ],
  },
];
