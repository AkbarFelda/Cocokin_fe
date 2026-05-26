import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { authService } from "../../services/auth";
import type { ProfilePayload, ProfilePhotoPayload } from "../../types/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<ProfilePayload | null>(null);
  const [userPhoto, setUserPhoto] = useState<ProfilePhotoPayload | null>(null);

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const [profileRes, photoRes] = await Promise.all([
          authService.getProfile(),
          authService.getProfilePhoto(),
        ]);
        setUser(profileRes.data);
        setUserPhoto(photoRes.data);
      } catch (error) {
        console.error("Gagal memuat data di layout navbar:", error);
      }
    };
    loadNavbarData();
  }, []);

  const isDetailPage = location.pathname.includes("edit-profile");

  const getInitials = (nameString: string | undefined) => {
    if (!nameString) return "U";
    const parts = nameString.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return nameString.slice(0, 2).toUpperCase();
  };

  return (
    <div className="w-full bg-white/80 sticky top-0 z-40 backdrop-blur-md border-b border-gray-200/50 shadow-xs">
      <div className="container mx-auto max-w-8xl px-6 py-4 flex justify-between items-center">
        {isDetailPage ? (
          /* =============================================================
             MODE DETAIL: Tombol Back Minimalis
             ============================================================= */
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-blue-800 text-base font-bold cursor-pointer hover:opacity-80 transition select-none"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            <span>Back</span>
          </button>
        ) : (
          /* =============================================================
             MODE UTAMA: Hanya Branding & Profile (Tanpa Tab Tengah)
             ============================================================= */
          <>
            {/* Kiri: Logo Brand Cocokin */}
            <div className="flex justify-start items-center">
              <Link
                to="/dashboard"
                className="flex justify-start items-center gap-3 group"
              >
                <span className="text-blue-800 text-xl font-bold font-manrope leading-none">
                  Cocokin
                </span>
              </Link>
            </div>

            {/* Kanan: Profil Informasi User Dinamis dengan Foto */}
            <Link
              to="/profile"
              className="flex justify-start items-center gap-3 text-right hover:opacity-90 transition"
            >
              <div className="flex flex-col justify-start items-end">
                <span className="text-zinc-900 text-sm font-bold leading-tight">
                  {user?.name || "Akbar Felda"}
                </span>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-none mt-1">
                  {user?.subscription_status || "FREE MEMBER"}
                </span>
              </div>

              <div className="w-10 h-10 bg-blue-800 text-white rounded-xl outline -outline-offset-2 outline-slate-50 flex justify-center items-center text-sm font-bold shadow-sm select-none shrink-0 overflow-hidden">
                {userPhoto?.photo_profile ? (
                  <img
                    src={userPhoto.photo_profile}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{getInitials(user?.name)}</span>
                )}
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}