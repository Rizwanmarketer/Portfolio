function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[200]">

      <div className="flex items-center gap-2">

        <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce"></div>

        <div className="h-4 w-4 rounded-full bg-purple-500 animate-bounce delay-150"></div>

        <div className="h-4 w-4 rounded-full bg-cyan-500 animate-bounce delay-300"></div>

      </div>

    </div>
  );
}

export default Loader;