import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faMapMarkerAlt,
  faInfoCircle,
  faUser,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { authService } from "../../services/auth";

export default function EditProfile() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
  });

  useEffect(() => {
    const loadCurrentProfile = async () => {
      try {
        const [profileRes, photoRes] = await Promise.all([
          authService.getProfile(),
          authService.getProfilePhoto(),
        ]);

        setFormData({
          name: profileRes.data.name || "",
          bio: profileRes.data.bio || "",
          location: profileRes.data.location || "",
        });

        if (photoRes.data?.photo_profile) {
          setPreviewUrl(photoRes.data.photo_profile);
        }
      } catch (error) {
        console.error("Gagal memuat data profil lama:", error);
      }
    };

    loadCurrentProfile();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === "bio" && e.target.value.length > 160) return;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      if (selectedFile) {
        const data = new FormData();
        data.append("photo", selectedFile);

        await Promise.all([
          authService.updateProfile(formData),
          authService.updateProfilePhoto(data),
        ]);
      } else {
        await authService.updateProfile(formData);
      }

      alert("Profil berhasil diperbarui!");
      navigate(-1);
    } catch (error) {
      console.error("Gagal memperbarui data profil:", error);
      alert("Terjadi kesalahan saat menyimpan perubahan.");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="w-full bg-slate-50 font-inter text-gray-900 antialiased flex flex-col min-h-screen">
      <main className="container mx-auto max-w-2xl px-6 py-12 flex flex-col gap-8 flex-1">
        <div className="w-full flex flex-col justify-start items-start gap-2 text-left">
          <h1 className="text-zinc-900 text-3xl font-extrabold font-manrope tracking-tight leading-none">
            Edit Profile
          </h1>
          <p className="text-gray-600 text-base font-normal leading-relaxed">
            Refine your professional identity within the Cocokin ecosystem.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="w-full p-8 md:p-12 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-10"
        >
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <div className="w-32 h-32 bg-white rounded-2xl relative shadow-md group">
              <div className="w-full h-full rounded-2xl outline outline-slate-100 overflow-hidden">
                <img src={previewUrl} className="w-full h-full object-cover" />
              </div>

              <label className="absolute -bottom-2.5 -right-2.5 p-2.5 bg-blue-800 text-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-900 transition duration-200">
                <FontAwesomeIcon icon={faCamera} className="text-xs" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <span className="text-blue-800 text-sm font-bold tracking-wide select-none">
              Change Photo
            </span>
          </div>
          <div className="w-full flex flex-col gap-6 text-left">
            <div className="w-full flex flex-col gap-2">
              <label className="text-zinc-900 text-sm font-bold font-manrope tracking-tight flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-400 text-xs"
                />
                <span>Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:outline-blue-800 rounded-xl text-zinc-900 text-base font-normal font-inter transition"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-zinc-900 text-sm font-bold font-manrope tracking-tight flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPen}
                  className="text-gray-400 text-xs"
                />
                <span>Bio</span>
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:outline-blue-800 rounded-xl text-zinc-900 text-base font-normal font-inter resize-none transition"
                placeholder="e.g. Frontend Developer"
              />
              <div className="w-full text-right">
                <span className="text-gray-500 text-[10px] font-normal font-inter leading-none">
                  {formData.bio.length}/160 characters maximum
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-zinc-900 text-sm font-bold font-manrope tracking-tight flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-gray-400 text-xs"
                />
                <span>Location</span>
              </label>
              <div className="w-full relative">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:outline-blue-800 rounded-xl text-zinc-900 text-base font-normal font-inter transition"
                  placeholder="e.g. Jakarta, Indonesia"
                />
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="absolute left-4 top-4 text-gray-400 text-sm"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-4 pt-4 select-none">
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 py-4 bg-blue-800 text-white text-base font-bold rounded-xl shadow-md hover:bg-blue-900 transition duration-200 cursor-pointer disabled:opacity-50 text-center justify-center"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 py-4 bg-gray-100 text-gray-700 text-base font-bold rounded-xl hover:bg-gray-200 transition duration-200 cursor-pointer text-center justify-center"
            >
              Cancel
            </button>
          </div>
        </form>
        <section className="w-full p-6 bg-blue-50/40 rounded-2xl border border-blue-100/40 inline-flex justify-start items-start gap-4 text-left">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-blue-800 text-base pt-1 shrink-0"
          />
          <p className="text-gray-600 text-sm font-normal leading-relaxed">
            <strong className="text-zinc-900 font-bold">
              Architectural Insight:
            </strong>{" "}
            Your bio is used to match you with compatible career pathways in the
            Network module. Keep it descriptive to improve accuracy.
          </p>
        </section>
      </main>
    </div>
  );
}
