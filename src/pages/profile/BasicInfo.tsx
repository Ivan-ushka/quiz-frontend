import React, {useEffect, useState} from 'react';
import {Button, Col, Form, InputGroup, Row, Stack} from "react-bootstrap";
import {getUserData, updateUserData} from "../../http/personActions";
import {IFullUserData} from "./interfaces";
import BirthdayForm from "../../components/BirthdayForm";

interface IEditBtnActions {
    [-1]: string,
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,

    [key: string]: string;
}

interface IPrintInput {
    id: number,
    name: string,
    placeholder: string,
}

const BasicInfo = () => {
    const [editBtnClick, setEditBtnClick] = useState<number>(-1)
    const [fullUserData, setFullUserData] = useState<IFullUserData>();
    const [newUserField, setNewUserField] = useState<string | undefined>("");
    const [isSaving, setIsSaving] = useState<boolean>(false);


    const editBtnActions: IEditBtnActions = {
        [-1]: 'cansel or nothing',
        0: 'name',
        1: 'gender',
        2: 'gender',
        3: 'birthday',
        4: 'summary',
        5: 'gitHub',
        6: 'linkedIn',
        7: 'twitter',
    }

    const printInputs: IPrintInput[] = [
        {
            id: 0,
            name: 'name',
            placeholder: 'Your name',
        },
        {
            id: 1,
            name: 'gender',
            placeholder: 'Your gender',
        },
        {
            id: 2,
            name: 'location',
            placeholder: 'Your location',
        },
        {
            id: 3,
            name: 'birthday',
            placeholder: 'Your birthday',
        },
        {
            id: 4,
            name: 'summary',
            placeholder: 'Tell us about yourself (interests, experience, etc.)',

        },
        {
            id: 5,
            name: 'gitHub',
            placeholder: 'Your Github username or url',
        },
        {
            id: 6,
            name: 'linkedIn',
            placeholder: 'Your LinkedIn username or url',
        },
        {
            id: 7,
            name: 'twitter',
            placeholder: 'Your Twitter username or url',
        },
    ]

    useEffect(() => {
        getUserData()
            .then((data: IFullUserData) => {
                setFullUserData(data)
            })
            .catch((error: Error) => {
                console.error(error);
            });
    }, [])

    const handleSave = () => {
        setIsSaving(true)
        if (newUserField && fullUserData)
            updateUserData({id: fullUserData.id, [editBtnActions[editBtnClick]]: newUserField})
                .then((data: IFullUserData) => {
                    console.log('newData', fullUserData, data)
                    setFullUserData(data)
                    setEditBtnClick(-1)
                })
                .catch((error: Error) => {
                    console.error(error);
                });
        setIsSaving(false)
    }

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const switchFormControl = (item: IPrintInput) => {
        if (editBtnClick === 1) {
            return <Form.Select aria-label="Default select example">
                <option>Select...</option>
                <option value="1">Mail</option>
                <option value="2">Female</option>
            </Form.Select>
        } else if (editBtnClick === 3)
            return <>
                <BirthdayForm handleBirthdayDate={setNewUserField} birthdayDate={fullUserData?.birthday}/>
            </>
        else if (editBtnClick === 5)
            return <Form.Control as="textarea"
                                 name={editBtnActions[editBtnClick]}
                                 type="data"
                                 placeholder={item.placeholder} onChange={(e) => setNewUserField(e.target.value)}
                                 value={newUserField}
            />
        else
            return <Form.Control as="input"
                                 name={editBtnActions[editBtnClick]}
                                 type="data"
                                 placeholder={item.placeholder} onChange={(e) => setNewUserField(e.target.value)}
                                 value={newUserField}
            />
    }

    const handleEditClick = (index: number) => {
        setEditBtnClick(index)
        const name = editBtnActions[index];

        if (fullUserData) {
            const data = fullUserData[name]
            setNewUserField(data)
        }

    }

    if (isSaving) return <div>Loading...</div>

    return (
        <div>
            <h5 className="text-body-secondary pb-4">Basic info</h5>
            <Stack gap={4}>
                {
                    printInputs.map((item, index) =>
                        <Row key={item.id} className="border-bottom text-black px-2">
                            <Col xs={3}>
                                <p className="mb-2">{capitalizeFirstLetter(item.name)}</p>
                            </Col>
                            {
                                item.id === editBtnClick ?
                                    <Col xs={5}>
                                        <Form className="pb-3">
                                            <Form.Group className="mb-3" controlId="formBasicInput">
                                                {switchFormControl(item)}
                                            </Form.Group>
                                            <Button size='sm'
                                                    variant="primary"
                                                    className="me-2 shadow-sm"
                                                    onClick={handleSave}>
                                                Save
                                            </Button>
                                            <Button size='sm'
                                                    onClick={() => handleEditClick(-1)}
                                                    variant="warning"
                                                    className="shadow-sm">
                                                Cansel
                                            </Button>
                                        </Form>
                                    </Col>
                                    : <>
                                        <Col xs={6}>
                                            <p className={`mb-2  ${fullUserData?.[item.name] ? "text-black" : "text-secondary"} `}>{fullUserData?.[item.name] ? fullUserData?.[item.name] : item.placeholder}</p>
                                        </Col>
                                        <Col xs={3} className="d-flex justify-content-end mb-2">
                                            <Button onClick={() => handleEditClick(item.id)} variant="p"
                                                    className="text-primary p-0">Edit</Button>
                                        </Col>
                                    </>
                            }

                        </Row>
                    )
                }

            </Stack>
        </div>
    );
};

export default BasicInfo;