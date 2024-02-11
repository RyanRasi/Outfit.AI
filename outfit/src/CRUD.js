import React, { useState, useEffect, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
        getData();
    }, [])

    const getData = () => {
        axios.get('https://localhost:7299/api/Outfit')
        .then((result) => {
            setData(result.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleEdit = (id) => {
        handleShow();
        axios.get(`https://localhost:7299/api/Outfit/${id}`)
        .then((result) => {
            setEditName(result.data.name);
            setEditType(result.data.type);
            setEditColor(result.data.color);
            setEditID(id);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item of clothing?") == true) {
            axios.delete(`https://localhost:7299/api/Outfit/${id}`)
            .then((result) => {
                if(result.status === 200) {
                    toast.success('Outfit Item has been deleted');
                    getData();
                }
            })
            .catch((error) => {
            toast.error(error);
            });
        }
    }

    const handleUpdate = (id) => {
        const url = `https://localhost:7299/api/Outfit/${editID}`;
        const data = 
        {
            "id": editID,
            "clothing_Name": editName,
            "clothing_Type": editType,
            "clothing_Color": editColor
        }

        axios.put(url, data)
        .then((result) => {
            handleClose();
            getData();
            clear();
            toast.success('Outfit Item has been updated');
        }).catch((error) => {
            toast.error(error);
        });
    }

    const handleSave = () => {
        const url = 'https://localhost:7299/api/Outfit';
        const data = 
            {
                "clothing_Name": name,
                "clothing_Type": type,
                "clothing_Color": color
            }

            axios.post(url, data)
            .then((result) => {
                getData();
                clear();
                toast.success('Outfit Item has been added');
            }).catch((error) => {
                toast.error(error);
            });
    }

    const clear = () => {
        setName('');
        setType('');
        setColor('');
        setEditName('');
        setEditType('');
        setEditColor('');
    }

    return (
        <Fragment>
            <ToastContainer>
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
                    <button className="btn btn-primary" onClick={() => handleSave()}>Submit</button>
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
            </ToastContainer>
        </Fragment>
    )
}

export default CRUD;