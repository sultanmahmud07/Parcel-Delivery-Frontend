import { IUser } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { FiLogOut, FiUser, FiMap, FiBriefcase, FiSettings, FiLayers, FiUsers } from "react-icons/fi";
import { IoListSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import defaultUserPic from '../../assets/images/default/default-user.jpg';
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";

type Props = {
      userInfo?: IUser | null;
};


const UserProfileMenu: React.FC<Props> = ({ userInfo = null }) => {
      const [open, setOpen] = useState(false);
      const ref = useRef<HTMLDivElement | null>(null);
      const [logout] = useLogoutMutation();
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      
      useEffect(() => {
            function handleDocClick(e: MouseEvent) {
                  if (!ref.current) return;
                  if (!ref.current.contains(e.target as Node)) {
                        setOpen(false);
                  }
            }
            function handleKey(e: KeyboardEvent) {
                  if (e.key === "Escape") setOpen(false);
            }
            document.addEventListener("mousedown", handleDocClick);
            document.addEventListener("keydown", handleKey);
            return () => {
                  document.removeEventListener("mousedown", handleDocClick);
                  document.removeEventListener("keydown", handleKey);
            };
      }, []);

      const displayName = userInfo?.name ?? userInfo?.email?.split?.("@")[0] ?? "Guest";

      const handleSignOut = async () => {
            await logout(undefined);
            dispatch(authApi.util.resetApiState());
            navigate("/login")
      };

      return (
            <div ref={ref} className="relative inline-block text-left">
                  {/* Trigger */}
                  <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer  focus:outline-none transition ${open ? "ring-2 ring-offset-2 ring-secondary" : "hover:ring-2 hover:ring-offset-2 hover:ring-green-200"
                              }`}
                  >
                        {/* avatar */}
                        <div className="w-10 h-10 border-2 border-primary rounded-full bg-gray-100 overflow-hidden flex items-center justify-center text-sm font-semibold text-gray-700">
                              {userInfo?.picture ? (
                                    <img src={defaultUserPic} alt={displayName} width={100} height={100} className="w-full h-full object-cover" />
                              ) : (
                                    <img src={defaultUserPic} alt={displayName} className="w-full h-full object-cover" />

                              )}
                        </div>
                        <svg
                              className={`w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                        >
                              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                        </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                        role="menu"
                        aria-hidden={!open}
                        className={`absolute right-0 mt-2 w-56 rounded bg-white shadow-lg  z-50 transform transition-all ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                              }`}
                  >
                        {/* header showing avatar + name */}
                        <div className="px-4 py-3 border-b border-gray-200">
                              <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center text-sm font-semibold text-gray-700">
                                          {userInfo?.picture ? (
                                                <img src={defaultUserPic} alt={displayName} className="w-full h-full object-cover" />
                                          ) : (
                                                <img src={defaultUserPic} alt={displayName} className="w-full h-full object-cover" />
                                          )}
                                    </div>
                                    <div>
                                          <div className="text-sm font-medium text-gray-900">{displayName}</div>
                                          <div className="text-xs text-gray-500">{userInfo?.email ?? ""}</div>
                                    </div>
                              </div>
                        </div>

                        {/* menu items */}
                        <div className="py-1">
                              {/* --- 1. TOURIST / GUIDE Common Item --- */}
                              {(userInfo?.role === "SENDER" || userInfo?.role === "RECEIVER") && (
                                    <Link to="/explore" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                          <FiMap className="w-4 h-4" />
                                          Explore Tours
                                    </Link>
                              )}

                              {/* --- 2. ROLE-SPECIFIC DASHBOARD/BOOKING LINKS --- */}

                              {/* TOURIST: My Bookings */}
                              {userInfo?.role === "SENDER" && (
                                    <Link to="/dashboard/my-booking" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                          <FiBriefcase className="w-4 h-4" />
                                          My Trips
                                    </Link>
                              )}

                              {/* GUIDE: Dashboard (My Listings, Bookings) */}
                              {userInfo?.role === "RECEIVER" && (
                                    <>
                                          <Link to="/guide/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                                <FiLayers className="w-4 h-4" />
                                                Dashboard
                                          </Link>
                                          <Link to="/guide/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                                <IoListSharp className="w-4 h-4" />
                                                My listing
                                          </Link>
                                    </>
                              )}

                              {/* ADMIN/SUPER_ADMIN: Admin Dashboard */}
                              {(userInfo?.role === "ADMIN" || userInfo?.role === "SUPER_ADMIN") && (
                                    <>
                                          <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                                <FiSettings className="w-4 h-4" />
                                                Admin Dashboard
                                          </Link>
                                          <Link to="/admin/user-management" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                                <FiUsers className="w-4 h-4" />
                                                Manage Users
                                          </Link>
                                          <Link to="/admin/booking-management" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                                <FiBriefcase className="w-4 h-4" />
                                                Manage Listings
                                          </Link>
                                    </>
                              )}

                              {/* --- 3. UNIVERSAL LINKS --- */}

                              <Link to="/my-profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem">
                                    <FiUser className="w-4 h-4" />
                                    Profile
                              </Link>

                              <button
                                    onClick={handleSignOut}
                                    className="w-full hover:text-red-600 text-left flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                    role="menuitem"
                                    type="button"
                              >
                                    <FiLogOut className="w-4 h-4" />
                                    Logout
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default UserProfileMenu;
