import React from 'react'
import {HashLink} from 'react-router-hash-link'
import styled from 'styled-components'
import './NavBar.css'

const NavBarBox = styled.div`
    font-size: 3em;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-left: 70px;
`

const Logo = styled.img`
    float: left;
    text-align: left;
`

const NavBar = () => {
    return(
    <NavBarBox id="NavBar">
        <Logo src="https://cdn.vectorstock.com/i/preview-1x/47/71/medal-for-win-blank-template-round-monochrome-logo-vector-22634771.jpg" alt="Logo"></Logo>
        <HashLink to="#AboutMe" class="hash-link">About me</HashLink>
        <HashLink to="#Skills" class="hash-link">Skills</HashLink>
        <HashLink to="#Projects" class="hash-link">Projects</HashLink>
        <HashLink to="#Contact" class="hash-link">Contact</HashLink>
    </NavBarBox>
    )
}

export default NavBar