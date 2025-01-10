'use client'
import styled from 'styled-components';
import AutofitGrid from '../../components/AutofitGrid';
import { media } from '../../utils/media';

export const Wrapper = styled.div`
    & > *:not(:first-child) {
        margin-top: 10rem;
    }
`;

export const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
