import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

interface EditingIDProviderProps {
  editingID: number | null;
  setEditingID: Dispatch<SetStateAction<number | null>>;
}

const EditingIDContext = createContext<EditingIDProviderProps>({
  editingID: null,
  setEditingID: () => {},
});

export default function EditingIDProvider({children}: {children: React.ReactNode}) {
    const [editingID, setEditingID] = useState<number | null>(null)

    useEffect(() => console.log('editingID', editingID), [editingID])
    
    return (
        <EditingIDContext.Provider value={{editingID, setEditingID}}>
            {children}
        </EditingIDContext.Provider>
    )
}

export const useEditingID = () => useContext(EditingIDContext)
