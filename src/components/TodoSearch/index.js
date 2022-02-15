import { useState } from 'react';
import './styles.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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
