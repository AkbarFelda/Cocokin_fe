import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/auth";
import { waveTexture } from "../assets/images";
import { logoCocokin } from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const savedEmail = localStorage.getItem("resetEmail") || "";

  useEffect(() => {
    if (!isTimerActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isTimerActive]);

  // 🟢 3. Helper untuk Mengubah Detik Menjadi Format Menit:Detik (MM:SS)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // 🟢 4. Fungsi Kirim Ulang OTP (Resend) Memanfaatkan API ForgotPassword
  const handleResendOtp = async () => {
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      const result = await authService.forgotPassword({ email: savedEmail });
      setSuccessMsg(result.message || "Kode OTP baru berhasil dikirim ke email kamu!");
      
      setTimeLeft(300);
      setIsTimerActive(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setErrorMsg(err.response?.data?.message || "Gagal mengirim ulang kode OTP.");
      } else {
        setErrorMsg("Terjadi kesalahan sistem, coba lagi nanti.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 🟢 5. Handler Submit form untuk hit API Verify OTP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      // Hit API /verify-otp sesuai spesifikasi Postman kamu weh
      const result = await authService.verifyOtp({
        email: savedEmail,
        otp,
      });

      setSuccessMsg(result.message || "OTP berhasil diverifikasi!");

      setTimeout(() => {
        navigate("/reset-password");
      }, 1500);
      
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setErrorMsg(err.response?.data?.message || "Kode OTP salah atau telah kedaluwarsa.");
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
         SISI KIRI: Branding Visual & Security Banner
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
              Two-Factor Verification.
            </div>
          </div>

          <div className="self-stretch opacity-90 flex flex-col justify-start items-start">
            <div className="justify-center text-indigo-200 text-lg font-normal font-inter leading-7">
              Please enter the 6-digit security code sent to{" "}
              <span className="text-white font-semibold underline break-all">
                {savedEmail || "your email address"}
              </span>{" "}
              to authenticate your password modification request.
            </div>
          </div>

          {/* Bento Box: Secure Recovery */}
          <div className="self-stretch mt-2 p-6 bg-white/5 rounded-lg outline -outline-offset-1 outline-white/10 backdrop-blur-[6px] inline-flex justify-start items-start gap-4">
            <div className="p-3 bg-white/10 rounded-xs inline-flex items-center justify-center text-white text-xl w-11 h-11 shrink-0">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-white text-base font-semibold font-inter leading-6">
                  Secure Verification
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-white/70 text-sm font-normal font-inter leading-5">
                  Every data point in your career analysis is protected by
                  <br />
                  industry leading security protocols.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================================
         SISI KANAN: Form Input OTP Area (Gaya Box Abu-Abu Premium)
         ============================================================== */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-20 px-6 sm:px-16 bg-slate-50 relative">
        <div className="w-full max-w-96 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-center text-zinc-900 text-3xl font-bold font-manrope leading-9">
              Verify OTP
            </div>
            <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
              Account verification code is required to proceed.
            </div>
          </div>

          {/* Render Alert Pesan Error / Sukses */}
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

          {/* Form Utama */}
          <form onSubmit={handleSubmit} className="self-stretch flex flex-col gap-6 w-full">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <label className="self-stretch justify-center text-gray-700 text-sm font-semibold font-inter leading-5">
                OTP CODE
              </label>
              <input
                type="text"
                placeholder="0 0 0 0 0 0"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} // Hanya mengizinkan angka saja
                required
                disabled={isLoading || timeLeft === 0}
                className="w-full px-4 py-4 bg-zinc-200 text-xl font-bold tracking-widest text-center text-zinc-800 placeholder:text-gray-400 placeholder:tracking-normal rounded-sm border-none outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-zinc-100/80 transition duration-200 disabled:opacity-50"
              />
            </div>

            {/* Countdown Area */}
            <div className="flex justify-between items-center text-sm font-inter px-1 w-full">
              {timeLeft > 0 ? (
                <span className="text-gray-500 font-normal">
                  Kode aktif selama: <strong className="text-blue-700 font-mono font-bold">{formatTime(timeLeft)}</strong>
                </span>
              ) : (
                <span className="text-red-500 font-semibold animate-pulse">Kode telah kedaluwarsa</span>
              )}

              <button
                type="button"
                onClick={handleResendOtp}
                disabled={timeLeft > 0 || isLoading}
                className={`font-bold text-sm transition ${
                  timeLeft > 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-blue-700 hover:underline cursor-pointer"
                }`}
              >
                Resend OTP
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading || timeLeft === 0}
              className="self-stretch mt-2 py-4 bg-linear-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-center justify-center text-white text-base font-bold font-manrope leading-6 rounded-lg shadow-md transition duration-200 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          {/* Back to Forgot Password */}
          <div className="self-stretch flex justify-center items-center gap-1.5 text-sm font-inter">
            <span className="text-gray-700 font-normal">
              Wrong email address?
            </span>
            <Link
              to="/forgot-password"
              className="text-blue-800 font-bold hover:underline"
            >
              Change Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}