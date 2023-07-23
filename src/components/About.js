
import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
const About = () => {
    const a = useContext(noteContext)
    useEffect(() => {
      a.update();
    }, [a])
    
  return (
    <div>This is a {a.state.name} and he studying in class{a.state.class}</div>
  )
}

export default About