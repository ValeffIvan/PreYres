import { useNavigate } from "react-router-dom";

const SideBar = () => {

  const navigate = useNavigate();

  const CloseSession =  () =>{
    try {
      localStorage.clear();
      location.reload()
      /*const user_data = { email, password };
      await signin(user_data);
      if (!isAuth){
        setErrorMessage('Credenciales invalidas');
      }*/
    } catch (ex) {
      console.error('Error al iniciar sesión:', ex);
    }
  }

    return (
      <div className="h-full px-3 pt-7 overflow-y-auto fixed top-0 left-0 z-40 w-96 hidden sm:fixed sm:h-screen lg:block md:block sm:bg-white sm:border-l sm:border-r dark:sm:bg-gray-800 dark:sm:border-gray-700">
        <div className="flex flex-col justify-center items-center ">
          <div className="rounded-[20px] max-w-[300px] flex flex-col w-full">
            <div className="text-center">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                PreYres
              </h4>
            </div>
            <div className="mt-5 flex flex-col"> 
              <button className="rounded-full bg-blue-800 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-700 flex items-center" onClick={()=>{navigate("/perfil")}}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
                Perfil
              </button> 
              <div className="flex flex-col relative">
                <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="rounded-full bg-blue-800 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-700 flex items-center">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"/>
                  </svg>
                  Notificaciones
                </button>
                <div id="dropdownNotification" className="hidden absolute left-0 w-full bg-white rounded-lg shadow mt-1" aria-labelledby="dropdownNotificationButton">
                  <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notifications
                  </div>
                  <div className="dark:divide-gray-700">
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex-shrink-0">
                        <img className="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/>
                      </div>
                      <div className="w-full ps-3">
                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                        <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                      </div>
                    </a>
                  </div>
                  <button className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white" onClick={()=>navigate("/notificaciones")}>
                    <div className="inline-flex items-center">
                      <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                      </svg>
                      Ver todos
                    </div>
                  </button>
                </div>
              </div>

              
              <button className="rounded-full bg-blue-800 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-700 flex items-center" onClick={()=>{navigate('/configuracion')}}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>

                Configuración
              </button> 
              <button className="rounded-full bg-blue-800 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-700 flex items-center" onClick={()=>{CloseSession(); navigate("/")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>
                  Cerrar Sesión
              </button> 
              <input placeholder="Buscar en PreYres..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark"/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar;