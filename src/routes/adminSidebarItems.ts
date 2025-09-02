import AddDivision from "@/pages/Admin/AddDivision";
import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
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
        component: AddDivision,
      }
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "All Users",
        url: "/admin/user",
        component: AddTourType,
      },
      {
        title: "Blocked Users",
        url: "/admin/blocked-users",
        component: AddDivision,
      },
      {
        title: "All Admins",
        url: "/admin/admins",
        component: AddTour,
      },
    ],
  },
];
