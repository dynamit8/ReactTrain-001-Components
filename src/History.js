import React, {Component} from 'react'
class HistoryCom extends Component{
    render() {
        return(
            <div>
                <h2>History</h2>
                {
                    this.props.HistoryPromos.map((UsedPromo, index) => 
                        <div key={index} className='row'>
                            <div className='col'>{UsedPromo.id}</div>
                            <div className='col'>{UsedPromo.Point}</div>
                            <div className='col'>{UsedPromo.PromoName}</div>
                            <div className='col'><button onClick={()=>this.props.refund(UsedPromo.Point,index)}>Refund:{index}</button></div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default HistoryCom