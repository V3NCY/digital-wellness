import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    return (
        <div className='container'>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="my-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                        <Card.Body>
                            <Card.Title>Wellness in a Digital World</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="my-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                        <Card.Body>
                            <Card.Title>Healthy Tech Habits</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="my-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                        <Card.Body>
                            <Card.Title>Digital Wellness Toolkit</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="my-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                        <Card.Body>
                            <Card.Title>Tech-Life Balance Tips</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default BasicExample;
