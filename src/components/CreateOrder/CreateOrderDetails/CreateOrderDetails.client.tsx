import { useState } from "react";
import { JSX } from "react/jsx-runtime";
import { useAppDispatch } from "../../../store/hooks";
import { details } from "../../../store/feature/order/orderSlice";
import { OrderItem } from "../../../models/order-item";

export default function CreateOrderDetails(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    unit: "",
    amount: 1,
    price: 0,
  });

  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    const orderDetails: OrderItem = {
      id: "",
      name: formData.name,
      link: formData.link,
      unit: formData.unit,
      quantity: formData.amount,
      price: formData.price,
      totalPrice: 0,
    };
    dispatch(details(orderDetails));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Order details</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">
              Наименование
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="link" className="form-label">
              Ссылка
            </label>
            <input
              name="link"
              type="text"
              className="form-control"
              id="link"
              required
              onChange={handleChange}
              value={formData.link}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="unit" className="form-label">
              Единицы измерения
            </label>
            <input
              name="unit"
              type="text"
              className="form-control"
              id="unit"
              required
              onChange={handleChange}
              value={formData.unit}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="amount" className="form-label">
              Количество
            </label>
            <input
              name="amount"
              type="number"
              className="form-control"
              id="amount"
              step="1"
              min="1"
              required
              onChange={handleChange}
              value={formData.amount}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="price" className="form-label">
              Цена
            </label>
            <input
              name="price"
              type="number"
              className="form-control"
              id="price"
              step="0.01"
              min="0.01"
              required
              onChange={handleChange}
              value={formData.price}
            />
          </div>
          <div className="mb-3 text-end">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
