const React = require('react');
const { Component } = React;

class WordBook extends Component {
    state = {
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const wordArray = this.state.value.split('');
        const convertedArray = [];
        for (var i in wordArray)
        {
            if (this.state.value[i] !== 'a' && 
                this.state.value[i] !== 'e' && 
                this.state.value[i] !== 'i' && 
                this.state.value[i] !== 'o' && 
                this.state.value[i] !== 'u') {
                convertedArray.push(this.state.value[i]);
            }
        }
        // const convertedArray = wordArray.filter((v) => {
        //     if (v !== 'a' && 'e' && 'i' && 'o' && 'u') {
        //         return v;
        //     }
        // });
        this.setState({
            result: convertedArray.join("")
        })
    };

    onChangeInput = (e) => {
        this.setState({value : e.currentTarget.value});
    }

    input;

    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div><h1>{this.state.result}</h1></div>
            </>
        );
    }
}

module.exports = WordBook;