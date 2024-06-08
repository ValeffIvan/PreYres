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
    <div className="w-full bg-white p-8 rounded-lg shadow-md">
      <form>
        <div className="relative">
          <textarea
            id="postContent"
            name="postContent"
            rows="4"
            className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 pr-10"
            placeholder="What's on your mind?"
            onChange={handleTextInputChange}
            maxLength={300}
          ></textarea>
          <span className="absolute bottom-2 right-3 text-gray-500 text-sm pointer-events-none">
            {`${characterCount}`}
          </span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="border-2 rounded-md hover:border-blue-500 transition duration-150 ease-in-out">
              <input
                type="file"
                id="fileAttachment"
                name="fileAttachment"
                className="absolute opacity-0 cursor-pointer"
                onChange={handleImageChange} // Add an onChange handler to the file input
              />
              {image && ( // Conditionally render the uploaded image
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
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center">
            <input id="link-checkbox" type="checkbox" value="" className="rounded"/>
            <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-700 ">Preguntar como anónimo</label>
          </div>
          <button type="submit" className="ml-4 flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"> Preguntar </button>
        </div>
      </form>
     

    </div>
  );
}

export default CreatePost;



/*
    <form>
          <label htmlFor="chat" className="sr-only">Your message</label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                  </svg>
                  <span className="sr-only">Upload image</span>
              </button>
              <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                  </svg>
                  <span className="sr-only">Add emoji</span>
              </button>
              <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                  <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                  <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                  </svg>
                  <span className="sr-only">Send message</span>
              </button>
          </div>
      </form>   */