import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginResponse, SignInProps } from "../../types";

const NurseAuth = () => {
  const [data, setData] = useState<SignInProps>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (
    e: FormEvent,
    data: SignInProps,
    navigate: ReturnType<typeof useNavigate>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const res = await axios.post<LoginResponse>(
        "http://localhost:5000/api/auth/login",
        data
      );

      if (res.data.role === "doctor") {
        navigate("/doctor-profile");
      } else if (
        res.data.role === "user" ||
        res.data.role === "admin" ||
        res.data.role === "nurse"
      ) {
        alert("Wrong Login Page!");
      } else {
        alert("Invalid Role!");
      }
    } catch (err) {
      alert("Invalid Credentials or Please Try Again!");
    }
  };
  return (
    <section className="bg-[#FEFAE0] h-screen w-screen">
      <div className="flex items-center justify-center h-full max-w-7xl m-auto md:w-[60%] rounded-xl lg:w-[40%]  ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-[#CCD5AE] shadow-xl shadow-black p-4 rounded-lg">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Nurse SignIn
          </h2>
          <p className="mt-2 text-center text-sm text-slate-900 ">
            Login As A Patient?{" "}
            <a
              href="/sign-in"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Click Here
            </a>
          </p>
          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    value={data.email}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    value={data.password}
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={(e) => handleSubmit(e, data, navigate)}
                >
                  Get started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NurseAuth;
