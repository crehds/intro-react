import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App(props) {
  return (
    <h1>
      !{props.saludo}, {props.nombre}
    </h1>
  );
}

function withSaludo(WrapperComponent) {
  return function WrapperComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrapperComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrapperComponent</p>
        </>
      );
    };
  };
}

const AppWithSaludo = withSaludo(App)('buenitas');

ReactDOM.render(
  <AppWithSaludo saludo={'Buenas'} nombre={'Carlos'} />,
  document.getElementById('root')
);
