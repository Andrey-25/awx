import {
  Box,
  styled,
} from '@mui/material';

export const CheckboxBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'checked',
})<{ checked?: boolean }>(({ theme, checked }) => ({
  width: 24,
  height: 24,
  borderRadius: '4px',
  backgroundColor: checked ? '#FFEB3B' : '#E0E0E0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0,
  '&:hover': {
    backgroundColor: checked ? '#FFE033' : '#D0D0D0',
  },
}));