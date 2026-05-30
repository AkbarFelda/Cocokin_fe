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
  faChevronDown,
  faChevronUp,
  faCircleNotch,
  faFolderOpen,
  faCoins,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import { authService } from "../services/auth";
import { dashboardService } from "../services/dashboard";
import type { ProfilePayload, ProfilePhotoPayload } from "../types/auth";
import type { HistoryDocumentItem } from "../types/dashboard";
import ProfileSkeleton from "../components/Dashboard/ProfileSkeleton";
import StatusDialog from "../components/StatusDialog";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<ProfilePayload | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<ProfilePhotoPayload | null>(
    null,
  );
  const [historyData, setHistoryData] = useState<HistoryDocumentItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const fetchDashboardProfileAndHistory = async () => {
      try {
        const [profileRes, photoRes, historyRes] = await Promise.all([
          authService.getProfile(),
          authService.getProfilePhoto(),
          dashboardService.getHistoryDocuments(),
        ]);

        setUser(profileRes.data);
        setProfilePhoto(photoRes.data);

        if (historyRes.status === "success") {
          setHistoryData([...historyRes.data].reverse());
        }
      } catch (error) {
        console.error("Gagal memuat data di halaman profil & histori:", error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardProfileAndHistory();
  }, [handleLogout]);

  const handleOpenAnalysisDetail = async (analysisId: string) => {
    setActionLoadingId(analysisId);
    try {
      const response =
        await dashboardService.getAnalysisDetailByDocId(analysisId);

      if (response.status === "success" || response.code === 200) {
        navigate("/dashboard/result", {
          state: { resultData: response.data, fromHistory: true },
        });
      }
    } catch (error) {
      console.error("Gagal mengambil detail analisis dokumen:", error);
      setIsErrorDialogOpen(true);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleNavigateToPricing = () => {
    navigate("/pricing");
  };

  const filteredHistory = historyData.filter(
    (item) =>
      item.file_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.target_role &&
        item.target_role.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const displayedHistory = isExpanded
    ? filteredHistory
    : filteredHistory.slice(0, 5);

  const avatarUrl =
    profilePhoto?.photo_profile ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop";

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isPremium = user?.subscription_status?.toLowerCase().includes("premium");
  const currentTokens = user?.analysis_tokens;

  return (
    <div className="w-full bg-slate-50 font-inter text-gray-900 antialiased flex flex-col min-h-screen text-left relative">
      <StatusDialog
        isOpen={isErrorDialogOpen}
        variant="failed"
        title="Gagal Memuat Analisis!"
        description="Gagal memuat data analisis. Pastikan dokumen sudah selesai diproses oleh sirkuit AI backend Cocokin, weh."
        buttonText="Mengerti"
        onConfirm={() => setIsErrorDialogOpen(false)}
      />

      <main className="container mx-auto max-w-7xl px-6 py-12 flex flex-col gap-10 flex-1">
        {isLoading ? (
          <ProfileSkeleton />
        ) : (
          <>
            <section className="w-full p-8 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-8 w-full lg:w-auto">
                <div className="w-36 h-36 bg-blue-800/10 rounded-2xl outline -outline-offset-1 outline-blue-800/20 overflow-hidden shadow-md shrink-0 relative group">
                  <img
                    src={avatarUrl}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-start items-start gap-3 w-full">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-zinc-900 text-3xl md:text-4xl font-bold font-manrope tracking-tight leading-tight">
                      {user?.name}
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">
                      {user?.bio || "Role tidak/belum ditentukan."}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 w-full pt-2">
                    <div className="h-10 px-4 bg-gray-50 rounded-xl inline-flex justify-start items-center gap-3 border border-gray-100">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-blue-800 text-sm w-4"
                      />
                      <span className="text-gray-700 text-sm font-normal">
                        {user?.email}
                      </span>
                    </div>
                    <div className="h-10 px-4 bg-gray-50 rounded-xl inline-flex justify-start items-center gap-3 border border-gray-100">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-blue-800 text-sm w-4"
                      />
                      <span className="text-gray-700 text-sm font-normal">
                        {user?.location || "Lokasi belum diatur"}
                      </span>
                    </div>
                    <div className="h-10 px-4 bg-gray-50 rounded-xl inline-flex justify-start items-center gap-3 border border-gray-100">
                      <FontAwesomeIcon
                        icon={faUserTie}
                        className="text-blue-800 text-sm w-4"
                      />
                      <span className="text-gray-700 text-sm font-semibold">
                        {user?.subscription_status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-48 shrink-0">
                <button
                  onClick={() => navigate("/profile/edit-profile")}
                  className="w-full px-6 py-3 bg-gray-100 text-zinc-800 text-sm font-bold rounded-xl border border-gray-200/50 hover:bg-gray-200 transition flex items-center gap-2 cursor-pointer select-none justify-center border-none outline-none"
                >
                  <FontAwesomeIcon icon={faUserPen} className="text-xs" />
                  <span>Edit Profile</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-3 text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100/80 border border-red-200/30 rounded-xl transition duration-200 cursor-pointer select-none flex items-center gap-2.5 justify-center outline-none"
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="text-xs"
                  />
                  <span>Log Out</span>
                </button>
              </div>
            </section>

            <div className="w-full flex flex-col lg:flex-row items-stretch gap-8">
              <div className="flex-1 w-full p-8 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between gap-8 order-2 lg:order-1">
                <div className="w-full flex flex-col gap-8">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-zinc-900 text-2xl font-bold font-manrope">
                        Riwayat Analisis CV
                      </h2>
                      <span className="text-xs text-gray-400 font-medium mt-1 block">
                        Menampilkan {displayedHistory.length} dari{" "}
                        {filteredHistory.length} total dokumen
                      </span>
                    </div>

                    <div className="relative w-full sm:w-72">
                      <input
                        type="text"
                        placeholder="Search analysis..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setIsExpanded(false);
                        }}
                        className="w-full pl-10 pr-4 py-2 bg-white rounded-xl outline outline-gray-200 focus:outline-blue-800 text-sm font-medium transition"
                      />
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3.5 top-3 text-gray-400 text-sm"
                  />
                    </div>
                  </div>

                  <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
                    <table className="min-w-175 w-full table-fixed bg-white border-collapse text-left">
                      <thead>
                        <tr className="bg-gray-50/70 border-b border-gray-200">
                          <th className="w-[35%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                            Type / Status
                          </th>
                          <th className="w-[30%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                            Target Role
                          </th>
                          <th className="w-[20%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider">
                            Filename
                          </th>
                          <th className="w-[15%] p-4 text-gray-700 text-xs font-bold uppercase tracking-wider text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                        {displayedHistory.map((doc) => (
                          <tr
                            key={doc.id}
                            className="hover:bg-slate-50/50 transition"
                          >
                            <td className="p-4 font-bold text-zinc-900 flex items-center gap-3 truncate">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                                  doc.target_role
                                    ? "bg-blue-800/10 text-blue-800"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </div>
                              <span>
                                {doc.target_role
                                  ? "CV Analysis (Targeted)"
                                  : "CV Analysis (General)"}
                              </span>
                            </td>
                            <td className="p-4 truncate">
                              {doc.target_role ? (
                                <span className="px-3 py-1 bg-indigo-50 text-blue-800 text-xs font-medium rounded-full border border-indigo-100 inline-block max-w-full truncate">
                                  {doc.target_role}
                                </span>
                              ) : (
                                <span className="text-gray-400 italic text-xs">
                                  No target role
                                </span>
                              )}
                            </td>
                            <td className="p-4 font-mono text-xs text-gray-500 truncate">
                              {doc.file_name}
                            </td>
                            <td className="p-4 text-center">
                              <button
                                onClick={() =>
                                  handleOpenAnalysisDetail(doc.analysis_id)
                                }
                                disabled={actionLoadingId !== null}
                                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-blue-50 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 text-blue-800 text-xs font-bold rounded-xl transition cursor-pointer select-none border border-blue-100/50 min-w-19 outline-none"
                              >
                                {actionLoadingId === doc.analysis_id ? (
                                  <FontAwesomeIcon
                                    icon={faCircleNotch}
                                    className="animate-spin text-xs"
                                  />
                                ) : (
                                  <>
                                    <FontAwesomeIcon
                                      icon={faFolderOpen}
                                      className="text-[11px]"
                                    />
                                    <span>Buka</span>
                                  </>
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}

                        {filteredHistory.length === 0 && (
                          <tr>
                            <td
                              colSpan={4}
                              className="text-center py-8 text-gray-400 italic text-sm"
                            >
                              Tidak ada riwayat dokumen analisis yang ditemukan
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {filteredHistory.length > 5 && (
                  <div className="w-full flex justify-center pt-2">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="px-6 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-blue-800 hover:text-blue-900 text-sm font-bold shadow-xs hover:bg-gray-100 transition flex items-center gap-2 cursor-pointer select-none outline-none"
                    >
                      <span>
                        {isExpanded ? "Collapse For Less" : "Expand For More"}
                      </span>
                      <FontAwesomeIcon
                        icon={isExpanded ? faChevronUp : faChevronDown}
                        className="text-xs transition-transform duration-300"
                      />
                    </button>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-80 p-8 relative bg-blue-800 rounded-2xl shadow-xl flex flex-col justify-between items-start overflow-hidden order-1 lg:order-2 shrink-0">
                <div className="w-full flex flex-col justify-start items-start gap-6 relative z-10">
                  <div className="w-full flex justify-between items-center">
                    <div className="opacity-80 flex flex-col justify-start items-start">
                      <div className="justify-center text-white text-xs font-bold font-inter uppercase tracking-wider">
                        AVAILABLE CREDITS
                      </div>
                    </div>
                    <div className="text-white opacity-80 text-sm">
                      <FontAwesomeIcon icon={faCoins} />
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-baseline gap-2">
                    {isPremium ? (
                      <div className="text-white text-5xl font-black font-inter flex items-center h-15">
                        <FontAwesomeIcon icon={faInfinity} />
                      </div>
                    ) : (
                      <div className="justify-center text-white text-6xl font-black font-inter leading-none">
                        {currentTokens}
                      </div>
                    )}
                    <div className="opacity-70 justify-center text-white text-lg font-bold font-inter">
                      Tokens
                    </div>
                  </div>
                </div>

                <div className="w-32 h-32 -right-4 -top-4 absolute bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="w-24 h-24 -left-4 bottom-24 absolute bg-indigo-400/20 rounded-full blur-xl pointer-events-none"></div>

                <div className="w-full pt-10 flex flex-col justify-start items-start relative z-10">
                  <div className="w-full flex flex-col justify-start items-start gap-3">
                    <div className="text-left text-white text-sm font-bold font-inter">
                      Expiration: {formatDate(user?.subscription_expired_at ?? null)}
                    </div>
                    <div className="text-left text-white text-xs font-medium font-inter opacity-80">
                      {isPremium
                        ? "Nikmati akses penuh tanpa batas ke semua fitur analisis CV premium Cocokin!"
                        : "Upgrade ke plan berbayar untuk mendapatkan akses token tanpa batasan kuota setiap bulannya!"}
                    </div>
                    <button
                      onClick={handleNavigateToPricing}
                      className="w-full mt-4 py-3.5 bg-white hover:bg-gray-50 text-blue-800 text-sm font-extrabold font-inter rounded-xl shadow-md transition duration-200 cursor-pointer border-none outline-none text-center justify-center flex items-center"
                    >
                      Upgrade Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}