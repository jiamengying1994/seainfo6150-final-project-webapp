import React from 'react';
import AllProducts from "./AllProducts";
import ProductsList from '../ProductsList/ProductsList';
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

describe("AllProducts test", () => {
  it("renders correctly", () => {
    const al = [{"title": "1","image": "1"}, {"title": "2","image": "2"}]
    const { container} = render (
    <BrowserRouter>
      <ProductsList products={al}/>
    </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});