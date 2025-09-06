# 📦 Parcel Delivery Frontend

A modern parcel delivery frontend application built with **React**,
**TypeScript**, **Redux Toolkit (RTK Query)**, and **Tailwind CSS**.\
This platform allows users to send, track, and manage parcels with
dedicated roles like **Admin**, **Sender**, and **Receiver**.

------------------------------------------------------------------------

## 🚀 Project Overview

-   User authentication with role-based access (**Admin**, **Sender**,
    **Receiver**).
-   Parcel management: create, update, track, and view delivery status.
-   Real-time parcel tracking with unique **Tracking ID**.
-   Analytics dashboards for both Senders and Receivers.
-   Fully responsive design using **TailwindCSS**.

------------------------------------------------------------------------

## 🛠️ Technology Stack

-   **React (TypeScript)** -- UI framework
-   **Redux Toolkit + RTK Query** -- state management & API handling
-   **Tailwind CSS + Shadcn UI** -- styling & UI components
-   **Date-fns** -- date formatting & handling
-   **React Router DOM** -- client-side routing
-   **Sonner & Lucide-react** -- toast notifications & icons

------------------------------------------------------------------------

## ⚙️ Setup Instructions

1.  Clone the repository:

    ``` bash
    git clone https://github.com/your-repo/parcel-delivery-frontend.git
    cd parcel-delivery-frontend
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Create a `.env` file in the root and configure API URL:

    ``` env
    VITE_API_URL=http://localhost:5000/api
    ```

4.  Run the development server:

    ``` bash
    npm run dev
    ```

5.  Build for production:

    ``` bash
    npm run build
    ```

------------------------------------------------------------------------

## 🌍 Live URL

[Parcel Delivery Frontend - Live
Demo](https://your-live-site.vercel.app)

------------------------------------------------------------------------

## 🔑 Test Credentials

### 👨‍💼 Admin

-   **Email:** admin@gmail.com\
-   **Password:** 123456

### 📤 Sender

-   **Email:** sender@gmail.com\
-   **Password:** 123456

### 📥 Receiver

-   **Email:** receiver@gmail.com\
-   **Password:** 123456

------------------------------------------------------------------------

## 📌 Notes

-   Ensure the backend server is running and the API base URL is
    correctly set in `.env`.
-   Tracking parcels requires a valid **Tracking ID** generated when a
    parcel is created.
-   Role-based access ensures **Admin, Sender, Receiver** see only their
    allowed routes.

------------------------------------------------------------------------

💡 Built with ❤️ using React, TypeScript & TailwindCSS
