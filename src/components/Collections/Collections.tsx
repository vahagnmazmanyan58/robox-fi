import React, { useEffect, useState } from 'react';

//assets
import { TableSwitchGridIcon, TableSwitchListIcon } from '~/assets';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { selectCollections } from '~/redux/slices/collections/selectors';
import { getCollections } from '~/redux/slices/collections/thunks';

//components
import { Switch } from '../shared';
import { Spinner } from '../shared/Spinner';
//styles
import * as S from './Collections.styled';
import { CollectionsTable } from './CollectionTable';

const Collections: React.FC = () => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector(selectCollections);
  const [toggleCollectionsViewList, setToggleCollectionsViewList] = useState(true);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <S.CollectionsContainer loading={!!collections.length}>
      {collections.length ? (
        <S.CollectionsWrapper>
          <S.CollectionsHeaderPanel>
            <S.CollectionsHeaderPanelTitle>Trending Collections</S.CollectionsHeaderPanelTitle>
            <div>
              <Switch
                firstContent={<TableSwitchListIcon />}
                secondContent={<TableSwitchGridIcon />}
                activeFirstElement={toggleCollectionsViewList}
                handleSwitchToggle={setToggleCollectionsViewList}
              />
            </div>
          </S.CollectionsHeaderPanel>
          {toggleCollectionsViewList ? (
            <CollectionsTable collectionData={collections} />
          ) : (
            <div>Grid</div>
          )}
        </S.CollectionsWrapper>
      ) : (
        <Spinner />
      )}
    </S.CollectionsContainer>
  );
};

export default Collections;
