import React, {Component} from 'react';

class ProgressSteps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: [
                {
                    text: 'Step1',
                    isCurrent: false
                },
                {
                    text: 'Step2',
                    isCurrent: true
                },
                {
                    text: 'Step3',
                    isCurrent: false,
                    highestStep: true
                },
                {
                    text: 'Step4',
                    isCurrent: false
                },
                {
                    text: 'Step5',
                    isCurrent: false
                }
            ],
            currentIndex: 0
        };
    }

    render() {
        const steps = this.state.steps;
        const stepsWidth =  100 / steps.length;
        let highestIndex = 0;

        for (let i = 0; i < steps.length; i++) {
            if (steps[i].highestStep) {
                highestIndex = i;
            }
        }

        return (
            <div className="progress-steps container">
                <ul>
                    {steps.map((step, index) => {
                            return (
                                <li key={index} className={"step " + (index <= highestIndex ? 'visited ' : 'future ') + (step.isCurrent ? 'current' : '')} style={{width: `${stepsWidth}%`}}>
                                    <div className="icon-div icon">

                                    </div>
                                    <div className="txt">{step.text}</div>
                                </li>
                            );
                        }
                    )}
                    <div className="clear"></div>
                </ul>
            </div>
        );
    }
}

export default ProgressSteps;