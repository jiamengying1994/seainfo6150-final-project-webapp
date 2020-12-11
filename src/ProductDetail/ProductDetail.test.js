import React from "react";
import { render } from "@testing-library/react";
import ProductDetail from "./ProductDetail.jsx";
import { BrowserRouter, Route, Link } from 'react-router-dom';

describe("ProductDetail test", () => {
  it("renders correctly", () => {
    const al = [{"title": "1","image": "1"},{"title": "2","image": "2"}]
    const { container} = render (
    <BrowserRouter>
      <ProductDetail product={al}/>
    </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});