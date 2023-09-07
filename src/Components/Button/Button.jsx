//style
import './Button.css'
export const Button = ({ children, handleClick, widthButton }) => {
    return (
        <button style={{ width: widthButton }} onClick={handleClick} className='button' >{children}</button>
    )
}
