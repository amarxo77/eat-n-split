import { FC, ReactNode } from 'react';

type ButtonComponentProps = {
  type: 'button' | 'reset' | 'submit';
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonComponentProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
