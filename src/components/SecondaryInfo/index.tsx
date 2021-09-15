import React from 'react';

import { Container, Label, Description } from './styles';

type SecondaryInfoProps = {
  label: string;
  description: string;
};

const SecondaryInfo: React.FC<SecondaryInfoProps> = ({ label, description }) => (
  <Container>
    <Label>{label}</Label>
    <Description>{description}</Description>
  </Container>
);

export default SecondaryInfo;
