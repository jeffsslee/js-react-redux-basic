import React, { useState } from "react";
import { connect } from "react-redux";
// import { addView } from "../redux/views/actions";
import { addView } from "../redux"; // "../redux/index.js"

function Views({ viewCount, addView }) {
  const [addAmount, setaddAmount] = useState(1);
  return (
    <div>
      <div>
        <h5>Views component</h5>
      </div>
      <div>
        <p>View Count : {viewCount}</p>
        <input
          className="me-2"
          type="number"
          value={addAmount}
          onChange={(e) => setaddAmount(e.target.value)}
        />
        <button onClick={() => addView(addAmount)}>ADD View</button>
      </div>
    </div>
  );
}

// mapStateToProps?: Function
const mapStateToProps = ({ rootViews }) => {
  return {
    viewCount: rootViews.viewCount,
  };
};
// mapDispatchToProps?: Function | Object
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

// Object Type
const mapDispatchToProps = {
  addView: (number) => addView(number),
  // in ES6, if object {propertyName : valueName} ===> {propertyName}
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
