import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item,  deleteProduct, modificar }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Ver detalle
        </Button>
        <Button size="small" variant="contained" onClick={()=>deleteProduct(item.id)}>
          Eliminar
        </Button>
        <Button size="small" variant="contained" onClick={()=>modificar(item.id)}>
          MODIFICAR
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
