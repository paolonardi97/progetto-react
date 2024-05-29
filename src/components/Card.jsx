export default function Card({cane}){
    return (
        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{cane.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{cane.race}</h6>
    <p className="card-text">{cane.description}</p>
    <a href="#" className="card-link">Vieni a trovarmi</a>
    <a href="#" className="card-link">Adottami</a>
  </div>
</div>
    )
}