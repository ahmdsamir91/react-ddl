/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function App() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option
    };
  });

  const [value, setValue] = useState(top100Films[1]);
  const onChange = (event, newValue) => {
    setValue(newValue);
    alert(JSON.stringify(newValue));
  };
  return (
    <Autocomplete
      id="grouped-demo"
      disableClearable={true}
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.title}
      // defaultValue={top100Films[0]}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="With categories" variant="outlined" />
      )}
      value={value}
      onChange={onChange}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { id: 1, title: "View 1", category: "" },
  { id: 2, title: "View 2", category: "" },
  { id: 3, title: "View 3", category: "cat 1" },
  { id: 4, title: "View 4", category: "cat 1" },
  { id: 5, title: "View 5", category: "cat 2" }
];
