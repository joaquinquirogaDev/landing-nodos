//style 
import style from './FormCV.module.css'
import { Controller, useForm } from 'react-hook-form';
export const FormCV = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = (data) => {
            console.log(data)
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
            <div className={style.inputGroup}>
            <Controller
                name="archivo"
                control={control}
                render={({ field }) => <input type="file" {...field} />}
                />
            {errors.mensaje && <span className={style.errors}>Este campo es requerido</span>}
            </div>

            <button>CARGAR CV</button>
        </form>
    </div>

    <div className={style.InfoContacto}>
        <h1 className={style.infoTitle}>Elementos claves</h1>
        <div className={style.infoContactoItem}>
            <h2>Formando el Futuro</h2>
            <p>Si estás listo para inspirar, guiar y empoderar a la próxima generación de líderes, te animamos a explorar la posibilidad de unirte a nosotros como educador en el Colegio San Agustín.</p>
        </div>
        <div className={style.infoContactoItem}>
            <h2>Pasión por la Educación</h2>
            <p>Estamos buscando individuos apasionados por la educación que estén dispuestos a marcar la diferencia en la vida de los estudiantes. Si compartes nuestra visión y deseas ser parte de un equipo comprometido con la excelencia educativa, te invitamos a considerar una carrera con nosotros.</p>
        </div>
        <div className={style.infoContactoItem}>
            <h2>innovación en la Enseñanza</h2>
            <p>Fomentamos la innovación en el aula y la implementación de metodologías educativas modernas que se adapten a las necesidades cambiantes de los estudiantes.</p>
        </div>
    </div>
</section>
  )
}
