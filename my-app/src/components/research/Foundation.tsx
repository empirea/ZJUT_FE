import React from "react";
import { Link } from "react-router-dom";
import HREF from "../../db/hrefConstance";

function Foundation() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>研究组概况</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>&gt;
          <Link to={HREF.RESEARCH}>研究组概况</Link>&gt;
          <Link to={HREF.RESEARCH_FOUNDATION}>已有基础</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.RESEARCH_DIRECTION}>研究方向</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_PLATFORM}>支撑平台</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_FOUNDATION} className="ej-current">
              已有基础
            </Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h1 style={{ textAlign: "center" }}>已有基础</h1>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div className="WordSection1">
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                CSSC研究组长期在城市大数据、社会计算、网络科学与人工智能等领域工作。专业基础扎实、项目背景清晰，对与城市出行画像相关的技术有着比较全面的了解与掌握。有较为丰富的学术积累和项目经验，多年来已经取得一系列研究成果，在国内外均具有一定的影响力。在理论研究、工程应用和人才培养等方面取得了突出的成绩。
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                1） <strong> 理论研究成绩</strong>
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                在智能交通相关领域，沈国江教授发表学术论文50多篇，其中SCI\EI收录30多篇；获得授权国家发明专利10项，软件著作权15项。研究组的研究成果《基于交通大脑的城市广域交通管控一体化关键技术研发及应用》经以清华大学张毅教授为组长的专家评价：项目成果总体达到国内领先水平，在城市广域交通信号控制方案自动生成和管控一体化方面达到国际先进水平。
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/research/foundation1.png" />
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                2） <strong>工程应用成绩</strong>
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                通过产学研合作和成果转化，研究团队的部分研究成果在浙江杭州、云南蒙自、四川成都等地进行了推广应用，实现了城市广域交通一体化管控，有效提升了城市道路交通管控的智能化水平和运行效率，强力保障了2018德清世界地理信息大会和2016年杭州G20峰会等重大活动，为合作企业新增产值近10亿，新增利税收近2亿，取得了显著的社会经济效益。合作成果获得中国智能交通协会科学技术奖二等奖两项。
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/research/foundation2.png" />
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                3） <strong>人才培养成绩</strong>
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                研究组一直坚持科研工作与人才培养相结合，通过科研项目的支持，已经培养了全日制硕、博士研究生30
                余名，并通过与香港城市大学、英国谢菲尔德大学的合作，对研究生进行联合培养。
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
