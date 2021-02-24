import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props){
    const [job, setJob] = useState({})

    // When this component mounts, grab the job with the _id from props.match.params.id //
    // e.g. localhost:3000/books/5398dfu9e8ur230948frjf //
    const {id} = useParams()
    useEffect(() =>{
        API.getJob(id)
            .then(res => setJob(res.data))
            .catch(err => console.log(err));
    }, [])

    return(
        <Container fluid>
            <Row>
                <Col size = "md-12">
                    <Jumbotron>
                        <h1>
                            {job.title} under {job.owner}
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size = "md-10 md-offset-1">
                    <overview>
                        <h1>Description</h1>
                        <p>
                            {job.description}
                        </p>
                    </overview>
                </Col>
            </Row>
            <Row>
                <Col size = "md-2">
                    <Link to = "/">Back to Owners</Link>
                </Col>
            </Row>
        </Container>
    );
}


export default Detail;