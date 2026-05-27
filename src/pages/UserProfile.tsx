import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faUserTie,
  faSearch,
  faFilePdf,
  faUserPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { authService } from "../services/auth";
import type { ProfilePayload, ProfilePhotoPayload } from "../types/auth";
import ProfileSkeleton from "../components/Dashboard/ProfileSkeleton";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<ProfilePayload | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<ProfilePhotoPayload | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleLogout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const fetchDashboardProfile = async () => {
      try {
        const [profileRes, photoRes] = await Promise.all([
          authService.getProfile(),
          authService.getProfilePhoto(),
        ]);
        setUser(profileRes.data);
        setProfilePhoto(photoRes.data);
      } catch (error) {
        console.error("Gagal memuat data di halaman profil:", error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardProfile();
  }, [handleLogout]);

  const avatarUrl =
    profilePhoto?.photo_profile ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop";

  return (
    <div className="w-full bg-slate-50 font-inter text-gray-900 antialiased flex flex-col min-h-screen">
      <main className="container mx-auto max-w-8xl px-6 py-12 flex flex-col gap-10 flex-1">
        {isLoading ? (
          <ProfileSkeleton />
        ) : (
          <>
            <section className="w-full p-8 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-8 w-full md:w-auto">
                <div className="w-36 h-36 bg-blue-800/10 rounded-2xl outline -outline-offset-1 outline-blue-800/20 overflow-hidden shadow-md shrink-0 relative group">
                  <img
                    src={avatarUrl}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-start items-start gap-3">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-zinc-900 text-3xl md:text-4xl font-bold font-manrope tracking-tight leading-tight">
                      {user?.name}
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">
                      {user?.bio || "Role not provided yet."}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full pt-2">
                    <div className="h-10 px-4 bg-gray-50 rounded-xl inline-flex justify-start items-center gap-3 border border-gray-100">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-blue-800 text-sm w-4"
                      />
                      <span className="text-gray-700 text-sm font-normal">
                        {user ? user.email : "akbar.felda@example.com"}
                      </span>
                    </div>
                    <div className="h-10 px-4 bg-gray-50 rounded-xl inline-flex justify-start items-center gap-3 border border-gray-100">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-blue-800 text-sm w-4"
                      />
                      <span className="text-gray-700 text-sm font-normal">
                        {user?.location || "Jakarta, Indonesia"}
                      </span>
                    </div>
                    <div className="h-10 px-4 bg-gray-50 rounded-xl inline-flex justify-start items-center gap-3 border border-gray-100">
                      <FontAwesomeIcon
                        icon={faUserTie}
                        className="text-blue-800 text-sm w-4"
                      />
                      <span className="text-gray-700 text-sm font-semibold">
                        {user?.subscription_status || "Free Plan"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-48 shrink-0">
                <button onClick={() => navigate("/profile/edit-profile")} className="w-full px-6 py-3 bg-blue-800 text-white text-sm font-bold rounded-xl shadow-md hover:bg-blue-900 transition flex items-center gap-2 cursor-pointer select-none justify-center">
                  <FontAwesomeIcon icon={faUserPen} className="text-xs" />
                  <span>Edit Profile</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-3 text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100/80 border border-red-200/30 rounded-xl transition duration-200 cursor-pointer select-none flex items-center gap-2.5 justify-center"
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="text-xs"
                  />
                  <span>Log Out</span>
                </button>
              </div>
            </section>

            <section className="w-full p-8 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-8 text-left">
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-zinc-900 text-2xl font-bold font-manrope">
                  Riwayat Analisis CV
                </h2>

                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    placeholder="Search analysis..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white rounded-xl outline outline-gray-200 focus:outline-blue-800 text-sm font-medium transition"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3.5 top-3 text-gray-400 text-sm"
                  />
                </div>
              </div>

              <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
                <table className="min-w-200 w-full table-fixed bg-white border-collapse text-left">
                  <thead>
                    <tr className="bg-gray-50/70 border-b border-gray-200">
                      <th className="w-[25%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                        Type
                      </th>
                      <th className="w-[35%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                        Target Role
                      </th>
                      <th className="w-[25%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                        Filename
                      </th>
                      <th className="w-[15%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                        Date & Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                    <tr className="hover:bg-slate-50/50 transition">
                      <td className="p-4 font-bold text-zinc-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-800/10 rounded-lg flex items-center justify-center text-blue-800 text-xs">
                          <FontAwesomeIcon icon={faFilePdf} />
                        </div>
                        <span>CV Analysis (Targeted)</span>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-indigo-50 text-blue-800 text-xs font-medium rounded-full border border-indigo-100 inline-block max-w-full truncate">
                          Senior Machine Learning Research Scientist
                        </span>
                      </td>
                      <td className="p-4 font-mono text-xs text-gray-500 truncate">
                        dummy_cv_ai_data_candidate.pdf
                      </td>
                      <td className="p-4 font-semibold text-xs text-gray-500 uppercase">
                        TODAY, 2:45 PM
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition">
                      <td className="p-4 font-bold text-zinc-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 text-xs">
                          <FontAwesomeIcon icon={faFilePdf} />
                        </div>
                        <span>CV Analysis (General)</span>
                      </td>
                      <td className="p-4 text-gray-400 italic">
                        No target role
                      </td>
                      <td className="p-4 font-mono text-xs text-gray-500 truncate">
                        resume_revised_2023.pdf
                      </td>
                      <td className="p-4 font-semibold text-xs text-gray-500 uppercase">
                        OCT 24, 11:15 AM
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition">
                      <td className="p-4 font-bold text-zinc-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-800/10 rounded-lg flex items-center justify-center text-blue-800 text-xs">
                          <FontAwesomeIcon icon={faFilePdf} />
                        </div>
                        <span>CV Analysis (Targeted)</span>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-indigo-50 text-blue-800 text-xs font-medium rounded-full border border-indigo-100 inline-block max-w-full truncate">
                          Senior Data Analyst
                        </span>
                      </td>
                      <td className="p-4 font-mono text-xs text-gray-500 truncate">
                        akbar_felda_profile.pdf
                      </td>
                      <td className="p-4 font-semibold text-xs text-gray-500 uppercase">
                        OCT 20, 4:20 PM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="w-full flex justify-center pt-2">
                <button className="px-6 py-2.5 text-blue-800 font-bold text-sm hover:text-blue-900 transition cursor-pointer select-none">
                  View More Analysis
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
