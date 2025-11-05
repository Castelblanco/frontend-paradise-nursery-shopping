import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from '@mui/material';
import { ButtonDefault } from 'components/buttons/default';
import type { Product } from 'models/products';
import { useShoppingProducts } from 'storages/shopping_products';

export type TCardPlantProps = {
    product: Product;
};

export const CardPlant = ({ product }: TCardPlantProps) => {
    const { setAddProduct, products } = useShoppingProducts();
    const handleAddToCard = () =>
        setAddProduct({
            ...product,
            qty: 1,
        });

    const productFind = !!products.find(({ id }) => id === product.id);

    return (
        <Card>
            <CardHeader
                sx={{
                    whiteSpace: 'nowrap',
                }}
                title={product.name}
            />
            <CardMedia component={'img'} image={product.image} height={'200'} />
            <CardContent>
                <Typography color="success">Price: ${product.price}</Typography>
                <Typography>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ButtonDefault
                    onClick={handleAddToCard}
                    color="success"
                    disabled={productFind}
                >
                    {productFind ? 'Added to Card' : 'Add to Card'}
                </ButtonDefault>
            </CardActions>
        </Card>
    );
};
