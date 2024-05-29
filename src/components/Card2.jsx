export default function Card2({dettaglio}){
    return (
                    <div className="card" >
            <img src={dettaglio.sprites.front_default} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{dettaglio.name}</h5>
                <p className="card-text">{dettaglio.weight}</p>
                <a href="#" className="btn btn-primary">Catturalo</a>
            </div>
            </div>
                )
}