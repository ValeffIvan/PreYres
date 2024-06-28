import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MobileConfig = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-white">
      <div className="flex items-center p-4 border-b">
        <button className="flex items-center text-black" onClick={() => navigate(-1)}>
          <FaArrowLeft className="mr-2" /> 
          <span>Volver</span>
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <button className="text-black text-left" onClick={() => navigate("/configuracion")}>
          Configuración
        </button>
        <button className="text-black text-left" onClick={() => {
          localStorage.clear();
          navigate("/login");
          window.location.reload();
        }}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default MobileConfig;
