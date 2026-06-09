import { JSX } from "react";
import { IRequest } from "../../../models/request";
import { useParams } from "react-router";

export default function OrderDetails(): JSX.Element {
  const params = useParams();

  const orderId = params.id;

  const order = orderId ? getItem(orderId) : null;

  function getItem(key: string): IRequest | null {
    const val = localStorage.getItem(key);
    const item = val ? JSON.parse(val) : null;
    return item;
  }
  if (order) {
    return (
      <div className="card">
        <div className="card-body">
          <p>№ {order.number}</p>
          <p>Отдел {order.department.name}</p>
          <p>ФИО: {order.creatorName}</p>
          <p>Статус: {order.status}</p>
          <div className="card-text mt-5">
            {order.items.map((item) => (
              <div className="card pt-2 pb-2 mb-5" key={item.id}>
                <div className="container">
                  <h5>Наименование: {item.name}</h5>
                  <h5>Цена: {item.price}</h5>
                  <h5>Количество: {item.quantity}</h5>
                </div>
              </div>
            ))}
          </div>
          <h4>Total: {order.totalPrice}</h4>
        </div>
      </div>
    );
  } else return <div></div>;
}
