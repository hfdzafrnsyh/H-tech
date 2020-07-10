import React ,{useState ,Component} from "react" ;
import Header from "./header/Header";
import Language from "./Language";
import Portfolio from "./portfolio/Portfolio";
import { Button ,Modal } from "react-bootstrap";



// HOme 


class Home extends React.Component {


    constructor() {
        super() 
        this.state={ show : false }
    }

    setModalOpen() {
        this.setState( { show : true } )
    }

      setModalClose() {
      this.setState( { show : false } ) 
           }

render() {

    return(
        <div className="home">
            <div className="header-home">
            <Header/>
            </div>
            <div className="home-lesson">
        
               <Language image= {process.env.PUBLIC_URL + "/asset/image/html-image.png" } text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
               <Language image= {process.env.PUBLIC_URL + "/asset/image/css-image.png" } text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
               <Language image= {process.env.PUBLIC_URL + "/asset/image/js-image.png" } text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
               <Language image= {process.env.PUBLIC_URL + "/asset/image/php-image.png" } text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
           
            </div>
            <div className="button-all-lesson">
        
            <a href="/lesson"><span>All Lesson</span></a>
            </div>

            <div className="home-client">
                <h2>Client</h2>
               <div className="home-clients">
               <div className="client">
                    <div className="client-image">
                        <img src={process.env.PUBLIC_URL + "/asset/image/undraw_male_avatar.png"}/>
                     
                    </div>
                    <h3>Anonym</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h5>Tingkat Kepuasan :  <span>80%</span></h5>
                </div>
                <div className="client">
                    <div className="client-image">
                    <img src={process.env.PUBLIC_URL + "/asset/image/undraw_female_avatar.png"}/>
                     
                    </div>
                    <h3>Anonym</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h5>Tingkat Kepuasan :  <span>89%</span></h5>
                </div>
             </div>
             </div>

             <div className="portfolio">
                 <h3>Portfolio</h3>
                <Portfolio/>
             </div>


            <div className="contact">
                <p>Butuh Website?</p>
                <h3>Cepat Kontak Kami </h3>    
                <div className="contact-link">

        {/* Modal */}

            <Button onClick={ () =>{this.setModalOpen()} }>Contact</Button>
            <Modal show={this.state.show}>
                <Modal.Header>
                    <div className="modal-header">
                        <h3>Contact</h3>
                    </div>
                </Modal.Header>
                <Modal.Body>
                <div className="modal-body">
                    <p>Phone : <span>+62889 2200 3300 </span></p>
                    <p>Instagram : <span>@H-tech </span></p>
                    <p>Linkedin : <span>H-tech.id </span></p>
                </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ () => {this.setModalClose()}}>Close</Button>
                </Modal.Footer>
            </Modal>
                </div>
            </div> 
        </div>
    )
}
}

export default Home ;