import './styles.css';

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {!props.searchedTodos.length && props.totalTodos
        ? props.onEmptySearchResults(props.searchValue)
        : null}
      <ul>
        {!props.loading &&
          !props.error &&
          props.searchedTodos.map(props.render || props.children)}
      </ul>
    </section>
  );
}

export { TodoList };
