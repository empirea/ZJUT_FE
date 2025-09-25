import React from "react";
import { HREF } from "../../db";

function AboutUs() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>联系我们</h3>
        <div className="dqwz fr">
          当前位置：
          <a href={HREF.INDEX}>主页</a>
          &gt;
          <a href={HREF.ABOUTUS}>关于我们</a>
        </div>
      </div>
      <div className="content fl">
        <div className="content-con fl">
          <div id="vsb_content">
            <h1
              style={{
                margin: "15px auto 50px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              关于我们
            </h1>
            <div
              style={{ textIndent: "2em", fontFamily: "微软雅黑, sans-serif" }}
            >
              <p>
                <strong>
                  欢迎来到浙江工业大学城市科学与社会计算研究小组。
                </strong>
              </p>
              <p>
                在对城市空间中各种来源生成的大数据和异构数据进行采集，集成，分析的基础上，我们通过计算机科学解决了城市面临的问题。
              </p>
              <p>
                我们的目标是和而不同； 尊重不同的人格； 提倡勤奋与合作；
                接受变化和差异； 承认汗水和个人成就。
              </p>
              <p>我们有一系列的创新研究成果，顶级期刊和会议论文，各种奖项。</p>
              <p>
                我们有舒适的学习和工作环境，充足的科研经费，团结友爱的实验室氛围。
              </p>
              <p>
                <strong>实验室全称：</strong>
                城市科学与社会计算@浙江工业大学
              </p>
              <p>
                <strong>地址：</strong>
                杭州市西湖区留和路288号计算机楼B311
              </p>
              <p>
                <strong>通信负责人：</strong>
                <a href="mailto:xjkong@ieee.org">xjkong@ieee.org</a>
              </p>
              <p>
                <strong>网址（网站）：</strong>
                <a href="http://www.cssclab.cn">http://www.cssclab.cn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { AboutUs };
