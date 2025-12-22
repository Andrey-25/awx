import {
  Box,
  styled,
} from '@mui/material';

export const InfoFieldBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  border: '1px solid #E0E0E0',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  minHeight: '56px',
  '&:hover': {
    borderColor: '#BDBDBD',
    backgroundColor: '#FAFAFA',
  },
}));
