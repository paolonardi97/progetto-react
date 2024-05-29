
import Card from "./Card"

export default function Header(){
    let dogs=[
        {id:1 , race: 'dobberman' , name: 'dobby' ,description:'Sono un cane protettivo e simpatico, adoro i  bambini e giocare con loro'},
        {id:2 , race: 'beagle' , name: 'jackie',description:'Sono il demonio'},
        {id:3 , race: 'meticcio' , name: 'giulietta',description:'Sono la principessa di casa Nardi'},
        {id:4 , race: 'meticcio' , name: 'scrappy',description:'Benedetta lasciami in pace'}
    ]
    return (
        <>
        <h2 className="text-center">I nostri cani</h2>
        <div className="container">
                <div className="row">
                    {dogs.map((dog)=>{
                        return (
                            <div className="col-12 col-md-3" key={dog.id}>
                                <Card cane={dog}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}