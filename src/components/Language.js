import React from "react" ;


class Language extends React.Component {
    render() {
    return(

            <div className="language">
              
               <div className="language-image">
                <img src={this.props.image}/>
                </div>
             <p>{this.props.text}</p>
        
            </div>
       
    )
}
}

export default Language ;