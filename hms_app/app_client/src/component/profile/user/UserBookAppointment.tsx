import React, { FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../../../constant/images";
import axios from "axios";
import { IDoctor } from "../../../types";
import Swal from "sweetalert2";

interface NavLinkStyleProps {
  isActive: boolean;
}

function UserBookAppointment() {
  const [userData, setuserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [doctor, setDoctor] = useState("");
  const [reason, setReason] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [doctors, setDoctors] = useState<IDoctor[]>([]);

  const getDay = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setuserData(user);
        setUserName(user.userName);
        setMobileNumber(user.phoneNumber);
        setAddress(user.address.street);
        setGender(user.gender);
        setEmail(user.email);
      }
    };

    const fetchDoctors = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/doctor/get-doctors"
      );
      setDoctors(res.data);
    };

    fetchDoctors();
    fetchInfo();
  }, []);
  const navLinkStyle = ({
    isActive,
  }: NavLinkStyleProps): React.CSSProperties => {
    return {
      fontWeight: isActive ? "600" : "400",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "black" : "white",
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/appointment/add-appointment", {
        patient: userName,
        phone: mobileNumber,
        doctor: doctor,
        appointmentDate: appointmentDate,
        reason: reason,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Success",
          icon: "success",
          confirmButtonText: "Ok",
          text: "Appointment Request Sent Successfully! We will get back to you soon!",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          icon: "error",
          confirmButtonText: "Ok",
          text: "Error Sending Appointment Request! Please Try Again!",
        });
      });
  };

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
        <div className=" w-[70%] ms-24 p-4 flex flex-col justify-around ">
          <p className="font-semibold text-3xl">Book Appointment</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-[80%] justify-between"
          >
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Name:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Email:</p>
                <input
                  className="flex h-10  w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Phone:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Phone"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Appointment Date:</p>
                <input
                  className="flex h-10  w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="date"
                  min={getDay()}
                  placeholder="Date Of Appointment"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Gender:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Male/Female/Others"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Doctor Name:</p>
                <select
                  id="doctors"
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                >
                  {/* <option value="Choose you Consultant">
                    Choose you Consultant
                  </option>
                  <option value="D1">Doctor 1</option>
                  <option value="D2">Doctor 2</option>
                  <option value="D3">Doctor 3</option> */}
                  {doctors.map((doctors) => (
                    <option key={doctors._id} value={doctors._id}>
                      {doctors.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Reason:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Address:</p>
                <input
                  className="flex h-10  w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black w-[95%] text-white p-2 rounded-full"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserBookAppointment;
