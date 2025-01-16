import React, { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const addTag = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      const newTag = event.target.value.trim();

      // Prevent duplicate tags
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }

      event.target.value = "";
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="max-w-lg ">
      <div className="flex flex-wrap items-center gap-2 border border-slate-500 rounded-lg p-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-slate-500 text-white text-sm px-3 py-1 rounded-full"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-white hover:text-gray-200 focus:outline-none"
              onClick={() => removeTag(index)}
            >
              &times;
            </button>
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Type and press enter..."
            className="flex-1 border-none focus:ring-0 outline-none text-sm "
            onKeyDown={addTag}
          />
        </div>
      </div>
    </div>
  );
};

export default TagInput;
