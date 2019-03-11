import React, {
    Component,
} from 'react';
import sketch from "./sketch/sketch";
class Canvas extends Component {
    constructor(props) {
        super(props);
        this.refCanvas = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {

        console.log(window);
        new window.p5(sketch, this.refCanvas.current);
    }

    render() {
        return <div ref={this.refCanvas} />
    }
}


export default Canvas; 
