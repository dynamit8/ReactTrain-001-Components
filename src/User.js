import React, {Component} from 'react'

class UserCom extends Component{
    render(){
        return(
            <div>
                <h2>User</h2>
                <h3>Points: {this.props.User.point}</h3>
            </div>
        )
    }
}
export default UserCom