import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type appStates = "adding_asset" | "editing_asset" | "adding_tags" | null;

export interface ApplicationContextProviderProps {
  appContext: appStates;
  setAppContext: Dispatch<SetStateAction<appStates>>;
}

export const ApplicationContextContext = createContext<ApplicationContextProviderProps>({
  appContext: null,
  setAppContext: () => {},
});

export default function ApplicationContextProvider({ children }: { children: ReactNode }) {
  const [appContext, setAppContext] = useState<appStates>(null);

  useEffect(() => console.log("appContext", appContext), [appContext]);
  return (
    <ApplicationContextContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </ApplicationContextContext.Provider>
  );
}

export const useAppContext = () => useContext(ApplicationContextContext);
