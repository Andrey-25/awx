import React from 'react';
import { Box, TextField, Grid, Typography } from '@mui/material';

const AmountSection: React.FC = () => {
  return (
    <Box p={2} my={3} bgcolor="#f5f5f5">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>Отдаете (лот 1000)</Typography>
          <TextField fullWidth label="Ethereum, ETH" type="number" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Typography>Получаете (лот 1000)</Typography>
          <TextField fullWidth label="Рубль, RUR" type="number" variant="outlined" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmountSection;
