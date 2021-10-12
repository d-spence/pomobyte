import styled from 'styled-components';

export const StyledPhaseButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: 40px;
  width: 420px;
  background-color: var(--light);
  border: 2px solid var(--light);
  border-radius: 4px;
`;

export const PhaseButton = styled.button`
  background-color: ${props => `var(--${props.bgColor})` || 'var(--light)'};
  color: var(--dark);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.1rem;
  width: 140px;
  border-radius: 4px;
  padding: 4px 0;
  opacity: 0.8;
  cursor: pointer;
`;