import React from 'react';
import styled from 'styled-components';

interface RowProps {
  children: any;
  style?: React.CSSProperties;
}

const Row = ({children, style}: RowProps) => {
    return (
      <RowContainer  style={style}>
        {children}
      </RowContainer>
    )
};

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export default Row;