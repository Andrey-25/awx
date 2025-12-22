import {
  Box,
  styled,
} from '@mui/material';

export const BankIconBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#5C7CFA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFF',
  fontWeight: 600,
  fontSize: '18px',
  flexShrink: 0,
}));
