import { useState } from "react";
import CreateOrderFormWrapper from "./CreateOrderFormWrapper";
import CreateOrderMainContent from "./CreateOrderMainContent";
import CreateOrderDetails from "./CreateOrderDetails";
import { useAppSelector } from "../../store/hooks";
import { OrderItem } from "../../models/order-item";
import { IRequest } from "../../models/request";
import { IGeneralData } from "../../models/request";
import { JSX } from "react";

export default function CreateOrder(): JSX.Element {
  const [formKey, setFormKey] = useState(0);
  const order: OrderItem = useAppSelector((state) => state.order);
  const general: IGeneralData = useAppSelector((state) => state.general);

  const handleSubmit = () => {
    const request: IRequest = {
      id: crypto.randomUUID(),
      number: 0,
      creatorName: general.creatorName,
      department: general.department,
      isApproved: general.isApproved,
      status: "ORDERED",
      items: [order],
      totalPrice: order.totalPrice,
      createdAt: new Date().toString(),
      updatedAt: "",
    };
    localStorage.setItem(request.id, JSON.stringify(request));
    handlReset();
  };

  const handlReset = () => {
    setFormKey((prev) => prev + 1);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Create order</h1>
        <CreateOrderFormWrapper
          tabs={[
            {
              name: "Main Content",
              content: <CreateOrderMainContent key={formKey} />,
            },
            { name: "Details", content: <CreateOrderDetails key={formKey} /> },
          ]}
        />
      </div>
      <div className="mb-3 text-start">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handlReset}
              >
                Отменить
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Готово
              </button>
            </div>
          </div>
        </div>
      </div>
      {order.name !== "" && order.unit !== "" && order.price > 0 && (
        <div className="card">
          <div className="card-body">
            <p className="text-start">{order.name}</p>
            <p className="text-start">{order.link}</p>
            <div className="order-details order__details">
              <div className="order__item order__item_unit">{order.unit}</div>
              <div className="order__item order__item_quantity">
                {order.quantity}
              </div>
              <div className="order__item order__item_price">{order.price}</div>
              <div className="order__item order__item_cost">
                {order.totalPrice}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
