import React from "react";
import hello from './Hello.module.css'

export default class Hello extends React.Component{
    render(){
        return(
            <div className={hello.hello}>
                Hello React
            </div>
        )
    }
}

