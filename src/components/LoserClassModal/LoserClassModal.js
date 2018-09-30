import React, {Component} from "react";
import "./LoserClassModal.css";
import InnerModal from '../InnerModal'
import loser from "../../loser.json"

class LoserClassModal extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        loser
    }

    // random = id =>{
    //     const loser = 
    //     this.state.loser.filter(pickRandom => pickRandom.id!==id);
    //     this.setState({loser});

           // var randomNum=Math.floor(Math.random()*5);
        // console.log(randomNum);

       //www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php

    // }

      random = number =>{
        var number=Math.floor(Math.random()*5);
        const loser = 
        this.state.loser.filter
        (loserRand => loserRand.number===number);
        this.setState({loser});   
    }

    
    render() {
        return (
            <div>
                    <InnerModal 
                    random={this.random}
                    image={this.state.loser}
                
                 />
          
            </div>

        )
    } 




    // render() {
    //     return (
    //         <div>
    //             {this.state.loser.map(pickRandom => 
    //                 (
                        
    //                 <InnerModal 
    //                 image={pickRandom.image}
    //                 id={pickRandom.id}
    //                  message={pickRandom.message} />
    //              )

    //             )
                
    //             }
    //         </div>

    //     )
    // } 
}

export default LoserClassModal;
