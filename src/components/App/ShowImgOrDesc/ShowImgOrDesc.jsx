import React from 'react';
import { useState } from 'react';

function ShowImgOrDesc({photo}) {

    const [isActive, setActive] = useState(true);

    const showEither = () => {
        setActive(!isActive);
    }
    
    if (isActive) {
        return <img 
        src={photo.path} 
        onClick={showEither}
        />
    }
    else {
        return (
        <section class="photoDescription">
        <h2 onClick={showEither}>{photo.description} </h2>
        </section>)
    }
}



// class ShowImgOrDesc extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handlePhotoClick = this.handlePhotoClick.bind(this);
//         this.handleDescClick = this.handleDescClick.bind(this);
//         this.state = {isActive: false};
//     }

//     handlePhotoClick() {
//         this.setState({isActive: true});
//     }
    
//     handleDescClick() {
//         this.setState({isActive: false});
//     }

//     render(){
//         const isActive = this.state.isActive;
//         if (isActive) {
//             return <img onClick={this.handlePhotoClick} src={photo.path}/>;
//         }
//         else {
//             return <h2 onClick={this.handleDescClick}>{photo.description}</h2>
//         }
//     }
// }

export default ShowImgOrDesc;