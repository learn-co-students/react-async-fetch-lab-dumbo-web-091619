import React from 'react'

class App extends React.Component{
    state = {
        spacePpl: []
    }
 
        async componentDidMount(){
            let rawSpacePpl = await fetch('http://api.open-notify.org/astros.json')
            let spacePpl = await rawSpacePpl.json()
            this.setState({
                spacePpl
            })
        }

        render(){

        return(
            <div>
              { this.state.spacePpl.map(ppl => ppl.name)}
            </div>
        )
    }

}

export default App