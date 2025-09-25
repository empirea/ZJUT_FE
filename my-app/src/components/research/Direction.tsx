import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import HREF, { RESEARCH } from "../../db/hrefConstance"

function Direction() {
  const { id } = useParams<{ id: string }>();
  if (id && (Number(id) < 1 || Number(id) > 5)) {
    return <></>;
  }
  const activeItem = id ? Number(id) : 1;

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>研究组概况</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>&gt;
          <Link to={HREF.RESEARCH}>研究组概况</Link>&gt;
          <Link to={HREF.RESEARCH_DIRECTION}>研究方向</Link>&gt;
          {
            [
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/1`}>城市计算</Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/2`}>智能交通</Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/3`}>社会计算</Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/4`}>移动计算</Link>,
              <Link to={`${HREF.RESEARCH_DIRECTION_PART}/5`}>自然语言处理</Link>,
            ][activeItem - 1]
          }
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.RESEARCH_DIRECTION} className="ej-current">
              研究方向
            </Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_PLATFORM}>支撑平台</Link>
          </li>
          <li>
            <Link to={HREF.RESEARCH_FOUNDATION}>已有基础</Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="Publications-title fl">
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/1`}
                title="城市计算"
                className={activeItem === 1 ? "Publications-current" : ""}
              >
                城市计算
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/2`}
                title="智能交通"
                className={activeItem === 2 ? "Publications-current" : ""}
              >
                智能交通
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/3`}
                title="社会计算"
                className={activeItem === 3 ? "Publications-current" : ""}
              >
                社会计算
              </Link>
            </li>
            {/*<li>*/}
            {/*  <Link*/}
            {/*    to={`${HREF.RESEARCH_DIRECTION_PART}/4`}*/}
            {/*    title="情感计算"*/}
            {/*    className={activeItem === 4 ? "Publications-current" : ""}*/}
            {/*  >*/}
            {/*    情感计算*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/4`}
                title="移动计算"
                className={activeItem === 4 ? "Publications-current" : ""}
              >
                移动计算
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.RESEARCH_DIRECTION_PART}/5`}
                title="自然语言处理"
                className={activeItem === 5 ? "Publications-current" : ""}
              >
                自然语言处理
              </Link>
            </li>
          </ul>
        </div>
        {[<Part1 />, <Part2 />, <Part3 />,<Part4 />,<Part5 />][activeItem - 1]}
      </div>
    </React.Fragment>
  );
}

export { Direction };

function Part1() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          本研究组自成立至今，承担了大量的科研任务，积累了较为深厚的城市计算、计算社会科学、智能交通相关研究工作，有较丰富项目经验，多年来已经取得了一系列研究成果，主持了多项国家级项目，发表和出版了一系列学术论文和著作，获得多项专利授权和省部级科研奖项，在国内外具有一定的影响力。
        </p>
        <br />
        <h1 style={{ textAlign: "center" }}>
          <strong>城市计算</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          城市计算核心问题主要包括四个方面：城市感知、海量异构数据的管理、异构数据的协同计算、结合了虚拟和实际数据的混合系统在物理和虚拟世界中来回传播。
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          本研究组在以下几个方面等卓有成果:
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1）本研究组聚焦城市时空数据挖掘与处理技术，创新性地提出 SHTL 框架，巧妙融合链接预测与城市流量预测任务，以空间同质性为桥梁，为城市流量预测中源知识的合理迁移提供全新视角与解决方案，有效缓解数据稀缺难题，提升预测精度，推动城市计算领域发展(Knowledge and Information Systems 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2）本研究组专注于时空轨迹数据挖掘与异常检测技术的研究，提出了基于动态网络表示学习的无监督轨迹异常检测方法，通过巧妙结合车辆社交网络特性与动态网络嵌入技术，有效解决了传统方法在处理时空数据时的不均衡难题(IEEE
          Transactions on Vehicular Technology 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          3）本研究组提出了一种基于分层序列建模的无偏异常轨迹检测方法（HS-UATD），通过结合四叉树分层结构、图变换器编码和高斯分布建模，有效捕获轨迹数据中丰富的时空模式及其空间密度分布。本研究组聚焦于解决现有轨迹检测方法在信息学习和数据偏差方面的局限性，系统性地从轨迹的空间层次信息和序列依赖关系出发，构建了轨迹图并引入无监督学习框架，显著提升了检测精度(IEEE
          Transactions on Consumer Electronics 2024)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          4）本研究组聚焦于时空轨迹数据挖掘技术，针对用户长短期偏好对POI推荐的双重影响这一关键问题，创新性地提出了DCLS双对比学习框架。通过构建用户自身长短期轨迹对比视角和不同用户短期轨迹对比视角，深度挖掘轨迹间的依赖关系。同时引入多类别注意力融合模块，自适应地整合长短期偏好与时空依赖性，显著提升了模型在三个真实世界数据集上的推荐性能，有力地推动了时空轨迹推荐技术的发展(CogSCI 2024)；
        </p>
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  3）本研究组提出以人类行为与时空轨迹数据挖掘和处理技术方面的研究为基础，较系统地综述了移动众包技术在智慧城市中的应用，从全新视角总结了MCS在智能城市中的广泛和多样化的应用，例如智能导航、智慧生活、公共服务和智慧交通(IEEE*/}
        {/*  Internet of Things Journal 2019)；*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  4）本研究组提出基于浮动车数据和城市功能区的划分，构建出社会车辆出行的交通仿真场景，通过实现北京市社会车辆出行的场景验证了该方法的有效性，该方法具有很强的通用性，可适用于全世界的主要大城市(IEEE*/}
        {/*  Transactions on Vehicular Technology 2018)；*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  5）本研究组提出分析浮动车数据，得到出租车乘客的轨迹信息，挖掘这些轨迹所跨越的不同城市功能区，为出租车司机推荐活动区域和轨迹，从而减少空乘率，提高收益(IEEE*/}
        {/*  Transactions on Industrial Informatics 2017)。*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  6）本研究组通过在图卷积网络的嵌入空间上聚类，提出了一种无监督的商业区发现框架，以解决商业区发现问题。首先，所提出的框架通过图卷积网络根据地理相似性聚合人类移动特征。其次，基于图卷积网络的嵌入空间，应用层次聚类来挖掘隐藏在不同人类模式中的潜在功能区域。最后通过核密度估计，获得聚类结果的语义标签，以发现潜在的商业区。*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  7）本研究组提出了一种基于时空成本组合的出租车驾驶欺诈检测框架。首先，确定车辆与协同车联网(C-IoV)中隐性交互、协作的其他车辆和兴趣点(POI)，并构建基线轨迹模型以确定典型的轨迹分布。其次，使用统计模型计算出行分布、出行时间和出行成本以检测异常轨迹。最后我们可以结合对异常道路环境的感知来挖掘异常轨迹形成的根本成因。*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "center" }}>*/}
        {/*  <img src="/images/research/p5.png" />*/}
        {/*</p>*/}
      </div>
    </div>
  );
}

function Part2() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <h1 style={{ textAlign: "center" }}>
          <strong>智能交通</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  <strong>智能交通信号灯控制：</strong>*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  本研究组针对交通态势现状及发展趋势，分别面向拥堵区域和非拥堵区域提出了交通控制子区动态划分方法，以及子区协调路径的自动识别算法。构建了面向复杂场景的子区信号控制方案生成器，实现了基于多目标优化的方案生成和基于专家经验的方案生成。在此基础上，提出了基于方案知识库训练迭代的AI控制方法，实现了各类特定复杂场景中信号控制方案的自动优化和匹配。*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  <strong>智能交通协同管理：</strong>*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  本研究组利用融合处理后的各类交通特征参数，建立了多源城市交通事件驱动的交通指挥调度与信号协同管控模型。在指挥调度模型框架内，采用AI视频全域感知识别技术、事件预判分析技术、实时调度优化技术进行城市事件综合指挥与协同管理。针对特种车辆的城市特种任务需求，研究路径规划诱导技术、轨迹追踪预测技术、信号协同优化技术和全局规划调度技术，保障应急车辆快速顺畅通行。*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "center" }}>*/}
        {/*  <img src="/images/research/2020Emergency.png" />*/}
        {/*</p>*/}
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <strong>1）智能交通异常事件识别：</strong>
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          Mengmeng Wang, Zeyi Huang, Xiangjie Kong, Guojiang Shen, Guang Dai, Jingdong Wang, and Yong Liu. Action Detail Matters: Refining Video Recognition with Local Action Queries. Computer Vision and Pattern Recognition (CVPR). 2025.
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          本研究基于视频模型的车辆目标运动状态估计技术，融合全局时空特征和局部动作细节，引入可学习的运动状态查询向量，构建多目标车辆轨迹关联网络，利用视频模型实现长时序运动轨迹建模，通过3D时空卷积适配器捕获车辆运动的速度-加速度时空关联特征。实现车辆目标运动状态识别，进一步设计双流特征交互模块，自适应聚焦车辆转向、急刹等关键区域的视觉特征，实现毫秒级交通异常事件的识别。
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <strong>2）智能交通3D单目标跟踪：</strong>
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          Mengmeng Wang, Haonan Wang, Yulong Li, Xiangjie Kong, Jiaxin Du, Feng Xia, and Guojiang Shen. TrackAny3D: Transferring Pretrained 3D Models for Category-unified 3D Point Cloud Tracking. International Conference on Computer Vision (ICCV). 2025.
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          本研究组专注于三维点云智能感知与处理领域的前沿研究，提出了 TrackAny3D 框架，创新性地将大规模预训练 3D 模型应用于跨品类统一 3D 点云单目标跟踪任务，通过引入参数高效适配器与几何专家混合架构，有效解决了跨品类几何差异难题，显著提升了模型的泛化能力与实时性，为自动驾驶和移动机器人等领域提供了更高效、通用的 3D 目标跟踪解决方案。
        </p>
      </div>
    </div>
  );
}

function Part3() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <h1 style={{ textAlign: "center" }}>
          <strong>社会计算</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <strong>
            社会数据，信号和智能向社会智慧的转化和量化是社会计算的核心目标。
          </strong>
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1）本研究组提出即插即用的子图学习（SGL）方法，通过子图分区模块（SGPM）利用可学习内存向量选组相似节点，将图划分成小子图来减少内存开销，子图特征聚合模块（SGFAM）则平均不同子图节点特征以减轻特征冗余。在四个流量网络数据集的实验表明，SGL可显著降低内存开销，平均GPU内存降低56.4%，且预测性能依旧稳健(International Joint Conference on Artificial Intelligence 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2）本研究组提出模式匹配动态内存网络（PM-DMNet），通过对比存储矩阵与当前状态提取流量模式，降低计算复杂度至 O（N）。还引入 RMP 和 PMP 预测法，PMP 中的转移注意力机制可对齐历史特征与目标状态，提升预测准确度，实验表明该模型优于现有基准(IEEE
          Transactions on Intelligent Transportation Systems 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          3）本研究组提出 LLM-TPF 框架，利用个性和共性融合增强时间序列预测。在频域提取周期性特征，用文本原型指示时间趋势；在时域设计提示引导模型理解全局信息，且通用性融合机制聚合跨维度异构信息，三种语言模型独立处理不同类型信息。大量实验表明，LLM-TPF 性能卓越，在零样本场景泛化能力非凡，是强大的时间序列预测工具(International Joint Conference on Artificial Intelligence 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          4）本研究组引入自适应邻域增强层（ANEL）用以应对 TKGC 模型性能受 TKG 稀疏问题损害的状况。先通过基础模型导出初始实体嵌入，再经潜在关系模块揭示实体间隐藏语义关系来丰富显式关系。同时，ANEL 依实体关系结构动态校准潜在信息影响，使连接少的实体多受益、连接密集实体少依赖潜在增强，提升稀疏实体表示质量且保障表示精确弹性(World Wide Web 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          5）本研究组以多源时空数据融合技术为基础，创新性地提出了融合多视角超图对比学习的不确定性感知交通风险预测框架（TarU）。该框架通过动态超图结构建模城市全域语义关联，利用对比学习策略挖掘稀疏数据的潜在特征，并采用零膨胀负二项分布量化事故风险的不确定性，有效解决了交通数据稀疏性、类别不平衡及时空分布偏差等关键难题(Information Fusion 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          6）本研究组针对新媒体时代信息扩散的新特征，提出了一个基于图神经网络和知识图谱的广义信息扩散模型（K-BID），系统性地解决了传统模型在处理广义信息扩散场景时面临的数据稀疏、时间关联弱和用户偏好模糊等挑战。本研究还创新性地构建了两阶段“匹配与排序”框架，通过语义交叉单元和图注意力网络融合语义与社交图谱信息，显著提升了信息扩散预测的准确性(EXPERT SYSTEMS WITH APPLICATIONS 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          7）本研究组长期致力于智能交通系统中的数据补全与处理研究，深入探索了交通数据缺失值的填补方法与技术路径。基于对多种交通数据的特点和缺失模式的分析，系统性地总结了插值、统计学习与预测三大类填补方法，为智能交通领域提供了全面且深入的理论支持。同时，本研究组还对现有的公共数据集进行了细致的分类整理，并提出了未来研究的方向，旨在推动智能交通系统中数据处理技术的进一步发展与应用(IEEE Transactions on Intelligent Transportation Systems 2024)；
        </p>
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  3）本研究组提出一种基于会议闭包的可持续合作者推荐方法，通过学者参会认识的新合作者概率，提出量化学术会议对学术合作的具体方法，通过引入会议闭包关系和合作强度，构建加权的学术合作网络，利用重启型随机游走算法，计算目标学者和其他学者的相似度，进而对目标学者进行合作者推荐(IEEE*/}
        {/*  Transactions on Computational Social Science 2019)；*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  4）本研究组提出融合文本和结构的基于网络表示学习的论文推荐方法：首先将论文的文本信息通过文本向量表示生成论文文本向量用以找到具有相似研究内容的论文，接着将引用网络中隐藏的结构特征转化为向量并找到具有相似网络拓扑结构的论文，将文本相似论文和结构相似论文与目标论文连接重构引用网络，然后通过网络表示学习得到论文的矢量表示，最后根据论文向量之间的相似度生成推荐列表(IEEE*/}
        {/*  Transactions on Emerging Topics in Computing 2018)；*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  5）本研究组提出一种基于学术年龄的学术合作动态演化分析方法，能够更全面的揭示学术合作机制，帮助政策制定者制定新的政策，以促进不同学术年龄的学者之间的合作，特别是帮助青年学者更快的融入学术社会(Scientometrics*/}
        {/*  2017)。*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  6）本研究组提出了新颖的大学分析框架(UPF)，该框架包含一个个新颖的循环深度聚类模型（Recurrent-DC），用于学习深度表征和聚类；在该框架中，聚类算法中的连续操作表示为循环过程中的步骤，堆叠在堆叠自动编码器 (SAE) 输出的表示之上。该框架可以很好的进行大学学科分析。（Future Generation Computer Systems）*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  7）本研究组提出了一种基于边缘计算的口罩识别框架(ECMask)，该框架包含三个主要阶段：视频恢复、人脸检测和口罩识别，该框架可以很好的检测出行人是否戴口罩，可以很好的帮助预防公共流行病，如COVID-19。（IEEE Internet of Things Journal）*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  8）本研究组提出了一种基于异构移动众包的公交分析方案，该方案设计了一个基于MCS的公交数据生成和收集方法以克服数据稀缺的问题，同时我们提出了多约束进化算法来优化用户的旅行路线。该方案可以很好的满足旅客的出行需求（ IEEE Transactions on Industrial Informatics）*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  9）本研究组提出了一种基于联邦学习的车牌识别框架（FedLPR），此外，本研究组还提出了一种倾斜车牌校正算法以提高车牌字符识别的准确性，该框架可以在保护用户隐私的同时具有较高的车牌识别准确率，并且其通信成本是可接受的。(EEE Transactions on Industrial Informatics)*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "justify", textIndent: "2em" }}>*/}
        {/*  10）本研究组提出了一种基于联邦学习（FedVCP）的车辆协同定位（CP）系统，该系统利用迁移学习来消除车辆定位的个体差异，并且利用联邦学习解决CP隐私问题。该系统能充分利用社交物联网（IoT）和协同边缘计算（CEC）的潜力，在提供高精准定位校正的同时保证用户隐私。（EEE Transactions on Computational Social Systems）*/}
        {/*</p>*/}
        {/*<p style={{ textAlign: "center" }}>*/}
        {/*  <img src="/images/research/p17.png" />*/}
        {/*</p>*/}
      </div>
    </div>
  );
}

// function Part4() {
//   return (
//     <div className="content-con fl" id="vsb_content">
//       <div className="WordSection1">
//         <h1 style={{ textAlign: "center" }}>
//           <strong>情感计算</strong>
//         </h1>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//           <br />
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//           <strong>
//           情感计算旨在通过赋予计算机识别、理解和表达人的情感的能力，使得计算机具有更高的智能。
//           </strong>
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//         1）细粒度文本情感分析：本研究组提出一种多尺度融合文本跨度特征的评价三元组抽取方法。
//         利用不同卷积核大小的卷积神经网络提取不同跨度下的局部特征。
//         并设计了一个简单的跨度感知表示选择机制用于更好的获取跨度表示，从而更好地抽取评论中的评价三元组（评价对象、评价词、情感极性）。
//         </p>
//         <p style={{ textAlign: "center" }}>
//           <img src="/images/research/p18.png" />
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//         2）房地产领域用户画像：针对房地产企业传统宣传方式存在的投资力度大但效果不明显的问题，
//         本研究组提出一种基于信息提取和多属性支持决策的房地产买家画像建模方法。
//         通过抽取非结构化文本中的关键短语以及匹配人工构造的模版，
//         实现真实场景下非结构化数据到结构化数据的转变。
//         采用专家知识和基于熵的权重分配算法来计算不同属性相对不同特征的重要程度，
//         构造特定房地产买家的特征表示，从而充分挖掘房地产买家之间隐含的异质关系，
//         最终实现房地产买家画像的建模，有效地帮助房地产企业进行精准营销。
//         </p>
//         <p style={{ textAlign: "center" }}>
//           <img src="/images/research/p19.png" />
//         </p>
//         <p style={{ textAlign: "justify", textIndent: "2em" }}>
//         3）文本生成：由于语料库的稀缺以及人工标记的难度大，文本生成可以很好的解决这个问题。
//         </p>
//       </div>
//     </div>
//   );
// }

function Part4() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <h1 style={{ textAlign: "center" }}>
          <strong>移动计算</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1）本研究组针对联邦图学习中数据和模型异质性难题，创新性地提出了基于结构熵和原型聚类的SEFGL框架。通过结构熵优化图结构，引入虚拟节点增强少数类节点表示，同时在服务器端依据结构熵相似性聚合客户端数据生成个性化原型，显著提升了模型对数据和模型异质性的适应性(Information Sciences 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2）本研究组针对空中书写识别系统的标签稀缺与隐私保护难题，提出了联邦自适应伪标签选择（FedAPS）框架。该框架融合历史本地模型、全局模型及动态词分值推荐，实现精准伪标签生成，有效利用未标注数据(IEEE Transactions on Consumer Electronics 2024)；
        </p>
      </div>
    </div>
  );
}

function Part5() {
  return (
    <div className="content-con fl" id="vsb_content">
      <div className="WordSection1">
        <h1 style={{ textAlign: "center" }}>
          <strong>自然语言处理</strong>
        </h1>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          <br />
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          1）本研究组致力于自然语言处理领域的研究，在 Aspect Sentiment Triplet Extraction（ASTE）任务中取得重要进展。通过创新性地提出 DiffuSyn 框架，融合扩散模型与句法依赖分析技术，解决了传统方法在处理复杂情感分析任务时面临的边界不准确和多词短语提取困难等问题。该框架不仅显著提升了情感分析的准确性，还优化了解码效率，为细粒度情感分析领域提供了新的研究思路和解决方案(IEEE Transactions on Audio Speech and Language Processing 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          2）本研究组聚焦于多模态情感分析领域，针对现有融合方法面临的信息冗余与模态异质性难题，创新性地提出基于单模态标签生成与模态分解（ULMD）的多模态情感分析方法。本研究组成功构建多任务学习框架，引入模态表示分离器将各模态特征精准分解为共有与独有部分，分别投入多模态与单模态子任务。同时，本研究组巧妙设计以文本模态为核心的多模态任务，借助多层感知机深入探索模态间交互，并自主生成单模态情感标签弥补数据集标注缺失，显著提升情感分析任务的整体效能(Information Fusion 2025)；
        </p>
        <p style={{ textAlign: "justify", textIndent: "2em" }}>
          3）本研究组基于对生成模型在细粒度情感分析领域应用的深入研究，创新性地提出了 Grid Noise Diffusion Pinpoint Network（GDP）模型。系统地将扩散模型理念与 T5 架构相结合，通过构建 Diffusion Vague Learning（DVL）、Consistency Likelihood Learning（CLL）以及 GDP-FOR 等创新模块与机制，有效攻克了传统方法在处理隐式情感元素和生成稳定性方面的难题，为提升面向方面的情感分析准确性和鲁棒性开辟了新路径(ACL-findings 2024)；
        </p>
      </div>
    </div>
  );
}
