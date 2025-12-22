import {
  Box,
  styled,
} from '@mui/material';

export const AmountInputBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  border: '2px solid',
  borderColor: active ? '#2196F3' : '#E0E0E0',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: '#FFF',
  transition: 'border-color 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    borderColor: active ? '#2196F3' : '#BDBDBD',
  },
}));