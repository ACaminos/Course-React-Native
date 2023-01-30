import { useEffect, useState, useRef } from "react";
import { Usuario, ReqResListado } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {

    const [Usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaref = useRef(1);

    useEffect(() => {
        //Llamada a la API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users',{           //<ReqResListado> Es una interface como etiqueta
            params:{
                page: paginaref.current
            }
        }) 
        if (resp.data.data.length > 0){
            setUsuarios(resp.data.data);
        }
        else{
            paginaref.current --;
            alert('No hay mas registros');
        }
    }


    const paginaSiguiente = () => {
        paginaref.current ++;
        cargarUsuarios();
        

    }

    const paginaAnterior = () => {
        if(paginaref.current > 1){
            paginaref.current --;
            cargarUsuarios();
        }
    }

    return{
        Usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
