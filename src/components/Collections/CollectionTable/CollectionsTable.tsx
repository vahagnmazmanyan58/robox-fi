import React from 'react';

import { Button } from '~/components/shared';
import { ICollection } from '~/types';

//styles
import * as S from './CollectionsTable.styled';

interface CollectionsTableProps {
  collectionData: ICollection[];
}

const CollectionsTable: React.FC<CollectionsTableProps> = ({ collectionData }) => {
  return (
    <S.CollectionsTableWrapper>
      <S.CollectionTableHead>
        <S.CollectionTableTr>
          <S.CollectionTableTh>Collection</S.CollectionTableTh>
          <S.CollectionTableTh>Floor price</S.CollectionTableTh>
          <S.CollectionTableTh>Buy Now Price</S.CollectionTableTh>
          <S.CollectionTableTh>24h Vol %</S.CollectionTableTh>
          <S.CollectionTableTh>24h Sales</S.CollectionTableTh>
          <S.CollectionTableTh>{'Interest (14 days)'}</S.CollectionTableTh>
        </S.CollectionTableTr>
      </S.CollectionTableHead>
      <S.CollectionTable>
        {collectionData?.map((collection) => (
          <S.CollectionTableTr key={collection.collection_id}>
            <S.CollectionTableTd>
              <img src={collection.project.img_url} alt="image" />
              <p>{collection.project.display_name}</p>
            </S.CollectionTableTd>
            <S.CollectionTableTd>
              {collection.floor_price}
              <span>SOL</span>
            </S.CollectionTableTd>
            <S.CollectionTableTd>
              1200
              <span>SOL</span>
            </S.CollectionTableTd>
            <S.CollectionTableTd>
              <S.CollectionVolPercentage>+100%</S.CollectionVolPercentage>
            </S.CollectionTableTd>
            <S.CollectionTableTd>10%</S.CollectionTableTd>
            <S.CollectionTableTd>
              <Button className="green">Instant buy</Button>
            </S.CollectionTableTd>
          </S.CollectionTableTr>
        ))}
      </S.CollectionTable>
    </S.CollectionsTableWrapper>
  );
};

export default CollectionsTable;
