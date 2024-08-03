// Classes.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
} from "../../../styles/classes.styles";
import { Sidebar } from "../../../component";

const Classes = () => {
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/class/getall"
      );
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error(
          "Error fetching classes: Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching classes:", error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/class/create",
          { grade: newClassName }
        );
        toast.success("Class added successfully");
        console.log("Response data:", response.data); // Log the response data
        setClasses((prevClasses) => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data]; // Use callback function to update state
          } else {
            console.error(
              "Error adding class: Invalid state for classes:",
              prevClasses
            );
            return []; // Reset classes state to an empty array
          }
        });
        setNewClassName("");
      } catch (error) {
        console.error("Error adding class:", error);
        toast.success("Error creating class");
      }
    }
  };

  return (
    <ClassesContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {/* Ensure that classes is an array before mapping over it */}
            {Array.isArray(classes) &&
              classes.map((classItem, index) => (
                <ClassItem key={index}>{classItem.grade}</ClassItem>
              ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default Classes;
