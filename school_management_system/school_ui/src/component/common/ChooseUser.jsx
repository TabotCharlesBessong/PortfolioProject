import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChooseUserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100vh;
  background-color:#FFD700;
`;

const UserSection = styled.div`
  text-align: center;
  padding-top:20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color:#FF4500;
`;

const Button = styled(Link)`
  background-color: #90ee90;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7cfc00;
  }
`;

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Button to="/admin-signin">Login as Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Button to="/student-signin">Login as Student</Button>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Button to="/teacher-signin">Login as Teacher</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
