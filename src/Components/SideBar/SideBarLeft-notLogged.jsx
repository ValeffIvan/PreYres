
import LoginForm from "../Login/LoginForm.jsx";


const SideBarLogin = () => { 

  return (
    <div className="h-full px-3 py-4 overflow-y-auto fixed top-0 left-0 z-40 w-96 hidden sm:fixed sm:h-screen lg:block md:block sm:bg-white sm:border-l sm:border-r dark:sm:bg-gray-800 dark:sm:border-gray-700">
      <div className="mb-5 text-center">
        <h1 className="text-xl font-bold mb-2 leading-tight text-center tracking-tight md:text-2xl dark:text-white">
            PreYres
        </h1>
        <input placeholder="Buscar en PreYres..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark"/>
      </div>
      <div>
        <LoginForm />;  
      </div>
    </div>
    
  );
};

export default SideBarLogin;