import { Box, IconButton, Snackbar } from '@mui/material';
import { Header } from './components/header';
import { Outlet } from 'react-router';
import { useSnackbar } from 'storages/snackbar';
import CloseIcon from '@mui/icons-material/Close';

export const Layout = () => {
    const { message, setVoidMessage } = useSnackbar();

    const handleCloseSnackbar = () => setVoidMessage();

    return (
        <>
            <Header />
            <Box
                sx={{
                    marginTop: 10,
                }}
            >
                <Outlet />
            </Box>
            <Snackbar
                open={message !== ''}
                message={message}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                action={
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={handleCloseSnackbar}
                    >
                        <CloseIcon />
                    </IconButton>
                }
                sx={{
                    mt: 6,
                    '& .MuiSnackbarContent-root': {
                        bgcolor: 'success.main',
                        color: 'white',
                        boxShadow: 3,
                    },
                }}
            />
        </>
    );
};
