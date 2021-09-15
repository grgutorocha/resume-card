import React from 'react';

interface ISpacerVertical {
  space?: number | string;
}

const SpacerVertical: React.FC<ISpacerVertical> = ({ space = 8 }) => {
  return <div style={{ marginBottom: `${space}px` }} />;
};

export default SpacerVertical;
