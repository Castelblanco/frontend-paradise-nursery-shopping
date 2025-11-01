import { Box, Typography } from '@mui/material';
import bgImage from 'assets/bg-home.jpeg';
import { ButtonLink } from 'components/buttons/link';
import { APP_NAME } from 'constants/app';
import { ROUTES } from 'constants/routes';

export default function PageHome() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                position: 'relative',
                color: '#fff',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    background: `url(${bgImage})`,
                    backgroundOrigin: 'content-box',
                    position: 'absolute',
                    zIndex: 10,
                    ':before': {
                        display: 'block',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#2229',
                    },
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    zIndex: 100,
                }}
            >
                <Box>
                    <Typography variant="h4" marginBottom={2}>
                        Welcome To {APP_NAME}
                    </Typography>

                    <Typography variant="subtitle1" marginBottom={2}>
                        Where Green Meets Serenity
                    </Typography>

                    <ButtonLink color="success" to={ROUTES.PRODUCTS}>
                        Get Started
                    </ButtonLink>
                </Box>
                <Box
                    sx={{
                        maxWidth: '50%',
                    }}
                >
                    <Typography fontWeight={'bold'} mb={2}>
                        Welcome to Paradise Nursery!
                    </Typography>
                    <Typography mb={2}>
                        Discover your little piece of paradise with us. At
                        Paradise Nursery, we believe that every plant brings
                        life, beauty, and tranquility to your space. From lush
                        indoor greenery to vibrant outdoor blooms, our carefully
                        curated collection is designed to inspire and nurture
                        your love for nature.
                    </Typography>
                    <Typography mb={2}>
                        Whether you’re a seasoned plant enthusiast or just
                        starting your green journey, we’re here to help you
                        grow. Explore our wide variety of plants, pots, and care
                        essentials — and let’s make your home or garden thrive
                        together.
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        🌱 Grow happiness. Grow with Paradise Nursery.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
