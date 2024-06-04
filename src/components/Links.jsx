import { Link } from "react-router-dom"; 
  
const MyButton = ({ to }) => { 
  
    return ( 
        <Link to={`/${to}`}> 
            <button className="my-button"> 
                Take me to {to === '' ? "Domů" : to}
            </button> 
        </Link> 
    ) 
} 
  
export default MyButton;