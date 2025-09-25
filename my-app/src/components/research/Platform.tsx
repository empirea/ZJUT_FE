import React from "react";
import { Link } from "react-router-dom";
import HREF from "../../db/hrefConstance";

function Platform() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>研究组概况</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>&gt;
          <Link to={HREF.RESEARCH}>研究组概况</Link>&gt;
          <Link to={HREF.RESEARCH_PLATFORM}>支撑平台</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.RESEARCH_DIRECTION}>研究方向</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_PLATFORM} className="ej-current">
              支撑平台
            </Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_FOUNDATION}>已有基础</Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h1 style={{ textAlign: "center" }}>支撑平台</h1>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div className="WordSection1">
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                <strong>CSSC研究组</strong>
                所在的学科——计算机科学与技术是浙江省一流学科（A类）和浙江省重点建设高校重点学科。此外，项目依托浙江省可视媒体智能处理技术重点实验室、智能感知与系统教育部工程研究中心和浙江工业大学-浙江浙大中控智能交通协同创新实验室，具备良好的科研环境和软硬件基础。
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                1）
                <strong>
                  CSSC研究组依托的浙江省可视媒体智能处
                  理技术重点实验室、智能感知与系统教育部工程研究中心设备平台
                </strong>
                ，目前已拥有曙光W580-G20 的GPU 服务器，其核心配置包含多颗Intel
                E5-2620 V4 型号的 CPU 和NVIDIA TESLA K8024GB
                型号的GPU；拥有PowerEdge R930（24 盘）的Dell
                服务器，其核心配置包含多颗Xeon E7-4820V4*2 型号的CPU
                以及多台工作站和PC
                机。上述硬件设备支持异构大数据分布式集群环境的搭建，不仅满足大数据环境的图学习分布式要求，也为异构时空网络分析与挖掘提供了实验条件。
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                2）
                <strong>
                  CSSC研究组依托浙江工业大学-浙江浙大中控智能交通协同创新实验室
                </strong>
                ，完成了基于交通大脑的城市广域交通管控一体化关键技术及系统的研究与开发，同时在实验室收集了多个城市全域海量脱敏城市数据，建立了智能城市可视化数据管理系统，该系统能模拟实际车辆轨迹运行和优化，为本项目的研究提供了必要的工程实验环境。
              </span>
            </p>
            <br />
            <p style={{ textAlign: "center" }}>
              <strong>
                浙工大计算机学院-浙大中控信息智能交通协同创新实验室
              </strong>
            </p>
            <br />
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              浙工大计算机学院与浙江浙大中控信息技术有限公司以研究智能交通为目的联合创建的智能交通协同创新实验室。
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/lab/ZJUT-SUPCON_ITCIL.png" />
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <br />
            </p>
            <p style={{ textAlign: "justify", textIndent: "1em" }}>
              <strong>
                三台储存服务器，在服务器中部署了Hadoop+Spark的分布式环境，各服务器的配置如下:
              </strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <strong>主机名：node1</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              系统：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：Intel(R) Core(TM) i7-8700（8核12线程）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              显卡：Radeon HD 8570（1G显存）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>内存：8G</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>硬盘：1T</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <strong>主机名：node2</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              系统：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：Intel(R) Core(TM) i7-8700（8核12线程）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              显卡：Radeon HD 8570（1G显存）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>内存：8G</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>硬盘：1T</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <strong>主机名：node3</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              系统：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：Intel(R) Core(TM) i7-8700（8核12线程）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              显卡：Radeon HD 8570（1G显存）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>内存：8G</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>硬盘：1T</p>
            <p style={{ textAlign: "justify", textIndent: "1em" }}>
              <strong>一台高性能工作站，配置如下：</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              系统：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：2*Intel Xeon Silver 4110/2.1GHz（16核32线程）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              显卡：2*Quadro M4000（8G显存）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              内存：10*16GB
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              机械硬盘： 4TB{" "}
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              固态硬盘： 500GB
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}></p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                3）
                <strong>
                  CSSC研究组与智慧城市相关企业、研究所、交管部门保持长期广泛地联系与合作
                </strong>
                ，不断从工程实际中提炼科学问题，再回到工程实际中检验理论成果的可行性和有效性，促进了理论研究的不断深入。
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Platform };
