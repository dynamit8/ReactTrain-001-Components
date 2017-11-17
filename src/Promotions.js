import React, {Component} from 'react'

class PromoList extends Component{
    render(){
        return(
            <div>
                <h2>Promotions</h2>
                {
                    this.props.Promos.map((Promo, index) =>
                        <div key={index}>
                            <div>id:{Promo.id}</div>
                            <div>id:{Promo.Point}</div>
                            <div>id:{Promo.PromoName}</div>
                            <button onClick={() => this.props.clickHere(Promo.Point,index)}>use</button>
                            <hr />
                        </div>
                    )
                }
            </div>
        )
    }
}
export default PromoList