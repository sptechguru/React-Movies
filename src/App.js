import React from 'react';
import './App.css';
import './index.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
// import Load from './components/Load';
import Login from './accounts/Login';
import Signup from './accounts/Signup';
// import Redux_Cart from './components/Redux_Cart';
import Prodcuts_details from './components/common/Prodcuts_details';
import Movies from './components/Movies/Movies';
import MoviesDetails from './components/Movies/Movies_details';
import Movies_Search from './components/Movies/Movies_Search';

function App() {
  return (
    <>

      {/* <HeaderContainer />
    <HomeContainer /> */}

      <BrowserRouter>
        {/* <SpinnerBox /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/service" component={Services} /> */}
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/movie" component={Movies} />
          {/* <Route path="/products-details/:id" component={Prodcuts_details} /> */}
          <Route path="/movies-details/:id" component={MoviesDetails} />
          <Route path="/search-details/:search" component={Movies_Search} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
