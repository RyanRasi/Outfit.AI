import React, { useState, useEffect, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const CRUD = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');

    const [editID, setEditID] = useState('');
    const [editName, setEditName] = useState('');
    const [editType, setEditType] = useState('');
    const [editColor, setEditColor] = useState('');

    const empdata = [
        {
            id: 1,
            name: 'Barbour Beaufort',
            type: 'Coat',
            color: 'Green'
        },
        {
            id: 2,
            name: 'Ralph Lauren Oxford Shirt',
            type: 'Shirt',
            color: 'Light Blue'
        },
        {
            id: 3,
            name: 'Ralph Lauren Quarter Zip',
            type: 'Jumper',
            color: 'Navy'
        }
    ]
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(empdata)
    }, [])

    const handleEdit = (id) => {
        // alert(id);
        handleShow();
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item of clothing?") == true) {
            alert(id);
        }
    }

    const handleUpdate = (id) => {
        
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter Name"
                    value = {name} onChange={(e) => setName(e.target.value)}></input>
                    </Col>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter Type"
                    value = {type} onChange={(e) => setType(e.target.value)}></input>
                    </Col>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter Color"
                    value = {color} onChange={(e) => setColor(e.target.value)}></input>
                    </Col>
                    <Col>
                    <button className="btn btn-primary">Submit</button>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Colour</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.color}</td>
                                        <td colSpan={2}>
                                            <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify / Update Clothing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter Name"
                    value = {editName} onChange={(e) => setEditName(e.target.value)}></input>
                    </Col>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter Type"
                    value = {editType} onChange={(e) => setEditType(e.target.value)}></input>
                    </Col>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter Color"
                    value = {editColor} onChange={(e) => setEditColor(e.target.value)}></input>
                    </Col>
                    <Col>
                    <button className="btn btn-primary">Submit</button>
                    </Col>
                </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    )
}

export default CRUD;