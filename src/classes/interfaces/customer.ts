export interface CustomerOrderProtocol {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol extends CustomerOrderProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}
export interface EnterpriseCustomerProtocol extends CustomerOrderProtocol {
  name: string;
  cnpj: string;
}
