// eslint-disable-next-line react/prop-types
const Button = ({_onClick, className, type, value })=>{
    return(
        <button onClick={_onClick} type={`${type}`} className={`btn ${className}`}>{value}</button>
    )
}
export default Button