import ConfirmationCode from "../Login/ConfirmationCode.jsx";
import LoginForm from "../Login/LoginForm.jsx";
import RegisterForm from "../Login/RegisterForm.jsx";
const SideBarLogin = () => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 text-white"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <LoginForm/>
        <br />
        <RegisterForm/>
        <br />
        <ConfirmationCode/>
      </div>
    </aside>
  );
};

export default SideBarLogin;