import React, { FormEvent, useEffect, useState } from 'react';
import { ImportanceStrings, TAsset, TImportance } from '../../constants/data';
import { useAssets } from '../../contexts/assets';
import { useEditingID } from '../../contexts/editingID';
import { useEditingState } from '../../contexts/editingState';
import { matchColors } from '../../utils/matchColor';
import Margin from '../FragmentWinds/Margin';
import InputDatalist from '../InputDatalist';

import { Form, Input, Label, SubmitButton } from './styles';

const AssetForm: React.FC = () => {
  const { editingID, setEditingID } = useEditingID();
  const { editingState, setEditingState } = useEditingState();
  const { assets, setAssets } = useAssets();
  const [assetName, setAssetName] = useState('');
  const [tagName, setTagName] = useState('');
  const [tagImportance, setTagImportance] = useState<TImportance>(
    ImportanceStrings[0] as TImportance
  );

  function handleSubmitButton(e: FormEvent) {
    e.preventDefault();

    if (editingID === null) {
      const assetsLength = Object.entries(assets).length;

      let newAsset: TAsset = {
        id: assetsLength,
        active: true,
        name: assetName,
        tags: [
          {
            name: tagName,
            importance: tagImportance,
            id: 0,
          },
        ],
      };
      newAsset = matchColors(newAsset);
      setAssets(prevState => [newAsset, ...prevState]);
    } else {
      const database = [...assets];
      const target = database.filter(asset => asset.id === editingID)[0];
      const target_idx = database.indexOf(target)


      target.name = assetName
      database[target_idx] = target
      
      setAssets(database)
      setAssetName('')
      setEditingState(!editingState)
      setEditingID(null)
    }
  }

  useEffect(() => {
    if (editingID === null) return;
    console.log('Chegou no formulario, editando id: ' + editingID);
    const database = [...assets];
    const target = database.filter(asset => asset.id === editingID);
    setAssetName(target[0].name);
  }, [editingState, editingID]);

  return (
    <Form>
      <Label>Nome do asset:</Label>
      <Input
        placeholder="Escreva um novo asset..."
        onChange={e => setAssetName(e.target.value)}
        value={assetName}
      />

      <Margin type="block" size={12} />

      <Label>Nome da tag:</Label>
      <Input
        placeholder="Escreva o nome da tag..."
        onChange={e => setTagName(e.target.value)}
      />
      <Label>Importância da tag:</Label>
      <InputDatalist
        options={ImportanceStrings}
        value={tagImportance}
        onChange={e =>
          setTagImportance((e.target as HTMLInputElement).value as TImportance)
        }
      />
      <SubmitButton onClick={handleSubmitButton}>{(editingID === null) ? 'Adicionar' : 'Atualizar'}</SubmitButton>
    </Form>
  );
};

export default AssetForm;
