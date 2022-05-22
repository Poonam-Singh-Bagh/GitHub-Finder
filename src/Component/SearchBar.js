import React, { useState } from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Input from "./Input";
import InputButton from "./InputButton";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [display, setDisplay] = useState(true);
  const [username, setUsername] = useState(" ");

  const handleSearchInput = (e) => {
    setUsername(e.target.value);
    e.target.value ? setDisplay(false) : setDisplay(true);
  };

  const navigate = useNavigate();

  const handleSearchUser = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        navigate("/profile", { state: { data: res.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="style">
      <Avatar />
      <Input isDisplay={handleSearchInput} />
      <InputButton
        disabled={display}
        clickHandler={handleSearchUser}
        color="primary"
        child="Search"
      />
    </div>
  );
}

export default SearchBar;
