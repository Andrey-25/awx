import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { BankIconBox } from '../../shared/BankIconBox';

export const BankSelector = () => {
  return (
    <Accordion defaultExpanded sx={{ mb: { xs: 2, sm: 3 } }}>
      <AccordionSummary expandIcon={<Typography fontSize="24px">⌄</Typography>}>
        <Box display="flex" alignItems="center" gap={1.5} width="100%">
          <BankIconBox>P</BankIconBox>
          <Box flex={1} minWidth={0}>
            <Typography variant="body1" fontWeight={500} noWrap>
              Альфа-банк cash-in
            </Typography>
            <Typography variant="caption">1 USDT = 61.55 RUR</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" color="text.secondary">
          Детали банка...
        </Typography>
      </AccordionDetails>
    </Accordion>
)};