import styled from '@emotion/styled';
import { darken } from 'polished';
import { Link } from 'gatsby';
import { colors } from '../../styles/variables';

const LearningCTAButton = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 16px;
  height: 40px;
  color: ${colors.white};
  background-color: ${colors.blue};
  border: none;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;

  .icon {
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${colors.white};
    background-color: ${darken(0.2, colors.blue)};
  }
`;

export default LearningCTAButton;
