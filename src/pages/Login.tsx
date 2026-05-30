import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { logoCocokin, supportIcon } from "../assets/icons";
import { waveTexture } from "../assets/images";
import PasswordField from "../components/Auth/PasswordField";
import { authService } from "../services/auth";
import { validateEmail, validatePassword } from "../utils/validators";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setErrorMsg("");
    setEmailError("");
    setPasswordError("");

    const errEmail = validateEmail(email);
    const errPassword = validatePassword(password);

    if (errEmail || errPassword) {
      setEmailError(errEmail);
      setPasswordError(errPassword);
      console.log("Validasi frontend gagal, membatalkan request API.");
      return;
    }

    try {
      setIsLoading(true);
      const result = await authService.login({ email, password });

      console.log("Login sukses weh! Token didapat");
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      navigate("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message || "Email atau password salah.";
        setErrorMsg(message);
      } else {
        setErrorMsg("Terjadi kesalahan sistem, coba lagi nanti.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-white antialiased relative">
      
      {/* 🟢 PERBAIKAN: Pembungkus Full-Screen Overlay Loading biar pas mengunci di tengah layar sesuai image_31a776.png */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-md z-50 flex flex-col justify-center items-center gap-4 animate-fade-in">
          <LoadingSpinner size="md" />
          {/* Teks status di bawah spinner pas seperti referensi gambar */}
          <p className="text-slate-500 text-sm font-bold font-inter tracking-wide animate-pulse">
            Memverifikasi Akun...
          </p>
        </div>
      )}

      {/* LEFT SIDEBAR BANNER */}
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
            <div className="justify-center">
              <span className="text-white text-5xl font-bold font-manrope leading-15">
                Elevate Your
                <br />
                Professional
                <br />
              </span>
              <span className="text-indigo-100 text-5xl font-bold font-manrope">
                Trajectory.
              </span>
            </div>
          </div>

          <div className="self-stretch opacity-90 flex flex-col justify-start items-start">
            <div className="justify-center text-violet-300 text-lg font-medium font-inter leading-7">
              Access premium career analytics and AI-driven skill
              <br />
              gap assessments designed for the modern elite
              <br />
              workforce.
            </div>
          </div>

          <div className="self-stretch pt-6 inline-flex justify-start items-start gap-8">
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-white text-3xl font-bold font-inter leading-9">
                  98%
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-violet-300 text-sm font-semibold font-inter uppercase leading-5 tracking-wider">
                  ACCURACY
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 align-self-center"></div>

            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-white text-3xl font-bold font-inter leading-9">
                  12k+
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-violet-300 text-sm font-semibold font-inter uppercase leading-5 tracking-wider">
                  PROFESSIONALS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEFORM */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 xl:px-32 bg-white relative">
        <div className="absolute right-8 bottom-8 z-30 flex row-auto items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-gray-100 rounded-full shadow-sm hover:bg-gray-100 transition cursor-pointer">
          <img src={supportIcon} alt="Support" />
          <span className="text-xs font-bold leading-4 tracking-tight text-zinc-700 font-inter">
            Support Center
          </span>
        </div>

        <div className="w-full max-w-md flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="font-manrope text-3xl font-bold text-zinc-900 leading-9">
              Welcome Back
            </h2>
            <p className="font-inter text-base font-normal text-zinc-600 opacity-90 leading-relaxed">
              Please enter your details to access your dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-sm font-semibold text-zinc-800 font-inter">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="name@gmail.com"
                  value={email}
                  disabled={isLoading}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  className={`w-full pl-5 pr-12 py-3.5 rounded-xl border text-base placeholder:text-gray-300 focus:outline-hidden focus:ring-1 transition duration-200 font-inter
                    ${emailError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"}`}
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-xs font-medium mt-0.5 animate-fade-in">
                  {emailError}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 text-left">
              <div className="flex justify-between items-center w-full">
                <label className="text-sm font-semibold text-zinc-800 font-inter">
                  PASSWORD
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-blue-700 hover:underline font-inter"
                >
                  Forgot Password?
                </Link>
              </div>

              <PasswordField
                label=""
                placeholder="•••••••••••••"
                value={password}
                onChange={(val) => {
                  setPassword(val);
                  if (passwordError) setPasswordError("");
                }}
                variant="box"
              />
              {passwordError && (
                <p className="text-red-500 text-xs font-medium mt-0.5 animate-fade-in">
                  {passwordError}
                </p>
              )}
            </div>

            {errorMsg && (
              <div className="w-full p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl font-inter text-left animate-fade-in">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-inter text-white font-bold py-3.5 rounded-xl shadow-xs transition duration-200 mt-2 text-base tracking-wide border-none outline-none
                ${isLoading ? "bg-blue-800/70 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 cursor-pointer"}`}
            >
              Masuk
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 font-inter">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="font-bold text-blue-700 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}