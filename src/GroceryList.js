import { Component } from 'react';
import './App.css';
import check from './iconlist2.png';

export class GroceryList extends Component {

    state = {
        userInput : "",
        groceryList : []
    }

    onChangeEvent (event) {
        this.setState ({userInput: event})
        // console.log(event)
      //  console.log(event.target.value)
    }

    addItem(input) {
        if (input !=='') {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList : listArray, userInput : ''})
           // console.log(listArray);
        }
    }

    deleteItem() {
        
            let listArray = this.state.groceryList;
            listArray=[];
            this.setState({groceryList : listArray})

    }

    crosseWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit (e) {
        e.preventDefault ();
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input className='Input'
                    type="text" 
                    placeholder = "I want to buy..." 
                    onChange= { (e) => {this.onChangeEvent (e.target.value)}} 
                    value= {this.state.userInput}/>
                </div>
                <div>
                    <button className='addBtn'
                    onClick={ ()=> this.addItem(this.state.userInput) }>
                        Add
                    </button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crosseWord} key={index}>
                            <img src={check} width="20px"  alt='icon'/>
                            {item} </li>
                    ))}

                </ul>
                <div>
                    <button className='delBtn'
                    onClick={ ()=> this.deleteItem() }>
                        Delete
                    </button>

                </div>
            </form>

        ) 
        
    }
}