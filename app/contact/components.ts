'use client'
import styled from 'styled-components';
import { media } from '../../utils/media';

export const ContactContainer = styled.div`
    display: flex;

    ${media('<=tablet')} {
        flex-direction: column;
    }
`;
