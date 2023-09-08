export const SectionDetalle = ({setActiveComponent, activeComponent}) => {

    return <>
    
    <h1>{activeComponent?.item?.nombre}</h1>
    <button 
        onClick={() => setActiveComponent({nombre: 'Niveles'})}
    >
        Atras
    </button>
    </>
}