import React, { FormEvent, useState } from 'react';
import { ImportanceStrings, TAsset, TImportance } from '../../constants/data';
import { useAssets } from '../../contexts/assets';
import { matchColors } from '../../utils/matchColor';
import Margin from '../FragmentWinds/Margin';
import InputDatalist from '../InputDatalist';

import { Form, Input, Label, SubmitButton } from './styles';

const AssetForm: React.FC = () => {
  const { assets, setAssets } = useAssets();
  const [assetName, setAssetName] = useState('');
  const [tagName, setTagName] = useState('');
  const [tagImportance, setTagImportance] = useState<TImportance>(
    ImportanceStrings[0] as TImportance
  );

  function handleSubmitNewAsset(e: FormEvent) {
    e.preventDefault();

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
  }

  return (
    <Form>
      <Label>Nome do asset:</Label>
      <Input
        placeholder="Escreva um novo asset..."
        onChange={e => setAssetName(e.target.value)}
      />

      <Margin type="block" size={20} />

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
      <SubmitButton onClick={handleSubmitNewAsset}>Adicionar</SubmitButton>
    </Form>
  );
};

export default AssetForm;
