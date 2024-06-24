import "./MobileMenu.css"

const MobileMenu = () => {
  return (
    <div className="MobileMenu shadow-lg rounded-t-2xl">
      <div className="flex">
        <div className="flex-1 group">
          <button className="flex items-end justify-center text-center mx-auto pt-2  text-gray-400 group-hover:text-indigo-500">
            <span className="block  pt-1 pb-1">
              <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-2">Home</span>
              <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
            </span>
          </button>
        </div>
        <div className="flex-1 group">
          <button className="flex items-end justify-center text-center mx-auto pt-2  text-gray-400 group-hover:text-indigo-500">
            <span className="block pt-1 pb-1">
              <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-2">Explore</span>
              <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
            </span>
          </button>
        </div>
        <div className="flex-1 group">
          <button className="flex items-end justify-center text-center mx-auto pt-2  text-gray-400 group-hover:text-indigo-500">
            <span className="block pt-1 pb-1">
              <i className="far fa-search text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-2">Search</span>
              <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
            </span>
          </button>
        </div>
        <div className="flex-1 group">
          <button className="flex items-end justify-center text-center mx-auto pt-2  text-gray-400 group-hover:text-indigo-500">
            <span className="block pt-1 pb-1">
              <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-2">Settings</span>
              <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
