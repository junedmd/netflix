import Navbar from "./../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./Contact.css"
import imgjk from "./images/first.jpg"

export default function Contact(){
    return(
        <>
        <div>
        <Navbar/>
        <div className="juned">
         <img src={imgjk} style={{ width: '100%', height: '500px' }}/>
         
        </div>
       
        <Footer/>
      
            
        </div>
        </>
    )

}
