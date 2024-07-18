import React, { useState } from "react";

function Image() {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);

  const addImage = (e) => {
    e.preventDefault();
    if (url) {
      setImages([...images, { url: url, id: Date.now() }]);
      setUrl("");
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-5">
        <h1 className="text-4xl font-semibold mb-5 text-center">Image Gallery</h1>
        <form className="flex mb-10" onSubmit={addImage}>
          <input
            className="p-2 flex-1 rounded-l-md focus:outline-none mr-5"
            type="url"
            value={url}
            placeholder="Enter Image URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
          >
            Add Image
          </button>
        </form>

        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-y-auto h-[500px] overflow-x-hidden">
            {images.map((img) => (
              <div key={img.id} className="p-2 rounded-md w-60">
                <img
                  src={img.url}
                  alt="Gallery"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Image;
