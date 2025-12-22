import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import { InfoField } from '../InfoField/InfoField';
import { useState } from 'react';
import { CheckboxBox } from '../../shared/CheckboxBox';
import { CardSection } from '../../shared/CardSection';

export const RequisitesSection = () => {
  const [saveRequisites, setSaveRequisites] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={{ xs: 2, sm: 3 }}
        gap={1}
      >
        <Typography variant="h6">Реквизиты</Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography 
            variant="body2" 
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              whiteSpace: 'nowrap',
            }}
          >
            Сохранить реквизиты
          </Typography>
          <CheckboxBox checked={saveRequisites} onClick={() => setSaveRequisites(prev => !prev)}>
            {saveRequisites && (
              <Typography fontSize="16px" fontWeight="bold">✓</Typography>
            )}
          </CheckboxBox>
        </Box>
      </Box>

      <CardSection>
        <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <Box display="flex" gap={{ xs: 2, sm: 3 }} flexWrap="wrap" mb={2}>
            <FormControlLabel value="card" control={<Radio />} label="Номер карты" />
            <FormControlLabel value="contract" control={<Radio />} label="Номер договора" />
          </Box>
        </RadioGroup>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 1,
            borderTop: '1px solid #F0F0F0',
            minHeight: '40px',
          }}
        >
          <Typography variant="body1">Номер карты</Typography>
          <Typography fontSize="18px" color="text.secondary">✎</Typography>
        </Box>
      </CardSection>

      <Box display="flex" flexDirection="column" gap={1.5}>
        <InfoField label="ФИО владельца" />
        <InfoField label="Адрес" />
      </Box>
    </>
)};
