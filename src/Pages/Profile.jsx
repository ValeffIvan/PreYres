import OwnProfile from "../Components/Profile/OwnProfile";
import ProfileCard from "../Components/Profile/ProfileCard"

const Profile = () => {
  return (
    <>
      <div>
        <ProfileCard/>
      </div>
      <div >
        <OwnProfile />
      </div>
    </>
  );
};

export default Profile;