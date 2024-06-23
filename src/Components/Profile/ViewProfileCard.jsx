const ProfileCard = () => {
  return (
    <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10">
      <div className="flex flex-col">
        <div className="bg-white border border-white shadow-lg rounded-3xl p-4 m-4 relative">
          <div className="absolute top-0 right-0 m-4">
            <button className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">Seguir</button>
          </div>
          <div className="flex-none sm:flex">
            <div className="relative h-32 w-32 sm:mb-0 mb-3">
              <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="w-32 h-32 object-cover rounded-2xl" />
            </div>
            <div className="flex-auto sm:ml-5 justify-evenly sm:mt-2">
              <div className="flex flex-col">
                <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">Aji</div>
                <div className="flex-auto text-gray-500 my-1">
                  <span className="mr-3">Descripcion</span>
                </div>
              </div>
              <div className="flex pt-2 text-sm text-gray-500">
                <div className="flex-1 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  <p className="">1.2k Seguidores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
