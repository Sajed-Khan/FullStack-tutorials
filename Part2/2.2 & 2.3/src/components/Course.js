import React from 'react'

const Header = (props) => (
    <h1>
        {props.name}
    </h1>
)

const Part = (props) => (
    <p>
        {props.part} {props.exercise}
    </p>
)

const Content = ({parts}) =>{
        return parts.map((part)=><Part key={part.id} part = {part.name} exercise = {part.exercises} />)
}

const Total = ({parts}) =>{
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return(
        <strong>Total of {total} exercises</strong>
    )
}



const Course = ({course}) => (
    <div>
        < Header name = {course.name} />
        < Content parts = {course.parts} />
        < Total parts = {course.parts} />
    </div>
)

export default Course