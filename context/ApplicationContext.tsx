import { createContext, useState } from "react";

export enum AccountType {
  "Savings",
  "Money Market",
  "Certificate of Deposit",
  "Checking",
}

export interface Customer {
  firstName: string;
  lastName: string;
  birthDate: string;
  socialSecurity: string;
  email: string;
  personalPhone: string;
  address: string;
  city: string;
  state: string;
}

export interface Application {
  accountType: AccountType;
  customer: Customer;
}

export interface ApplicationContextModel {
  state: Application;
  updateAccountType: (accountType: AccountType) => void;
  updateCustomer: (customer: Customer) => void;
}

export const ApplicationContext = createContext<ApplicationContextModel>({
  state: {} as Application,
  updateAccountType: () => {},
  updateCustomer: () => {},
});

const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const [application, setApplication] = useState<Application>(
    {} as Application,
  );

  const updateAccountType = (updatedAccountType: AccountType) => {
    const newApplicationObject: Application = {
      ...application,
      accountType: updatedAccountType,
    };
    setApplication(newApplicationObject);
  };

  const updateCustomer = (updatedCustomer: Customer) => {
    const newApplicationObject: Application = {
      ...application,
      ...{ customer: updatedCustomer },
    };
    setApplication(newApplicationObject);
  };

  const value = {
    state: application,
    updateAccountType: updateAccountType,
    updateCustomer: updateCustomer,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
