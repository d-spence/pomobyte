import styled from 'styled-components';

export const StyledPhaseButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  height: 30px;
  width: 400px;
`;

export const PhaseButton = styled.button`
  background-color: ${props => props.bgColor || 'var(--light)'};
  color: var(--dark);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1rem;
  width: 120px;
  border: none;
  border-radius: 5px;
  border-style: none;
  padding: 4px 12px;
  opacity: 0.8;
  cursor: pointer;
`;