import React, { useContext } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import YummyAdminItems from "./YummyItems"
import YummyOrders from "./YummyOrders"
import RegNoContext from '../../Components/RegNoContext';
import AdminReviews from './AdminReviews';

function AdminHome() {
    const { stallName } = useContext(RegNoContext); // Get stallName from context

    return (
        <div className="container">
            <h2>Admin Page for {stallName}</h2> {/* Display stall name */}
            <Tabs defaultActiveKey="items" id="admin-tabs" className="mb-3">
                <Tab eventKey="items" title="Items">
                    <YummyAdminItems stallName = {stallName}/>
                </Tab>
                <Tab eventKey="orders" title="Orders">
                    <div>
                        <YummyOrders stallName = {stallName}/>
                    </div>
                </Tab>
                <Tab eventKey="Reviews" title="Reviews">
                    <AdminReviews stallName = {stallName}/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AdminHome;
