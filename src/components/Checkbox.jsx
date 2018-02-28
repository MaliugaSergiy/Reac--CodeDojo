import React from 'react';

class Checkbox extends React.Component{
    render() {
        return (
            <button className="checkbox icon" onClick={this.props.onChange}>
                <i className="material-icons">{ this.props.checked ? "check_box" : "check_box_outline_blank"}</i>
            </button>
        )
    }
}

Checkbox.propTypes = {
    checked : React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default Checkbox;


//
// class Checkbox extends React.Component{
//     constructor(props){
//         super(props);
//
//         this.state = {
//             checked: this.props.initiallyChecked
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(event) {
//         this.setState({
//             checked: !this.state.checked
//         });
//
//     }
//
//     render() {
//         return (
//             <button className="checkbox icon" onClick={this.handleClick}>
//                 <i className="material-icons">{ this.state.checked ? "check_box" : "check_box_outline_blank"}</i>
//             </button>
//         )
//     }
// }
//
// Checkbox.propTypes = {
//     initiallyChecked : React.PropTypes.bool.isRequired
// }
//
// export default Checkbox;
//
//
//
