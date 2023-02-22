import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";




export default function Contact () {

    return (
    
    <div>
        
        <body>
            <div >
                     <Link href='assets/GiovanniRamos.vcf' download>
                        <div type="button" class="btn btn-primary btn-sm ">
                        Add Contact
                        </div>
                    </Link>
                
            </div>
        </body>
        </div>
    )



}