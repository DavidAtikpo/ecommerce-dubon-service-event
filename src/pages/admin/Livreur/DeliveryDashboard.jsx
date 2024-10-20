// DeliveryDashboard.js
import React, { useState } from 'react';
import Navbar from '../NavBar';
import Sidebar from '../SideBar';
import OrderList from './OrderList';
import { Container, Row, Col } from 'react-bootstrap';
// import './Dashboard.css';

const DeliveryDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="livreu-dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Container className={`livreur-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Row className="mt-4">
          <Col>
            <h2>Commandes à livrer</h2>
            <OrderList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeliveryDashboard;
