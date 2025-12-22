import {
  Box,
  Typography
} from '@mui/material';
import { WithdrawMethodButton } from '../WithdrawMethodButton/WithdrawMethodButton';
import { useState } from 'react';



export const WithdrawMethodSection = () => {
  const [withdrawMethod, setWithdrawMethod] = useState('banks');

  return (
    <>
      <Typography variant="h6" mb={{ xs: 2, sm: 3 }}>
        Способ вывода
      </Typography>
      <Box display="flex" gap={1} mb={{ xs: 2, sm: 3 }}>
        <WithdrawMethodButton
          active={withdrawMethod === 'banks'}
          onClick={() => setWithdrawMethod('banks')}
        >
          Банки
        </WithdrawMethodButton>
        <WithdrawMethodButton
          active={withdrawMethod === 'cash'}
          onClick={() => setWithdrawMethod('cash')}
        >
          Наличные
        </WithdrawMethodButton>
        <WithdrawMethodButton
          active={withdrawMethod === 'courier'}
          onClick={() => setWithdrawMethod('courier')}
        >
          Курьер
        </WithdrawMethodButton>
      </Box>
    </>
)};