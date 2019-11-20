import styled from '@emotion/styled';
import { widths } from '../../styles/variables';

const LearningCardGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(${widths.lg}px / 3 - 24px), 1fr));
  grid-gap: 24px;
  margin-top: 36px;
`;

export default LearningCardGrid;
