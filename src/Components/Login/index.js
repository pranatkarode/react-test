import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Utils/endpoints";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    fetch(loginUser, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setLoading(false);
        console.log(d);
        if (!d.ok && !d.token) {
          setErrorMessage(d.msg);
        } else {
          localStorage.setItem("token", d.token);
          navigate("/home");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <div className="border border-slate-900 rounded-md p-8 md:p-16 w-full sm:w-[60%]  lg:w-1/3 ">
        <div className="text-xl font-bold mb-8">Login To Your Account</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <input
              {...register("userName", {
                required: true,
              })}
              placeholder="User Name"
              className={`px-2 py-1 border border-black rounded-md`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("email")}
              placeholder="Email Address"
              className={`px-2 py-1 border border-black rounded-md`}
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              type="password"
              placeholder="Password"
              className={`px-2 py-1 border border-black rounded-md`}
            />
          </div>
          {errorMessage && (
            <p className="text-xs text-red-600">{errorMessage}</p>
          )}
          <button
            className="text-white bg-slate-800 py-2 rounded-md h-[40px]"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader /> : "Login"}
          </button>
          <div>
            <a
              href="/home"
              className="text-xs text-indigo-900 hover:text-indigo-700"
            >
              New User? Register Now!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
