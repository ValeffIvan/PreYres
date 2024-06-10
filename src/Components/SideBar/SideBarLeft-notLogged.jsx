
import LoginForm from "../Login/LoginForm.jsx";


const SideBarLogin = () => { 

  return (
    <div className="h-full px-3 py-4 overflow-y-auto fixed top-0 left-0 z-40 w-96 hidden sm:fixed sm:h-screen lg:block md:block sm:bg-white sm:border-l sm:border-r dark:sm:bg-gray-800 dark:sm:border-gray-700">

    <LoginForm />;
      
    </div>
  );
};

export default SideBarLogin;