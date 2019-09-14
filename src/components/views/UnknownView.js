import React, {Component} from "react";
import {Button, Col, Container,  Row} from "reactstrap";
import logoLine from "../../logos/logo-line-white.svg";
import {Link} from 'react-router-dom';


class UnknownView extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <Container>
                    <Row>
                        <Link  to="/" className="d-block ml-auto mr-auto mb-4"><img src={logoLine} alt="logo" height="128" /></Link>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center"><h2>Oups ! Cette page n'existe pas</h2></Col>
                    </Row>
                    <Row className="mt-4" >
                        <Col className="text-center">
                            <Button to="/" className="btn btn-primary">Revenir à l'accueil</Button>
                        </Col>
                    </Row>
            </Container>
        )
    }
}
export default UnknownView;
