import useCounter from '../hooks/useCounter';

const ContadorConHook = () => {

  const { valor, acumular } = useCounter(100); // Esto quiere decir que de useCounter, va a extraer valor y acumular

  return (
    <>
    <h3>Contador con Hook : <small>{valor}</small></h3>

    <button className='btn btn-primary' onClick={ () => acumular(1) }>+1</button> &nbsp;
    <button className='btn btn-primary' onClick={ () => acumular(-1)}>-1</button>
    </>
  )
}

export default ContadorConHook