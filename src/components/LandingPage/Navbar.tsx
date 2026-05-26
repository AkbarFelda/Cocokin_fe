import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faRightFromBracket,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";
import { authService } from "../../services/auth";
import type { ProfilePayload, ProfilePhotoPayload } from "../../types/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("accessToken"),
  );
  const [user, setUser] = useState<ProfilePayload | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<ProfilePhotoPayload | null>(
    null,
  );
  const handleLogout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    setUser(null);
    setProfilePhoto(null);
    setIsDropdownOpen(false);
    setIsOpen(false);
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const getProfileData = async () => {
        try {
          const [profileRes, photoRes] = await Promise.all([
            authService.getProfile(),
            authService.getProfilePhoto(),
          ]);

          setUser(profileRes.data);
          setProfilePhoto(photoRes.data);
        } catch (error) {
          console.error("Gagal mendapatkan data profil atau foto user:", error);
          handleLogout();
        }
      };

      getProfileData();
    }
  }, [isLoggedIn, handleLogout]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition duration-200 hover:text-blue-600 ${
      isActive
        ? "text-blue-800 border-b-2 border-blue-800 pb-1"
        : "text-slate-600"
    }`;

  const userAvatarUrl = profilePhoto?.photo_profile;

  return (
    <header className="bg-white shadow-xs sticky top-0 z-50">
      <div className="container mx-auto max-w-8xl flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="justify-center text-blue-800 text-2xl font-extrabold font-inter tracking-tight cursor-pointer"
        >
          Cocokin
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-blue-600 focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-none stroke-current"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute md:relative top-16.25 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 p-6 md:p-0 shadow-md md:shadow-none border-b border-gray-100 md:border-none font-manrope font-semibold text-base md:text-sm md:flex transition-all duration-300 ease-in-out z-40`}
        >
          <NavLink
            to="/product"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Product
          </NavLink>
          <NavLink
            to="/pricing"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/company"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Company
          </NavLink>

          <div className="flex flex-col items-center gap-4 w-full pt-4 border-t border-gray-100 md:hidden">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-gray-700 hover:text-blue-600 font-inter font-bold py-2"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-blue-700 text-white text-sm font-bold font-inter py-3 rounded-xl shadow-xs hover:bg-blue-800 transition"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="flex flex-col gap-2 w-full">
                {/* <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl w-full">
                  <div className="w-10 h-10 bg-blue-800/10 rounded-full outline -outline-offset-1 outline-blue-800/20 inline-flex flex-col justify-center items-start overflow-hidden shrink-0">
                    <img
                      src={userAvatarUrl}
                      alt="User Profile"
                      className="self-stretch flex-1 w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-zinc-900 leading-none">
                      {user ? user.name : "Loading..."}
                    </p>
                    <span className="text-[11px] text-gray-500 font-medium font-inter">
                      {user ? user.subscription_status : "Loading..."}
                    </span>
                  </div>
                </div> */}
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center text-gray-700 font-bold hover:bg-slate-50 rounded-xl text-sm transition flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faColumns} className="text-xs" />{" "}
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full py-3 text-center text-red-600 font-bold bg-red-50 hover:bg-red-100 rounded-xl text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="text-xs"
                  />{" "}
                  Log Out
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 font-inter font-bold text-sm transition cursor-pointer"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-6 py-2.5 bg-blue-700 text-white text-sm font-bold font-inter rounded-xl shadow-xs hover:bg-blue-800 transition duration-200 cursor-pointer"
              >
                Get Started
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-2 py-1.5 rounded-full hover:bg-slate-50 transition cursor-pointer focus:outline-hidden"
              >
                <div className="w-9 h-9 bg-blue-800/10 rounded-full outline -outline-offset-1 outline-blue-800/20 inline-flex flex-col justify-center items-start overflow-hidden shrink-0">
                  <img
                    src={userAvatarUrl}
                    alt="User Profile"
                    className="self-stretch flex-1 w-full h-full object-cover"
                  />
                </div>

                <div className="text-left hidden lg:block">
                  <p className="text-xs font-bold text-zinc-900 leading-tight">
                    {user ? user.name : "Loading..."}
                  </p>
                  <span className="text-[10px] text-gray-400 font-medium font-inter">
                    Premium User
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-gray-400 text-xs transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 flex flex-col animate-fade-in">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsDropdownOpen(false)}
                    className="px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-slate-50 transition flex items-center gap-2.5"
                  >
                    <FontAwesomeIcon
                      icon={faColumns}
                      className="text-gray-400 text-xs w-4"
                    />
                    Dashboard
                  </Link>
                  <hr className="border-gray-100 my-1" />
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2.5 text-left text-sm font-bold text-red-600 hover:bg-red-50/60 transition flex items-center gap-2.5 cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className="text-red-400 text-xs w-4"
                    />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
