import './styles.css';

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className='TodoSearch'
      placeholder='cebolla'
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
