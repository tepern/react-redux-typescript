import { useState } from "react";
import { JSX } from "react/jsx-runtime";
import { useAppDispatch } from "../../../store/hooks";
import { IGeneralData } from "../../../models/request";
import { departments } from "../../../models/department";
import { general } from "../../../store/feature/order/creatorSlice";

export default function CreateOrderMainContent(): JSX.Element {
  const [formData, setFormData] = useState({
    fio: "",
    department: "",
    agreed: false,
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
    const department = departments.filter(
      (department) => department.id === formData.department,
    )[0];
    const orderGeneralData: IGeneralData = {
      creatorName: formData.fio,
      department: department,
      isApproved: formData.agreed,
    };
    dispatch(general(orderGeneralData));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-start">Create order</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="fio" className="form-label">
              ФИО создающего
            </label>
            <input
              type="text"
              name="fio"
              className="form-control"
              id="fio"
              value={formData.fio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <select
              name="department"
              className="form-select"
              onChange={handleChange}
              value={formData.department}
              required
            >
              <option selected>Отдел</option>
              <option value="1" selected>
                One
              </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3 form-check text-start">
            <input
              name="agreed"
              type="checkbox"
              className="form-check-input"
              id="agreed"
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="agreed">
              Заявка согласована
            </label>
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
