function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050B1A] flex flex-col items-center justify-center z-[9999]">

      <div className="relative w-36 h-36">

        {/* Outer Ring */}
        <div
          className="
          absolute inset-0
          rounded-full
          border-[4px]
          border-transparent
          border-t-blue-500
          border-r-blue-500
          animate-spin
          "
        ></div>

        {/* Inner Ring */}
        <div
          className="
          absolute inset-3
          rounded-full
          border-[4px]
          border-transparent
          border-t-fuchsia-500
          border-l-fuchsia-500
          animate-spin
          [animation-direction:reverse]
          "
        ></div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">

          <span className="text-3xl font-bold text-white tracking-wide">
            R.DM
          </span>

        </div>

      </div>

      <h2 className="mt-8 text-3xl font-bold text-white">
        Loading Portfolio...
      </h2>

      <p className="mt-3 text-fuchsia-400 font-medium tracking-wide">
        Rizwan Ullah | Digital Marketer
      </p>

    </div>
  );
}

export default Loader;