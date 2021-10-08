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



class ClickPic extends React.Component {
    state = {
        img: '/img/persons/maxence.png',
        imgClicked: '/img/persons/maxence-glasses.png'
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

export default ClickPic;