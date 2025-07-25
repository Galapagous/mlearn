import { type ReactNode, createContext, useState } from "react";

// Define the types for user information and context
interface IUserInfo {
  fullname?: string;
}

export interface IAppContext {
  userInfo: IUserInfo;
  loginStatus: boolean;
  setUserInfo: (info: IUserInfo) => void;
  setLoginStatus: (status: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

interface IAppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: IAppProviderProps): JSX.Element {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    fullname: "",
  });
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  // Fixed: setLoginStatus was missing from the component
  // const setLoginStatus = (status: boolean) => {
  //   setIsLoggedIn(status);
  // };

  return (
    <AppContext.Provider
      value={{
        userInfo,
        loginStatus,
        setUserInfo,
        setLoginStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
