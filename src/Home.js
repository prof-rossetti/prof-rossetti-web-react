
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import profilePhoto from './faculty-headshot-straight.jpg'

export default function Home() {

    const imgStyle = {marginBottom: 15}

    return (
        <Container>
            <p className="lead">
                Adjunct Professor in Information Systems
            </p>

            <Image fluid src={profilePhoto} style={imgStyle}></Image>

            <p>
                Michael Rossetti teaches data science and software development courses
                {" "}at Georgetown University's McDonough School of Business
                {" "}and New York University's Stern School of Business.
            </p>

            <p>
                His research interests include machine learning, natural language processing, sentiment analysis, and public opinion polling.
            </p>

            <p>
                Mike has worked as
                {" "} a polling data analyst for a winning US Presidential campaign,
                {" "} an analytics director for a Silicon Valley startup,
                {" "} and a technology consultant for the US Government.
            </p>

            <p>
                He received a Master of Science in Information Systems and a Bachelor in Business Administration
                {" "}from the George Washington University.
            </p>
        </Container>
    )
}
