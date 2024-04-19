import React, {useEffect, useState} from 'react';
import {Button, Col, Form, InputGroup, Row, Stack} from "react-bootstrap";
import {getUserData, updateUserData} from "../../http/personActions";
import {IFullUserData} from "./interfaces";
import BirthdayForm from "../../components/BirthdayForm";

interface IPrintData {
    id: number,
    name: string,
    curName: string,
    placeholder: string,
    typeInput: string
}

const BasicInfo = () => {
    const [btnClick, setBtnClick] = useState<number>(-1)
    const initialData = [
        {
            id: 0,
            name: 'name',
            curName: '',
            placeholder: 'Your name',
            typeInput: 'input',
        },
        {
            id: 1,
            name: 'gender',
            curName: '',
            placeholder: 'Your gender',
            typeInput: 'input',
        },
        {
            id: 2,
            name: 'location',
            curName: '',
            placeholder: 'Your location',
            typeInput: 'input'
        },
        {
            id: 3,
            name: 'birthday',
            curName: '',
            placeholder: 'Your birthday',
            typeInput: 'input'
        },
        {
            id: 4,
            name: 'summary',
            curName: '',
            placeholder: 'Tell us about yourself (interests, experience, etc.)',
            typeInput: 'textarea'

        },
        {
            id: 5,
            name: 'gitHub',
            curName: '',
            placeholder: 'Your Github username or url',
            typeInput: 'input'
        },
        {
            id: 6,
            name: 'linkedIn',
            curName: '',
            placeholder: 'Your LinkedIn username or url',
            typeInput: 'input',
        },
        {
            id: 7,
            name: 'twitter',
            curName: '',
            placeholder: 'Your Twitter username or url',
            typeInput: 'input',
        },
    ]

    const [fullUserData, setFullUserData] = useState<IFullUserData>();
    const [printData, setPrintData] = useState<IPrintData[]>(initialData);

    useEffect(() => {
        getUserData()
            .then((data: IFullUserData) => {
                setFullUserData(data)
                synchronised()
            })
            .catch((error: Error) => {
                console.error(error);
            });
    }, [])

    const synchronised = () => {
        setPrintData((prevPrintData) => {
            return prevPrintData.map((item) => {
                item.curName = fullUserData?.[item.name] || '';
                return item;
            });
        });
    };

    useEffect(() => {
        if (fullUserData) {
            synchronised();
        }
    }, [fullUserData]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setPrintData((prevFormData) =>
            prevFormData.map((item) =>
                item.id.toString() === name ? {...item, curName: value} : item
            )
        );
    }

    const handleBirthdayDate = (date: string) => {
        console.log(date)
        setPrintData((prevFormData) =>
            prevFormData.map((item) =>
                item.id === 3 ? {...item, curName: date} : item
            )
        );
    }

    const handleSave = () => {
        const item = printData.find((obj) => obj.id === btnClick);
        console.log(item)
        if (item && fullUserData)
            updateUserData({id: fullUserData.id, [item.name]: item?.curName})
                .then((data: IFullUserData) => {
                    setFullUserData(data)
                    console.log(data)
                    setBtnClick(-1)
                })
                .catch((error: Error) => {
                    console.error(error);
                });

    }

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const printFromControl = (item: IPrintData) => {
        if (btnClick === 1) {
            return<Form.Select aria-label="Default select example">
                <option>Select...</option>
                <option value="1">Mail</option>
                <option value="2">Female</option>
            </Form.Select>
        }
        else if(btnClick === 3)
            return  <>
                <BirthdayForm handleBirthdayDate={handleBirthdayDate}/>
        </>
        else if(btnClick === 5)
            return  <Form.Control as="textarea"
                                  name={`${item.id}`}
                                  type="data"
                                  placeholder={item.placeholder} onChange={handleChange}
                                  value={item.curName}
            />
        else
            return <Form.Control as="input"
                            name={`${item.id}`}
                            type="data"
                            placeholder={item.placeholder} onChange={handleChange}
                            value={item.curName}
            />
    }

    return (
        <div>
            <h5 className="text-body-secondary pb-4">Basic info</h5>
            {/* <Button onClick={() => console.log(fullUserData, printData) }>print</Button>*/}
            <Stack gap={4}>
                {
                    printData.map((item, index) =>
                        <Row key={item.id} className="border-bottom text-black px-2">
                            <Col xs={3}>
                                <p className="mb-2">{capitalizeFirstLetter(item.name)}</p>
                            </Col>
                            {
                                item.id === btnClick ?
                                    <Col xs={5}>
                                        <Form className="pb-3">
                                            <Form.Group className="mb-3" controlId="formBasicInput">
                                                {printFromControl(item)}
                                            </Form.Group>
                                            <Button size='sm'
                                                    variant="primary"
                                                    className="me-2 shadow-sm"
                                                    onClick={handleSave}>
                                                Save
                                            </Button>
                                            <Button size='sm'
                                                    onClick={() => setBtnClick(-1)}
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
                                            <Button onClick={() => setBtnClick(item.id)} variant="p"
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