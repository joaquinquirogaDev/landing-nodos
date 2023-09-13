import { CartelHero } from "../CartelHero/CartelHero"
import { HeroContacto } from "../HeroContacto/HeroContacto"

export const Contacto = () => {
    return (
        <>
            <HeroContacto />
            <CartelHero 
            titulo='Contáctate con nosotros' 
            parrafo='Si deseas obtener más información sobre nuestro colegio, resolver tus dudas o sumarte a nuestra comunidad educativa, no dudes en ponerte en contacto con nosotros. Estamos comprometidos en brindarte toda la información que necesitas para tomar decisiones informadas sobre la educación de tus hijos. Nuestro equipo de atención estará encantado de ayudarte en cada paso del camino.' 
            backColor='#212539'
            />
            
        </>
    )
}