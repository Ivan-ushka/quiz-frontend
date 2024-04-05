import React, {useEffect, useState} from 'react';
import QuizService from "../../http/QuizService";
import {IQuizForm} from "../createQuiz/interfaces";

const MyQuizzes = () => {
    const [myQuizzes, setMyQuizzes] = useState<IQuizForm[]>([]);

    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData(){
        try{
            const response = await QuizService.getAuthQuizzes()
            setMyQuizzes(response.data)
            console.log(response)
        }catch (e: any){
            console.log(e)
        }
    }

    return (
        <div>
            <div onClick={() => console.log(myQuizzes)}>fff</div>
            {
                myQuizzes ? <div>
                    {
                        myQuizzes.map((item,index) =>
                            <div key={index}>{item.title}</div>
                        )
                    }
                </div> :
                    <div>Loading...
                    </div>
            }
        </div>
    );
};

export default MyQuizzes;