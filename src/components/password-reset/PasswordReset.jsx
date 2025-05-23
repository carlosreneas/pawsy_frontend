import React from "react";
import Box from "@mui/material/Box";
import MuiCard from '@mui/material/Card';
import AppTheme from '../shared-theme/AppTheme';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function PasswordReset() {
  const [newError, setNewError] = React.useState(false);
  const [confirmError, setConfirmError] = React.useState(false);
  const [newErrorMessage, setNewErrorMessage] = React.useState("");
  const [confirmErrorMessage, setConfirmErrorMessage] = React.useState("");

  const handleSubmit = (event) => {
    if (newError || confirmError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      new_password: data.get("new_password"),
      confirm_password: data.get("confirm_password"),
    });
  };

  const validateInputs = () => {
    const newPassword = document.getElementById("new_password");
    const confirmPassword = document.getElementById("confirm_password");

    let isValid = true;

    if (!newPassword.value || newPassword.value.length < 6) {
      setNewError(true);
      setNewErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setNewError(false);
    }

    if (newPassword.value !== confirmPassword.value) {
      setConfirmError(true);
      setConfirmErrorMessage("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmError(false);
    }

    return isValid;
  };

  return (
    <AppTheme>
      <Card variant="outlined">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="new_password">Enter new password</FormLabel>
            <TextField
              error={newError}
              helperText={newErrorMessage}
              id="new_password"
              type="password"
              name="new_password"
              placeholder="New password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={newError ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
            <TextField
              error={confirmError}
              helperText={confirmErrorMessage}
              id="confirm_password"
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={confirmError ? "error" : "primary"}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Set new password
          </Button>
        </Box>
      </Card>
    </AppTheme>
  );
}
