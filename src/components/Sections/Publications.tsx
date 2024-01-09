import {FC, memo} from 'react';

import  {publications, SectionId,} from '../../data/data';
import Section from '../Layout/Section';
import SSSection from '../Layout/SSSection';
import PublicationItems from '../Layout/PublicationItems';

const Publications: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Publications}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
       <SSSection title="Publications">
          {publications.map((item, index) => (
            <PublicationItems item={item} key={`${item.title}-${index}`} />
          ))}
        </SSSection>
      </div>
    </Section>
  );
});

Publications.displayName = 'Publications';
export default Publications;
