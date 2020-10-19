import React from 'react'
//import Navbar from 'react-bootstrap/Navbar'
//import Nav from 'react-bootstrap/Nav'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './App.css'
//mport profilePhoto from './profile-photo.png'

function clickHandler(event){
    console.log("YOU CLICKED ME", event.target.value)
}

function App() {
    return (
        <div>
            <header>
                <h1>Hello World</h1>
            </header>

             <p className="lead">There will be a page here.</p>

            <Button onClick={clickHandler} value="research">Research</Button>
            <Button onClick={clickHandler} value="teaching">Teaching</Button>
            <Button onClick={clickHandler} value="experience">Experience</Button>
        </div>
    )
}

export default App
