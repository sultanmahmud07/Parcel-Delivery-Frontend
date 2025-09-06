import UserAnalytics from "@/components/modules/Admin/Analytics/UserAnalytics";
import RequestedParcelList from "@/components/modules/Admin/Parcel/RequestedParcelList";
import AllAdminList from "@/components/modules/Admin/User/AllAdmins";
import DeletedUserList from "@/components/modules/Admin/User/DeletedUser";
import AllUnauthorUserList from "@/components/modules/Admin/User/UnauthorUser";
import AllUserList from "@/components/modules/Admin/User/UserList";
import Parcels from "@/pages/Admin/Parcels";
import { ISidebarItem } from "@/types";
import { lazy } from "react";
import {
  BarChart3,
  Package,
  // PlusSquare,
  ClipboardList,
  Users,
  UserX,
  UserCheck,
  Shield,
  User,
  Contact,
} from "lucide-react";
import MyProfile from "@/pages/Sender/MyProfile";
import AllContactList from "@/components/modules/Admin/Contact/ContactList";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Parcel Management",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
        icon: BarChart3,
      },
      {
        title: "All Parcels",
        url: "/admin/parcels",
        component: Parcels,
        icon: Package,
      },
      {
        title: "Requested",
        url: "/admin/parcel/requested",
        component: RequestedParcelList,
        icon: ClipboardList,
      },
      // {
      //   title: "Add Parcel",
      //   url: "/admin/parcel/create",
      //   component: Parcels,
      //   icon: PlusSquare,
      // },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "Analytics",
        url: "/admin/user/analytics",
        component: UserAnalytics,
        icon: BarChart3,
      },
      {
        title: "All User",
        url: "/admin/user/all",
        component: AllUserList,
        icon: Users,
      },
      {
        title: "Deleted User",
        url: "/admin/user/deleted",
        component: DeletedUserList,
        icon: UserX,
      },
      {
        title: "Unverified User",
        url: "/admin/user/unverified",
        component: AllUnauthorUserList,
        icon: UserCheck,
      },
    ],
  },
  {
    title: "Control Accessibility",
    items: [
      {
        title: "Manage Admin",
        url: "/admin/admin",
        component: AllAdminList,
        icon: Shield,
      },
      {
        title: "My Profile",
        url: "/admin/profile",
        component: MyProfile,
        icon: User,
      },
      {
        title: "Contact Queries",
        url: "/admin/contact",
        component: AllContactList,
        icon: Contact,
      },
    ],
  },
];
