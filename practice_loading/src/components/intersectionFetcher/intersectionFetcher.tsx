import React, { ReactNode, ReactNodeArray, useEffect } from 'react';
import styled from 'styled-components';
import { EDirections, isHorizontal } from '../../data/direction';
import { useIntersectionFetcher } from './useIntersectionFetcher';
import { getPixelIfNumber } from '../../common';

interface IIntersectionFetcherProps {
  triggerLocation?: EDirections;
  triggerApartAmount?: number | string;
  disableTrigger?: boolean;
  onIntersectioned?: () => void;
  children?: ReactNode | ReactNodeArray;
}

export const IntersectionFectcher = (props: IIntersectionFetcherProps) => {
  const {
    onIntersectioned,
    triggerLocation = EDirections.BOTTOM,
    triggerApartAmount = '10%',
    disableTrigger,
  } = props;

  const triggerPoint = {
    [`${triggerLocation}`]: getPixelIfNumber(triggerApartAmount),
    isHorizontal: isHorizontal(triggerLocation),
  };
  const { triggerRef } = useIntersectionFetcher(onIntersectioned);

  return (
    <Wrapper>
      <Container>{props.children}</Container>
      {!disableTrigger && <Trigger ref={triggerRef} {...triggerPoint} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Trigger = styled.div`
  position: absolute;
  top: ${(props: any) => (props.top ? props.top : 'auto')};
  left: ${(props: any) => (props.left ? props.left : 'auto')};
  bottom: ${(props: any) => (props.bottom ? props.bottom : 'auto')};
  right: ${(props: any) => (props.right ? props.right : 'auto')};

  height: ${(props: any) => (props.isHorizontal ? '100%' : 0)};
  width: ${(props: any) => (props.isHorizontal ? 0 : '100%')};
`;
