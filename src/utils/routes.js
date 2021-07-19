import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home,About,OurApproach,OurGoals,Partners, Contact, ComingSoon} from '../pages';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/our-approach" exact component={OurApproach} />
            <Route path="/our-goals" exact component={OurGoals} />
            {/* <Route path="/how-you-can-help" exact component={HowYouCanHelp} /> */}
            <Route path="/partners" exact component={Partners} />
            <Route path="/contact" exact component={Contact} />
            <Route component={ComingSoon} />
        </Switch>
    </Router>
);