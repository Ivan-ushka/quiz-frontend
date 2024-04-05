import React, {useEffect, useState} from 'react';
import {IQuizForm} from "../createQuiz/interfaces";
import QuizService from "../../http/QuizService";
import {Container, Table} from "react-bootstrap";

const Top10Quizzes = () => {
    const [quizzes, setQuizzes] = useState<IQuizForm[]>([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await QuizService.getAllQuizzes()
            setQuizzes(response.data)
            console.log(response)
        } catch (e: any) {
            console.log(e)
        }
    }

    return (
        <div className="py-5 bg-white d-flex flex-column justify-content-center text-center">
            <Container>
                <h1 className="pb-4">
                    Top 10 quizzes
                </h1>
                <Container>
                    <Table className="p-3">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Topic</th>
                            <th>Created by</th>
                            <th>Likes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            quizzes && quizzes.map((item, index) =>

                                <tr className="" key={index}>
                                    <td>{index + 1}</td>
                                    <td>Topic: {item.title}</td>
                                    <td>Created by: Ivan</td>
                                    <td>Likes: 3000</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Container>
            </Container>
        </div>
    );
};

export default Top10Quizzes;