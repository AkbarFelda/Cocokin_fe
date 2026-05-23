import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { markupIcon } from "../assets/icons";
import { visualTexture } from "../assets/images";
import PasswordField from "../components/Auth/PasswordField";
import { authService } from "../services/auth";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const result = await authService.register({ name, email, password });

      console.log("Register Sukses, ID User:", result.data.id);
      alert("Akun berhasil dibuat! Silakan login menggunakan akun baru kamu.");

      navigate("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message ||
          "Gagal mendaftar, periksa kembali data kamu.";
        setErrorMsg(message);
      } else {
        setErrorMsg("Terjadi kesalahan sistem yang tidak diketahui.");
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-white antialiased">
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
        <div className="relative z-20 w-full max-w-2xl flex flex-col justify-start items-start gap-6">
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
            <p className="justify-center text-indigo-100/80 text-lg md:text-xl font-normal font-inter leading-relaxed">
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
              <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
                Create your account to start your analysis.
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="w-full p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl font-inter">
              {errorMsg}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="self-stretch flex flex-col justify-start items-start gap-6"
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <label className="self-stretch justify-center text-gray-700 text-sm font-semibold font-inter leading-5">
                Full Name
              </label>
              <div className="self-stretch py-2.5 border-b-2 border-zinc-200 flex justify-start items-center overflow-hidden focus-within:border-blue-600 transition duration-200">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 w-full bg-transparent border-none outline-hidden text-base font-normal font-inter text-zinc-800 placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <label className="self-stretch justify-center text-gray-700 text-sm font-semibold font-inter leading-5">
                Email Address
              </label>
              <div className="self-stretch py-2.5 border-b-2 border-zinc-200 flex justify-start items-center overflow-hidden focus-within:border-blue-600 transition duration-200">
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 w-full bg-transparent border-none outline-hidden text-base font-normal font-inter text-zinc-800 placeholder:text-gray-300"
                />
              </div>
            </div>

            <PasswordField
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={setPassword}
              required
              variant="line"
            />

            <button
              type="submit"
              className="self-stretch mt-2 py-4 relative bg-linear-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-center justify-center text-white text-base font-bold font-manrope leading-6 rounded-lg shadow-md transition duration-200 cursor-pointer"
            >
              Daftar
            </button>
          </form>

          <div className="self-stretch relative flex items-center justify-center py-2">
            <div className="absolute inset-x-0 h-px bg-zinc-200"></div>
            <span className="relative px-4 bg-slate-50 text-gray-400 text-xs font-normal font-inter uppercase tracking-wider">
              OR CONTINUE WITH
            </span>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start">
            <button
              type="button"
              className="self-stretch py-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex justify-center items-center gap-3 transition duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.97 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.86 3c.9-2.7 3.4-4.46 6.64-4.46z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.8-.07-1.56-.2-2.27H12v4.51h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.38-4.88 3.38-8.63z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.36 14.5c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3L1.5 6.9C.54 8.84 0 11.02 0 12.3s.54 3.46 1.5 5.4l3.86-3z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.24 0 5.97-1.08 7.96-2.91l-3.66-2.84c-1.01.68-2.31 1.09-4.3 1.09-3.24 0-5.74-1.76-6.64-4.46l-3.86 3C3.4 20.35 7.35 23 12 23z"
                />
              </svg>
              <span className="text-center justify-center text-zinc-900 text-sm font-semibold font-inter leading-5">
                Google
              </span>
            </button>
          </div>

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
