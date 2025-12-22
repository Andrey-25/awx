import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
} from '@mui/material';

import { AmountSlider } from "../AmountSlider/AmountSlider";
import { RequisitesSection } from "../RequisitesSection/RequisitesSection";
import { AmountsSection } from '../AmountsSection/AmountsSection';
import { BankSelector } from '../BankSelector/BankSelector';
import { WithdrawMethodSection } from '../WithdrawMethodSection/WithdrawMethodSection';
import theme from '../../theme';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          pb: 4,
        }}
      >
        <Container 
          maxWidth="sm" 
          sx={{ 
            pt: { xs: 2, sm: 3 }, 
            px: 2,
            maxWidth: '600px !important',
          }}
        >
          <WithdrawMethodSection />

          <BankSelector />

          <AmountsSection />

          <AmountSlider />

          <RequisitesSection />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;