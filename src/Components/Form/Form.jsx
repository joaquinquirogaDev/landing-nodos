import Vehiculos from "../../Data/newData"

export default function Form() {
    const marcasYSumas = Vehiculos.reduce((resultado, vehiculo) => {
        const { Marca, Cantidad } = vehiculo;
        if (resultado[Marca]) {
            resultado[Marca] += Cantidad;
        } else {
            resultado[Marca] = Cantidad;
        }
        return resultado;
    }, {});

    return <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
        <ul style={{ width: '60%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px', border: '1px solid black' }}>
            {Vehiculos.map(item => (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '30px', alingItems: 'center', justifyContent: 'center' }}>
                    <li>
                        Marca: {item.Marca}
                    </li>
                    <li>
                        Cantidad: {item.Cantidad}
                    </li>
                </div>
            ))}
        </ul>
        <ul style={{ width: '40%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px', border: '1px solid black' }}>
            {Object.keys(marcasYSumas).map(item => (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '30px', alingItems: 'center', justifyContent: 'center' }}>
                    <li>
                        Marca: {item}
                    </li>
                    <li>
                        Cantidad: {marcasYSumas[item]}
                    </li>
                </div>
            ))}
        </ul>
    </div>

}