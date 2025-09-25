import React from "react";
import { Link } from "react-router-dom";
import { HREF } from "../../db";

function Platform() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Research</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>&gt;
          <Link to={HREF.RESEARCH}>Research</Link>&gt;
          <Link to={HREF.RESEARCH_PLATFORM}>Support Platform</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.RESEARCH_DIRECTION}>Research Direction</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_PLATFORM} className="ej-current">
              Support Platform
            </Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_FOUNDATION}>Foundation</Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h1 style={{ textAlign: "center" }}>Support platform</h1>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div className="WordSection1">
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                <strong>The discipline of the CSSC research group </strong>
                Computer Science and Technology is a first-class discipline in
                Zhejiang Province (Class A) and a key discipline in Zhejiang
                Province's key universities. In addition, the project relies on
                the Zhejiang Provincial Key Laboratory of Visual Media
                Intelligent Processing Technology, the Engineering Research
                Center for Intelligent Perception and Systems of the Ministry of
                Education, and the Zhejiang University of Technology-Zhejiang
                University SUPCON Intelligent Transportation Collaborative
                Innovation Laboratory, which has a good scientific research
                environment and hardware and software foundation.
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                1)
                <strong>
                  The Zhejiang Provincial Key Laboratory of Visual Media
                  Intelligent Processing Technology and Intelligent Perception
                  and Systems Engineering Research Center Equipment Platform of
                  the Ministry of Education, supported by the CSSC research
                  group
                </strong>
                , currently has Sugon W580-G20 GPU server, and its core
                configuration includes multiple Intel E5s -2620 V4 CPU and
                NVIDIA TESLA K8024GB GPU; Dell server with PowerEdge R930 (24
                disks), its core configuration includes multiple Xeon
                E7-4820V4*2 CPUs and multiple workstations and PCs. The above
                hardware devices support the construction of a heterogeneous big
                data distributed cluster environment, which not only meets the
                distributed requirements of graph learning in a big data
                environment, but also provides experimental conditions for
                heterogeneous spatiotemporal network analysis and mining.
              </span>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                2)
                <strong>
                  The CSSC research group, relying on the Zhejiang University of
                  Technology- Zhejiang University SUPCON Intelligent
                  Transportation Collaborative Innovation Laboratory
                </strong>
                , completed the research and development of key technologies and
                systems for the integration of urban wide-area traffic
                management and control based on the transportation brain, and
                collected many a large amount of desensitized city data across
                the entire city has been established, and a smart city
                visualization data management system has been established. This
                system can simulate actual vehicle trajectory operation and
                optimization, providing the necessary engineering experimental
                environment for the research of this project.
              </span>
            </p>
            <br />
            <p style={{ textAlign: "center" }}>
              <strong>
                School of Computer, Zhejiang University of Technology-Zhejiang
                University Central Control Information Intelligent
                Transportation Collaborative Innovation Laboratory
              </strong>
            </p>
            <br />
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              The Intelligent Transportation Collaborative Innovation Laboratory
              jointly created by the School of Computer Science and Technology
              of Zhejiang University of Technology and Zhejiang University of
              Technology Information Technology Co., Ltd.
            </p>
            <p style={{ textAlign: "center" }}>
              <img src="/images/lab/ZJUT-SUPCON_ITCIL.png" />
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <br />
            </p>
            <p style={{ textAlign: "justify", textIndent: "1em" }}>
              <strong>
                Three storage servers, Hadoop+Spark distributed environment is
                deployed in the server, the configuration of each server is as
                follows:
              </strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <strong> CPU name：node1</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              System：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：Intel(R) Core(TM) i7-8700（8 cores and 12 threads）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Graphics card：Radeon HD 8570（1G memory）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>RAM：8G</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Hard disk：1T
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <strong>CPU name：node2</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              System：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：Intel(R) Core(TM) i7-8700（8 cores and 12 threads）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Graphics card：Radeon HD 8570（1G memory）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>RAM：8G</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Hard disk：1T
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <strong>CPU name：node3</strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              System：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：Intel(R) Core(TM) i7-8700（8 cores and 12 threads）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Graphics card：Radeon HD 8570（1G memory）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>RAM：8G</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Hard disk：1T
            </p>
            <p style={{ textAlign: "justify", textIndent: "1em" }}>
              <strong>
                A high-performance workstation, configured as follows:
              </strong>
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              System：Ubuntu 18.04
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              CPU：2*Intel Xeon Silver 4110/2.1GHz（16 cores and 32 threads ）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              Graphics card：2*Quadro M4000（8G memory）
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              RAM：10*16GB
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>HDD： 4TB</p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              SSD： 500GB
            </p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}></p>
            <p style={{ textAlign: "justify", textIndent: "2em" }}>
              <span style={{ fontFamily: "微软雅黑,sans-serif" }}>
                3)
                <strong>
                  The CSSC research group maintains long-term contact
                </strong>
                , we communicate with smart city related enterprises, research
                institutes, and traffic management departments. And constantly
                extracts scientific issues from engineering practice, Then,
                returns to engineering practice to test the feasibility and
                effectiveness of theoretical results, finally，we promote the
                continuous deepening of theoretical research.
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Platform };
