import React, { useState } from "react";

export const Formulario = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div>
        <input value={name} onChange={handleName} placeholder="Name" />
        <input value={email} onChange={handleEmail} placeholder="Email" />
      </div>
    </>
  );
};
