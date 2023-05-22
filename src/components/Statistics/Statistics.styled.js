import styled from '@emotion/styled';

export const SectionStats = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  background-color: #fff0f5;
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 15px;
`;
export const TitleStats = styled.h2`
  padding-top: 15px;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;
export const StatsList = styled.ul`
  padding: 20px 10px;
  width: 100%;
  list-style: none;
  display: flex;
  gap: 16px;
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
  padding-bottom: 6px;
  font-size: 14px;
  color: #4e4e4e;
`;
export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #292929;
`;
