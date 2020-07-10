import React  ,{Component}from "react" ;


// Form Data 

class FormDaftar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "" ,
            email : "" ,
            handphone : "",
            alamat : "" ,
            kota : "" ,
            language : ""
        }

        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this);
        this.onPick = this.onPick.bind(this);
       
    }
    onChange = (event) => {
        const { name ,value } = event.target;
        this.setState({[name] : value })
    }

    onSubmit = (event) => {
        alert(`hello : ${this.state.name} , kami akan menghubungi anda secepatnya. jangan lupa untuk cek email anda ${this.state.email}`)
        event.preventDefault();
  
    }

    onPick = (event) => {
        this.setState( {language1 : event.target.value} )
    }
    render(){


        const { name , email , handphone , alamat , kota , language1 ,language2} = this.state ;

        return(
            <div className="formDaftar">
            
            
                <div className="pageForm">
                    <h3>Programming</h3>
                    <h5> Mau Belajar pemprograman ? yuk isi form disamping </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            
                <div className="pageForm">


                    
              <div className="form">
                  <h2>Form Daftar</h2>
              <form onSubmit={this.onSubmit}>
            
            <div className="form-group">
            <label for="name">
               <p> Name  </p>
                <input type="text" name="name" value={name} onChange={this.onChange}/>
            </label>
            </div>
            <div className="form-group">
            <label for="email">
             <p>   Email  </p>
                <input type="text" name="email" value={email} onChange={this.onChange}/>
            </label>
            </div>
            <div className="form-group">
            <label for="number">
            <p>phone  </p>
                <input type="number" name="handphone" value={handphone} onChange={this.onChange}/>
            </label>
            </div>
            <div className="form-group">
            <label for="alamat">
                 <p>   Alamat </p>
                <textarea name="alamat" value={alamat} onChange={this.onChange}> </textarea>
            </label>
            </div>
            <div className="form-group">
            <label for="kota">
              <p>Kota :</p>  
                <input type="text" name="kota" value={kota} onChange={this.onChange}/>
            </label>
            </div>
            <div className="form-group">
            <label for="language">
           
            <p>  Bahasa Program </p>
                <select  multiple value={ [language1 , language2] } onChange={this.onPick}>
                  
                    <option value="html" className="active">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="kotlin">Kotlin</option>
                    <option value="dart">Dart</option>
                    <option value="csharp">C#</option>
                    <option value="cplusplus">C++</option>
                    <option value="ruby">Ruby</option>
                    <option value="php">PHP</option>
                    <option value="java">Java</option>
                </select>
      
            </label>
            </div>
            <button type="submit">Kirim</button>
            
                </form>
              </div>
                </div>

            </div>
        )
    }
}


export default FormDaftar;