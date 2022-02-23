import './styles.css';

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchValue)}

      <ul>{props.searchedTodos.map(props.render || props.children)}</ul>
    </section>
  );
}

export { TodoList };
