export enum Feature {
  CUSTOMER,
  PIZZA
}

export interface IAuthorization {
  customerFeatureEnabled: boolean;
  pizzaFeatureEnabled: boolean;
}
