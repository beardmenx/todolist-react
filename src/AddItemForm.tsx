import { ControlPoint } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export type AddItemsFormPropsType = {
  addItem: (title: string) => void;
};

export function AddItemsForm(props: AddItemsFormPropsType) {
  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      props.addItem(title.trim());
      setTitle("");
    }
  };

  const addTask = () => {
    if (title.trim() !== "") {
      props.addItem(title.trim());
      setTitle("");
    } else {
      setError("Field is required");
    }
  };
  return (
    <div>
      <TextField
        variant={"outlined"}
        label={"Введите значение"}
        value={title}
        onChange={onNewTitleChangeHandler}
        onKeyDown={onKeyDownHandler}
        error={!!error}
        helperText={error}
      />

      <IconButton onClick={addTask} color={"primary"}>
        <ControlPoint />
      </IconButton>
    </div>
  );
}
