import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { markupIcon } from "../assets/icons";
import { visualTexture } from "../assets/images";
import PasswordField from "../components/Auth/PasswordField";
import { authService } from "../services/auth";
import { validateEmail, validatePassword } from "../utils/validators";
import LoadingSpinner from "../components/LoadingSpinner";
import StatusDialog from "../components/StatusDialog";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dialogConfig, setDialogConfig] = useState({
    isOpen: false,
    variant: "success" as "success" | "failed",
    title: "",
    description: "",
    buttonText: "",
    action: () => {},
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setNameError("");
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!name.trim()) {
      setNameError("Nama lengkap tidak boleh kosong, Bar.");
      hasError = true;
    }

    const errEmail = validateEmail(email);
    if (errEmail) {
      setEmailError(errEmail);
      hasError = true;
    }

    const errPassword = validatePassword(password);
    if (errPassword) {
      setPasswordError(errPassword);
      hasError = true;
    }

    if (hasError) {
      console.log("Validasi registrasi frontend gagal.");
      return;
    }

    try {
      setIsLoading(true);
      const result = await authService.register({ name, email, password });
      console.log("Register Sukses, ID User:", result.data.id);
      setDialogConfig({
        isOpen: true,
        variant: "success",
        title: "Akun Berhasil Dibuat!",
        description:
          "Registrasi sukses. Silakan masuk menggunakan akun baru kamu untuk mengakses dashboard.",
        buttonText: "Ke Halaman Login",
        action: () => navigate("/login"),
      });
    } catch (err) {
      let message = "Terjadi kesalahan sistem yang tidak diketahui.";
      if (axios.isAxiosError(err)) {
        message =
          err.response?.data?.message ||
          "Gagal mendaftar, periksa kembali data kamu.";
      }
      setDialogConfig({
        isOpen: true,
        variant: "failed",
        title: "Registrasi Gagal!",
        description: message,
        buttonText: "Coba Lagi",
        action: () => setDialogConfig((prev) => ({ ...prev, isOpen: false })),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-white antialiased relative">
      {isLoading && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-md z-50 flex flex-col justify-center items-center gap-4 animate-fade-in">
          <LoadingSpinner size="md" />
          <p className="text-slate-500 text-sm font-bold font-inter tracking-wide animate-pulse">
            Membuat Akun Anda...
          </p>
        </div>
      )}

      <StatusDialog
        isOpen={dialogConfig.isOpen}
        variant={dialogConfig.variant}
        title={dialogConfig.title}
        description={dialogConfig.description}
        buttonText={dialogConfig.buttonText}
        onConfirm={dialogConfig.action}
      />

      <div className="hidden md:flex md:w-1/2 relative flex-col justify-center items-start p-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-100 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-blue-700 to-blue-900">
            <img
              src={visualTexture}
              alt="Visual Texture"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>

        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none z-10"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none z-10"></div>
        <div className="relative z-20 w-full max-w-xl flex flex-col justify-start items-start gap-6">
          <div className="px-4 py-2 bg-white/10 rounded-full outline -outline-offset-1 outline-white/10 backdrop-blur-[6px] inline-flex justify-start items-center gap-2">
            <div className="w-5 h-3 rounded-xs flex items-center justify-center">
              <div>
                <img
                  src={markupIcon}
                  alt="Icon Markup"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="justify-center text-indigo-100 text-xs font-semibold font-inter uppercase leading-4 tracking-wider">
              YOUR CAREER TRAJECTORY
            </div>
          </div>

          <div className="self-stretch pt-2 flex flex-col justify-start items-start">
            <div className="justify-center">
              <span className="text-white text-7xl font-bold font-manrope leading-18">
                Architect your
                <br />
              </span>
              <span className="text-indigo-100 text-6xl font-bold font-manrope">
                professional future.
              </span>
            </div>
          </div>

          <div className="w-full max-w-xl flex flex-col justify-start items-start">
            <p className="justify-center text-indigo-100/80 text-lg md:text-xl font-normal font-inter leading-relaxed text-left">
              Cocokin provides editorial-grade career analysis and market
              insights designed to move you beyond standard job seeking into
              strategic career building.
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-row justify-start items-start gap-4 pt-6">
            <div className="self-stretch p-6 bg-white/5 rounded-xl outline -outline-offset-1 outline-white/10 backdrop-blur-xs flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-center text-white text-3xl font-bold font-manrope leading-9">
                98%
              </div>
              <div className="self-stretch justify-center text-indigo-100/70 text-sm font-normal font-inter leading-5">
                Skill Match Accuracy
              </div>
            </div>

            <div className="self-stretch p-6 bg-white/5 rounded-xl outline -outline-offset-1 outline-white/10 backdrop-blur-xs flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-center text-white text-3xl font-bold font-manrope leading-9">
                12k+
              </div>
              <div className="self-stretch justify-center text-indigo-100/70 text-sm font-normal font-inter leading-5">
                Company Benchmarks
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-20 px-6 sm:px-16 bg-slate-50 relative">
        <div className="w-full max-w-96 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-blue-800 text-3xl font-bold font-manrope leading-9">
                Cocokin
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6 text-left">
                Create your account to start your analysis.
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="self-stretch flex flex-col justify-start items-start gap-6"
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <label className="self-stretch justify-center text-gray-700 text-sm font-semibold font-inter leading-5 text-left">
                Full Name
              </label>
              <div
                className={`self-stretch py-2.5 border-b-2 flex justify-start items-center overflow-hidden transition duration-200
                ${nameError ? "border-red-500 focus-within:border-red-500" : "border-zinc-200 focus-within:border-blue-600"}`}
              >
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  disabled={isLoading}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError("");
                  }}
                  className="flex-1 w-full bg-transparent border-none outline-hidden text-base font-normal font-inter text-zinc-800 placeholder:text-gray-300"
                />
              </div>
              {nameError && (
                <p className="text-red-500 text-xs font-medium mt-1 text-left animate-fade-in">
                  {nameError}
                </p>
              )}
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <label className="self-stretch justify-center text-gray-700 text-sm font-semibold font-inter leading-5 text-left">
                Email Address
              </label>
              <div
                className={`self-stretch py-2.5 border-b-2 flex justify-start items-center overflow-hidden transition duration-200
                ${emailError ? "border-red-500 focus-within:border-red-500" : "border-zinc-200 focus-within:border-blue-600"}`}
              >
                <input
                  type="text"
                  placeholder="name@gmail.com"
                  value={email}
                  disabled={isLoading}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  className="flex-1 w-full bg-transparent border-none outline-hidden text-base font-normal font-inter text-zinc-800 placeholder:text-gray-300"
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-xs font-medium mt-1 text-left animate-fade-in">
                  {emailError}
                </p>
              )}
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <PasswordField
                label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(val) => {
                  setPassword(val);
                  if (passwordError) setPasswordError("");
                }}
                variant="line"
              />
              {passwordError && (
                <p className="text-red-500 text-xs font-medium mt-1 text-left animate-fade-in">
                  {passwordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`self-stretch mt-2 py-4 relative bg-linear-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-center justify-center text-white text-base font-bold font-manrope leading-6 rounded-lg shadow-md transition duration-200 border-none outline-none
                ${isLoading ? "bg-blue-800/70 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Daftar
            </button>
          </form>

          <div className="self-stretch flex justify-center items-center gap-1.5 text-sm font-inter">
            <span className="text-gray-700 font-normal">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="text-blue-800 font-bold hover:underline"
            >
              Log In
            </Link>
          </div>

          <div className="self-stretch text-center flex flex-col gap-1 text-[10px] font-normal font-inter text-gray-500 leading-normal opacity-85">
            <p>
              By clicking "Daftar", you agree to our{" "}
              <a href="#terms" className="underline hover:text-zinc-800">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#privacy" className="underline hover:text-zinc-800">
                Privacy Policy
              </a>
              .
            </p>
            <p>Cocokin uses advanced encryption for your data security.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
