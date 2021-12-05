import React, { Component } from 'react';

import Accordion from "./components/UIExamples/Accoridan/Accordian";
import ProgressSteps from "./components/UIExamples/ProgressSteps/ProgressSteps";
import FiveStarReviews from "./components/UIExamples/FiveStarReviews/FiveStarReviews";
import ZipCodeForm from "./components/UIExamples/ZipCodeForm";
import {UserSuggestions} from "./components/UIExamples/FriendsSuggestions";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="container-hdr">UI-Examples Components</div>
                    <div className="section">
                        <div className="section-hdr">Accordian</div>
                        <Accordion />
                    </div>
                    <div className="section">
                        <div className="section-hdr">Subway Steps</div>
                        <ProgressSteps />
                    </div>
                    <div className="section">
                        <div className="section-hdr">Five Star reviews</div>
                        <FiveStarReviews/>
                    </div>
                    <div className="section">
                        <div className="section-hdr">ZipCode form</div>
                        <ZipCodeForm/>
                    </div>
                    <div className="section">
                        <div className="section-hdr">Friend Suggestion Algo</div>
                        <UserSuggestions/>
                    </div>
                </div>
            </div>
        );
    }
}
