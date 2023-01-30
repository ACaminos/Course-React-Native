import { useForm } from "../hooks/useForm"

export const Formularios = () => {

    const {formulario, email, password, onChange} = useForm({
        email: 'test@test.com',
        password: '123456'
    })

  return (
    <>
        <h3>Formularios</h3>
        <input 
            type="text" 
            className='form-control' 
            placeholder='Email'
            name=""
            value={formulario.email}
            onChange={ ({target}) => onChange(target.value,'email')}
            id="" />

        <input 
            type="text" 
            className='form-control my-2' 
            placeholder='Password'
            name="" 
            value={formulario.password}
            onChange={ ({target}) => onChange(target.value,'password')}
            id="" />

            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
    </>
  )
}
