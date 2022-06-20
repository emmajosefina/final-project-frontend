import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { StyledHeader } from '../theme/styles'


const Header = () => {

    return(
        
        <StyledHeader>
            
            <Link key="home" to="/">
            <img src="https://i.postimg.cc/44V76f12/foodie-finder.png" alt="foodie-finder-logotype" />
            </Link>

            <Navbar />
        </StyledHeader>
        
    )
}

export default Header
