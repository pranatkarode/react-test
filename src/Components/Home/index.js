import { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { notesUrl } from "../../Utils/endpoints";
export default function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(notesUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.ok) {
          setNotes(data.results);
        }
      });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col ">
        <button
          onClick={() => {
            navigate("/create");
          }}
          className="bg-slate-800 text-white px-4 py-2 rounded-md self-end"
        >
          Add Note
        </button>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {notes.map((note) => {
            return <CardComponent note={note} />;
          })}
        </div>
        {/* <CardComponent /> */}
      </div>
    </Layout>
  );
}
