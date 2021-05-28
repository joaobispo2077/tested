import { EnterpriseCustomer, IndividualCustomer } from './Customer';

const createIndivudualCustomer = (
  firstname: string,
  lastname: string,
  cpf: string,
) => {
  return new IndividualCustomer(firstname, lastname, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('Enterprise Customer', () => {
  it('should have name and cnpj fields', () => {
    const name = 'Joao';
    const cnpj = '123456789';

    const sutEnterpriseCustomer = createEnterpriseCustomer(name, cnpj);

    expect(sutEnterpriseCustomer).toHaveProperty('name', name);
    expect(sutEnterpriseCustomer).toHaveProperty('cnpj', cnpj);
  });

  it('should have methods get name and idn', () => {
    const name = 'Joao';
    const cnpj = '123456789';

    const sutEnterpriseCustomer = createEnterpriseCustomer(name, cnpj);

    expect(sutEnterpriseCustomer.getName()).toBe(name);
    expect(sutEnterpriseCustomer.getIDN()).toBe(cnpj);
  });
});

describe('Individual Customer', () => {
  it('should have firstName, lastName and cpf fields', () => {
    const firstname = 'Joao';
    const lastname = 'Bispo';
    const cpf = '123456789';

    const sutIndividualCustomer = createIndivudualCustomer(
      firstname,
      lastname,
      cpf,
    );

    expect(sutIndividualCustomer).toHaveProperty('firstName', firstname);
    expect(sutIndividualCustomer).toHaveProperty('lastName', lastname);
    expect(sutIndividualCustomer).toHaveProperty('cpf', cpf);
  });

  it('should have methods get name and idn', () => {
    const firstname = 'Joao';
    const lastname = 'Bispo';
    const cpf = '123456789';

    const sutIndividualCustomer = createIndivudualCustomer(
      firstname,
      lastname,
      cpf,
    );

    expect(sutIndividualCustomer.getName()).toBe(`${firstname} ${lastname}`);
    expect(sutIndividualCustomer.getIDN()).toBe(cpf);
  });
});
