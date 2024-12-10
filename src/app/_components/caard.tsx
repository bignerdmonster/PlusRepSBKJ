export default function Caard({img="",alt="",title="",content=""}) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={img} alt={alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )    
}