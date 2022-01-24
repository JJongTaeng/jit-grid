import React from 'react';
import styled from 'styled-components';

interface RowProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Row = ({ children, style }: RowProps) => {
  return (
    <RowContainer style={style}>
      { children }
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
`;

export default Row;