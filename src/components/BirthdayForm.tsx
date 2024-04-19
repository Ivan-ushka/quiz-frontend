import React, {useEffect, useState} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import "./style.css"

interface IDate {
    month: string,
    year: string,
    day: string,
}

interface BirthdayFormProps{
    handleBirthdayDate: (date: string) => void
}

const BirthdayForm: React.FC<BirthdayFormProps> = ({handleBirthdayDate}) => {
    const months = [
        {value: '01', label: 'January'},
        {value: '02', label: 'February'},
        {value: '03', label: 'March'},
        {value: '04', label: 'April'},
        {value: '05', label: 'May'},
        {value: '06', label: 'June'},
        {value: '07', label: 'July'},
        {value: '08', label: 'August'},
        {value: '09', label: 'September'},
        {value: '10', label: 'October'},
        {value: '11', label: 'November'},
        {value: '12', label: 'December'},
    ];

    const days = Array.from({length: 31}, (_, index) => ({
        value: (index + 1).toString().padStart(2, '0'),
        label: (index + 1).toString().padStart(2, '0'),
    }));

    const years = Array.from({length: 100}, (_, index) => {
        const year = new Date().getFullYear() - index;
        return {value: year.toString(), label: year.toString()};
    });

    const [date, setDate] = useState<IDate>({
        month: months[0].label,
        day: days[0].label,
        year: years[0].label,
    })
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target
        setDate((prevDate) => ({
            ...prevDate,
            [name]: value,
        }))
        handleBirthdayDate(`${date.month}, ${date.day}, ${date.year}`)

    }
    useEffect(() => {
        handleBirthdayDate(`${date.month}, ${date.day}, ${date.year}`)
    },[])

    return (
        <div className="d-flex align-items-center justify-content-center">
            <Form.Select
                name="month"
                className="me-2"
                defaultValue={months[0].label}
                onChange={handleChange}
            >
                {months.map((month) => (
                    <option key={month.value} value={month.label}>
                        {month.label}
                    </option>
                ))}

            </Form.Select>


            <Form.Select
                name="day"
                className="me-2"
                defaultValue={days[0].label}
                onChange={handleChange}
            >
                {days.map((day) => (
                    <option key={day.value} value={day.value}>
                        {day.label}
                    </option>
                ))}
            </Form.Select>


            <Form.Select
                className="me-2"
                defaultValue={years[0].label}
                name="year"
                onChange={handleChange}
            >
                {years.map((year) => (
                    <option key={year.value} value={year.value}>
                        {year.label}
                    </option>
                ))}
            </Form.Select>
        </div>

    );
};

export default BirthdayForm;