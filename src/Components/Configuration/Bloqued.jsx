const Bloqued = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {[1, 2].map((_, index) => (
        <div key={index} className={`flex items-center justify-between p-5 ${index < 1 ? 'border-b' : ''} border-gray-200`}>
          <div className="flex items-center space-x-3">
            <div className="flex-none">
              <img
                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                alt="aji"
                className="w-14 h-14 object-cover rounded-full"
              />
            </div>
            <div className="flex-auto ml-5">
              <div className="flex flex-col">
                <div className="text-lg text-gray-800 font-bold">Aji</div>
                <div className="text-gray-500">Descripcion</div>
              </div>
            </div>
          </div>
          <button className="bg-green-400 hover:bg-green-500 px-5 py-2 rounded-full text-white font-medium">
            Desbloquear
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloqued;
