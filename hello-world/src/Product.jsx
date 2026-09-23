// export const Product = (props) => {
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <p>Price: ${props.price}</p>
//             <p>inStock: {props.inStock ? "Available": "Not Available"}</p>
//             <p>Categories: {props.categories.join(", ")}</p>
//         </div>
//     )
// }
export const Product = ({title, price, inStock, categories}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>inStock: {inStock ? "Available": "Not Available"}</p>
            <p>Categories: {categories.join(", ")}</p>
        </div>
    )
}