import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';
import { CardPlant } from 'components/cards/Product';
import type { Product } from 'models/products';
import { useEffect, useState } from 'react';

type TPlanDataCategory = {
    name: string;
    items: Product[];
};

export default function PageProducts() {
    const [categories, setCategories] = useState<TPlanDataCategory[]>([]);

    useEffect(() => void loadPlants(), []);

    const loadPlants = async () => {
        const { data } = await axios.get<TPlanDataCategory[]>('/products.json');
        setCategories(data);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            {categories.map((category) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        marginBottom: 2,
                    }}
                    key={category.name}
                >
                    <Typography variant="h4" textAlign={'center'}>
                        {category.name}
                    </Typography>
                    <Divider variant="fullWidth" />
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fill, minmax(250px, 1fr))',
                            gap: 5,
                            width: '100%',
                            marginTop: 2,
                        }}
                    >
                        {category.items.map((item) => (
                            <CardPlant product={item} key={item.id} />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
