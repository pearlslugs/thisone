const Input = ({htmlFor, title, type, name, id, handleChange, handleBlur }) => {
    return(
        <div>
            <label htmlFor={htmlFor}>{title} </label><br />
            <input
                type={type}
                name={name}
                id={id}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    )
}
export default Input;