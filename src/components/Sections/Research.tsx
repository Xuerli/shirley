import {FC, memo} from 'react';

import {otherActivities, projects, publications, SectionId, supervision, } from '../../data/data';
import Section from '../Layout/Section';
import SSSection from '../Layout/SSSection';
import PublicationItems from '../Layout/PublicationItems';
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
        <SSSection title="Supervision">
          {supervision.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
        <SSSection title="Other Activities">
          {otherActivities.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
        <SSSection title="Publications">
          {publications.map((item, index) => (
            <PublicationItems item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
      </div>
    </Section>
  );
});

Research.displayName = 'Research';
export default Research;
