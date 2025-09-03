import RequestedParcelList from "@/components/modules/Admin/Parcel/RequestedParcelList";
import DeletedUserList from "@/components/modules/Admin/User/DeletedUser";
import AllUnauthorUserList from "@/components/modules/Admin/User/UnauthorUser";
import AllUserList from "@/components/modules/Admin/User/UserList";
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
        title: "All Parcels",
        url: "/admin/parcels",
        component: Parcels,
      },
      {
        title: "Requested ",
        url: "/admin/parcel/requested",
        component: RequestedParcelList,
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
      {
        title: "All User",
        url: "/admin/user/all",
        component: AllUserList,
      },
      {
        title: "Deleted User",
        url: "/admin/user/deleted",
        component: DeletedUserList,
      },
      {
        title: "Unverified User",
        url: "/admin/user/unverified",
        component: AllUnauthorUserList,
      },
    ],
  },
];
