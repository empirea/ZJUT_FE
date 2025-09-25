import React from "react";
import { HREF } from "../../db";
import { Link } from "react-router-dom";

function Recreation() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>组内风采</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.OTHERS}>组内风采</Link>
          &gt;
          <Link to={HREF.OTHERS_RECREATION}>课余生活</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.OTHERS_RECREATION} className="ej-current">
              课余生活
            </Link>
          </li>
          <li>
            <Link to={HREF.OTHERS_LINK}>链接</Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="content-con fl" id="vsb_content">
          <div className="vsb_content">
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "100%" }} src="/images/recreation/2024b/1.jpg"/>
            </div>
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "50%" }} src="/images/recreation/2024b/2.jpg"/>
              <img style={{ width: "50%", paddingLeft: "2em" }} src="/images/recreation/2024b/3.jpg"/>
            </div>
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "100%" }} src="/images/recreation/2024b/4.jpg"/>
            </div>
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "100%" }} src="/images/recreation/2024b/5.jpg"/>
            </div>
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "100%" }} src="/images/recreation/2024b/6.jpg"/>
            </div>
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "100%" }} src="/images/recreation/2024b/7.jpg"/>
            </div>
            <div style={{ justifyContent: "center", display: "flex", margin: "2em 4em" }}>
              <img style={{ width: "100%" }} src="/images/recreation/2024b/8.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Recreation };
