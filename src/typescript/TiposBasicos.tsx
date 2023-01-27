import React from 'react'

export const TiposBasicos = () => {
    const nombre: string = 'fernando';
    const edad: number = 33;
    const estaActivo: boolean = false;

    const poderes: (string|number)[] = []; //'Velocidad','volar','Respirar bajo el Agua'
  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, { (estaActivo) ? 'activo' : 'no activo'}
        <br />
        {poderes.join('. ') }
    </>
  )
}
