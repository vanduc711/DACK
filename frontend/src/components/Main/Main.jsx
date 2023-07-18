import React, { useRef } from 'react';

const Main = ({ products, createProduct, purchaseProduct }) => {
  const productNameRef = useRef(null);
  const productPriceRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = productNameRef.current.value;
    const price = window.web3.utils.toWei(productPriceRef.current.value.toString(), 'Ether');
    createProduct(name, price);
  };

  return (
    <div id="content">
      <h1 className="text-3xl font-bold">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mr-sm-2">
          <input
            id="productName"
            type="text"
            ref={productNameRef}
            className="form-control"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="form-group mr-sm-2">
          <input
            id="productPrice"
            type="text"
            ref={productPriceRef}
            className="form-control"
            placeholder="Product Price"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      <p> </p>
      <h2>Buy Product</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Owner</th>
            <th scope="col">address</th>
          </tr>
        </thead>
        <tbody id="productList">
          {products.map((product, key) => {
            return (
              <tr key={key}>
                <th scope="row">{product.id.toString()}</th>
                <td>{product.name}</td>
                <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                <td>{product.owner}</td>
                <td>
                  {!product.purchased ? (
                    <button
                      name={product.id}
                      value={product.price}
                      onClick={(event) => {
                        purchaseProduct(event.target.name, event.target.value);
                      }}
                    >
                      Buy
                    </button>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
