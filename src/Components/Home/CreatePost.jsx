import { useState } from "react";

const CreatePost = () => {
  const [characterCount, setCharacterCount] = useState(300);
  const [image, setImage] = useState(null); // Add a state to store the uploaded image

  const handleTextInputChange = (e) => {
    const textLength = e.target.value.length;
    setCharacterCount(300 - textLength);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // Set the image state to the uploaded image
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full bg-white ">
      <h2 className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores aliquid asperiores, dolorem repellendus accusantium doloribus suscipit excepturi quam repellat cumque, architecto porro, autem fugit at deleniti unde quibusdam ipsa itaque!
      </h2>
      <br />
      <form>
        <div className="relative rounded-t-2xl border-2">
          <textarea
            id="postContent"
            name="postContent"
            rows="4"
            className="w-full px-4 py-2 sm:text-sm sm:leading-5 resize-none rounded-t-2xl border-none"
            placeholder="What's on your mind?"
            onChange={handleTextInputChange}
            maxLength={300}
          ></textarea>
          <span className="absolute bottom-1 right-2 text-gray-500 text-sm pointer-events-none">
            {`${characterCount}`}
          </span>
        </div>
        <div className="flex items-center rounded-b-lg justify-between dark:border dark:bg-gray-700 dark:border-gray-700 pl-2">
          <div className="border-2 rounded-md">
            <input
              type="file"
              id="fileAttachment"
              name="fileAttachment"
              className="absolute opacity-0 cursor-pointer"
              onChange={handleImageChange} 
            />
            {image && (
              <img src={image} alt="Uploaded image" className="w-24 h-24 object-cover" />
            )}
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
        <div className="flex justify-end">
          <div className="flex items-center">
            <input id="link-checkbox" type="checkbox" value="" className="rounded"/>
            <label htmlFor="link-checkbox" className="dark:text-white ms-2 text-sm font-medium text-gray-700 ">Preguntar como anónimo</label>
          </div>
          <button type="submit" className="m-1 ml-4 text-white bg-indigo-600 tracking-wide hover:bg-blue-600 text-white py-2 px-4 rounded-md "> Preguntar </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
