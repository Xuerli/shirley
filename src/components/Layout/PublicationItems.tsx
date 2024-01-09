import {FC, memo} from 'react';

import {PublicationItems as PubType} from '../../data/dataDef';

const PublicationItems: FC<{item: PubType}> = memo(({item}) => {
  const {title, author, href, publisher} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-blue-800">
        <a href={href}>{title} </a>
        </h2>
          {author}
          <i>{publisher}</i>
        </div>
      </div>
  );
});

PublicationItems.displayName = 'PublicationItems';
export default PublicationItems;
