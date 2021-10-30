import React, { useEffect, useState } from "react";
import "./ManageSports.css";
const ManageSports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sports")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/sports/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted");
          const remaining = sports.filter((data) => data._id !== id);
          setSports(remaining);
        }
      });
  };

  return (
    <div className="my-5">
      <h2>This is ManageSports{sports.length}</h2>
      <div className="row container text-center mx-auto">
        {sports?.map((item) => (
          <div key={item._id} className="col-md-6 col-lg-4 gy-4">
            <div
              className="card p-2 text-center shadow"
              style={{ height: "490px" }}
            >
              <img src={item?.img} className="rounded img-fluid" alt="photos" />
              <div className="card-body">
                <h4 className="card-title py-3">{item?.title}</h4>
                <p className="">{item?.details}</p>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-outline-danger"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSports;
