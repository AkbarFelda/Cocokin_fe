// src/components/Common/StatusDialog.tsx

interface StatusDialogProps {
  isOpen: boolean;
  variant?: "success" | "failed"; // 🟢 Ditambahkan tipe variant dinamis
  title: string;
  description: string;
  buttonText: string;
  onConfirm: () => void;
}

export default function StatusDialog({
  isOpen,
  variant = "success", // Default-nya tetap success
  title,
  description,
  buttonText,
  onConfirm,
}: StatusDialogProps) {
  if (!isOpen) return null;

  const isSuccess = variant === "success";

  return (
    <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-xs z-50 flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl border border-gray-100 flex flex-col items-center gap-5">
        {isSuccess ? (
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold select-none">
            ✓
          </div>
        ) : (
          <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-3xl font-bold select-none">
            ✕
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="font-manrope text-xl font-bold text-zinc-900">
            {title}
          </h3>
          <p className="font-inter text-sm font-normal text-zinc-500 leading-relaxed text-center">
            {description}
          </p>
        </div>

        <button
          onClick={onConfirm}
          className={`w-full font-inter text-white font-bold py-3 rounded-xl transition duration-200 cursor-pointer text-sm shadow-sm border-none outline-none
            ${isSuccess ? "bg-blue-700 hover:bg-blue-800" : "bg-red-600 hover:bg-red-700"}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
