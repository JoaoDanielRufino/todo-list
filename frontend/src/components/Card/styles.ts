import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 6px;
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  border-bottom: 1px solid #ccc;

  svg {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  min-height: 100px;
  margin-top: 8px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  /* word-break: break-all; */
  word-wrap: break-word;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
`;
