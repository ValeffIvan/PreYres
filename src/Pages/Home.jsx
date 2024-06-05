import Post from "../Components/Home/Post";

const Home = () => {
  return (
    <div className="p-4 sm:ml-96 sm:mr-96">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
                <Post/>
            </p>
          </div>
      </div>
    </div>
  );
};

export default Home;
