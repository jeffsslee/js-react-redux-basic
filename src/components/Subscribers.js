import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/subscribers/actions";

function Subscribers({ subCount, addSubscriber }) {
  return (
    <div>
      <div>
        <h5>Subscribers component</h5>
      </div>
      <div>
        <p>Subscribers : {subCount}</p>
        <button onClick={() => addSubscriber()}>Subscribe</button>
      </div>
    </div>
  );
}

// mapStateToProps?: Function
const mapStateToProps = (state) => {
  return {
    subCount: state.subCount,
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
  addSubscriber,
  // in ES6, if object {propertyName : valueName} ===> {propertyName}
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
