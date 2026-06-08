import { Department } from "./department";
import { OrderItem } from "./order-item";
import { RequestStatus } from "./request-status";

export interface IGeneralData {
    creatorName: string;
    department: Department;
    isApproved: boolean;
}

export interface IRequest extends IGeneralData{
    id: string;
    number: number;
    status: RequestStatus;
    items: OrderItem[];
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
}