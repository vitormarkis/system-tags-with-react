import React, { FormEvent, useEffect, useState } from "react";
import { ImportanceStrings, TAsset, TImportance, TTag } from "../../constants/data";
import { useAppContext } from "../../contexts/appContext";
import { useAssets } from "../../contexts/assets";
import { useEditingID } from "../../contexts/editingID";
import { getLastAssetID, getLastTagID } from "../../utils/getLastTagID";
import { addColorProperty, matchColors } from "../../utils/matchColor";
import { DeleteIcon } from "../AssetWrapper/styles";
import InputDatalist from "../InputDatalist";

import { ButtonsWrapper, Form, Input, Label, SubmitButton } from "./styles";

const AssetForm: React.FC = () => {
  const { appContext, setAppContext } = useAppContext();
  const { editingID, setEditingID } = useEditingID();
  const { assets, setAssets } = useAssets();
  const [buttonText, setButtonText] = useState("");
  const [assetName, setAssetName] = useState("");
  const [tagName, setTagName] = useState("");
  const [tagImportance, setTagImportance] = useState<TImportance>(
    ImportanceStrings[0] as TImportance
  );
  const [newIncomingAsset, setNewIncomingAsset] = useState<Omit<TAsset, "tags"> | TAsset>();

  function handleSubmitButton(e: FormEvent) {
    e.preventDefault();

    switch (appContext) {
      case "adding_asset": {
        const newAssetObject = {
          id: 1 + getLastAssetID(assets),
          name: assetName,
          active: true,
        } as Omit<TAsset, "tags">;

        // console.log(">> indo para o modal de adicionar tags");
        setNewIncomingAsset(newAssetObject);
        setAppContext("adding_tags");

        break;
      }
      case "adding_tags": {
        const database = [...assets];
        const target = database.filter((asset) => asset.id === editingID)[0];
        const target_idx = database.indexOf(target);
        const asset = database[target_idx];

        // console.log("typeof do editingID ", typeof editingID === "number");
        const lastTagID = typeof editingID === "number" ? 1 + getLastTagID(asset) : 0;
        const newTag = {
          id: lastTagID,
          importance: tagImportance,
          name: tagName,
        } satisfies TTag;

        const tagWithColor = addColorProperty(newTag);

        const newAsset = { ...newIncomingAsset, tags: [newTag] } as TAsset;
        // console.log(newAsset);
        const newAssetWithColorProperty = matchColors(newAsset);

        if (typeof editingID === "number") {
          // console.log("Adicionando a tag ", newTag, " no asset de ID ", editingID);
          database[target_idx].tags.push(tagWithColor);
          setAssets(database);
        } else {
          setAssets((prevState) => [newAssetWithColorProperty, ...prevState]);
        }

        resetInterface("all");
        break;
      }
      case "editing_asset": {
        const database = [...assets];
        const target = database.filter((asset) => asset.id === editingID)[0];
        const target_idx = database.indexOf(target);
        const asset = database[target_idx];
        const assetWithNewName = { ...asset, name: assetName };
        database[target_idx] = assetWithNewName;
        setAssets(database);

        resetInterface("all");
        break;
      }
    }
  }

  function resetInterface(reset: "data" | "all") {
    setAssetName("");
    setTagName("");
    if (reset === "all") {
      setEditingID(null);
      setAppContext(null);
    }
  }

  useEffect(() => {
    if (editingID === null) {
      resetInterface("data");
      setButtonText("Adicionar");
    } else {
      const database = [...assets];
      const target = database.filter((asset) => asset.id === editingID);
      setAssetName(target[0].name);
      setButtonText("Atualizar");
    }
  }, [appContext, editingID]);

  return (
    <Form>
      {(appContext === "adding_asset" || appContext === "editing_asset") && (
        <>
          <Label>Adicione o nome:</Label>
          <Input
            placeholder="Escreva um novo asset..."
            onChange={(e) => setAssetName(e.target.value)}
            value={assetName}
          />
        </>
      )}

      {appContext === "adding_tags" && (
        <>
          <Label>Nome da tag:</Label>
          <Input
            placeholder="Escreva o nome da tag..."
            onChange={(e) => setTagName(e.target.value)}
            value={tagName}
          />
          <Label>Importância da tag:</Label>
          <InputDatalist
            options={ImportanceStrings}
            value={tagImportance}
            onChange={(e) => setTagImportance((e.target as HTMLInputElement).value as TImportance)}
          />
        </>
      )}
      <ButtonsWrapper>
        <SubmitButton onClick={handleSubmitButton}>{buttonText}</SubmitButton>
        {appContext !== null && (
          <button title="Cancelar alterações" onClick={() => resetInterface("all")}>
            <DeleteIcon />
          </button>
        )}
      </ButtonsWrapper>
    </Form>
  );
};

export default AssetForm;
