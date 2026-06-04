import React from "react";
import CreateOrderFormWrapper from "./CreateOrderFormWrapper";
import CreateOrderMainContent from "./CreateOrderMainContent";
import CreateOrderDetails from "./CreateOrderDetails";

export default function CreateOrder(): React.ReactNode {
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Create order</h1>
          <CreateOrderFormWrapper tabs={[
            { name: 'Main Content', content: <CreateOrderMainContent /> },
            { name: 'Details', content: <CreateOrderDetails /> }
          ]} />
        </div>
      </div>
    );
}