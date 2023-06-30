import "./card.css"

interface CardProps {
    id?: number,
    price: number,
    title: string,
    image: string
}

export function Card ({id, price, image, title} : CardProps){
    return(
        <div className="card">
            <img src = {image}/>
            <h2> {title} - {id} </h2>    
            <p> <b> Valor: {price}  </b> </p> 
        </div>
    )
}