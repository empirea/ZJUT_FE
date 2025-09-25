import React from "react";
import { fetchFlexSlider } from '@/db';

export function FlexSlider() {
  return (
    <div className="sy-td fl">
      <div className="flexslider">
        <ul className="slides">
          {fetchFlexSlider().map((val, idx) => (
            <li>
              <img key={idx} src={val} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div className="td-sm fl">
        <h2>Welcome to Group of City Science & Social Computing</h2>
      </div>
    </div>
  );
}
