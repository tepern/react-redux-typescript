import { useState } from "react";
import CreateOrderFormWrapper from "./CreateOrderFormWrapper";
import CreateOrderMainContent from "./CreateOrderMainContent";
import CreateOrderDetails from "./CreateOrderDetails";

export default function CreateOrder(): React.ReactNode {
    const [formKey, setFormKey] = useState(0); 

    const handlReset = () => {
        setFormKey(prev => prev + 1);
    }
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Create order</h1>
          <CreateOrderFormWrapper tabs={[
            { name: 'Main Content', content: <CreateOrderMainContent key={formKey} /> },
            { name: 'Details', content: <CreateOrderDetails key={formKey} /> }
          ]} />
        </div>
        <div className="mb-3 text-start">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col">
                        <button type="button" className="btn btn-secondary" onClick={handlReset}>Отменить</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary">Готово</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}