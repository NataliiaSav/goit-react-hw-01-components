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
  margin-bottom: 15px;
`;
export const TitleStats = styled.h2`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;
export const StatsList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 500;
`;
export const StatsItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.span`
  padding-bottom: 6px;
  font-size: 16px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
