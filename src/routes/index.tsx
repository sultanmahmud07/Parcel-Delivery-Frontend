import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/AboutPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import Booking from "@/pages/Booking";
import Homepage from "@/pages/Homepage";
import Success from "@/pages/Payment/Success";
import Fail from "@/pages/Payment/Fail";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import ParcelDetails from "@/pages/Sender/ParcelDetails";
import Contact from "@/pages/ContactPage";
import TrackingParcelPage from "@/pages/TrackingParcelPage";
import OurTeamPage from "@/pages/OurTeamPage";
import UserDetails from "@/components/modules/Admin/User/UserDetails";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: OurTeamPage,
        path: "team",
      },
      {
        Component: TrackingParcelPage,
        path: "track",
      },
      {
        Component: Tours,
        path: "tours",
      },
      {
        Component: TourDetails,
        path: "tours/:id",
      },
      {
        Component: withAuth(Booking),
        path: "booking/:id",
      },
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/register",
      },
      {
        Component: Verify,
        path: "/verify",
      },
      {
        Component: Unauthorized,
        path: "/unauthorized",
      },
      {
        Component: Success,
        path: "/payment/success",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
         {
        path: "/admin/parcel/:id",
        Component: ParcelDetails,
      },
         {
        path: "/admin/user/:id",
        Component: UserDetails,
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.sender as TRole),
    path: "/sender",
    children: [
      { index: true, element: <Navigate to="/sender/overview" /> },
      ...generateRoutes(senderSidebarItems),
      {
        path: "/sender/parcel/:id",
        Component: ParcelDetails,
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.receiver as TRole),
    path: "/receiver",
    children: [
      { index: true, element: <Navigate to="/receiver/overview" /> },
      ...generateRoutes(receiverSidebarItems),
        {
        path: "/receiver/parcel/:id",
        Component: ParcelDetails,
      },
    ],
  },
  {
    Component: Fail,
    path: "/payment/fail",
  },
]);
