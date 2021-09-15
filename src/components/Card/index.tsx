import React from 'react';

import { Container } from './styles';

export { default as CardHeader } from './CardHeader';
export { default as CardBody } from './CardBody';
export { default as CardFooter } from './CardFooter';
export { default as CardTitle } from './CardTitle';

const Card: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
