import React from 'react';


class Dice extends React.Component {
    state = {
        img: '/img/persons/maxence.png',
        imgClicked: '/img/dice1'
    };

    handleIncrementClick = () => {
        this.setState({
            imgClicked: this.state.imgClicked

            // colors: this.state.colors.Math.floor(Math.random())
        });
    };

    render() {
        return (
            <div>
                {/* <h2> The count is: {this.state.count} </h2> */}
                {/* <img src={this.state.img} alt="drivers img" style={{
                    height: '100px', marginLeft: '100px', marginRight: '20px'

                }} /> */}

                <button onClick={this.handleIncrementClick}>Like{this.state.imgClicked}</button>
            </div>
        );
    }
}

export default Dice;