import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { showErrors } from "../Auth/LoginError";

export const AddContact = (props) => {
  const navigate = useNavigate();
  const [User, setUser] = useState({ name: "", email: "" });

  const nameChangeHandler = (e) => {
    setUser({
      ...User,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    setUser({
      ...User,
      email: e.target.value,
    });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    if (User.name === "" || User.email === "") {
      showErrors("All fields are mandatory!!!");
      return;
    }
    props.addContactHandler(User);

    setUser({ name: "", email: "" });
    navigate("/home/contactList");
  };

  return (
    <div>
    <section class="h-100 gradient-form" >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

        <Paper variant="elevation" maxWidth="100%" className="contact__card">
          <Box>
            <Typography
              variant="h5"
              component="h1"
              className="contact__title"
              mb={4}
            >
              Contact Manager
            </Typography>
          </Box>
          <Box>
            <Box component="form" onSubmit={addContactHandler} sx={{ mt: 1 }}>
              <TextField
                sx={{ mb: 3 }}
                autoComplete="username"
                name="username"
                fullWidth
                id="username"
                label="Username"
                autoFocus
                size="small"
                value={User.name}
                onChange={nameChangeHandler}
              />

              <TextField
                sx={{ mb: 3 }}
                autoComplete="email"
                name="email"
                fullWidth
                id="email"
                label="Email Address"
                size="small"
                value={User.email}
                onChange={emailChangeHandler}
              />

              <Button variant="contained" className="addBtn" type="submit">
                 Add Contact
              </Button>
            </Box>
          </Box>
        </Paper>

      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
      <div class="text-white px-3 py-4 p-md-5 mx-md-4">
        <h4 class="mb-4">Contact Manager</h4>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</section>
    </div>
  );
};