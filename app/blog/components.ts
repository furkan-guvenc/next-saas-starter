'use client'
import styled from 'styled-components';
import AutofitGrid from '../../components/AutofitGrid';
import { media } from '../../utils/media';

export const CustomAutofitGrid = styled(AutofitGrid)`
    --autofit-grid-item-size: 40rem;

    ${media('<=tablet')} {
        --autofit-grid-item-size: 30rem;
    }

    ${media('<=phone')} {
        --autofit-grid-item-size: 100%;
    }

    .article-card-wrapper {
        max-width: 100%;
    }
`;
