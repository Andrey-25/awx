import {
  styled,
} from '@mui/material';

export const AmountTextInput = styled('input')(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '18px',
  fontWeight: 600,
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily,
  backgroundColor: 'transparent',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));