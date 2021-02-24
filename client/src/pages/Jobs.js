import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Jobs(){
    // Setting components initial state //
    const [jobs, setJobs] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all jobs and store them with setJobs //
    useEffect(() =>{
        loadJobs()
    }, [])

    // Load all jobs and set them to jobs //
    function loadJobs(){
        API.getJob()
            .then(res =>
                setJobs(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a job from the database with a given id, then reloads jobs from the db //
    function deleteJob(id){
        API.deleteJob(id)
            .then(res => loadJobs())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field //
    function handleInputChange(event){
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    // When the form is submitted, use the API.savejob method to save the job data //
    // Then reloads jobs from the database //
    function handleFormSubmit(event){
        event.preventDefault();
        if (formObject.title && formObject.owner){
            API.saveJob({
                title: formObject.title,
                owner: formObject.owner,
                description: formObject.description
            })
                .then(res => loadJobs())
                .catch(err => console.log(err))
        }
    };

        return(
            <Container fluid>
                <Row>
                    <Col size = "md-6">
                        <Jumbotron>
                            <h1>What Jobs Should I Choose</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                onChange = {handleInputChange}
                                name = "title"
                                placeholder = "Title (required)"
                            />

                            <Input
                                onChange = {handleInputChange}
                                name = "owner"
                                placeholder = "Owner (required)"
                            />

                            <Input
                                onChange = {handleInputChange}
                                name = "job_requirements"
                                placeholder = "Job_Requirements (required)"
                            />

                            <Input
                                onChange = {handleInputChange}
                                name = "job_responsibilities"
                                placeholder = "Job_Responsibilities (required)"
                            />

                            <TextArea
                                onChange = {handleInputChange}
                                name = "description"
                                placeholder = "Description (optional)"
                            />

                            <FormBtn
                                disabled = {!(formObject.owner && formObject.title)}
                                onClick = {handleFormSubmit}
                            >
                                Submit Job
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size = "md-6 sm-12">
                        <Jumbotron>
                            <h1>Jobs On My List</h1>
                        </Jumbotron>
                        {jobs.length ? (
                            <List>
                                {jobs.map(job =>(
                                    <ListItem key = {job._id}>
                                        <Link to {...jobs + jobs._id}>
                                            <strong>
                                                {job.title} under {job.owner}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick = {() => deleteJob(job._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results To Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        );
}

export default Jobs;