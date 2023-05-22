import PropTypes from 'prop-types';

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