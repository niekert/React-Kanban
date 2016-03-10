import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import Lanestore from '../stores/Lanestore';

class App extends React.Component {
  render() {
    return (
      <div>
      <button className="add-lane" onClick={this.addLane}>+</button>
      <AltContainer
        stores={[Lanestore]}
        inject={{
          lanes: () => Lanestore.getState().lanes
        }}>
        <Lanes />
      </AltContainer>
      </div>
    );
  }

  addLane() {
    LaneActions.create({name: 'New lane', editing: true});
  }
}

export default App;
