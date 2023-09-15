//styles 
import './CartelHero.css'

export const CartelHero = ({titulo,parrafo, backColor}) => {
  return (
    <div style={{backgroundColor: backColor}} className='cartelHeroContainer'>
        <h1>{titulo}</h1>
        <p>{parrafo}</p>
    </div>
  )
}
