export default function CircularProgress({ size = 48 }) {
  return (
    <div
      className="animate-spin rounded-full border-slate-300 border-t-blue-600 dark:border-zinc-700 dark:border-t-blue-400"
      style={{
        width: size,
        height: size,
        borderWidth: size / 12,
      }}
    />
  );
}