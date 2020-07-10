import React from "react" ;
import Language from "./Language";

class Lesson extends React.Component {
    render() {

        const dataLanguage = [
                {
            name : "HTML",
            image :  process.env.PUBLIC_URL + "/asset/image/html-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "CSS",
            image :  process.env.PUBLIC_URL + "/asset/image/css-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "JavaScript",
            image :  process.env.PUBLIC_URL + "/asset/image/js-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "PHP",
            image :  process.env.PUBLIC_URL + "/asset/image/php-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "JAVA",
            image :  process.env.PUBLIC_URL + "/asset/image/java-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "Csharp",
            image :  process.env.PUBLIC_URL + "/asset/image/csharp-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "DART",
            image :  process.env.PUBLIC_URL + "/asset/image/dart-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "KOTLIN",
            image :  process.env.PUBLIC_URL + "/asset/image/kotlin-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name : "C++",
            image :  process.env.PUBLIC_URL + "/asset/image/cpp-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },       {
            name : "RUBY",
            image :  process.env.PUBLIC_URL + "/asset/image/ruby-image.png" ,
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }

      
        ]

        return(
       
            // Lesson data bahasa pemprograman
            
              <div className="lessons">
               
                <h3>Daftar Bahasa Program</h3>
   
              {dataLanguage.map((language) => {
                    return(
                        <Language
                        image={language.image}
                        text={language.text}
                        />
                    )
                })}
            
             </div>
         
          
        )
    }
}


export default Lesson;