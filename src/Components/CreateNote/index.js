import Layout from "../Layout";
import { useForm } from "react-hook-form";
import TagInput from "../TagInput";
import { useEffect, useState } from "react";
import { createNote } from "../../Utils/endpoints";

export default function CreateNote() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setValue("tags", tags);
  }, [tags]);
  function onSubmit(data) {
    fetch(createNote, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log("result: ", data));
  }
  return (
    <Layout>
      <div className="font-bold text-lg">Create Note</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 flex">
          <div className="w-1/2 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-700 font-semibold">
                Title
              </label>
              <input
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
                placeholder="Enter Title"
                className="px-2 py-1 border border-slate-500 rounded-md shadow-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-sm text-slate-700 font-semibold">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
                rows={5}
                placeholder="Enter Description"
                className="px-2 py-1 border border-slate-500 rounded-md shadow-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-sm text-slate-700 font-semibold">
                Tags
              </label>
              <TagInput tags={tags} setTags={setTags} />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-sm text-slate-700 font-semibold">
                Due Date
              </label>
              <input
                type="date"
                {...register("dueDate", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
                className="px-2 py-1 border border-slate-500 rounded-md shadow-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-sm text-slate-700 font-semibold">
                Category
              </label>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <label>
                    <input
                      value="Work"
                      type="radio"
                      {...register("date")}
                      className=""
                    />
                    <span className="ml-2 text-sm">Work</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label>
                    <input
                      type="radio"
                      value="Personal"
                      {...register("date")}
                      className=""
                    />
                    <span className="ml-2 text-sm">Personal</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label>
                    <input
                      type="radio"
                      value="School"
                      {...register("date")}
                      className=""
                    />
                    <span className="ml-2 text-sm">School</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-1/2 mt-4 bg-slate-800 text-white py-1 rounded-md "
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}
