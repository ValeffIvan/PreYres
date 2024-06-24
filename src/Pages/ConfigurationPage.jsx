import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Account from '../Components/Configuration/Account';
import Bloqued from '../Components/Configuration/Bloqued';
import ProfileConfig from '../Components/Configuration/Profile';

const Configuration = () => {
  return (
    <div className="sm:ml-96 sm:mr-64 justify-center h-screen ">
      <div className="p-4 h-full flex flex-col">
        <h1 className="text-2xl font-bold mb-7 mt-5 text-black">
          <span className="inline-flex items-center">
            <svg className="w-10 h-10 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg><span className='text-black-100'>Configuración</span>
          </span>
        </h1>
        <div className="h-full rounded-xl">
          <Tabs defaultActiveKey="profile" id="fill-tab-example" fill className='bg-gray-800 border-gray-700 hover:bg-gray-800 active:bg-gray-800 link:bg-gray-800 rounded-t-xl color-white' style={{ "--bs-nav-tabs-link-active-bg": "gray-700", "--bs-nav-tabs-border-width": "solid transparent", "--bs-nav-tabs-link-active-color": "white", "--bs-nav-link-color": "gray", "--bs-nav-link-hover-color": "gray" }}>
            <Tab eventKey="profile" title="Perfil" className='text-black  h-full flex-grow'>
              <ProfileConfig />
            </Tab>
            <Tab eventKey="account" title="Cuenta" className='text-black h-full flex-grow'>
              <Account />
            </Tab>
            <Tab eventKey="bloqued" title="Bloqueados" className='text-black h-full flex-grow'>
              <Bloqued />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
