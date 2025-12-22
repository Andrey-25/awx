import {
  Box,
  Typography
} from '@mui/material';
import { AmountInput } from '../AmountInput/AmountInput';
import { useState } from 'react';

export const AmountsSection = () => {
  const [giveAmount, setGiveAmount] = useState(1300);
  const [receiveAmount, setReceiveAmount] = useState(1200);
  const [activeInput, setActiveInput] = useState<'give' | 'receive' | null>(null);
  
  return (
    <>
      <Typography variant="h6" mt={{ xs: 3, sm: 4 }} mb={2}>
        Объемы
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={2}>
        <AmountInput
          label="Отдаете (лот 1000)"
          value={giveAmount}
          onChange={setGiveAmount}
          currency="Ethereum"
          symbol="ETH"
          active={activeInput === 'give'}
          onFocus={() => setActiveInput('give')}
        />
        <AmountInput
          label="Получаете (лот 1000)"
          value={receiveAmount}
          onChange={setReceiveAmount}
          currency="Рубль"
          symbol="RUR"
          active={activeInput === 'receive'}
          onFocus={() => setActiveInput('receive')}
        />
      </Box>
    </>
)};
