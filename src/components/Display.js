import React from "react";
import { connect } from "react-redux";

function Display({ subCount }) {
  return (
    <div>
      <div>
        <h5>Display component</h5>
      </div>
      <div>
        <p>Subscribers : {subCount}</p>
      </div>
    </div>
  );
}

// mapStateToProps?: Function
const mapStateToProps = ({ rootSubs }) => {
  return {
    subCount: rootSubs.subCount,
  };
};

export default connect(mapStateToProps)(Display);
