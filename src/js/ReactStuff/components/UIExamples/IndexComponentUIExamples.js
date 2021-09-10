import React, { Component } from 'react';
import Accordion from "./Accoridan/Accordian";
import ProgressSteps from "./ProgressSteps/ProgressSteps";
import FiveStarReviews from "./FiveStarReviews/FiveStarReviews";


class IndexComponentUIExamples extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default IndexComponentUIExamples;