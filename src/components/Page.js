import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Start from '../pages/Start';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import '../style/start.css';
import '../phonStyle/start.css';
const Page = function () {
  return (
    <>
    <div className="page">
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/portfolio"  component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorPage} />
        </Switch>

    </div>

    </>
  )
    }

    export default Page;