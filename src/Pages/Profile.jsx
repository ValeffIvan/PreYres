import OwnProfile from "../Components/Profile/OwnProfile";
import ProfileCard from "../Components/Profile/ViewProfileCard"

const Profile = () => {
  return (
    <div className="p-4 sm:ml-96 sm:mr-64">
      <div>
        <ProfileCard/>
      </div>
      <div >
        <OwnProfile />
      </div>
    </div>
  );
};

export default Profile;