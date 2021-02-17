import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from './Avatar'
import Input from './Input'
import InputButton from './InputButton'
import history from "./history";

function SearchBar() {
    const [display, setDisplay] = useState(true)
    const [user, setUser] = useState()
    const [username, setUsername] = useState(' ')

    const handleSearchInput = (e) => {
        setUsername(e.target.value)
        console.log(username)
        e.target.value ? setDisplay(false) : setDisplay(true)
    }

    const handleSearchUser = () => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                setUser(res.data)
                console.log(res.data, "response")
                history.push({ pathname: "/profile", userData: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="style">
            <Avatar  />
            <Input isDisplay={handleSearchInput}/>
            <InputButton disabled={display} clickHandler={handleSearchUser} color="primary" child="Search"/>
        </div>
    )
}

export default SearchBar