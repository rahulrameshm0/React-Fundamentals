export const CardWrapper = ({title, children}) => {
    return(
        <div>
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
};