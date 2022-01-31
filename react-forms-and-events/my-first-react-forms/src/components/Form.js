import React, {Component} from 'react'

class Form extends Component {
    render(){
        return <form className="myForm" type="submit">
            <label>
                Login:
                <input type="email"></input>
            </label>
            <label>
                Password:
                <input type="password"></input>
            </label>
            <button>Fazer login</button>
        </form>
    }
}

export default Form