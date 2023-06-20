import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { addUserData } = useUserContext();

  const onSubmit = (data) => {
    addUserData(data);
    navigate("/");
  };

  return (
    <section class="h-100 gradient-form" >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  {...register("username", { required: true })}
                  error={errors.username && errors.username.type === "required"}
                  helperText={
                    errors.username &&
                    errors.username.type === "required" && (
                      <Typography
                        className="errorMsg"
                        sx={{ fontSize: "14px" }}
                      >
                        Username is required.
                      </Typography>
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                  error={errors.email && errors.email.type === "required"}
                  helperText={
                    errors.email &&
                    errors.email.type === "required" && (
                      <Typography
                        className="errorMsg"
                        sx={{ fontSize: "14px" }}
                      >
                        Email is required.
                      </Typography>
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", { required: true })}
                  error={errors.password && errors.password.type === "required"}
                  helperText={
                    errors.password &&
                    errors.password.type === "required" && (
                      <Typography
                        className="errorMsg"
                        sx={{ fontSize: "14px" }}
                      >
                        Password is required.
                      </Typography>
                    )
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

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
  );
}