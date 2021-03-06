import React from 'react';

import { Container } from './styles';

const CardHeader: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardHeader;
