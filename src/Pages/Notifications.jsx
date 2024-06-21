import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Questions from '../Components/Notifications/Questions';
import General from '../Components/Notifications/General';

const Notifications = () =>{
  return(
    <div className="sm:ml-96 sm:mr-64 justify-center h-screen ">
      <div className="p-4 h-full flex flex-col">
        <h1 className="text-2xl font-bold mb-7 mt-5 text-black">
          <span className="inline-flex items-center">
            <svg className="w-10 h-10 text-gray-800 dark:text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"/>
            </svg><span className='text-black'>Notificaciones</span>
          </span>
        </h1>
        <Tabs defaultActiveKey="questions" id="fill-tab-example" fill className='dark:sm:bg-gray-800 dark:sm:border-gray-700 hover:dark:sm:bg-gray-800 active:dark:sm:bg-gray-800 link:dark:sm:bg-gray-800 rounded-t-xl color-white' style={{ "--bs-nav-tabs-link-active-bg": "gray-700", "--bs-nav-tabs-border-width": "solid transparent", "--bs-nav-tabs-link-active-color": "white", "--bs-nav-link-color": "gray", "--bs-nav-link-hover-color": "gray" }}>
          <Tab eventKey="questions" title="Preguntas" className='text-black bg-gray-100 h-full'>
            <Questions/>
          </Tab>
          <Tab eventKey="answers" title="General" className='text-black bg-gray-100 h-full'>
            <General/>
          </Tab>
        </Tabs>
    </div>
  </div>
  )
}

export default Notifications;