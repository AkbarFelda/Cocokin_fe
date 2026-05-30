import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faBuildingColumns,
  faShieldHalved,
  faCheckCircle,
  faCopy,
  faArrowLeft,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { paymentService } from "../services/payment";
import StatusDialog from "../components/StatusDialog";

export default function CheckoutPayment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "ewallet" | "bank"
  >("card");
  const [selectedBank, setSelectedBank] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const [dialogConfig, setDialogConfig] = useState({
    isOpen: false,
    variant: "success" as "success" | "failed",
    title: "",
    description: "",
    routeTo: "",
  });

  const handleConfirmPayment = async () => {
    if (
      paymentMethod === "card" &&
      (!cardData.number.trim() ||
        !cardData.name.trim() ||
        !cardData.expiry.trim() ||
        !cardData.cvv.trim())
    ) {
      setDialogConfig({
        isOpen: true,
        variant: "failed",
        title: "Data Belum Lengkap",
        description: "Lengkapi data kartu Anda.",
        routeTo: "",
      });
      return;
    }

    if (paymentMethod === "ewallet" && !phoneNumber.trim()) {
      setDialogConfig({
        isOpen: true,
        variant: "failed",
        title: "Nomor Telepon Kosong",
        description: "Masukkan nomor E-Wallet Anda.",
        routeTo: "",
      });
      return;
    }

    if (paymentMethod === "bank" && !selectedBank) {
      setDialogConfig({
        isOpen: true,
        variant: "failed",
        title: "Bank Belum Dipilih",
        description: "Pilih bank tujuan transfer.",
        routeTo: "",
      });
      return;
    }

    try {
      setIsProcessing(true);

       await paymentService.confirmPaymentSuccess();

      setDialogConfig({
        isOpen: true,
        variant: "success",
        title: "Pembayaran Berhasil!",
        description: "Pembayaran Anda telah berhasil diproses.",
        routeTo: "/dashboard",
      });
    } catch (error) {
      console.error(error);

      setDialogConfig({
        isOpen: true,
        variant: "failed",
        title: "Pembayaran Gagal",
        description: "Terjadi kesalahan server.",
        routeTo: "",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDialogConfirm = () => {
    setDialogConfig((prev) => ({
      ...prev,
      isOpen: false,
    }));

    if (dialogConfig.routeTo) {
      navigate(dialogConfig.routeTo);
    }
  };

  const basePrice = 89000;
  const tax = 9790;
  const adminFees = {
    card: 0,
    ewallet: 1500,
    bank: 2500,
  };
  const currentAdminFee = adminFees[paymentMethod];
  const totalAmount = basePrice + tax + currentAdminFee;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const bankVAMap: Record<string, string> = {
    bca: "3901 0812 3456 7890",
    mandiri: "8950 8 0812 3456 789",
    bri: "8077 0812 3456 7890",
    bni: "8213 0812 3456 7890",
    bsi: "900 0812 3456 7890",
    mega: "780 0812 3456 7890",
    permata: "8528 0812 3456 7890",
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-inter text-left relative flex flex-col items-center">
      <StatusDialog
        {...dialogConfig}
        onConfirm={handleDialogConfirm}
        buttonText={
          dialogConfig.variant === "success" ? "Mulai Analisis" : "Mengerti"
        }
      />
      <main className="w-full max-w-7xl px-4 md:px-6 pt-10 pb-20 flex flex-col gap-8">
        {/* Tombol Back to Pricing */}
        <button
          onClick={() => navigate("/pricing")}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-800 font-medium transition cursor-pointer self-start border-none outline-none bg-transparent"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
          <span>Back to Pricing</span>
        </button>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="w-full p-6 md:p-8 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-6">
              <h2 className="text-zinc-900 text-2xl font-bold font-manrope">
                Select Payment Method
              </h2>

              <div className="flex flex-col gap-4">
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`p-5 rounded-xl border-2 flex justify-between items-center cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "bg-indigo-50/50 border-blue-800 shadow-sm"
                      : "bg-white border-gray-200 hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className={`text-xl ${paymentMethod === "card" ? "text-blue-800" : "text-gray-400"}`}
                    />
                    <div className="flex flex-col">
                      <span className="text-zinc-900 font-bold text-sm">
                        Credit / Debit Card
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5">
                        Visa, Mastercard, AMEX
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-blue-800" : "border-gray-300"}`}
                  >
                    {paymentMethod === "card" && (
                      <div className="w-2.5 h-2.5 bg-blue-800 rounded-full"></div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => setPaymentMethod("ewallet")}
                  className={`p-5 rounded-xl border-2 flex justify-between items-center cursor-pointer transition-all ${
                    paymentMethod === "ewallet"
                      ? "bg-indigo-50/50 border-blue-800 shadow-sm"
                      : "bg-white border-gray-200 hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faWallet}
                      className={`text-xl ${paymentMethod === "ewallet" ? "text-blue-800" : "text-gray-400"}`}
                    />
                    <div className="flex flex-col">
                      <span className="text-zinc-900 font-bold text-sm">
                        E-Wallet
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5">
                        GoPay, OVO, Dana, ShopeePay
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "ewallet" ? "border-blue-800" : "border-gray-300"}`}
                  >
                    {paymentMethod === "ewallet" && (
                      <div className="w-2.5 h-2.5 bg-blue-800 rounded-full"></div>
                    )}
                  </div>
                </div>
                <div
                  onClick={() => setPaymentMethod("bank")}
                  className={`p-5 rounded-xl border-2 flex justify-between items-center cursor-pointer transition-all ${
                    paymentMethod === "bank"
                      ? "bg-indigo-50/50 border-blue-800 shadow-sm"
                      : "bg-white border-gray-200 hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faBuildingColumns}
                      className={`text-xl ${paymentMethod === "bank" ? "text-blue-800" : "text-gray-400"}`}
                    />
                    <div className="flex flex-col">
                      <span className="text-zinc-900 font-bold text-sm">
                        Bank Transfer (Virtual Account)
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5">
                        BCA, Mandiri, BRI, BNI, BSI, Mega
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "bank" ? "border-blue-800" : "border-gray-300"}`}
                  >
                    {paymentMethod === "bank" && (
                      <div className="w-2.5 h-2.5 bg-blue-800 rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full pt-6 border-t border-gray-100 flex flex-col gap-4 transition-all animate-fadeIn">
                {paymentMethod === "card" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) =>
                          setCardData({
                            ...cardData,
                            number: e.target.value,
                          })
                        }
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-blue-800 focus:bg-white transition text-sm font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        value={cardData.name}
                        onChange={(e) =>
                          setCardData({
                            ...cardData,
                            name: e.target.value,
                          })
                        }
                        placeholder="John Doe"
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-blue-800 focus:bg-white transition text-sm font-medium"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) =>
                            setCardData({
                              ...cardData,
                              expiry: e.target.value,
                            })
                          }
                          placeholder="MM/YY"
                          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-blue-800 focus:bg-white transition text-sm font-medium"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                          CVV
                        </label>
                        <input
                          value={cardData.cvv}
                          onChange={(e) =>
                            setCardData({
                              ...cardData,
                              cvv: e.target.value,
                            })
                          }
                          type="text"
                          placeholder="123"
                          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-blue-800 focus:bg-white transition text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {paymentMethod === "ewallet" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                      Nomor Telepon (E-Wallet)
                    </label>
                    <div className="relative w-full">
                      <span className="absolute left-4 top-3.5 text-gray-500 font-bold text-sm">
                        +62
                      </span>
                      <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="812 3456 7890"
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-blue-800 focus:bg-white transition text-sm font-medium"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Pastikan nomor aktif dan terdaftar di aplikasi E-Wallet
                      pilihan Anda.
                    </p>
                  </div>
                )}
                {paymentMethod === "bank" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs font-bold uppercase tracking-wide">
                      Pilih Bank
                    </label>
                    <div className="relative">
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-blue-800 focus:bg-white transition text-sm font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          -- Pilih Bank Tujuan --
                        </option>
                        <option value="bca">BCA (Bank Central Asia)</option>
                        <option value="mandiri">Bank Mandiri</option>
                        <option value="bri">BRI (Bank Rakyat Indonesia)</option>
                        <option value="bni">BNI (Bank Negara Indonesia)</option>
                        <option value="bsi">
                          BSI (Bank Syariah Indonesia)
                        </option>
                        <option value="mega">Bank Mega</option>
                        <option value="permata">Bank Permata</option>
                      </select>
                      <div className="absolute right-4 top-4 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    {selectedBank && (
                      <div className="mt-4 p-5 bg-white border border-gray-200 rounded-xl flex flex-col gap-3 shadow-xs animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faBuildingColumns}
                            className="text-blue-800 text-sm"
                          />
                          <span className="text-zinc-900 text-sm font-bold">
                            Nomor Virtual Account
                          </span>
                        </div>
                        <div className="w-full flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-3">
                          <span className="text-zinc-900 font-mono text-xl font-bold tracking-wider">
                            {bankVAMap[selectedBank]}
                          </span>
                          <button
                            onClick={() =>
                              navigator.clipboard.writeText(
                                bankVAMap[selectedBank],
                              )
                            }
                            className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-bold rounded-md transition cursor-pointer flex items-center gap-1.5 border-none outline-none"
                          >
                            <FontAwesomeIcon icon={faCopy} />
                            <span>Salin</span>
                          </button>
                        </div>
                        <div className="flex items-start gap-2 text-gray-500 text-xs mt-1">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-emerald-600 mt-0.5"
                          />
                          <span>
                            Selesaikan pembayaran senilai total tagihan untuk
                            mengaktifkan paket Premium Anda.
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="w-full bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col overflow-hidden">
              <div className="w-full p-6 bg-gray-50/50 border-b border-gray-100">
                <h3 className="text-zinc-900 text-lg font-bold font-manrope">
                  Order Summary
                </h3>
              </div>

              <div className="w-full p-6 flex flex-col gap-6">
                <div className="w-full flex justify-between items-start gap-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-800/10 rounded-xl flex justify-center items-center shrink-0">
                      <FontAwesomeIcon
                        icon={faWallet}
                        className="text-blue-800 text-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-900 text-base font-bold">
                        Professional Pack
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5">
                        Unlimited Analysis Tokens
                      </span>
                    </div>
                  </div>
                  <span className="text-zinc-900 text-base font-bold whitespace-nowrap">
                    {formatCurrency(basePrice)}
                  </span>
                </div>

                <div className="w-full pt-6 border-t border-gray-100 flex flex-col gap-3 text-sm">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-zinc-900">
                      {formatCurrency(basePrice)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Tax (VAT 11%)</span>
                    <span className="font-medium text-zinc-900">
                      {formatCurrency(tax)}
                    </span>
                  </div>
                  {currentAdminFee > 0 && (
                    <div className="flex justify-between items-center text-gray-600 animate-fadeIn">
                      <span>Admin Fee</span>
                      <span className="font-medium text-zinc-900">
                        {formatCurrency(currentAdminFee)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="w-full pt-6 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                    Total Amount
                  </span>
                  <span className="text-blue-800 text-3xl font-extrabold font-manrope leading-none">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>

                <button
                  onClick={handleConfirmPayment}
                  disabled={isProcessing}
                  className="w-full py-4 mt-2 bg-linear-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-bold text-base rounded-xl shadow-md transition cursor-pointer border-none outline-none disabled:opacity-70"
                >
                  {isProcessing ? (
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="animate-spin"
                    />
                  ) : (
                    "Confirm Payment"
                  )}
                </button>
              </div>
            </div>

            <div className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex justify-center items-center shrink-0">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-blue-800 text-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-900 text-sm font-bold">
                  100% Secure Checkout
                </span>
                <span className="text-gray-500 text-xs mt-1">
                  Your payment information is encrypted and protected by
                  standard protocols.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
