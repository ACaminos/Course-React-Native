import { useState } from "react";

const useCounter = ( inicial:number = 10) => {
    const [valor, setvalor] = useState(inicial)

    const acumular = (numero:number) => {
        setvalor(valor + numero)
    }

    return{
        valor,
        acumular
    }

}

export default useCounter