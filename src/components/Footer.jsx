import React from "react"


function Footer(){
    const date = new Date().getFullYear();
    return(
        <footer>
            <p>
             Created by Joyal Chirag Shah {date}
            </p>
        </footer>
    )
}
export default Footer;