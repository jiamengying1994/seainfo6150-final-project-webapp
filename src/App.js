
import React, {useEffect, useState} from "react";
import { Switch, Route, Link, useRouteMatch  } from "react-router-dom";
import { isEmpty } from "lodash";



import Header from './Header';
import Footer from './Footer';
import Home from "./Home/Home.jsx";
import AllProducts from './AllProducts/AllProducts';
import About from './About/About';
import Error from "./Error/Error.jsx";
import CategoryProducts from './CategoryProducts/CategoryProducts';
import Category from './Category/Category';
import Contact from './Contact/Contact';
import ProductDetail from './ProductDetail/ProductDetail';
import NotFound from './NotFound/NotFound';

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
   const [fetchedData, setFetchedData] = useState([]);

     useEffect(() => {
      const fetchData = async () => {
        // performs a GET request
        const response = await fetch(
          "https://run.mocky.io/v3/88957fa5-ec01-4a80-983a-f6ff0bfabcc7"
        );


        const responseJson = await response.json();

         console.log(responseJson)
        setFetchedData(responseJson);
      };

      if (isEmpty(fetchedData)) {
        fetchData();
      }
    }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <>
      <Header/>
      <Category categories={Object.values(fetchedData.categories)} />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact>
          <AllProducts products={Object.values(fetchedData.data)} />
        </Route>

//        {/* passing parameters via a route path */}
         <Route
         path="/products/:category/:id"
         exact
         render={routerProps => {
         const id = routerProps.match.params.id;
         const product = Object.values(fetchedData.data)[id];
         console.log(product)
         return (
          <ProductDetail product={product} />
          );
          }}
         />

          <Route
                path="/products/:category"
                exact
                render={routerProps => {
                const category = routerProps.match.params.category;
                const productsInCategory = Object.values(fetchedData.data).filter(product =>
                   product.category === category);

                return (
                <CategoryProducts category={category} products = {productsInCategory} />);
                }}
           />


        <Route
          path="/about"
          exact
          render={() => <About content={externalContent} />}
        />
        <Route
           render={() => <NotFound />}
        />

      </Switch>
      <Footer/>
    </>
  );
}

export default App;
