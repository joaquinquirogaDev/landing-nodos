export const SectionDetalle = (data) => {
    const {activeComponent, setActiveComponent} = data
    return <>
    
    <h1>{activeComponent?.item?.titulo}</h1>
    <button 
        onClick={() => setActiveComponent({nombre: 'Niveles'})}
    >
        Atras
    </button>
    </>
}