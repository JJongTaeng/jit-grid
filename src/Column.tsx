import React from 'react';
import styled from 'styled-components';

interface ColumnWidthType {
  xxl: number;
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

interface ColumnProps extends ColumnWidthType{
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Column = (props: ColumnProps) => {
  return (
    <ColumnContainer
      xxl={props.xxl}
      xl={props.xl}
      lg={props.lg}
      md={props.md}
      sm={props.sm}
      xs={props.xs}
      style={props.style}
    >
      {props.children}
    </ColumnContainer>
  );
};

const ColumnContainer = styled.div<ColumnWidthType>`
  @media(max-width: 576px) {
    & {
        flex-basis: ${({xs}) => xs * 4.166666}%;
    }
  }
  @media(min-width: 576px) and (max-width: 768px) {
    & {
        flex-basis: ${({sm}) => sm * 4.166666}%;
    }
  }
  @media(min-width: 768px) and (max-width: 992px) {
    & {
        flex-basis: ${({md}) => md * 4.166666}%;
    }
  }
  @media(min-width: 992px) and (max-width: 1200px) {
    & {
        flex-basis: ${({lg}) => lg * 4.166666}%;
    }
  }
  @media(min-width: 1200px) and (max-width: 1600px) {
    & {
        flex-basis: ${({xl}) => xl * 4.166666}%;
    }
  }
  @media(min-width: 1600px) {
    & {
        flex-basis: ${({xxl}) => xxl * 4.166666}%;
    }
  }
`;

export default Column;