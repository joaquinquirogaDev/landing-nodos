//style 
import style from './FormCV2.module.css'
//axios
import axios from 'axios';
import { useState } from 'react';
//useForm
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Loader } from '../Loader/Loader';

export const FormCV2 = () => {
    const [archivo,setArchivo ] = useState(null)
    const [loading,setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, control,reset } = useForm();
    const onSubmit = async(data) => {
            const formData = new FormData();
            formData.append('nombre', data.nombre);
            formData.append('apellido', data.apellido);
            formData.append('email', data.email);
            formData.append('archivo', archivo);

            handleSubmitCV(formData)
            
        }
        const handleSubmitCV = async(data) =>{
            try {
                setLoading(true)
                const response = await axios.post('http://127.0.0.1:8000/api/cargar_cv',data)

                if(response.data.status){
                    console.log(response)
                    toast.success(response.data.mensaje)
                    reset()
                    setArchivo(null)

                }
            } catch (error) {
                console.log(error)
                toast.error('ERROR')

            }finally{
                setLoading(false)
            }
        }
  return (
    <section className={style.formContactoBox}>
    <div className={style.formContainer}>
        <h1 className={style.formTitle}>Escribí tu consulta y te responderemos en breve.</h1>
        <form className={style.formInput} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className={style.inputGroup}>
                <input {...register('nombre', { required: true })} type="text" name='nombre' placeholder='Ingresa tu nombre '/>
                {errors.nombre && <span className={style.errors}>Este campo es requerido</span>}
            </div>
            <div className={style.inputGroup}>
            <input {...register('apellido', { required: true })} type="text" name='apellido' placeholder='Ingresa el apellido '/>
            {errors.apellido && <span className={style.errors}>Este campo es requerido</span>}
            </div>
            <div className={style.inputGroup}>
            <input {...register('email', { required: true })} type="email" name='email' placeholder='Ingresa tu correo electrónico'/>
            {errors.email && <span className={style.errors}>Este campo es requerido</span>}
            </div>
          
            
            <div className={style.inputGroup}>
                <input type="file" name='archivo' defaultValue={archivo} onChange={(e)=> setArchivo(e.target.files[0])}/>
            </div>
            {loading &&
                         <div className={style.loaderContainer}>
                            <Loader />
                            <div className="">
                                <span>Enviando consulta, Espere por favor !</span>
                            </div>
                         </div>
                    }
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
