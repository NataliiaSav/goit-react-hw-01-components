import React from 'react';
import PropTypes from 'prop-types';
import { SectionStats, TitleStats, StatsList, StatsItem, Label,Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return(<SectionStats>
  <TitleStats>{title}</TitleStats>

      <StatsList>
        {stats.map((item) =>
          <StatsItem key={item.id}> 
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}</Percentage>
          </StatsItem>
        )}
  </StatsList>
</SectionStats>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired

}