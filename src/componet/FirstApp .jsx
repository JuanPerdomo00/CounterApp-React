import PropTypes from 'prop-types';

export function FirstApp({ number, title , edad}) {
  return (
    <>
      {/* <h1>{title}</h1> */}
      <h1>Hola</h1>
      <h1>{title}</h1>
      <h1>{edad}</h1>
      <h1>{number}</h1>
    </>
  );
}

// compañero sabe que debde de tener x props mi componente firtsApp y que dato seria
FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    number : PropTypes.number.isRequired
}


FirstApp.defaultProps = {
    edad: 25,
    number: 1234566,
    title: 'Tienda de ropa'
}




