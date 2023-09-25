import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} showZero color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
