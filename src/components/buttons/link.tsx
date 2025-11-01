import { type ButtonProps } from '@mui/material';
import { Link, type LinkProps } from 'react-router';
import { ButtonDefault } from './default';

export const ButtonLink = (props: ButtonProps & LinkProps) => {
    return <ButtonDefault component={Link} {...props} />;
};
