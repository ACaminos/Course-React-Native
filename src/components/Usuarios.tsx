import { useEffect, useRef, useState } from 'react'
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const {Usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    const renderItem = ( usuario:Usuario) => {
        return(
            <tr key={usuario.id.toString()}>
                <td>
                    <img 
                        src={usuario.avatar} 
                        alt={usuario.first_name} style={{width:50, borderRadius:100}} />
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }


  return (
    <div>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    Usuarios.map( usuario => renderItem(usuario) )
                }
            </tbody>
        </table>

        <button 
            className='btn btn-primary mr-2' 
            onClick={paginaAnterior}>Anteriores
        </button>
        <button 
            className='btn btn-primary mx-2' 
            onClick={paginaSiguiente}>Siguientes
        </button>
    </div>
  )
}
