import {
  Box,
  styled,
} from '@mui/material';

export const CardSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  border: '1px solid #E0E0E0',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
}));