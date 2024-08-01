import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #FF69B4, #FFA07A, #90EE90);
  height: 100vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #ff4500;
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff6347;
  }
`;

const StudentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle admin sign-in logic here
    console.log("Admin Sign In:", { email, password });
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/student/dashboard">
          <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
        </Link>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
