import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const UserAvatar = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-size: 24px;
  color: #292929;
`;
export const UserTag = styled.p`
  font-size: 14px;
  color: #4e4e4e;
`;
export const Location = styled.p`
  font-size: 14px;
  color: #4e4e4e;
`;
export const UserStats = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.span`
  font-size: 16px;
  color: #4e4e4e;
`;
export const Quantity = styled.span`
  font-size: 20px;
  color: #292929;
`;
