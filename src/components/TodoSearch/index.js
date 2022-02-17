import { useContext } from 'react';
import { Context } from '../../context';
import './styles.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(Context);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className='TodoSearch'
      placeholder='cebolla'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
