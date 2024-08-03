// AdminDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../../styles/dashboard.styles";
import { Sidebar } from "../../../component";
import Announcement from "./Anountcement";
import Performance from "./Performance";
import EventCalendar from "./EventCalender";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/event/getall"
      );
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/announcement/getall"
      );
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/performance/getall"
      );
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error("Error fetching student performance:", error);
    }
  };

  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content isOpen={isOpen}>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>50</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
            <EventCalendar events={events} />
          </Section>
        </TopContent>

        <BottomContent>
          <Performance studentPerformance={studentPerformance} />
          <Announcement announcements={announcements} />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
