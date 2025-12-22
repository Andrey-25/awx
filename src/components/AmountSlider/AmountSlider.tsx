import {
  Box,
  Typography,
  Slider,
} from '@mui/material';
import { useState } from 'react';

export const AmountSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  
  return (
    <Box sx={{ px: { xs: 0.5, sm: 1 }, mb: { xs: 3, sm: 4 } }}>
      <Slider
        value={sliderValue}
        onChange={(_, newValue) => setSliderValue(newValue as number)}
        marks={[
          { value: 0 },
          { value: 25 },
          { value: 50 },
          { value: 75 },
          { value: 100 },
        ]}
        step={null}
      />
      <Box display="flex" justifyContent="space-between" mt={0.5}>
        <Typography variant="caption">min</Typography>
        <Typography variant="caption">50%</Typography>
        <Typography variant="caption">75%</Typography>
        <Typography variant="caption">max</Typography>
      </Box>
    </Box>
)};