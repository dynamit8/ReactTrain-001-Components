import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PromotionsCom from './Promotions'
import HistoryCom from './History'
import UserCom from './User'

class App extends Component {
  state = {
    User: { point: 1000 },
    Promotions: [
      { id: 1, Point: 200, PromoName: 'Promotion#1' },
      { id: 2, Point: 300, PromoName: 'Promotion#2' },
    ],
    HistoryPromo: []
  }
  checkPoint(point) {
    if (point <= this.state.User.point) {
      return true
    } else {
      return false
    }
  }
  usePromo = (point, index) => {
    let canUse = this.checkPoint(point)
    if (canUse) {
      this.setState({
        User: { point: this.state.User.point - point },
        HistoryPromo: [...this.state.HistoryPromo, this.state.Promotions[index]]
      })
    } else {
      alert('not Enough Point!')
    }
  }
  refundPromo = (point, index) => {
    this.setState({
      User: { point: this.state.User.point + point },
      //HistoryPromo: [...this.state.HistoryPromo.splice(index,1)]
    })
    this.state.HistoryPromo.splice(index, 1)
  }

  render() {
    return (
      <div className="App">
        <UserCom
          User={this.state.User} />
        <hr />
        <PromotionsCom
          Promos={this.state.Promotions}
          clickHere={this.usePromo}
        />
        <HistoryCom
          HistoryPromos={this.state.HistoryPromo}
          refund={this.refundPromo}
        />
      </div>
    );
  }
}

export default App;
