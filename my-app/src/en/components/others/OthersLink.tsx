import React from "react";
import { Link } from "react-router-dom";
import { HREF } from "../../db";

function OthersLink() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Trends</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>&gt;
          <Link to={HREF.OTHERS}>Trends</Link>
          &gt;
          <Link to={HREF.OTHERS_LINK}>Links</Link>
        </div>
      </div>
      <div className="cy fl">
        <div className="cy-title fl">
          <ul>
            <li>
              <Link to={HREF.OTHERS}>Recreation</Link>
            </li>
            <li>
              <Link to={HREF.OTHERS_LINK} className="ej-current">
                Links
              </Link>
            </li>
          </ul>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div style={{ margin: "2em 2em" }}>
            <p>
              <strong>Alpha Lab of Dalian University of Technology:</strong>
              <br/>&emsp;
              <a href="http://thealphalab.org/" target="_blank">
                http://thealphalab.org/
              </a>
            </p>
            <p>
              <strong>Zhejiang University of Technology:</strong>
              <br/>&emsp;
              <a href="http://www.zjut.edu.cn/" target="_blank">
                http://www.zjut.edu.cn/
              </a>
            </p>
            <p>
              <strong>
                Zhejiang Zhejiang University Central Control Information
                Technology Co., Ltd.:
              </strong>
              <br/>&emsp;
              <a href="http://www.supconit.com/" target="_blank">
                http://www.supconit.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { OthersLink };
