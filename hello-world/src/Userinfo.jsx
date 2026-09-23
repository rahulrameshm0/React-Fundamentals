export const Userinfo = ({name, age, city, email}) => {
    return(
        <h2>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>city: {city}</p>
            <p>email: {email}</p>
        </h2>
    )
}