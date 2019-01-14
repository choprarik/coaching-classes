import {IFees} from './IFees';

export interface IStudent {
    studentId: number;
    studentName: string;
    studentClass: string;
    joinDate: string;
    contact: number;
    address: string;
    parentName: string;
    imageUrl: string;
    fees: IFees;
}