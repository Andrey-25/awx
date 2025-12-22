import { StyledMethodButton } from '../../shared/StyledMethodButton';

interface WithdrawMethodButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const WithdrawMethodButton: React.FC<WithdrawMethodButtonProps> = ({ active, children, onClick }) => (
  <StyledMethodButton variant={active ? 'contained' : 'outlined'} active={active} onClick={onClick}>
    {children}
  </StyledMethodButton>
);