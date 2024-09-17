import React, { FC, FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../../../constant/images";
import axios from "axios";
import { UserData } from "../../../types";
import Swal from "sweetalert2";

interface NavLinkStyleProps {
  isActive: boolean;
}

const UserProfile: FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    dateOfBirth: "",
    gender: "",
    email: "",
  });
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        setUserData(user);
        setName(user.userName);
        setMobileNumber(user.phoneNumber);
        setAddress(user.address.street);
        setCity(user.address.city);
        setState(user.address.state);
        const formattedDateOfBirth = user.dateOfBirth
          ? user.dateOfBirth.split("T")[0]
          : "";
        setDateOfBirth(formattedDateOfBirth);
        setGender(user.gender);
        setEmail(user.email);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };

    fetchInfo();
  }, []);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/profile-update",
        {
          userId: userData._id,
          updatedProfile: {
            email,
            userName: name,
            phoneNumber: mobileNumber,
            address: {
              street: address,
              city: city,
              state: state,
            },
            gender: gender,
            dateOfBirth: dateOfBirth,
          },
        }
      );
      if (res.data.status === "Success") {
        Swal.fire({
          title: "Success",
          icon: "success",
          confirmButtonText: "Ok",
          text: "Profile Updated Successfully!",
        });
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/user-profile";
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        icon: "error",
        confirmButtonText: "Ok",
        text: "Error Updating Profile! Please Try Again!",
      });
    }
  };

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5000/api/user/sign-out");
      if (res.data.message === "Success") {
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    } catch (err) {
      alert(err);
    }
  };

  const navLinkStyle = ({
    isActive,
  }: NavLinkStyleProps): React.CSSProperties => {
    return {
      fontWeight: isActive ? "600" : "400",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "black" : "white",
    };
  };

  return (
    <section className="bg-slate-300 flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-white shadow-xl p-2 flex">
        <div className="bg-slate- h-full w-[18%] flex flex-col justify-between p-2">
          <div className="flex flex-col gap-16">
            <div className="w-full flex flex-col items-center gap-3">
              <img
                src={images.human6}
                className="size-24 rounded-full"
                alt="profile"
              />
              <p>{name}</p>
            </div>
            <div className="flex flex-col items-start w-full gap-4 ">
              <NavLink
                style={navLinkStyle}
                className="w-full p-2 h-[40px]"
                to="/user-profile"
              >
                Settings
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className="w-full p-2 h-[40px]"
                to="/user-appointments"
              >
                History
              </NavLink>
              <NavLink
                style={navLinkStyle}
                className="w-full p-2 h-[40px]"
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
          <div className="w-full text-center h-[80px] p-2">
            <button
              className="bg-black text-white rounded-full text-md font-medium p-2 cursor-pointer hover:scale-110 duration-200 active:scale-90"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="w-[70%] ms-24 p-4 flex flex-col justify-around">
          <p className="font-semibold text-3xl">Account Settings</p>
          <form
            onSubmit={handleUpdate}
            className="flex flex-col h-[80%] justify-between"
          >
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Name:</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Email:</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Phone:</p>
                <input
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your DOB:</p>
                <input
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="date"
                />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Gender:</p>
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Male/Female/Others"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your City:</p>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="City"
                />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Address:</p>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your State:</p>
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-[200px] self-center bg-black text-white p-3 rounded-full"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
