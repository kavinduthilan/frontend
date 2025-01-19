import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export function MyUserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const data = { name, age, email };
    await axios.post("https://localhost:7028/api/Users", data).then((res) => {
      console.log(res.status, res.data.token);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          variant="outlined"
          placeholder="Name"
          type="text"
        />
      </div>
      <div>
        <TextField
          name="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          variant="outlined"
          placeholder="Age"
          type="number"
        />
      </div>
      <div>
        <TextField
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          variant="outlined"
          placeholder="Email"
          type="email"
        />
      </div>
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}
