import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import SSSection from '../Layout/SSSection';
import TimelineItem from '../Layout/TimelineItem';

const Research: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Research}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <SSSection title="Projects">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
        <SSSection title="Supervision">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
        <SSSection title="Other Activities">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
        <SSSection title="Publications">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
      </div>
    </Section>
  );
});

Research.displayName = 'Research';
export default Research;
