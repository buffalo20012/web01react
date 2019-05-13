import React, {Component} from 'react';

import './counter.scss';
import Delta from './Delta'

class Counter extends Component {
    state = {
        value:0,
        delta1: 10,
        delta2: 10
    };

    render() {
        let {value,delta1,delta2} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <Delta delta1 = {delta1} handleChange={this.handleChange1}/>
                <Delta delta2 = {delta2} handleChange={this.handleChange2}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMul}>*</button>
                <button onClick={this.handleDiv}>/</button>
            </div>
        );
    }

    handleChange1 = event =>
        this.setState({
            delta1: parseInt(event.target.value)
        });

    handleChange2 = event =>
        this.setState({
            delta2: parseInt(event.target.value)
        });

    handlePlus = ()=>
        this.setState({
            value: this.state.delta1 + this.state.delta2
        });

    handleMinus = ()=>
        this.setState({
            value: this.state.delta1 - this.state.delta2
        });

    handleMul = ()=>
        this.setState({
            value: this.state.delta1 * this.state.delta2
        });

    handleDiv = ()=>
        this.setState({
            value: this.state.delta1 / this.state.delta2
        });
}

export default Counter;