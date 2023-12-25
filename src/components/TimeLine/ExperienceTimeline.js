import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import styles from './ExperienceTimeline.module.css';
import { Text } from 'components/Text';

export const ExperienceTimeline = ({ timeLine }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
        padding: "2rem 0rem"
      }}
    >
      {timeLine.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Text className={styles.year}>
              {item.from} - {item.to === '' ? new Date().getFullYear() : item.to}
            </Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index != timeLine.length - 1 && <TimelineConnector className={styles.timelineConnector} />}
          </TimelineSeparator>
          <TimelineContent>
            <Text className={styles.heading}>{item.title}</Text>
            <br />
            <Text className={styles.description}>{item.description}</Text>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
