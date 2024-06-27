const People = () => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        <ul role="list" className="divide-y divide-gray-200">
          {[{
            name: 'Augusto Sims',
            description: 'Descripcion',
            img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
            buttonText: 'Seguir',
            buttonClass: 'bg-green-400 hover:bg-green-500'
          },
          {
            name: 'Augusto Green',
            description: 'Descripcion',
            img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
            buttonText: 'Siguiendo',
            buttonClass: 'bg-red-400 hover:bg-red-500'
          }].map((person, index) => (
            <li key={index} className="flex items-center justify-between p-5">
              <div className="flex items-center space-x-3">
                <div className="flex-none">
                  <img className="w-14 h-14 object-cover rounded-full" src={person.img} alt={`${person.name} image`} />
                </div>
                <div className="flex-auto ml-5">
                  <div className="flex flex-col">
                    <div className="text-lg text-gray-800 font-bold">{person.name}</div>
                    <div className="text-gray-500">{person.description}</div>
                  </div>
                </div>
              </div>
              <button className={`${person.buttonClass} px-5 py-2 rounded-full text-white font-medium`}>
                {person.buttonText}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default People;
  