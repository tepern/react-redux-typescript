import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function CreateOrderDetails(): JSX.Element {
  const [formData, setFormData] = useState({ name: "", link: "", unit: "", amount: 1, price: 0 });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
      const { name, value } = e.target;
      
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
     
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log(formData);
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
            <input name="name" type="text" className="form-control" id="name" required onChange={handleChange} value={formData.name} />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="link" className="form-label">
              Ссылка
            </label>
            <input name="link" type="text" className="form-control" id="link" required onChange={handleChange} value={formData.link}/>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="unit" className="form-label">
              Единицы измерения
            </label>
            <input name="unit" type="text" className="form-control" id="unit" required onChange={handleChange} value={formData.unit}/>
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
              required
              onChange={handleChange}
              value={formData.price}
            />
          </div>
          <div className="mb-3 text-end">
            <button type="submit" className="btn btn-primary mb-1">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
