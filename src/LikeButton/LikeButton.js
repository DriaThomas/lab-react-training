import React from 'react';


// export default function LikeButton({
//     likes,
//     likes2

// }) {
//     return (
//         <div style={{


//         }}>
//             {/* {likes}= 0 */}
//             likes: 0;


//             <button>{likes}Likes</button>
//             <button>{likes2}Likes</button>

//         </div >

//     );
// }



class LikeButton extends React.Component {
    state = {
        count: 0,
        colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    };

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1,

            // colors: this.state.colors.Math.floor(Math.random())
        });
    };

    render() {
        return (
            <div>
                {/* <h2> The count is: {this.state.count} </h2> */}
                <button onClick={this.handleIncrementClick}>Like{this.state.count}</button>
            </div>
        );
    }
}

export default LikeButton;