export interface ICustomer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street?: string,
    city?: string,
    zipCode?: number,
    country?: string,
  };
}
