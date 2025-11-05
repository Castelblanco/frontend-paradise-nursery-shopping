import {
    Box,
    ButtonGroup,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from '@mui/material';
import { ButtonDefault } from 'components/buttons/default';
import { decimalsLimit } from 'helpers/numbers';
import type { Product } from 'models/products';
import { useShoppingProducts } from 'storages/shopping_products';

export type TShoppingProductProps = {
    product: Product;
};

export const ShoppingProduct = ({ product }: TShoppingProductProps) => {
    const { setRemoveProduct, setQtyProduct } = useShoppingProducts();

    const handleDelete = () => setRemoveProduct(product.id);
    const handleAddQty = () => setQtyProduct(product.id, product.qty + 1);
    const handleRemoveQty = () => {
        if (product.qty === 1) return;
        setQtyProduct(product.id, product.qty - 1);
    };

    return (
        <Card>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <CardMedia
                    component={'img'}
                    image={product.image}
                    sx={{
                        width: '200px',
                    }}
                />
                <Box>
                    <CardHeader title={product.name} />
                    <CardContent
                        sx={{
                            width: '100%',
                            paddingY: 0,
                        }}
                    >
                        <Typography color="success">
                            Price: ${product.price}
                        </Typography>
                        <ButtonGroup
                            sx={{
                                marginY: 1,
                            }}
                        >
                            <ButtonDefault onClick={handleRemoveQty}>
                                -
                            </ButtonDefault>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingX: 2,
                                }}
                            >
                                {product.qty}
                            </Typography>
                            <ButtonDefault onClick={handleAddQty}>
                                +
                            </ButtonDefault>
                        </ButtonGroup>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'start',
                                flexDirection: 'column',
                                gap: 2,
                                width: '100%',
                            }}
                        >
                            <Typography color="success">
                                Total: $
                                {decimalsLimit(product.price * product.qty)}
                            </Typography>
                            <ButtonDefault color="error" onClick={handleDelete}>
                                Delete
                            </ButtonDefault>
                        </Box>
                    </CardContent>
                </Box>
            </Box>
        </Card>
    );
};
