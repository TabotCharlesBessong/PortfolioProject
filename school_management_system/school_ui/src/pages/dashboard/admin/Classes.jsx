import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../../../component";
import axios from "axios"

const ClassesContainer = styled.div`
  display: flex;
`;

const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Content = styled.div`
  flex:1;
`;

const ClassItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddClassForm = styled.form`
  margin-bottom: 20px;
`;

const AddClassInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddClassButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClassesContent = styled.div`
  padding:20px;
`;

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
      setClasses(response.data.classes);
      console.log(classes)
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/class/create', { grade: newClassName });
        setClasses([...classes, response.data]); // Assuming response.data contains the new class
        setNewClassName('');
      } catch (error) {
        console.error('Error adding class:', error);
      }
    }
  };

  return (
    <ClassesContainer>
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
