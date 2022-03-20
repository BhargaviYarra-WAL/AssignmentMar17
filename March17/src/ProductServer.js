import { useState, useEffect } from "react";
import axios from "axios";
const ProductApp = () => {
  let [prod, setProd] = useState([
    {
      name: "Mens Casual Shirt",
      price: "2300",
      description: "branded",
      category: "clothes",
      status: "available",
    },
  ]);
  useEffect(() => {
    getProds();
  }, []);
  const getProds = () => {
    axios
      .get("/prod")
      .then((res) => {
        setProd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let addProd = (event) => {
    event.preventDefault();
    let prodObject = {
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      category: event.target.category.value,
      status: event.target.status.value,
    };
    axios
      .post("/prod", prodObject)
      .then((res) => {
        getProds(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteProd = (indexToDelete) => {
    axios
      .delete("/prod/" + indexToDelete)
      .then((res) => {
        setProd([]);
      })
      .catch((error) => {
        console.log(error);
      });
    getProds();
  };
  const deleteAll = () => {
    axios.get("/prod/clearall").then((res) => {
      getProds();
    });
  };

  return (
    <div>
      <h2>Products Application</h2>
      <form onSubmit={addProd}>
        <input type='text' name='name' placeholder='productname' />
        <br />
        <input type='number' name='price' placeholder='productprice' />
        <br />
        <textarea name='description' placeholder='About Product' />
        <br />
        <label>Select category</label>
        <br />
        <select name='category'>
          <option value='toys'>Toys</option>
          <option value='clothes'>Clothes</option>
          <option value='food'>Food Items</option>
        </select>
        <br />
        <label>Status</label>
        <br />
        <select name='status'>
          <option value='available'>Available</option>
          <option value='unavailable'>Unavailabe</option>
        </select>
        <br />
        <button className='btn1'>add</button>

        <br />
      </form>
      <button className='btn1' onClick={deleteAll}>
        Delete All
      </button>
      {prod.map((val, index) => {
        return (
          <div className='showp'>
            <b>Product Name:</b>
            {val.name}
            <br />
            <b>Product Price:</b>
            {val.price}
            <br />
            <b>About:</b>
            {val.description}
            <br />
            <b>category:</b> {val.category}
            <br />
            <b>status:</b>
            {val.status}
            <br />
            <button className='btn1' onClick={() => deleteProd(index)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductApp;
