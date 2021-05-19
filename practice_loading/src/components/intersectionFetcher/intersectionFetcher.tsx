import React, { ReactNode, ReactNodeArray, useEffect } from 'react';
import styled from 'styled-components';
import { EDirections } from 'src/data/direction';

interface IIntersectionFetcherProps {
  triggerLocation: EDirections;
  triggerApartAmount: number | string;
  onIntersectioned: () => void;
  children?: ReactNode | ReactNodeArray;
}

export const IntersectionFectcher = (props: IIntersectionFetcherProps) => {
  return (
    <Wrapper className="intersection-fetcher__wrapper">
      <Container className="intersection-fetcher__container">
        {props.children}
      </Container>
      <Trigger className="intersection-fetcher__trigger"></Trigger>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  z-index: 0;
`;

const Container = styled.section``;

const Trigger = styled.div`
  position: absolute;
  top: ${(props: any) => (props.top ? props.top : 'auto')};
  left: ${(props: any) => (props.left ? props.left : 'auto')};
  bottom: ${(props: any) => (props.bottom ? props.bottom : 'auto')};
  right: ${(props: any) => (props.right ? props.right : 'auto')};

  width: ${(props: any) => (props.isHorizontal ? '100%' : 0)};
  height: ${(props: any) => (props.isHorizontal ? 0 : '100%')};
`;
