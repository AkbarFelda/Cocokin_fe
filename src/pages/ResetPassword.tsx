import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/auth";
import PasswordField from "../components/Auth/PasswordField";
import { waveTexture } from "../assets/images";
import { logoCocokin } from "../assets/icons";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const savedEmail = localStorage.getItem("resetEmail") || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Konfirmasi password tidak cocok weh, periksa kembali.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await authService.resetPassword({
        email: savedEmail,
        password,
      });

      setSuccessMsg(result.message || "Password berhasil diperbarui!");
      
      localStorage.removeItem("resetEmail");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setErrorMsg(err.response?.data?.message || "Gagal memperbarui password, coba lagi.");
      } else {
        setErrorMsg("Terjadi kesalahan sistem, coba lagi nanti.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-white antialiased">
      {/* =============================================================
         SISI KIRI: Branding Visual Area (Konsisten & Premium)
         ============================================================= */}
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-center items-start p-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-100 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-blue-700 to-blue-900">
            <img
              src={waveTexture}
              alt="Wave Texture"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none z-10"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none z-10"></div>

        <div className="relative z-20 w-full max-w-xl flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={logoCocokin}
                alt="Logo Cocokin"
                className="w-full h-full object-contain mix-blend-screen brightness-200"
              />
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-white text-3xl font-extrabold font-inter leading-9">
                Cocokin
              </div>
            </div>
          </div>

          <div className="self-stretch pt-2 flex flex-col justify-start items-start">
            <div className="justify-center text-white text-5xl font-bold font-manrope leading-15">
              Secure Your Account.
            </div>
          </div>

          <div className="self-stretch opacity-90 flex flex-col justify-start items-start">
            <div className="justify-center text-indigo-200 text-lg font-normal font-inter leading-7">
              Create a brand new, high-strength credentials profile to overwrite your previous configuration and regain complete platform autonomy.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-20 px-6 sm:px-16 bg-slate-50 relative">
        <div className="w-full max-w-96 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-center text-zinc-900 text-3xl font-bold font-manrope leading-9">
              New Password
            </div>
            <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
              Set your new password to regain dashboard access.
            </div>
          </div>

          {errorMsg && (
            <div className="w-full p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl font-inter text-left">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="w-full p-4 text-sm text-green-600 bg-green-50 border border-green-100 rounded-xl font-inter text-left">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="self-stretch flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <PasswordField
                label="NEW PASSWORD"
                placeholder="•••••••••••••"
                value={password}
                onChange={setPassword}
                required
                variant="box"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <PasswordField
                label="CONFIRM NEW PASSWORD"
                placeholder="•••••••••••••"
                value={confirmPassword}
                onChange={setConfirmPassword}
                required
                variant="box"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="self-stretch mt-2 py-4 bg-linear-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-center justify-center text-white text-base font-bold font-manrope leading-6 rounded-lg shadow-md transition duration-200 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Updating Password..." : "Update Password"}
            </button>
          </form>

          <div className="self-stretch flex justify-center items-center gap-1.5 text-sm font-inter">
            <Link
              to="/login"
              className="text-gray-500 font-medium hover:text-blue-800 hover:underline"
            >
              Cancel and Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}