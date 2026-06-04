import { Department } from "./department";
import { OrderItem } from "./order-item";
import { RequestStatus } from "./request-status";

export interface Request {
    id: string;
    number: number;
    creatorName: string;
    department: Department;
    isApproved: boolean;
    status: RequestStatus;
    items: OrderItem[];
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
}