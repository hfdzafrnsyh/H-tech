import React from "react" ;



class Portfolio extends React.Component {
    render(){

        const dataPortfolio = [
            {
                image : process.env.PUBLIC_URL + "/asset/image/imagePortfolio/portfolio-image-1.png"
            },
            {
                image : process.env.PUBLIC_URL + "/asset/image/imagePortfolio/portfolio-image-2.png"
            },
            {
                image : process.env.PUBLIC_URL + "/asset/image/imagePortfolio/portfolio-image-3.png"
            },
            {
                image : process.env.PUBLIC_URL + "/asset/image/imagePortfolio/portfolio-image-4.png"
            },
            {
                image : process.env.PUBLIC_URL + "/asset/image/imagePortfolio/portfolio-image-5.png"
            },
            {
                image : process.env.PUBLIC_URL + "/asset/image/imagePortfolio/portfolio-image-6.png"
            }
        ]

        return(
           
            <div className="portfolios">
                 {dataPortfolio.map((portfolio) => {
                     return(
                       
                         
                   
                              <img src={portfolio.image}/>
                    
                          
                       
               
                     )
                 })

                 }
               
              
            </div>
        )
    }
}

export default Portfolio;