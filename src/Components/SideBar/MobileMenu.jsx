import "./MobileMenu.css";

const MobileMenu = () => {
  const menuItems = [
    { icon: "fa-home", label: "Home" },
    { icon: "fa-compass", label: "Explore" },
    { icon: "fa-search", label: "Search" },
    { icon: "fa-cog", label: "Settings" },
  ];

  return (
    <div className="MobileMenu shadow-lg rounded-t-2xl">
      <div className="flex">
        {menuItems.map((item) => (
          <div key={item.label} className="flex-1 group">
            <button className="flex items-end justify-center text-center mx-auto pt-2 text-gray-400 group-hover:text-indigo-500">
              <span className="block pt-1">
                <i className={`far ${item.icon} text-l pt-1 block`}></i>
                <span className="block text-s">{item.label}</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
