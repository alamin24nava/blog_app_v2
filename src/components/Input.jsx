/* eslint-disable react/prop-types */
const Input = ({_onChange, type, placeholder, className, value, name})=>{
    return(
        <input value={value} onChange={_onChange} name={name} type={type} placeholder={placeholder} className={`input ${className}`}/>
    )
}
export default Input