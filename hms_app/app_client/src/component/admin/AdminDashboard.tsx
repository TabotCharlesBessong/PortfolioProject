import { NavLink } from "react-router-dom";
import images from "../../constant/images";
import { CSSProperties, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface NavLinkStyleProps {
  isActive: boolean;
}

const AdminDashboard = () => {
  const [docount, setdocount] = useState<number>(0);
  const [nursecount, setnursecount] = useState<number>(0);
  const [patientcount, setpatientcount] = useState<number>(0);
  const [querieslef, setquerieslef] = useState<number>(0);
  const [depts, setDepts] = useState<number>(0);

  useEffect(() => {
    const fetchInfo = async () => {
      await axios
        .get("http://localhost:5000/api/admin/count-all")
        .then((res) => {
          console.log(res)
          setdocount(res.data.doctorCount);
          setnursecount(res.data.nurseCount);
          setpatientcount(res.data.patientCount);
          setquerieslef(res.data.queriesCount);
          setDepts(res.data.deptsCount);
          // Swal. 
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title:"Error",
            icon:"error",
            text:"Error fetching data"
          })
        });
    };
    fetchInfo();
  }, []);

  const handleSignOut = async (e:FormEvent) => {
    e.preventDefault();
    await axios.get("http://localhost:5000/api/user/logout").then((res) => {
      if (res.data.message === "User Logged Out") {
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    });
  };
  const navLinkStyle = ({
    isActive,
  }: NavLinkStyleProps): CSSProperties => {
    return {
      fontWeight: isActive ? "600" : "400",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "black" : "white",
    };
  };

  return (
    <section className="bg-slate-300 flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-white shadow-xl p-2 flex">
        <div className="bg-slate- h-full w-[18%] flex flex-col justify-between p-2 ">
          <div className="flex flex-col gap-6">
            <div className="w-full flex flex-col items-center ">
              <img
                src={images.human6}
                className="size-24 rounded-full"
                alt="profile"
              />
              <p className="font-semibold text-xl">Admin</p>
            </div>
            <div className="flex flex-col items-start w-full gap-3 ">
              <NavLink
                style={navLinkStyle}
                className={"w-full   p-2 h-[40px] "}
                to="/admin-dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full  p-2 h-[40px] "}
                to="/admin-doctor"
              >
                Doctor
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full p-2 h-[40px] "}
                to="/admin-nurse"
              >
                Nurse
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full p-2 h-[40px] "}
                to="/admin-patient"
              >
                Patient
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full p-2 h-[40px] "}
                to="/admin-query"
              >
                Query
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full p-2 h-[40px] "}
                to="/admin-newsletter"
              >
                Newsletter
              </NavLink>
            </div>
          </div>
          <div className="w-full text-center  h-[80px] p-2">
            <button
              onClick={handleSignOut}
              className="bg-black text-white rounded-full text-md font-medium p-2 cursor-pointer hover:scale-110 duration-200 active:scale-90 "
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className=" w-[70%] ms-24 p-4 flex flex-col justify-around ">
          <p className="font-semibold text-3xl text-center">Dashboard</p>
          <div className="w-full  h-[80%] items-center flex flex-col gap-4">
            <div className="flex w-full justify-evenly h-[30%]">
              <div className="flex shadow-xl rounded-xl border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Doctors: {docount}{" "}
                </span>
              </div>
              <div className="flex shadow-xl rounded-xl border-2 border-slate-900  w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Nurses: {nursecount}{" "}
                </span>
              </div>
            </div>
            <div className="flex w-full  justify-evenly h-[30%]">
              <div className="flex shadow-xl rounded-xl border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Patients: {patientcount}{" "}
                </span>
              </div>
              <div className="flex  shadow-xl rounded-xl border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Query: {querieslef}{" "}
                </span>
              </div>
              <div className="flex  shadow-xl rounded-xl border-2 border-slate-900 w-[30%] justify-center items-center">
                <span className="font-semibold text-xl">
                  Department: {depts}{" "}
                </span>
              </div>
            </div>
            <div className="flex shadow-xl rounded-xl border-2 border-slate-900 w-[30%] h-[30%] justify-center items-center">
              <span className="font-semibold text-xl">NewsLetter: </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
