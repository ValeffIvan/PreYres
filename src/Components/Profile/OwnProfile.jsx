import CreatePost from "../Home/CreatePost";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Post from "../Home/Post";

const OwnProfile = () =>{
  return (
    <div className="items-center justify-center">
			<div>
				<CreatePost/>
			</div>
      <br />
			<div>
        <Tabs defaultActiveKey="answers" id="fill-tab-example" fill>
          <Tab eventKey="answers" title="Respuestas" className="border-1">
            <Post/>
            <hr />
            <Post/>
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