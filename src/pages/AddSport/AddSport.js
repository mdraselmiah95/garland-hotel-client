import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddSport";
const AddSport = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/sports", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added Successfully");
        reset();
      }
    });
  };
  return (
    <div className="container my-5">
      <h2>Add & Detect Items</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input
            {...register("title", { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />
          <textarea {...register("details")} placeholder="Description" />
          <input {...register("img")} placeholder="image url" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddSport;
