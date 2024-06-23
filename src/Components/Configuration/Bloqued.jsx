const Bloqued = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5">
        <div className="w-full flex items-center justify-between pb-2 relative">
          <div className="flex items-center space-x-3">
            <div className="flex-none sm:flex">
              <div className="relative sm:mb-0 mb-3">
                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="w-14 h-14 object-cover rounded-2xl" />
              </div>
              <div className="flex-auto sm:ml-5 justify-evenly sm:mt-2">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">Aji</div>
                  <div className="flex-auto text-gray-500 my-1">
                    <span className="mr-3">Descripcion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-3 m-1">
            <button className="bg-green-400 hover:bg-green-500 px-10 py-4 hover:shadow-lg font-medium hover:border-green-500 text-white rounded-4">
              Desbloquear
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center p-5">
        <div className="w-full flex items-center justify-between pb-2 relative">
          <div className="flex items-center space-x-3">
            <div className="flex-none sm:flex">
              <div className="relative sm:mb-0 mb-3">
                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="w-14 h-14 object-cover rounded-2xl" />
              </div>
              <div className="flex-auto sm:ml-5 justify-evenly sm:mt-2">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">Aji</div>
                  <div className="flex-auto text-gray-500 my-1">
                    <span className="mr-3">Descripcion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-3 m-1">
            <button className="bg-green-400 hover:bg-green-500 px-10 py-4 hover:shadow-lg font-medium hover:border-green-500 text-white rounded-4">
              Desbloquear
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Bloqued;
