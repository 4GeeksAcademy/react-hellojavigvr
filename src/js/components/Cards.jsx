import React from "react";


const Cards = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src="https://atasteofalaska.com/wp-content/uploads/2017/05/Small-Image-Landscape-Placeholder-500x350-300x210.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
export default Cards;