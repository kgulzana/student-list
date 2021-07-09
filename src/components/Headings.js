import { LESSONS_TITLE } from "../store/constants/lessonsTitle";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { addNewStudentAction } from "../store/actions/students";

export default function Headings({ loading, lesson }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({});

  const toggle = () => setModal(!modal);

  let addStudentHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:1717/students/" + lesson + "/add", request)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data === "string") {
          alert("Error!");
        } else {
          setModal(false);
          dispatch(addNewStudentAction(data));
        }
      });
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="heading row">
      <div className="col-6">
        <h1>{LESSONS_TITLE[lesson]}</h1>
      </div>
      <div className="col-6">
        <button disabled={loading} onClick={toggle} className="btn btn-primary">
          Add New Student
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <h3>Add new student</h3>
          <form onSubmit={addStudentHandler}>
            <div className="mb-3">
              <label for="name" className="form-label">
                Fullname
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
                value={form.name}
              ></input>
            </div>
            <div className="mb-3">
              <label for="level" className="form-label">
                Level
              </label>
              <input
                type="text"
                className="form-control"
                id="level"
                name="level"
                onChange={handleChange}
                value={form.level}
              ></input>
            </div>
            <div className="mb-3">
              <label for="score" className="form-label">
                Average score
              </label>
              <input
                type="text"
                className="form-control"
                id="score"
                name="score"
                onChange={handleChange}
                value={form.score}
              ></input>
            </div>
            <div className="mt-3">
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
