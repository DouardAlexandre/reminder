import React, { Component } from 'react';


	

class Board extends Component {
  render() {
    return (
      <div>
         <div className="board">
           <div className="menu">
              <div className="triangle_red_menu"></div>
              <div className="triangle_red_small_menu"></div>
              <div className="rect_red"></div>
              <div className="form_recherche">
                <form onSubmit="">
                  <input id="recherche"  name="recherche" placeholder="Recherche..." type="text" />
                </form>
              </div>
           </div>
        </div>
      </div>
    );
  }
}
    
export default Board;