export const NameList = () => {
    const names = ["Rahul", "Rohith", "Ramesh", "Ramesh"];
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)

    return <div>{nameList}</div>
}