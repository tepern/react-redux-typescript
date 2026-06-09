import { IRequest } from "../../models/request";
import { JSX } from "react";
import OrderItem from "./OrderItem";

export default function OrdersList(): JSX.Element {
  const ordersList = (): IRequest[] => {
    const items: IRequest[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const item = getItem(key);
        if (item) {
          item.number = i+1;
          items.push(item);
        }
      }
    }
    return items;
  };

  function getItem(key: string): IRequest | null {
    const val = localStorage.getItem(key);
    const item = val ? JSON.parse(val) : null;
    return item;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title mb-3">Orders list</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Отдел</th>
              <th scope="col">ФИО</th>
              <th scope="col">Статус</th>
            </tr>
          </thead>
          <tbody>
            {ordersList().map((order: IRequest) => (
              <OrderItem
                order={order}
                key={order.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
