import React from 'react';

import { ButtonUI } from './styles';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonUI {...props} />;
};

export default Button;
