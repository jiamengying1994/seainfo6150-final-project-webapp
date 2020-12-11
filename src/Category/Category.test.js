import React from "react";
import { render } from "@testing-library/react";
import Category from "./Category.jsx";
import { BrowserRouter, Route, Link } from 'react-router-dom';

describe("Category test", () => {
  it("renders correctly", () => {
    const al = [{"title": "1","image": "1"},{"title": "2","image": "2"}]
    const { container} = render (
    <BrowserRouter>
      <Category categories={al}/>
    </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});