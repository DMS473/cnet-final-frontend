import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import Swal from 'sweetalert2'

function MovieEdit() {
  const navigate = useNavigate();
  //   const URL = "http://192.168.11.145:3000/api";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(0);
  const { id } = useParams();
  // const idmovie = params.id
  //   const [stock, setStock] = useState(0);

  const updateMovie = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/movies/update/${id}`,
        method: "PUT",
        data: {
          title,
          image,
          description,
          GenreId: 1,
          StudioId: 2,
        },
      });
      //   getProducts();
      //   Swal.fire(
      //     'Movies created',
      //     'Movies has been added to the list',
      //     'success'
      //   )
      navigate("/movies");
    } catch (err) {
      alert(err);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateMovie();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Update Movies {id}</h3>
        </div>
        <div className="col-6 mx-auto form-submit">
          <form>
            <div className="mb-3">
              <label>Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input title"
              ></input>
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input image"
              ></input>
            </div>
            <div className="mb-3">
              <label>Description</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input price"
              ></input>
            </div>
            <div className="mb-3">
              <button className="btn btn-success w-100" onClick={submitHandler}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <h1>movie submit</h1> */}
    </div>
  );
}

export default MovieEdit;
