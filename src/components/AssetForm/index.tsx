import React, { ButtonHTMLAttributes, useState } from 'react';

import { Form, Input, Label, SubmitButton } from './styles';

const AssetForm: React.FC = () => {
    const [assetName, setAssetName] = useState('')
    const [tagName, setTagName] = useState('')
    const [tagImportance, setTagImportance] = useState('')
    
    function handleSubmitNewAsset(e: SubmitEvent) {
        e.preventDefault()
        console.log({
            assetName,
            tagName,
            tagImportance,
        })
    }
    
  return (
    <Form>
      <Label>Nome do asset:</Label>
      <Input placeholder="Escreva um novo asset..." onChange={e => setAssetName(e.target.value)} />
      <Label>Nome da tag:</Label>
      <Input placeholder="Escreva o nome da tag..." onChange={e => setTagName(e.target.value)} />
      <Label>Importância da tag:</Label>
      <Input placeholder="Escreva a importância da tag..." onChange={e => setTagImportance(e.target.value)} />
      <SubmitButton onClick={handleSubmitNewAsset}>Adicionar</SubmitButton>
    </Form>
  );
};

export default AssetForm;
