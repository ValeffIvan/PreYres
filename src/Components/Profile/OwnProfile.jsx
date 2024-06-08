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
        <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
          <Tab eventKey="home" title="Home">
            <Post/>
          </Tab>
          <Tab eventKey="longer-tab" title="Loooonger Tab">
            <h1>asdf</h1>
          </Tab>
        </Tabs>
				</div>	
			</div>
  );
}
export default OwnProfile;