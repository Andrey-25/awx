import { Typography } from '@mui/material';
import { InfoFieldBox } from '../../shared/InfoFieldBox';


interface InfoFieldProps {
  label: string;
}

export const InfoField: React.FC<InfoFieldProps> = ({ label }) => (
  <InfoFieldBox>
    <Typography variant="body1">{label}</Typography>
    <Typography fontSize="18px" color="text.secondary">✎</Typography>
  </InfoFieldBox>
);
