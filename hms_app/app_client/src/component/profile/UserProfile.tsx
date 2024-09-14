import React, { FC, FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../../constant/images";
import axios from "axios";
import { UserData } from "../../types";

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
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/profile");
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };

    const setProfileData = () => {
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: prevUserData.name,
        mobileNumber: prevUserData.mobileNumber,
        address: prevUserData.address,
        city: prevUserData.city,
        state: prevUserData.state,
        dateOfBirth: prevUserData.dateOfBirth,
        gender: prevUserData.gender,
        email: prevUserData.email,
      }));
    };

    fetchInfo();
    setProfileData();
  }, []);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .put("http://localhost:5000/api/user/profile-update", userData)
        .then((res) => {
          if (res.data.message === "Success") {
          }
        });
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
              <p>Name</p>
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
            <button className="bg-black text-white rounded-full text-md font-medium p-2 cursor-pointer hover:scale-110 duration-200 active:scale-90">
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
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Email:</p>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
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
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Phone"
                  onChange={(e) =>
                    setUserData({ ...userData, mobileNumber: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your DOB:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="date"
                  onChange={(e) =>
                    setUserData({ ...userData, dateOfBirth: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Gender:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Male/Female/Others"
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your City:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="City"
                  onChange={(e) =>
                    setUserData({ ...userData, city: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your State:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="State"
                  onChange={(e) =>
                    setUserData({ ...userData, state: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Address:</p>
                <input
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Address"
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                />
              </div>
            </div>
            <button type="submit" className="bg-black w-[95%] text-white p-2 rounded-full">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
