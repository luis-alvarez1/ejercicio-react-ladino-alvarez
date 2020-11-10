import React, { useState } from "react";

export const Formulario = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;

  const handleForm = (e) => {
    const { target } = e;
    setForm({
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado!!", form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-end mt-1 mb-1">
          <input value={name} onChange={handleForm} placeholder="Name" />
          <input
            value={email}
            className="ml-3"
            onChange={handleForm}
            placeholder="Email"
          />
          <button type="submit" className="btn btn-outline-primary ml-3">
            Send
          </button>
        </div>
      </form>
    </>
  );
};
