function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16 text-slate-500">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-current rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-current rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        <div className="w-3 h-3 bg-current rounded-full animate-bounce [animation-delay:-0.4s]"></div>
      </div>
      <p className="text-sm">Loading Tasks...</p>
    </div>
  );
}

export default Loading;
