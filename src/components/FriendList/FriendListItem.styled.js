import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  border: 1px solid #223c505e;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #e6e6fa;
  box-shadow: 2px 4px 19px -1px rgba(34, 60, 80, 0.37);
`;
export const Status = styled.span`
  width: 14px;
  height: 14px;
  margin-left: 16px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
