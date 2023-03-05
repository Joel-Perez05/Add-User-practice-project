import React, {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState()
  const {onAddUser} = props

  const addNewUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }
    
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      })
      return;
    }
    onAddUser(username, age);
    setUsername("")
    setAge("")
  }

  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }

  const ageHandler = (e) => {
    setAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addNewUserHandler}>
        <label htmlFor='username'>Username</label>
        <input value={username} type="text" id="username" onChange={usernameHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input value={age} type="number" id="age" onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>  
  )
}

export default AddUser