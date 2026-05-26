export default function ProfileSkeleton() {
  return (
    <div className="w-full flex flex-col gap-10 animate-pulse text-left">
      <div className="w-full p-8 bg-white rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto items-start sm:items-center">
          <div className="w-36 h-36 bg-slate-200 rounded-2xl shrink-0"></div>
          <div className="flex-1 space-y-4 w-full sm:w-80">
            <div className="h-8 bg-slate-200 rounded-md w-3/4"></div>
            <div className="h-5 bg-slate-200 rounded-md w-1/2"></div>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <div className="h-10 w-40 bg-slate-200 rounded-xl"></div>
              <div className="h-10 w-40 bg-slate-200 rounded-xl"></div>
              <div className="h-10 w-40 bg-slate-200 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="space-y-2 w-full md:w-48">
          <div className="h-11 bg-slate-200 rounded-xl w-full"></div>
          <div className="h-11 bg-slate-200 rounded-xl w-full"></div>
        </div>
      </div>
      <div className="w-full p-8 bg-white rounded-2xl border border-gray-100 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="h-7 bg-slate-200 rounded-md w-48"></div>
          <div className="h-10 bg-slate-200 rounded-xl w-full sm:w-72"></div>
        </div>
        <div className="space-y-3 pt-4">
          <div className="h-12 bg-slate-200/60 rounded-xl w-full"></div>
          <div className="h-16 bg-slate-200/40 rounded-xl w-full"></div>
          <div className="h-16 bg-slate-200/40 rounded-xl w-full"></div>
          <div className="h-16 bg-slate-200/40 rounded-xl w-full"></div>
        </div>
      </div>
    </div>
  );
}