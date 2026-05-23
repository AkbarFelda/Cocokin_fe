import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { logoCocokin, supportIcon } from "../assets/icons";
import { waveTexture } from "../assets/images";
import PasswordField from "../components/Auth/PasswordField";
import { authService } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const result = await authService.login({ email, password });

      // console.log("Login sukses weh! Token didapat:", result.data);
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
    }
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-white antialiased">
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
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-800 font-inter">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-5 pr-12 py-3.5 rounded-xl border border-gray-200 text-base placeholder:text-gray-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-200 font-inter"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
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
                onChange={setPassword}
                required
                variant="box"
              />
            </div>

            {errorMsg && (
              <div className="w-full p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl font-inter text-left animate-fade-in">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="w-full font-inter bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 shadow-xs transition duration-200 mt-2 cursor-pointer text-base tracking-wide"
            >
              Masuk
            </button>

            <div className="relative flex py-3 items-center">
              <div className="grow border-t border-gray-100/60"></div>
              <span className="shrink mx-4 text-xs text-gray-400 uppercase font-medium font-inter opacity-70">
                or continue with
              </span>
              <div className="grow border-t border-gray-100/60"></div>
            </div>

            <button
              type="button"
              className="w-full font-inter border border-gray-200 bg-white text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition duration-200 flex justify-center items-center gap-3 cursor-pointer text-sm"
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
              Google
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
