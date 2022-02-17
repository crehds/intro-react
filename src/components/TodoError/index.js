import './styles.css';

function TodoError({ error }) {
  return (
    <div className='error__wrapper'>
      <h1>404</h1>
      <div className='cloak__wrapper'>
        <div className='cloak_container'>
          <div className='cloak'></div>
        </div>
      </div>
      <div className='info'>
        <h2>No pudimos encontrar la página</h2>
        <p>Nos disculpamos por ello</p>
        <a
          href='http://localhost:3000/'
          target='_blank'
          rel='noreferrer noopoener'
        >
          Home
        </a>
      </div>
    </div>
  );
}

export { TodoError };
