import React, { Component } from 'react'
import axios from 'axios'

class SampleForm extends Component {
    constructor(){
        super()
        this.state = {
            answer: null,
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    handleFormSubmit(e) {
        e.preventDefault()
        this.getSum(e.target.inputOne.value, e.target.inputTwo.value)
        .then((sum) => {
            this.setState((prevState, props) => {
                return { answer: sum }
            })
        })

    }
    getSum(valueOne, valueTwo) {
        const url = 'http://localhost:3001/add'
        const data = {a: valueOne, b: valueTwo}
        return axios.get(url, {params: data})
        .then((response) => {
            return response.data.sum
        })
    }
    render() {
        return (
            <div>
                <p>This is a sample form to test an API call:</p>
                <form onSubmit={this.handleFormSubmit}>
                    Input One:
                    <input type="text" name="inputOne" />
                    Input Two:
                    <input type="text" name="inputTwo" /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>{this.state.answer}</p>
            </div>
        );
    }
}

export default SampleForm;
