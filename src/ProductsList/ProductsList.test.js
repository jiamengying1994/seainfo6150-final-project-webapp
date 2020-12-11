import React from "react";
import { render } from "@testing-library/react";
import ProductsList from "./ProductsList.jsx";
import { BrowserRouter, Route, Link } from 'react-router-dom';

describe("ProductList test", () => {
  it("renders correctly", () => {
    const al = [{"title": "1","image": "1"},{"title": "2","image": "2"}]
    const { container} = render (
    <BrowserRouter>
      <ProductsList products={al}/>
    </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});