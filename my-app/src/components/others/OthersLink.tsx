import React from "react";
import { Link } from "react-router-dom";
import { HREF } from "../../db";

function OthersLink() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>组内风采</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>&gt;
          <Link to={HREF.OTHERS}>组内风采</Link>
          &gt;
          <Link to={HREF.OTHERS_LINK}>链接</Link>
        </div>
      </div>
      <div className="cy fl">
        <div className="cy-title fl">
          <ul>
            <li>
              <Link to={HREF.OTHERS}>课余生活</Link>
            </li>
            <li>
              <Link to={HREF.OTHERS_LINK} className="ej-current">
                链接
              </Link>
            </li>
          </ul>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div style={{ margin: "2em 2em" }}>
            <p>
              <strong>大连理工大学阿尔法实验室：</strong>
              <br/>&emsp;
              <a href="http://thealphalab.org/" target="_blank">
                http://thealphalab.org/
              </a>
            </p>
            <p>
              <strong>浙江工业大学：</strong>
              <br/>&emsp;
              <a href="http://www.zjut.edu.cn/" target="_blank">
                http://www.zjut.edu.cn/
              </a>
            </p>
            <p>
              <strong>浙江浙大中控信息技术有限公司：</strong>
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
