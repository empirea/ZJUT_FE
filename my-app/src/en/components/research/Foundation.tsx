import React from "react";
import { Link } from "react-router-dom";
import { HREF } from "../../db";

function Foundation() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Research</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>&gt;
          <Link to={HREF.RESEARCH}>Research</Link>&gt;
          <Link to={HREF.RESEARCH_FOUNDATION}>Foundation</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.RESEARCH_DIRECTION}>Research Direction</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_PLATFORM}>Support Platform</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_FOUNDATION} className="ej-current">
              Foundation
            </Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h1 style={{ textAlign: "center" }}>Foundation</h1>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div className="WordSection1">
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                The CSSC research group has long been working in the fields of
                urban big data, social computing, network science and artificial
                intelligence. The research group has a solid professional
                foundation and clear project background, and has a comprehensive
                understanding and mastery of the technology related to urban
                travel portraits. It has relatively rich academic accumulation
                and project experience, has achieved a series of research
                results over the years, and has a certain influence at home and
                abroad. Outstanding achievements have been made in theoretical
                research, engineering application, and talent training.
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                1) <strong> Theoretical research results</strong>
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                In the field of intelligent transportation, Professor Shen
                Guojiang has published more than 50 academic papers, of which
                more than 30 are collected by SCI\EI; And has obtained 10
                national invention patents and 15 software copyrights. "Research
                and application of key technologies for the integration of urban
                wide-area traffic management and control based on the traffic
                brain",the research result of the research group, was evaluated
                by an expert led by Professor Zhang Yi of Tsinghua University:
                the overall project results have reached the leading level in
                the country, and the signal control scheme has reached the
                international advanced level in terms of automatic generation
                and integration of management and control.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/research/foundation1.png" />
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                2) <strong>Engineering application achievements</strong>
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                Through industry-university-research cooperation and the
                transformation of results, some of the research results of the
                research group have been promoted and applied in Hangzhou,
                Mengzi, Yunnan, Chengdu, Sichuan, etc., realizing integrated
                management and control of urban wide-area transportation, and
                effectively improving the intelligence of urban road traffic
                management and control the level of globalization and
                operational efficiency have strongly guaranteed major events
                such as the (2018) Deqing World Geographic Information
                Conference and the 2016 Hangzhou G20 Summit. It has added nearly
                1 billion new output value to cooperative enterprises and nearly
                200 million new profits and taxes, and has achieved significant
                social and economic benefits . The cooperation results won two
                second prizes of the Science and Technology Award of China
                Intelligent Transportation Association.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/research/foundation2.png" />
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                3) <strong>Talent training achievements</strong>
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                The research team has always adhered to the combination of
                scientific research and talent training. Through the support of
                scientific research projects, it has trained more than 30
                full-time master and doctoral students. It has also conducted
                joint training of postgraduates through cooperation with the
                City University of Hong Kong and the University of Sheffield in
                the United Kingdom.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/research/foundation3.png" />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Foundation };
