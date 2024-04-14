import React from "react"
import User from "./user"


class Users extends React.Component {
 
 
 render() {
    if (this.props.users.length > 0)
        return(<div>
            {this.props.users.map((el) => (
               <User key={el.id} user={el}/>
            ))}
        </div>)
    else 
        return (<div className="user">
            <h3>Polzovateley net</h3>
        </div>)
  }
}

export default Users