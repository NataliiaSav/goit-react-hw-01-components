import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 600px;
  height: auto;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0px 0px 19px -6px rgba(46, 143, 217, 0.37);

  & th,
  & td {
    padding: 10px;
    text-align: center;
  }

  & th {
    background-color: #00ced1;
    font-weight: 700;
  }

  & td {
    background-color: #e0ffff;
  }
`;
