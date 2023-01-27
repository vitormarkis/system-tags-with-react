import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface EditingStateProviderProps {
  editingState: boolean;
  setEditingState: Dispatch<SetStateAction<boolean>>;
}

export const EditingContext = createContext<EditingStateProviderProps>({
  editingState: false,
  setEditingState: () => {},
});

    export default function EditingStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [editingState, setEditingState] = useState(true);

  return (
    <EditingContext.Provider value={{ editingState, setEditingState }}>
      {children}
    </EditingContext.Provider>
  );
}

export const useEditingState = () => useContext(EditingContext);
