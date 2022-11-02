import Card from '../card/card.component';
import { Item } from '../../types';

import { ListContainer, ListContents, ListTitle } from './list.styles';

interface ListProps {
  title: string,
  items: Item[]
}

function List({ title, items }: ListProps) {
  if (!items) return null;

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListContents>
        {
          items.map((item) => <Card key={item._id} item={item} />)
        }
      </ListContents>
    </ListContainer>
  );
}

export default List;
