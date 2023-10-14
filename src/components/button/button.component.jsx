import './button.styles.scss'

const Button = ({children, ...other}) => {
  return (
    <button className='button__container'>{children}</button>
  )
}
export default Button