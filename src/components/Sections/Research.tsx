import {FC, memo} from 'react';

import {otherActivities, projects, SectionId,} from '../../data/data';
import ActivityItem from '../Layout/ActivityItem';
import Section from '../Layout/Section';
import SSSection from '../Layout/SSSection';
import TimelineItem from '../Layout/TimelineItem';


const Research: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Research}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <SSSection title="Projects">
          {projects.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
        <SSSection title="Other Activities">
          {otherActivities.map((item, index) => (
            <ActivityItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
      </div>
    </Section>
  );
});

Research.displayName = 'Research';
export default Research;
