function Loader() {
return ( <div className="fixed inset-0 bg-[#050B1A] flex flex-col items-center justify-center z-[9999]">


  <div className="relative w-36 h-36">

    <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>

    <div className="absolute inset-3 border-t-4 border-fuchsia-500 rounded-full animate-spin [animation-direction:reverse]"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-3xl font-bold text-white">
        R.DM
      </span>
    </div>

  </div>

  <h2 className="mt-8 text-3xl font-bold text-white">
    Loading Portfolio...
  </h2>

  <p className="mt-3 text-blue-400">
    Rizwan Ullah | Digital Marketer
  </p>

</div>


);
}

export default Loader;
