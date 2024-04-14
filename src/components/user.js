import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'


class User extends React.Component {
  user = this.props.user  
  render() {
    return(<div className="user">
        <IoCloseCircleSharp className="icon-1"/>
        <IoHammerSharp className='icon-2'/>
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? 'Scastliv :)' : 'Ne osobo :('}</b>
        </div>
    )
  }
}

export default User