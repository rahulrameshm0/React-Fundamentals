import { Userinfo } from "./Userinfo";

export const UserCard = ({id, ...rest}) => {
    return(
        <div>
            <h2>{id} Details</h2>
            <Userinfo {...rest}/>
        </div>
    )
}