import {
  Box,
  Typography,
} from '@mui/material';
import { AmountInputBox } from '../../shared/AmountInputBox';
import { ControlButton } from '../../shared/ControlButton';
import { AmountTextInput } from '../../shared/AmountTextInput';


interface AmountInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  currency: string;
  symbol: string;
  active?: boolean;
  onFocus?: () => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({ 
  label, 
  value, 
  onChange, 
  currency, 
  symbol, 
  active, 
  onFocus 
}) => (
  <Box>
    <Typography variant="body2" color="text.secondary" mb={1}>
      {label}
    </Typography>
    <AmountInputBox active={active} onClick={onFocus}>
      <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
        {currency}, {symbol}
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <ControlButton size="small" onClick={() => onChange(Math.max(0, value - 100))}>
          <Typography fontSize="20px" lineHeight={1}>−</Typography>
        </ControlButton>
        <AmountTextInput
          type="text"
          value={value.toFixed(6)}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val)) onChange(val);
          }}
          onFocus={onFocus}
        />
        <ControlButton size="small" onClick={() => onChange(value + 100)}>
          <Typography fontSize="20px" lineHeight={1}>+</Typography>
        </ControlButton>
      </Box>
    </AmountInputBox>
  </Box>
);