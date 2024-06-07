import CreatePost from "../Home/CreatePost";

const OwnProfile = () =>{
  return (
    <div className="h-screen items-center justify-center">
			<div>
				<CreatePost/>
			</div>
      <div>
        <h1>Own Profile</h1>
      </div>
		</div>
  );
}
export default OwnProfile;