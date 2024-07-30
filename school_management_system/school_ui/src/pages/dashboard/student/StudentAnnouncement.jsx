import React from "react";
import styled from "styled-components";
import { StudentSidebar } from "../../../component";

const AnnouncementContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AnnouncementHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AnnouncementItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const AnnouncementTitle = styled.h3`
  margin-bottom: 10px;
`;

const AnnouncementContent = styled.p`
  color: #555;
`;

const StudentAnnouncement = () => {
  // Sample announcement data
  const announcements = [
    {
      id: 1,
      title: "Important Notice",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Upcoming Exam Schedule",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Holiday Announcement",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <StudentSidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcements</AnnouncementHeader>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement.id}>
              <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
              <AnnouncementContent>{announcement.content}</AnnouncementContent>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default StudentAnnouncement;
