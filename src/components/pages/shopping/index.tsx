import { Box, Typography } from '@mui/material';
import { ButtonDefault } from 'components/buttons/default';
import { ButtonLink } from 'components/buttons/link';
import { ShoppingProduct } from 'components/cards/ShoppingProduct';
import { ROUTES } from 'constants/routes';
import { decimalsLimit } from 'helpers/numbers';
import { useShoppingProducts } from 'storages/shopping_products';
import { useSnackbar } from 'storages/snackbar';

export default function PageShopping() {
    const { products } = useShoppingProducts();
    const { setMessage } = useSnackbar();

    const totalAmount = decimalsLimit(
        products.reduce((pre, value) => {
            return pre + value.price * value.qty;
        }, 0)
    );

    const handleCheckout = () => setMessage('Soon');

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                width: '100%',
                marginBottom: 5,
            }}
        >
            <Box>
                <Typography>Total Card Amount: ${totalAmount}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {products.length === 0 ? (
                    <Typography>There aren't products in the cart.</Typography>
                ) : (
                    products.map((product) => (
                        <ShoppingProduct product={product} key={product.id} />
                    ))
                )}
            </Box>
            <ButtonLink color="success" to={ROUTES.PRODUCTS}>
                Continue Shopping
            </ButtonLink>
            <ButtonDefault color="success" onClick={handleCheckout}>
                Checkout
            </ButtonDefault>
        </Box>
    );
}
