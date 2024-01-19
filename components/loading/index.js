import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <div className="loading_center">
        <div class="spinner">
          <div class="spinnerin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
