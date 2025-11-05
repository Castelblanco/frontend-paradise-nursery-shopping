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
import { useNavigate } from 'react-router';
import { ROUTES } from 'constants/routes';
import logo from 'assets/logo.png';

export const Header = () => {
    const { products } = useShoppingProducts();
    const navigate = useNavigate();

    const productsCount = products.reduce((pre, value) => {
        return pre + value.qty;
    }, 0);

    const handleClickLogo = () => navigate(ROUTES.HOME);
    const handleGoShopping = () => navigate(ROUTES.SHOPPING);

    return (
        <Box>
            <AppBar position="fixed" color="success">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: '15%',
                        }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }}
                            onClick={handleClickLogo}
                        />
                        <Typography>{APP_TITLE}</Typography>
                    </Box>
                    <Typography variant="h5">Plans</Typography>
                    <IconButton color="inherit" onClick={handleGoShopping}>
                        <Badge badgeContent={productsCount} color="primary">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
