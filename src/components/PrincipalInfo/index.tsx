import React from 'react';

import { Container, Label, Description } from './styles';

type PrincipalInfoProps = {
  label: string;
  description: string;
};

const PrincipalInfo: React.FC<PrincipalInfoProps> = ({ label, description }) => (
  <Container>
    <Label>{label}</Label>
    <Description>{description}</Description>
  </Container>
);

export default PrincipalInfo;
