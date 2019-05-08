import { IAddress } from './address/address.model';

export interface ICustomer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: IAddress;
}
