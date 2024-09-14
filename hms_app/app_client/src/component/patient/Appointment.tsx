import { FormEvent, useEffect, useState } from "react";
import { IAppointment, IDoctor } from "../../types";
import axios from "axios";

const Appointment = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [appointment, setAppointment] = useState<IAppointment>({
    patient: "",
    phone: "",
    appointmentDate: "",
    time: "",
    doctor: "",
    reason: "",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/doctor/get-doctors"
        );
        setDoctors(res.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };

    fetchDoctors();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/appointment/add-appointment",
        {
          patient: appointment.patient,
          phone: appointment.phone,
          doctor: appointment.doctor,
          appointmentDate: appointment.appointmentDate,
          reason: appointment.reason,
          time: appointment.time,
        }
      );
      console.log(res.data);
      alert("Appointment Request Sent Successfully");
    } catch (err) {
      alert("Error sending appointment request");
      console.error(err);
    }
  };
  return (
    <section className="bg-slate-300">
      <div className="h-screen f-screen flex justify-center items-center">
        <div className=" flex justify-center  w-[50%]  p-4 rounded-xl items-center pt-[80px] ">
          <form
            onSubmit={handleSubmit}
            className=" sm:container-sm flex justify-center flex-col p-4 shadow-xl rounded-lg bg-white shadow-stone-900"
          >
            <div className="heading flex justify-center ">
              <span className="text-black font-semibold text-2xl">
                Appointment Form
              </span>
            </div>
            <div className="name flex justify-center  flex-col">
              <label
                className="text-black font-medium text-lg  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstname"
              >
                Full Name
              </label>
              <div className="w-full flex ">
                <input
                  className="flex h-12  text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  onChange={(e) =>
                    setAppointment({ ...appointment, patient: e.target.value })
                  }
                />
                <span className="p-2"></span>
                <input
                  className="flex h-12 w-full text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setAppointment({ ...appointment, patient: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="phone-number  w-full flex justify-center flex-col">
              <label
                className="text-black font-medium text-lg  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="phoneNumber"
              >
                Phone No:
              </label>
              <input
                className="flex h-12 w-full text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="0000 00 00 00"
                id="phoneNumber"
                onChange={(e) =>
                  setAppointment({ ...appointment, phone: e.target.value })
                }
              />
            </div>

            <div className="dob&pincode flex justify-between ">
              <div className="w-1/2">
                <label
                  className="text-black font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="pincode"
                >
                  Pin-Code:
                </label>
                <input
                  className="flex h-12 w-3/4 text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="000-000"
                  id="pincode"
                />
              </div>
              <div className="w-1/2">
                <label
                  className="text-black font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="dob"
                >
                  Appointment date:
                </label>
                <input
                  className="flex h-12 w-3/4 text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="date"
                  id="dob"
                />
              </div>
            </div>
            <div className="address ">
              <label
                className="text-black font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="address"
              >
                Address:
              </label>
              <input
                className="flex h-12 w-full text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="address"
                placeholder="49 Featherstone Street, LONDON "
              />
            </div>
            <div className="Consultant ">
              <label
                htmlFor="doctors"
                className="text-black font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Consultants
              </label>
              <select
                id="doctors"
                className="flex h-12 w-full text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Choose you Consultant">
                  Choose you Consultant
                </option>
                <option value="D1">Doctor 1</option>
                <option value="D2">Doctor 2</option>
                <option value="D3">Doctor 3</option>
              </select>
            </div>
            <div className="reason">
              <label
                className="text-black font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="reason"
              >
                Reason:
              </label>
              <textarea
                className="flex h-[18vh] w-full text-lg rounded-md border border-black/30 px-3  placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                // type="text"
                id="reason"
                placeholder="Reason for appointment....."
              />
            </div>
            <div className="button ">
              <button
                type="submit"
                className="i items-center flex justify-center rounded-lg bg-black px-3 mt-3  text-lg font-semibold text-white hover:bg-black/80 h-[7vh]
            w-full"
              >
                Submit Request
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
