interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

export default function LoadingSpinner({ size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8 border-3",
    md: "w-16 h-16 border-4",
    lg: "w-24 h-24 border-6",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`
          ${sizeClasses[size]}
          rounded-full 
          animate-spin 
          border-solid 
          border-blue-600 
          border-t-transparent 
          border-l-blue-600/30
          border-r-blue-600/60
          border-b-blue-600/90
        `}
        role="status"
        aria-label="loading"
      />
    </div>
  );
}