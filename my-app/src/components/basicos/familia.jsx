import React from "react";
import Familiamembro from "./familiamembro";

export default props =>{
    return(
        <div>
            <Familiamembro nome="teste" sobrenome={props.sobrenome}/>
            <Familiamembro nome="teste1" {...props}/>
            <Familiamembro nome="teste2"/>
        </div>

    )
}