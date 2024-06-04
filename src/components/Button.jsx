import { Link } from "react-router-dom"; 
import Domů from "../pages/Domů";
import { Button } from "@mui/material";
const MyButton = ({ to }) => { 
  
    return ( 

        <Button><Link href="Domů" color="inherit" underline="none">Domů</Link></Button>
    ) 
} 
  
export default MyButton