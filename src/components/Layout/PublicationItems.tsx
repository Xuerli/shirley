import {FC, memo} from 'react';

import {PublicationItems} from '../../data/dataDef';

const PublicationItems: FC<{item: PublicationItems}> = memo(({item}) => {
  const {title, author, publisher} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
          {author}
          <i>{publisher}</i>
        </div>
      </div>
  );
});

PublicationItems.displayName = 'PublicationItems';
export default PublicationItems;
