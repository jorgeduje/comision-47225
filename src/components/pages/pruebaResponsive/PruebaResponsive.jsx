import { Box, Button, Grid, TextField } from "@mui/material"

const PruebaResponsive = () => {
  return (
    <Box sx={{padding: {xs: "20px", md: "100px"}, backgroundColor: {xs: "red", md: "blue"} }}>

        <Grid container sx={{ display: "flex", justifyContent:"center"}} spacing={2}>

            <Grid item xs={12} md={6}  >
                <TextField label="email" fullWidth />
            </Grid>
            <Grid item xs={12} md={6} >
                <TextField label="password" fullWidth />
            </Grid>
            <Grid item md={12} >
                <Button variant={"contained"} sx={{display: {xs:"none", md:"flex"}}}>Ingrear</Button>
            </Grid>

        </Grid>
        
    </Box>
  )
}

export default PruebaResponsive