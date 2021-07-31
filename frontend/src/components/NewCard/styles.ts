import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 6px;
`;

export const CardHeader = styled.div`
  padding-bottom: 4px;
  border-bottom: 1px solid #ccc;
`;

export const CardContent = styled.div`
  display: flex;
  min-height: 100px;
  margin-top: 8px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  word-break: break-all;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;

  svg {
    cursor: pointer;
  }
`;
