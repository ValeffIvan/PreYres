const DiscoverPeople = () => {
  return (
    <div className="hidden sm:fixed sm:top-0 sm:right-0 sm:z-40 sm:w-64 sm:h-screen lg:block md:block  sm:border-l sm:border-r sm:bg-gray-800 sm:border-gray-700 pt-10">
      <h2 className="px-5 text-lg font-medium  text-white text-center">Descubrir usuarios</h2>
      <div className="mt-8 space-y-4 flex flex-col items-center text-center">
        <button className="flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2 hover:bg-gray-700 focus:outline-none ">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
            alt=""
          />

          <div className="text-left rtl:text-right">
            <h1 className="text-sm font-medium  capitalize text-white">Mia John</h1>
            <p className="text-xs text-gray-400">11.2 Seguidores</p>
          </div>
        </button>

        <button className="flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2 hover:bg-gray-700 focus:outline-none">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80"
            alt=""
          />

          <div className="text-left rtl:text-right">
            <h1 className="text-sm font-medium  capitalize text-white">arthur melo</h1>
            <p className="text-xs  text-gray-400">1.2 Seguidores</p>
          </div>
        </button>

        <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-700 gap-x-2  focus:outline-none">
          <div className="relative">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
              alt=""
            />
          </div>

          <div className="text-left rtl:text-right">
            <h1 className="text-sm font-medium  capitalize text-white">Jane Doe</h1>
            <p className="text-xs  text-gray-400">15.6 Seguidores</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DiscoverPeople;