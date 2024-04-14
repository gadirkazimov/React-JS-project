import React from "react";
import Header from "./components/header";
import Users from "./components/users";
import AddUser from "./components/addUser";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        users: [
            {
                id: 1,
                firstname: 'Bob',
                lastname: 'Marley',
                bio: 'lorem ipsum dolor sit amet consecteur',
                age: 40,
                isHappy: true
            },
            {
                id: 2,
                firstname: 'John',
                lastname: 'Doe',
                bio: 'lorem ipsum dolor sit amet consecteur',
                age: 22,
                isHappy: false
            }
         ]
    }
    this.addUser = this.addUser.bind(this)
 }
  
  render() {
    return (
      <div>
        <Header title="Spisok polzovateley" />
        <main>
          <Users users={this.state.users}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>
        

        
        
      </div>
    );
  }
  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}]})
  }
}

export default App;
