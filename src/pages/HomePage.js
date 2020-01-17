import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'

const HomePage = (props)=>(
    <React.Fragment>
        <Container>
         <Row className="text-center home-title" >
             <Col  >
                <p> Your job search in control</p>
                
             </Col>
         </Row>
         
         <Row > 
             
             <Col lg={12} xs={12}>
                <Image src="/img/jobnoteLogo.png" fluid responsive className ="imgLogo img-center"/>   
                <p className="app-title">JOB</p>
                <p className="app-title2">note</p>
            </Col> 
         </Row>
         </Container>
    </React.Fragment>
   
)

export default HomePage;

