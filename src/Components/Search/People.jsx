const People = () =>{
  return (
  <div class="w-full h-full p-4  bg-white sm:p-8 bg-gray-800 border-gray-700">
    <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 divide-gray-700">
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate text-white">
                              Neil Sims
                          </p>
                          <p class="text-sm text-gray-500 truncate text-gray-400">
                              Descripcion
                          </p>
                      </div>
                      <button className="flex cursor-pointer items-center transition hover:text-white bg-green-500 hover:bg-green-700 mr-5 rounded-full pl-8 pr-6 pt-2 pb-2 text-lg text-white">
                        Seguir
                      </button>
                  </div>
              </li>
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate text-white">
                              Bonnie Green
                          </p>
                          <p class="text-sm text-gray-500 truncate text-gray-400">
                            Descripcion
                          </p>
                      </div>
                      <button className="flex cursor-pointer items-center transition hover:text-white bg-red-500 hover:bg-red-700 mr-5 rounded-full pl-8 pr-6 pt-2 pb-2 text-lg text-white">
                        Siguiendo
                      </button>
                  </div>
              </li>
          </ul>
    </div>
  </div>
  );
}

export default People;