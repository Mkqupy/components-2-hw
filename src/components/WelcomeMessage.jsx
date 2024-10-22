import React from "react";

class WelcomeMessage extends React.Component {
    componentDidMount(){
        console.log("Компонент змонтовано!")
    }
    render () {
        return <p>Ласкаво просимо!</p>
    }
}


export default WelcomeMessage;