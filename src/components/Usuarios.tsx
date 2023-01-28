import { useEffect, useState } from 'react'
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [Usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //Llamada a la API
        reqResApi.get<ReqResListado>('/users')  //<ReqResListado> Es una interface como etiqueta
        .then(resp => {
            console.log(resp.data.data);
        })
        .catch(console.log);
    }, [])

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
        </table>
    </div>
  )
}
