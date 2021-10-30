import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./AddSport.css";
const AddSport = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://intense-reaches-77189.herokuapp.com/sports", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  const url = "https://i.ibb.co/HxQx84d/update.png";
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold itemsDelete my-3 text-success">
        <Typewriter
          options={{
            strings: ["Submit Here For Update :"],
            autoStart: true,
            loop: true,
            delay: 200,
          }}
        ></Typewriter>
      </h2>
      <div className="row align-items-center">
        <div className="col-md-6 p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column"
          >
            <input
              {...register("title", { required: true, maxLength: 20 })}
              placeholder="Title"
              className="mb-3 py-2"
            />
            <textarea
              className="mb-3 py-5"
              {...register("details")}
              placeholder="Description"
            />
            <input
              className="mb-3 py-2"
              {...register("img")}
              placeholder="image url"
            />
            <input className="fw-bold py-2 fs-3 text-success" type="submit" />
          </form>
          <NavLink to="/home" className="d-inline ms-2">
            <button className="btn btn-outline-info mt-2">
              <FontAwesomeIcon icon={faBackward} className="me-2" />
              GO Back Home
            </button>
          </NavLink>
        </div>
        <div className="col-md-6 border p-4">
          <img src={url} alt="update" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AddSport;
