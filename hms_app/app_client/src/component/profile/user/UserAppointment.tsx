import { NavLink } from "react-router-dom";
import images from "../../../constant/images";
import { useEffect, useState } from "react";
import axios from "axios";
import { IAppointment, User } from "../../../types";
import Swal from "sweetalert2";

interface NavLinkStyleProps {
  isActive: boolean;
}

const UserAppointment = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const navLinkStyle = ({
    isActive,
  }: NavLinkStyleProps): React.CSSProperties => {
    return {
      fontWeight: isActive ? "600" : "400",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "black" : "white",
    };
  };

  useEffect(() => {
    const user: User = JSON.parse(localStorage.getItem("user") || "{}");

    const fetchAppointments = async (_id: string) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/appointment/get-appointment/${_id}`
        );
        console.log(res.data);
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Error",
          icon: "error",
          confirmButtonText: "Ok",
          text: "Error Fetching Appointments! Please Try Again!",
        });
      }
    };

    if (user._id) {
      fetchAppointments(user._id);
    }
  }, []);

  return (
    <section className="bg-slate-300 flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-white shadow-xl p-2 flex">
        <div className="bg-slate- h-full w-[18%] flex flex-col justify-between p-2 ">
          <div className="flex flex-col gap-16">
            <div className="w-full flex flex-col items-center gap-3">
              <img
                src={images.human6}
                className="size-24 rounded-full"
                alt="profile"
              />
              <p>Name</p>
            </div>
            <div className="flex flex-col items-start w-full gap-4 ">
              <NavLink
                style={navLinkStyle}
                className={"w-full   p-2 h-[40px] "}
                to="/user-profile"
              >
                Settings
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full  p-2 h-[40px] "}
                to="/user-appointments"
              >
                History
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full p-2 h-[40px] "}
                to="/user-book-appointment"
              >
                Book Appointment
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className={"w-full p-2 h-[40px] "}
                to="/user-medication"
              >
                Medication
              </NavLink>
            </div>
          </div>
          <div className="w-full text-center  h-[80px] p-2">
            <button className="bg-black text-white rounded-full text-md font-medium p-2 cursor-pointer hover:scale-110 duration-200 active:scale-90 ">
              Sign Out
            </button>
          </div>
        </div>
        <div className="overflow-auto  w-[70%] ms-24 p-4 flex flex-col  ">
          {/* main content comes here */}
        </div>
      </div>
    </section>
  );
};

export default UserAppointment;
