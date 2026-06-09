import { JSX } from "react";
import { IRequest } from "../../../models/request";
import { useNavigate } from "react-router";

interface Order {
  order: IRequest;
}

export default function OrderItem({ order }: Order): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order/" + order.id);
  };
  return (
    <tr onClick={handleClick}>
      <th scope="row">{order.number}</th>
      <td>{order.department.name}</td>
      <td>{order.creatorName}</td>
      <td>{order.status}</td>
    </tr>
  );
}
