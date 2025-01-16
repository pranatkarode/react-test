import CardComponent from "../CardComponent";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col py-4">
        <button
          onClick={() => {
            navigate("/create");
          }}
          className="bg-slate-800 text-white px-4 py-2 self-end rounded-md "
        >
          Add Note
        </button>
        <CardComponent />
      </div>
    </Layout>
  );
}
