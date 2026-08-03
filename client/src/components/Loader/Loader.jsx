export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[3px] bg-black/10">
      <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-xl dark:bg-zinc-900">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>

        <span className="text-sm font-medium">
          Loading...
        </span>
      </div>
    </div>
  );
}