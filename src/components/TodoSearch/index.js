import './styles.css';

function TodoSearch({ searchValue, setSearchValue }) {
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
