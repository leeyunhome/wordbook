const React = require('react');
const { Component } = React;

class WordImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: './images/hodu5.jpg',
        };
    }

    render() {
        return (
            <>
                <div>
                    <img src={this.state.value} width='50%'></img>
                </div>
            </>
        );
    }
}

module.exports = WordImage;