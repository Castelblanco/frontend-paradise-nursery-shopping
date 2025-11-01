import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { APP_TITLE } from '../../constants/app';
import { useShoppingProducts } from 'storages/shopping_products';
import logo from 'assets/logo.png';

export const Header = () => {
    const { products } = useShoppingProducts();
    return (
        <Box>
            <AppBar position="fixed" color="success">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                            }}
                        />
                        <Typography>{APP_TITLE}</Typography>
                    </Box>
                    <Typography>Plans</Typography>
                    <IconButton>
                        <Badge badgeContent={products.length} color="primary">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
