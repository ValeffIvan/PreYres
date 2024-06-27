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
      <br />
			<div className="w-full max-w-5xl">
        <Tabs defaultActiveKey="answers" id="fill-tab-example" fill>
          <Tab eventKey="answers" title="Respuestas" className="border-1">
            <Post/>
            <hr />
          </Tab>
          <Tab eventKey="questions" title="Preguntas">
            <h1>asdf</h1>
          </Tab>
        </Tabs>
				</div>	
			</div>
  );
}
export default OwnProfile;