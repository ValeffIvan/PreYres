import CreatePost from "../Home/CreatePost";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Post from "../Home/Post";

const OwnProfile = () =>{
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:ml-96 sm:mr-64">
			<div className="w-full max-w-5xl">
				<CreatePost/>
			</div>
      <div className="w-full max-w-5xl">
        <Tabs defaultActiveKey="answers" id="fill-tab-example" fill className='bg-gray-800 border-gray-700 hover:bg-gray-800 active:bg-gray-800 link:bg-gray-800 rounded-t-xl color-white' style={{ "--bs-nav-tabs-link-active-bg": "gray-700", "--bs-nav-tabs-border-width": "solid transparent", "--bs-nav-tabs-link-active-color": "white", "--bs-nav-link-color": "gray", "--bs-nav-link-hover-color": "gray" }}>
          <Tab eventKey="answers" title="Respuestas" className="border-1 p-4">
            <Post />
            <hr />
          </Tab>
          <Tab eventKey="questions" title="Preguntas" className="border-1 p-4">
            <h1 className="text-lg font-semibold text-gray-700">Contenido de la pestaña de Preguntas</h1>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default OwnProfile;