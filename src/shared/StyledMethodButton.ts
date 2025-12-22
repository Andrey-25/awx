import {
  Button,
  styled,
} from '@mui/material';

export const StyledMethodButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  flex: 1,
  minWidth: 0,
  whiteSpace: 'nowrap',
  color: active ? '#FFF' : '#000',
  backgroundColor: active ? '#000' : 'transparent',
  borderColor: '#E0E0E0',
  '&:hover': {
    backgroundColor: active ? '#333' : '#F5F5F5',
    borderColor: '#E0E0E0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 12px',
    fontSize: '14px',
    minHeight: '40px',
  },
}));