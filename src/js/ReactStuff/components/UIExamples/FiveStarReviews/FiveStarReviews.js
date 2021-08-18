import React, {Component} from 'react';

class FiveStarReviews extends Component {
    constructor(props){
       super(props);
       this.state = {
           seletedIndex: 0,
           hoveredindex: 0
       };
    }

    fillStars(index, key){
        this.setState({
            [key]: index
        });
    }


    render() {
        return (
            <div id="reviews">
                {
                    [1,2,3,4,5].map((index) => {
                        let className;
                        if (index <= this.state.seletedIndex  || index <= this.state.hoveredindex){
                            className= "yellow";
                        }
                        return (
                            <span key={index}
                                  className={"star "+className}
                                  onMouseLeave={() =>  this.fillStars(0, "hoveredindex")}
                                  onMouseEnter={() => this.fillStars(index, "hoveredindex")}
                                  onClick={() => this.fillStars(index, "seletedIndex")}>

                            </span>
                        );
                    })
                }
            </div>
        );
    }
}

export default FiveStarReviews;