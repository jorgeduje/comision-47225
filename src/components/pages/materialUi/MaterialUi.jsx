import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
const MaterialUi = () => {

  const [mostrarPassword, setMostrarPassword] = useState(false)

  const cambiarEstado = ()=>{
    setMostrarPassword( !mostrarPassword )
  }

  return (
    <div>
      <Typography color={"secondary"} variant="h1">
        Estoy aprendiendo MUI
      </Typography>
      <Typography color={"primary"} variant="h1">
        Estoy aprendiendo MUI
      </Typography>

      <TextField label="Email" variant="outlined" />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={mostrarPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={cambiarEstado}
                edge="end"
              >
                {mostrarPassword ? <VisibilityOff  color="primary" /> : <Visibility color="primary" />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button variant="contained">Ingresar</Button>
    </div>
  );
};

export default MaterialUi;
