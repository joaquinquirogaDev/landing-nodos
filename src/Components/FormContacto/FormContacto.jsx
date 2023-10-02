//style
import style from './FormContacto.module.css'
//form
import { useForm } from 'react-hook-form';


export const FormContacto = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = async(data) => {
        try {
            const response = await fetch('URL',{
                method:'POST',
                body:data
            })
        } catch (error) {
            
        }
        
        }
  return (
        <section className={style.formContactoBox}>
            <div className={style.formContainer}>
                <h1 className={style.formTitle}>Escribí tu consulta y te responderemos en breve.</h1>
                <form className={style.formInput} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.inputGroup}>
                        <input {...register('name', { required: true })} type="text" name='name' placeholder='Ingresa tu nombre '/>
                        {errors.name && <span className={style.errors}>Este campo es requerido</span>}
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
                <p>Teléfono de contacto 4235013</p>
                <p>WhatsApp: 2645713956</p>
                <div>
                    <p>Correo electrónico:</p>
                    <p> secretaia@colegiosanagustinsj.com.ar</p>
                </div>
                
            </div>
        </section>
  )
}
