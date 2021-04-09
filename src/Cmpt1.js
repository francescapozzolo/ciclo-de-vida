import React from 'react'

class Cmpt1 extends React.Component {
    constructor() {
        super()
        this.state = {
            texto: 'Hola'
        }
        console.log("Cmpt1 - Soy el constructor")
    }
    
    componentDidMount() {  
        console.log("Cmpt1 - Soy el component did mount")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Cmpt1 - Soy el getDerived")
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Cmpt1 - soy el should component")
        return true
    }
    componentWillUnmount() {
        console.log("Cmpt1 - Soy el component will unmount")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Cmpt1 - Soy el getSnapshot")
        return 'Chauchito'
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Cmpt1 - Soy el component did update")
        console.log(snapshot)
    }
   

    render() {
       
        console.log("Cmpt1 - Soy el render")
        return (
            <div className="cmpt1">
                <h1>{this.props.texto}</h1>
                <h1>{this.state.texto}</h1>
            </div>
        )
    }
}

export default Cmpt1