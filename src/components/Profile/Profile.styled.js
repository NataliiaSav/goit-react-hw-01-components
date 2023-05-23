import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  background-color: #f8f8ff;
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 15px;
`;
export const Description = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const UserAvatar = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #292929;
`;
export const UserTag = styled.p`
  font-size: 14px;
  color: #4e4e4e;
`;
export const Location = styled.p`
  font-size: 14px;
  color: #4e4e4e;
  padding-bottom: 10px;
`;
export const UserStats = styled.ul`
  padding: 16px 0;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
`;
export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;
export const Label = styled.span`
  padding-bottom: 6px;
  font-size: 14px;
  color: #4e4e4e;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #292929;
`;
