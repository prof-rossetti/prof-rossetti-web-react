
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'  // NavLink
import ReactGA from 'react-ga'

import Navbar from 'react-bootstrap/Navbar'
//import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from './Home'
//import Research from './Research'
//import Teaching from './Teaching'
//import Press from './Press'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {debug: true})

export default function App() {
    ReactGA.pageview(window.location.href)

    // ROUTES

    //var sitemap = [
    //    {"key": "research", "title": "Research", "component": Research},
    //    {"key": "teaching", "title": "Teaching", "component": Teaching},
    //    {"key": "experience", "title": "Experience", "component": Experience},
    //]

    //.map(function(route){
    //    return <Route key={route["key"]} path={`/${route["key"]}`} component={route["component"]} />
    //})

    // LINKS

    return (
        <Router>
            <div className="app">
                <Navbar fixed="top" bg="light" expand="lg">
                    <Navbar.Brand href="/">Michael Rossetti</Navbar.Brand>
                    {/*

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/research">Research</Nav.Link>
                            <Nav.Link href="/teaching">Teaching</Nav.Link>
                            <Nav.Link href="/press">Press</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    */}
                </Navbar>

                <Container fluid className="page">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {/*

                        <Route path="/research" component={Research} />
                        <Route path="/teaching" component={Teaching} />
                        <Route path="/press" component={Press} />

                        */}
                     </Switch>

                    <hr/>
                    <footer>
                        <p style={{textAlign:"center"}}>
                            {" "}<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mikerossetti/">LinkedIn</a> |
                            {" "}<a target="_blank" rel="noopener noreferrer" href="https://github.com/prof-rossetti">GitHub</a> |
                            {" "}<a target="_blank" rel="noopener noreferrer" href="mailto:prof.mj.rossetti@gmail.com">Email</a>
                        </p>
                    </footer>
                </Container>
            </div>
        </Router>
    )
}
