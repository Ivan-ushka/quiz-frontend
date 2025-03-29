import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import {getUserData, updateUserData} from "../../http/actions/userActions";
import {IFullUserData} from "./interfaces";
import BirthdayForm from "../../components/BirthdayForm";
import LocationForm from "../../components/LocationForm";
import {editBtnActions, IPrintInput, printInputs} from "./BasicInfoConstants";
import useIsMobile from "../../hooks/useIsMobile";


const BasicInfo = () => {
    const [editBtnClick, setEditBtnClick] = useState<number>(-1)
    const [fullUserData, setFullUserData] = useState<IFullUserData>();
    const [newUserField, setNewUserField] = useState<string | undefined>("");
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const isMobile = useIsMobile()

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
        if (fullUserData)
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
        const { placeholder } = item;

        switch (editBtnClick) {
            case 1:
                return (
                    <Form.Select
                        aria-label="Gender select"
                        value={newUserField}
                        onChange={(e) => setNewUserField(e.target.value)}
                    >
                        <option disabled>Select...</option>
                        <option value="Mail">Mail</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                );
            case 2:
                return (
                    <LocationForm
                        handleLocation={setNewUserField}
                        location={fullUserData?.location}
                    />
                );
            case 3:
                return (
                    <BirthdayForm
                        handleBirthdayDate={setNewUserField}
                        birthdayDate={fullUserData?.birthday}
                    />
                );
            case 4:
                return (
                    <Form.Control
                        as="textarea"
                        style={{ minHeight: "150px" }}
                        maxLength={300}
                        name={editBtnActions[editBtnClick]}
                        type="data"
                        placeholder={placeholder}
                        onChange={(e) => setNewUserField(e.target.value)}
                        value={newUserField}
                    />
                );
            default:
                return (
                    <Form.Control
                        as="input"
                        name={editBtnActions[editBtnClick]}
                        type="data"
                        placeholder={placeholder}
                        onChange={(e) => setNewUserField(e.target.value)}
                        value={newUserField}
                    />
                );
        }
    };
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
            <h5 className="text-body-secondary pb-2 pb-md-4">Basic info</h5>
            <Stack gap={isMobile ? 1 : 4}>
                {
                    printInputs.map((item) =>
                        <Row key={item.id} className="border-bottom text-black px-0 px-md-2">
                            <Col xs={3}>
                                <p className="mb-2">{capitalizeFirstLetter(item.name)}</p>
                            </Col>
                            {
                                item.id === editBtnClick ?
                                    <Col xs={editBtnClick === 2 ? 7 : 5}>
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
                                            <p className={`mb-2 ${fullUserData?.[item.name] ? "text-black" : "text-secondary"} `}>
                                                {fullUserData?.[item.name] ? fullUserData?.[item.name] : item.placeholder}
                                            </p>
                                        </Col>
                                        <Col xs={3} className="d-flex justify-content-end mb-2">
                                            <Button onClick={() => handleEditClick(item.id)}
                                                    className="text-primary p-0"
                                                    variant="p">
                                                Edit
                                            </Button>
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