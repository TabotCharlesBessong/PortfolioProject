import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";
import bg from "../../assets/bg.png";
import bg1 from "../../assets/bg1.png";
import { useNavigate } from "react-router-dom";

const lorem = new LoremIpsum();

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #6BD4E7;
  color: black;
  text-align: center;
  font-family: Arial, sans-serif;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin-right: 20px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

const LoginButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const GuestButton = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid orange;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: orange;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #6bd4e7, #6fc3df);
  text-align: center;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 80px;
`;

const SchoolInfo = styled.div`
  margin-top: 20px;
`;

const SchoolImage = styled.img`
  width: 80%;
  max-height: 80vh;
  object-fit: cover;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  color: white;
  text-align: justify;
  padding: 0 20px;
`;

const Home = () => {
  const loremText = lorem.generateParagraphs(1);
  const navigate = useNavigate()
  const handleLoginClick = () => navigate("/choose")

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick} >Login</LoginButton>
          <GuestButton onClick={handleLoginClick} >Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <SchoolImage src={bg} alt="School" />
          <Title>School Management System</Title>
        </SchoolInfo>
        <LoremTextContainer>
          <p>{loremText}</p>
        </LoremTextContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
