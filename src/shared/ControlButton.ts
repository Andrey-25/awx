import {
  IconButton,
  styled,
} from '@mui/material';

export const ControlButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#F5F5F5',
  width: 32,
  height: 32,
  '&:hover': {
    backgroundColor: '#E0E0E0',
  },
}));
