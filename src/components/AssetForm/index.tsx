import React, { FormEvent, useState } from 'react';
import { TAsset, TImportance } from '../../constants/data';
import Margin from '../FragmentWinds/Margin';

import { Form, Input, Label, SubmitButton } from './styles';

const AssetForm: React.FC = () => {
  const [assetName, setAssetName] = useState('');
  const [tagName, setTagName] = useState('');
  const [tagImportance, setTagImportance] = useState<TImportance>('');

  function handleSubmitNewAsset(e: FormEvent) {
    e.preventDefault();
    const newAsset: TAsset = {
      active: true,
      name: assetName,
      tags: [
        {
          name: tagName,
          importance: tagImportance,
        },
      ],
    };
    console.log(newAsset);
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
      <Input
        placeholder="Escreva a importância da tag..."
        onChange={e => setTagImportance(e.target.value as TImportance)}
      />
      <SubmitButton onClick={handleSubmitNewAsset}>Adicionar</SubmitButton>
    </Form>
  );
};

export default AssetForm;
