import React from 'react';
import QuizService from "../../http/QuizService";
import {Button} from "react-bootstrap";

const MyQuizzes = () => {
    async function fetchData(){
        try{
            const response = await QuizService.getAuthQuizzes()
            console.log(response)
        }catch (e: any){
            console.log(e)
        }
    }

    return (
        <div>
           <Button onClick={() => fetchData()}>fetchData</Button>
        </div>
    );
};

export default MyQuizzes;