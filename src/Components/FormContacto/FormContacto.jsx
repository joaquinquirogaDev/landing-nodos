//style
import axios from 'axios';
import style from './FormContacto.module.css'
//form
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


export const FormContacto = () => {
    const { register, handleSubmit, formState: { errors }, control,reset } = useForm();
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/consultas',data,{
                withCredentials:'true'
            })

            if(response.data.status){
                toast.success(response.data.mensaje)
                reset()
            }
        } catch (error) {
            console.log(error)
        }
        
        }
  return (
        <section className={style.formContactoBox}>
            <div className={style.formContainer}>
                <h1 className={style.formTitle}>Escribí tu consulta y te responderemos en breve.</h1>
                <form className={style.formInput} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.inputGroup}>
                        <input {...register('nombre', { required: true })} type="text" name='nombre' placeholder='Ingresa tu nombre '/>
                        {errors.nombre && <span className={style.errors}>Este campo es requerido</span>}
                    </div>
                    <div className={style.inputGroup}>
                        <input {...register('apellido', { required: true })} type="text" name='apellido' placeholder='Ingresa tu apellido '/>
                        {errors.apellido && <span className={style.errors}>Este campo es requerido</span>}
                    </div>
                    <div className={style.inputGroup}>
                    <input {...register('email', { required: true })} type="email" name='email' placeholder='Ingresa tu correo electrónico'/>
                    {errors.email && <span className={style.errors}>Este campo es requerido</span>}
                    </div>
                    <div className={style.inputGroup}>
                    <input {...register('asunto', { required: true })} type="text" name='asunto' placeholder='Ingresa el asunto '/>
                    {errors.asunto && <span className={style.errors}>Este campo es requerido</span>}
                    </div>
                    <div className={style.inputGroup}>
                    <input {...register('mensaje', { required: true })} type="text" name='mensaje' placeholder='Ingresa tu mensaje'/>
                    {errors.mensaje && <span className={style.errors}>Este campo es requerido</span>}
                    </div>
                    

                    <button>ENVIAR</button>
                </form>
            </div>

            <div className={style.InfoContacto}>
                <h1 className={style.infoTitle}>Secretaria</h1>
                <p>Secretaria Horarios de atención: 07:30hs a 18:00hs</p>
                <p>Teléfono de contacto: 4235013</p>
                <p>WhatsApp: 2645713956</p>
                <div>
                    <p>Correo electrónico:</p>
                    <p> Secretaria@colegiosanagustinsj.com.ar</p>
                </div>
                
            </div>
        </section>
  )
}
