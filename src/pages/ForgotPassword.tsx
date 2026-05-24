import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { authService } from "../services/auth";
import { buildingTexture } from "../assets/images";
import { logoCocokin } from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      const result = await authService.forgotPassword({ email });

      setSuccessMsg(
        result.message || "Link reset password telah dikirim ke email kamu.",
      );
      setEmail("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message ||
          "Email tidak ditemukan atau terjadi kesalahan.";
        setErrorMsg(message);
      } else {
        setErrorMsg("Terjadi kesalahan sistem, coba lagi nanti.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-white antialiased">
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-center items-start p-16 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-100 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-blue-700 to-blue-900">
            <img
              src={buildingTexture}
              alt="Building Texture"
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
              Recover Your Path.
            </div>
          </div>

          <div className="self-stretch opacity-90 flex flex-col justify-start items-start">
            <div className="justify-center text-indigo-200 text-lg font-normal font-inter leading-7">
              Precision is key in career navigation. Let us help you regain
              <br />
              access to your architectural career insights and data-driven
              <br />
              trajectory.
            </div>
          </div>

          <div className="self-stretch mt-2 p-6 bg-white/5 rounded-lg outline -outline-offset-1 outline-white/10 backdrop-blur-[6px] inline-flex justify-start items-start gap-4">
            <div className="p-3 bg-white/10 rounded-xs inline-flex flex-col justify-start items-start">
              <div className="w-4 h-4 rounded-xs justify-center items-center align-baseline text-center text-white text-sm">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-white text-base font-semibold font-inter leading-6">
                  Secure Recovery
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

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-20 px-6 sm:px-16 bg-slate-50 relative">
        <div className="w-full max-w-96 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-center text-zinc-900 text-3xl font-bold font-manrope leading-9">
              Forgot password?
            </div>
            <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
              No problem. Enter the email address
              <br />
              associated with your Cocokin account
              <br />
              and we'll send you a link to reset your
              <br />
              password.
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

          <form
            onSubmit={handleSubmit}
            className="self-stretch flex flex-col justify-start items-start gap-6"
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <label className="self-stretch justify-center text-gray-700 text-sm font-semibold font-inter leading-5">
                Email Address
              </label>
              <div className="self-stretch relative w-full flex items-center">
                <div className="absolute left-4 text-gray-400 text-base pointer-events-none flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full pl-11 pr-4 py-4 bg-zinc-200 text-base font-normal font-inter text-zinc-800 placeholder:text-gray-500 rounded-sm border-none outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-zinc-100/80 transition duration-200 disabled:opacity-50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="self-stretch mt-2 py-4 bg-linear-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-center justify-center text-white text-base font-bold font-manrope leading-6 rounded-lg shadow-md transition duration-200 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Sending Link..." : "Send Reset Link"}
            </button>
          </form>

          <div className="self-stretch flex justify-center items-center gap-1.5 text-sm font-inter">
            <span className="text-gray-700 font-normal">
              Remember your password?
            </span>
            <Link
              to="/login"
              className="text-blue-800 font-bold hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
