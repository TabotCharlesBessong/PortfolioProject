import React from "react";
import styled from "styled-components";
import { Sidebar } from "../../component";

const AdminDashboardContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AdminDashboard = () => {
  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content>
        <h1>Welcome to Admin Dashboard</h1>
        <p>This is the admin dashboard. You can add your content here.</p>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
