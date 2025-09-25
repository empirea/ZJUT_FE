interface INewsContentImg {
  type: "img",
  src: string,
}

interface INewsContentText {
  type: "text" | "heading",
  text: string,
}

interface INewsContentNewline {
  type: "blankLine",
}

interface INews {
  id: number,
  title: string,
  author: string,
  create_date: string,
  summary: string,
  // content: (INewsContentImg | INewsContentText | INewsContentNewline)[],
  content: string,

  top: boolean,
  hide_cn?: true,
  hide_en?: true,

  title_en: string,
  author_en: string,
  summary_en: string,
  content_en: string,
}

export const news: INews[] = [
  {
    id: 76,
    title: "学术报告 | 人工智能在知识产权中的应用",
    author: "宁凯丽",
    create_date: "2025-8-4",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2025年8月4日9:00举办了学术讲座，大连理工大学经济管理学院创新与创业研究所准聘助理教授、硕士生导师<big <span class="highlight-text">刘嘉莹</span></big>作为主讲人分享了“<big <span class="highlight-text">人工智能在知识产权中的应用</span></big>”，共同探讨了该方向的应用可能性。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>刘嘉莹 大连理工大学经济管理学院创新与创业研究所准聘助理教授、硕士生导师 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2025年8月4日（周一）9:00-11:00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>铂悦城B座915（校企合作产业基地）</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big>知识产权是衡量国家和地区创新能力的重要指标，也是盘活创新资源、提升创新效益的有效途径。近年来，随着我国产业转型升级步伐的加快以及企业对创新活动的重视，知识产权领域开始出现总量增长、交易活跃的趋势。大规模的科技成果数据中蕴藏着海量技术情报，为寻找技术突破口和挖掘潜在知识奠定了扎实的数据基础，但同时也给情报研究带来了新的机遇和挑战。本次报告面向科技成果转化机制和技术产权交易与服务智慧化需求，分享如何开展科技成果转化统合和分析创新研究，借助人工智能实现对多源异质知识产权大数据的有效整合、高效分析与深度挖掘，并探讨建立适用于知识产权大数据的理论体系。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>刘嘉莹</span> </big>大连理工大学经济管理学院创新与创业研究所准聘助理教授，硕士生导师。本科、博士均毕业于大连理工大学软件学院软件工程专业。主要研究方向为知识产权数据挖掘与分析，创新网络等。在人工智能、数据挖掘领域国际权威期刊、会议如TKDE、TNNLS、TKDD、SIGIR等发表论文40余篇。目前主持国家自然科学青年基金项目、教育部人文社科青年项目以及省市级项目5项，入选第八届中国科协青年人才托举工程。</p>
        <p><img src="/images/news/2025-8-4-ljy-report1.png"/></p>
        <p><img src="/images/news/2025-8-4-ljy-report2.png"/></p>
        <p><img src="/images/news/2025-8-4-ljy-report3.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | The Application of Artificial Intelligence in Intellectual Property",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On August 4, 2025, at 9:00，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Jiaying Liu</span></big>,Associate Professor and Master's Supervisor of Innovation and Entrepreneurship Research Institute, School of Economics and Management, Dalian University of Technology,shared“<big <span class="highlight-text">The Application of Artificial Intelligence in Intellectual Property</span></big>”as the keynote speaker.Jointly explored the potential applications of this direction.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big>Jiaying Liu, Associate Professor and Master's Supervisor of Innovation and Entrepreneurship Research Institute, School of Economics and Management, Dalian University of Technology</p>
        <p><big <span class="highlight-text">Report time：</span> </big>August4, 2025 (Monday) 9:00-11:00 a.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Bejoy City B-915 (School enterprise cooperation industrial base)</p>
        <p><big <span class="highlight-text">Abstract：</span> </big>Intellectual property is an important indicator for measuring the innovation capability of a country or region, and it is also an effective way to activate innovation resources and enhance innovation efficiency. In recent years, with the acceleration of China's industrial transformation and upgrading, as well as the increasing emphasis on innovation activities by enterprises, there has been a trend of overall growth and active trading in the field of intellectual property. The massive amount of technological achievements data contains a massive amount of technical intelligence, laying a solid data foundation for finding technological breakthroughs and exploring potential knowledge, but at the same time, it also brings new opportunities and challenges to intelligence research. This report is aimed at the mechanism of technology transfer and the demand for intelligent technology property transactions and services. It shares how to carry out research on the integration and analysis innovation of technology transfer, and uses artificial intelligence to achieve effective integration, efficient analysis, and deep mining of multi-source heterogeneous intellectual property big data. It also explores the establishment of a theoretical system applicable to intellectual property big data.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Jiaying Liu</span> </big>Associate Professor and Master's Supervisor of the Institute of Innovation and Entrepreneurship at the School of Economics and Management, Dalian University of Technology. Both undergraduate and doctoral degrees were obtained from the Software Engineering program at the School of Software Engineering, Dalian University of Technology. My main research directions are intellectual property data mining and analysis, innovation networks, etc. Published over 40 papers in international authoritative journals and conferences in the fields of artificial intelligence and data mining, such as TKDE, TNNLS, TKDD, SIGIR, etc. Currently leading 5 projects including the National Natural Science Youth Fund, the Ministry of Education's Humanities and Social Sciences Youth Project, and provincial and municipal level projects, and selected for the 8th China Association for Science and Technology Youth Talent Support Project.</p>
        <p><img src="/images/news/2025-8-4-ljy-report1.png"/></p>
        <p><img src="/images/news/2025-8-4-ljy-report2.png"/></p>
        <p><img src="/images/news/2025-8-4-ljy-report3.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 75,
    title: "2025 ICCNSE | 2025年通信网络与智能系统工程国际会议",
    author: "韩笑",
    create_date: "2025-8-3",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学</span></big>于 2025年8月2日在杭州主办了2025年通信网络与智能系统工程国际会议（ICCNSE 2025），本次会议由浙江工业大学计算机科学与技术学院与软件学院承办，世纪中文出版社、浙江省可视信息智能处理重点实验室、杭州市计算机学会、沈阳理工大学和沈阳工程学院协办。大会以<big <span class="highlight-text">“融合创新、智能互联”</span></big>为主题，邀请了皇家墨尔本理工大学夏锋教授、浙江大学韩劲松教授、杭州电子科技大学任一支教授、浙江工业大学孔祥杰教授等多位专家做主讲报告。</p>
        <p><big <span class="highlight-text">主讲报告1：</span> </big>夏锋教授 皇家墨尔本理工大学 </p>
        <p><big <span class="highlight-text">主讲报告2：</span> </big>韩劲松教授 浙江大学 </p>
        <p><big <span class="highlight-text">主讲报告3：</span> </big>任一支教授 杭州电子科技大学 </p>
        <p><big <span class="highlight-text">主讲报告4：</span> </big>孔祥杰教授 浙江工业大学 </p>
        <p><big <span class="highlight-text">口头报告：</span> </big>裴瑞杰 太原理工大学 </p>
        <p><big <span class="highlight-text">会议时间：</span> </big>2025年8月2日（周六）</p>
        <p><big <span class="highlight-text">会议地点：</span> </big>维也纳国际酒店（西溪湿地店）</p>
        <p><big <span class="highlight-text">会议摘要：</span> </big>会议以“融合创新、智能互联”为主题，汇聚了全球通信与智能系统领域的知名专家学者，共同探讨通信网络、人工智能、物联网等交叉前沿的最新进展和技术趋势，内容涵盖图异常检测、侧信道安全、人工智能安全与智慧交通系统等方向，学术深度与技术前瞻性兼具。会议期间还举办了青年学者口头报告、海报展示、学术交流与合影环节，进一步推动了跨校、跨机构的科研合作。</p>
        <div style="justify-content: center; display: flex; margin: 2em 4em;">
          <img style="width: 50%" src="/images/news/2025-8-2-ICCNSE-10.png"/>
          <img style="width: 50%; padding-left: 2em;" src="/images/news/2025-8-2-ICCNSE-11.jpg"/>
        </div>
        <p><img src="/images/news/2025-8-2-ICCNSE-12.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-1.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-2.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-3.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-4.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-5.jpg"/></p>

      </div>
      `,
    title_en: "2025 ICCNSE | 2025 International Conference on Communication Networks and Smart Systems Engineering",
    author_en: "Xiao Han",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On August 2, 2025, the <big <span class="highlight-text">Zhejiang University of Technology</span></big> hosted the 2025 International Conference on Communication Networks and Smart Systems Engineering (ICCNSE 2025) in Hangzhou. The conference was organized by the College of Computer Science and Technology College of Software of Zhejiang University of Technology, and co-organized by Century Chinese Publishing House, the Key Laboratory of Visual Information Intelligent Processing of Zhejiang Province, the Hangzhou Computer Institute, Shenyang Ligong University, and Shenyang Institute of Engineering. With the theme of <big <span class="highlight-text">"Integrated Innovation and Intelligent Connectivity"</span></big>, the conference invited several distinguished experts to deliver keynote speeches, including Professor Feng Xia from RMIT University, Professor Jinsong Han from Zhejiang University, Professor Yizhi Ren from Hangzhou Dianzi University, and Professor Xiangjie Kong from Zhejiang University of Technology.</p>
        <p><big <span class="highlight-text">Keynote Speech 1：</span> </big>Prof. Feng Xia, RMIT University, Australia</p>
        <p><big <span class="highlight-text">Keynote Speech 2：</span> </big>Prof. Jinsong Han, Zhejiang University, China</p>
        <p><big <span class="highlight-text">Keynote Speech 3：</span> </big>Prof. Yizhi Ren, Hangzhou Dianzi University, Australia</p>
        <p><big <span class="highlight-text">Keynote Speech 4：</span> </big>Prof. Xiangjie Kong, Zhejiang University of Technology, China</p>
        <p><big <span class="highlight-text">Oral presentation：</span> </big>Ruijie Pei, Taiyuan University of Technology, China</p>
        <p><big <span class="highlight-text">Conference Schedule：</span> </big>August 2, 2025 (Saturday)</p>
        <p><big <span class="highlight-text">Conference Venue：</span> </big>Vienna International Hotel (Xixi Wetland Branch)</p>
        <p><big <span class="highlight-text">Abstract：</span> </big>With the theme of "Integrated Innovation and Intelligent Connectivity", the conference brought together renowned experts and scholars from around the world in the fields of communication and intelligent systems. They jointly explored the latest developments and technological trends at the intersection of communication networks, artificial intelligence, and the Internet of Things. Topics covered included graph anomaly detection, side-channel security, AI security, and intelligent transportation systems, combining both academic depth and technological foresight. During the conference, various activities were also held, including oral presentations by young scholars, poster sessions, academic exchanges, and group photos, further promoting cross-university and cross-institutional research collaboration.</p>
        <div style="justify-content: center; display: flex; margin: 2em 4em;">
          <img style="width: 50%" src="/images/news/2025-8-2-ICCNSE-10.png"/>
          <img style="width: 50%; padding-left: 2em;" src="/images/news/2025-8-2-ICCNSE-11.jpg"/>
        </div>
        <p><img src="/images/news/2025-8-2-ICCNSE-12.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-1.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-2.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-3.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-4.jpg"/></p>
        <p><img src="/images/news/2025-8-2-ICCNSE-5.jpg"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 74,
    title: "CSSC实验室2篇论文被IJCAI 2025录用",
    author: "宁凯丽",
    create_date: "2025-04-24",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>国际人工智能联合会议（International Joint Conference on Artificial Intelligence, 简称为IJCAI）是人工智能领域中最主要的学术会议之一，属于CCF推荐的A类会议。</p>
        <p><img src="/images/news/2025-4-24-two-paper.png"/></p>
        <p>恭喜CSSC实验室潘企宏老师、硕士生谈昊飞的论文被IJCAI 2025录用！</p>
        <p>恭喜CSSC实验室博士生翁文超的论文被IJCAI 2025录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《LLM-TPF: Multiscale Temporal Periodicity-Semantic Fusion LLMs for TimeSeries Forecasting》（潘企宏、谈昊飞）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>大型语言模型在各个领域都表现出了卓越的泛化能力和强大的性能。最近的研究突出了它们在时间序列预测中的巨大潜力。然而，时间序列数据往往表现出复杂的周期性特征，这对使这些模型能够有效地捕捉潜在模式构成了重大挑战。为了应对这一挑战，我们提出了一种新的框架LLM-TPF，该框架利用个性和共性融合来增强时间序列预测。在频域中，提取周期性特征以揭示数据的内在周期性，而文本原型用于指示时间趋势。在时域中，采用精心设计的提示来指导模型理解全局信息。通用性融合机制进一步聚合了跨维度的异构信息，并利用三种不同的语言模型独立处理不同类型的信息。大量的真实世界实验表明，LLM-TPF是一种用于时间序列预测的强大工具，与最先进的专业模型相比，它实现了卓越的性能，并在零样本场景中表现出非凡的泛化能力。</p>

        <br/>
        <p><big <span class="highlight-text">题目：</span> </big>《Let's group: A Plug-and-Play SubGraph Learning method for Memory-Efficient Spatio-Temporal Graph Modeling》（翁文超）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>时空图建模广泛应用于时空数据，分析数据之间的关系以实现准确的预测。然而，尽管越来越复杂的模型具有出色的预测性能，但它们复杂的架构在处理时空数据时会导致巨大的内存开销和计算复杂性，这限制了它们的实际应用。为了应对这些挑战，我们提出了一种即插即用的子图学习（SGL）方法，在不影响性能的情况下减少内存开销。具体来说，我们引入了一个子图分区模块（SGPM），它利用一组可学习的内存向量从图中选择具有相似特征的节点组，有效地将图划分为更小的子图。注意，对图进行分区可能会导致特征冗余，因为子图之间可能会出现重叠信息。为了克服这一点，我们设计了一个子图特征聚合模块（SGFAM），通过平均不同子图的节点特征来减轻冗余。在四个不同规模的流量网络数据集上的实验表明，SGL可以显著降低内存开销，平均GPU内存开销降低56.4%，同时保持稳健的预测性能。</p>

      </div>
      `,
    title_en: "Two paper from CSSC Lab was accepted by IJCAI 2025",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>The International Joint Conference on Artificial Intelligence (IJCAI) is one of the most important academic conferences in the field of artificial intelligence and is recommended as an A-class conference by CCF.</p>
        <p><img src="/images/news/2025-4-24-two-paper.png"/></p>
        <p>Congratulations to Qihong Pan, a teacher in CSSC Lab, and Haofei Tan, a master student in CSSC Lab, whose thesis has been accepted by IJCAI 2025!</p>
        <p>Congratulations to Wenchao Weng, a doctoral student in CSSC Lab, whose thesis has been accepted by IJCAI 2025!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《LLM-TPF: Multiscale Temporal Periodicity-Semantic Fusion LLMs for TimeSeries Forecasting》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>Large language models have demonstrated excellent generalization ability and powerful performance in various fields. Recent research has highlighted their enormous potential in time series prediction. However, time series data often exhibit complex periodic features, which pose significant challenges for these models to effectively capture potential patterns. To address this challenge, we propose a new framework LLM-TPF that utilizes the fusion of individuality and commonality to enhance time series prediction. In the frequency domain, periodic features are extracted to reveal the inherent periodicity of data, while text prototypes are used to indicate temporal trends. In the time domain, carefully designed prompts are used to guide the model in understanding global information. The universal fusion mechanism further aggregates cross dimensional heterogeneous information and utilizes three different language models to independently process different types of information. A large number of real-world experiments have shown that LLM-TPF is a powerful tool for time series prediction, achieving excellent performance compared to state-of-the-art professional models and demonstrating extraordinary generalization ability in zero sample scenarios.</p>

        <br/>
        <p><big <span class="highlight-text">Title：</span> </big>《Let's group: A Plug-and-Play SubGraph Learning method for Memory-Efficient Spatio-Temporal Graph Modeling》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>Spatiotemporal graph modeling is widely used in spatiotemporal data, analyzing the relationships between data to achieve accurate predictions. However, despite the excellent predictive performance of increasingly complex models, their complex architectures result in significant memory overhead and computational complexity when processing spatiotemporal data, which limits their practical applications. To address these challenges, we propose a plug and play subgraph learning (SGL) method that reduces memory overhead without compromising performance. Specifically, we introduce a subgraph partitioning module (SGPM) that utilizes a set of learnable memory vectors to select node groups with similar features from the graph, effectively partitioning the graph into smaller subgraphs. Note that partitioning the graph may result in feature redundancy, as there may be overlapping information between subgraphs. To overcome this, we designed a subgraph feature aggregation module (SGFAM) that reduces redundancy by averaging the node features of different subgraphs. Experiments on four different sized traffic network datasets show that SGL can significantly reduce memory overhead, with an average GPU memory overhead reduction of 56.4%, while maintaining robust predictive performance.</p>

      </div>
    `,
    top:false
  },
  {
    id: 73,
    title: "CSSC实验室1篇论文被TITS 2025录用",
    author: "宁凯丽",
    create_date: "2025-04-21",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>IEEE Transactions on Intelligent Transportation Systems (IEEE TITS) 是一个在智能交通系统领域内顶尖的学术期刊，也是中国计算机学会推荐的（交叉/综合/新兴）领域的B类期刊。</p>
<!--        <p><img src="/images/news/2025-1-20-zyc-paper.png"/></p>-->
        <p>恭喜CSSC实验室博士生翁文超的论文被TITS 2025录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《Pattern-Matching Dynamic Memory Network for Dual-Mode Traffic Prediction》（双模流量预测的模式匹配动态存储网络）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>近年来，深度学习在交通预测领域越来越受到关注。现有的流量预测模型通常依赖于复杂度为O（N^2）的GCN或注意力机制来动态提取流量节点特征，这缺乏效率，也不是轻量级的。此外，这些模型通常只利用历史数据进行预测，而不考虑目标信息对预测的影响。为了解决这些问题，我们提出了一种模式匹配动态内存网络（PM-DMNet）。与传统的基于注意力和图卷积的方法不同，PM DMNet采用了一种新颖的动态记忆网络，通过训练将历史数据中最具代表性的流量模式存储在记忆矩阵中。它通过比较存储矩阵和当前流量状态之间的相似性来捕获流量模式特征。该方法不仅实现了出色的预测性能，而且将计算复杂度显著降低到O（N）。PM-DMNet还引入了两种预测方法：递归多步预测（RMP）和并行多步预报（PMP），它们利用预测目标的时间特征来辅助预测过程。此外，PMP中集成了转移注意力机制，转换历史数据特征以更好地与预测的目标状态对齐，从而更准确地捕捉趋势变化并减少误差。大量实验表明，所提出的模型优于现有的基准。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by TITS 2025",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>IEEE Transactions on Intelligent Transportation Systems (IEEE TITS)  It is a top academic journal in the field of intelligent transportation systems and a B-class journal recommended by the Chinese Computer Society for interdisciplinary/comprehensive/emerging fields.</p>
<!--        <p><img src="/images/news/2025-1-20-zyc-paper.png"/></p>-->
        <p>Congratulations to Wenchao Weng, a doctoral student in CSSC Lab, whose thesis has been accepted by TITS 2025!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Pattern-Matching Dynamic Memory Network for Dual-Mode Traffic Prediction》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>In recent years, deep learning has received increasing attention in the field of traffic prediction. Existing traffic prediction models typically rely on GCN or attention mechanisms with a complexity of O (N ^ 2) to dynamically extract traffic node features, which lacks efficiency and is not lightweight. In addition, these models typically only use historical data for prediction without considering the impact of target information on the prediction. To address these issues, we propose a Pattern Matching Dynamic Memory Network (PM DMNet). Unlike traditional methods based on attention and graph convolution, PM DMNet adopts a novel dynamic memory network that stores the most representative traffic patterns from historical data in a memory matrix through training. It captures traffic pattern features by comparing the similarity between the storage matrix and the current traffic state. This method not only achieves excellent predictive performance, but also significantly reduces computational complexity to O (N). PM DMNet also introduces two prediction methods: Recursive Multi Step Prediction (RMP) and Parallel Multi Step Prediction (PMP), which utilize the temporal characteristics of the predicted target to assist in the prediction process. In addition, PMP integrates a transfer attention mechanism that transforms historical data features to better align with the predicted target state, thereby more accurately capturing trend changes and reducing errors. Numerous experiments have shown that the proposed model outperforms existing benchmarks.</p>
      </div>
    `,
    top:false
  },
  {
    id: 72,
    title: "学术报告 | 工控系统信息物理融合安全",
    author: "宁凯丽",
    create_date: "2025-5-8",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2025年5月8日16:00举办了学术讲座，浙江大学浙江大学控制科学与工程学院工业控制研究所特聘研究员<big <span class="highlight-text">赵成成</span></big>作为主讲人分享了“<big <span class="highlight-text">工控系统信息物理融合安全</span></big>”，共同探讨了工控系统的网络化和智能化。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>赵成成 控制科学与工程学院工业控制研究所特聘研究员 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2025年5月8日（周四）16:00-17 :00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A105</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 随着工业化与信息化深度融合，工业控制系统呈现出开放、互联、跨域等特点，其网络安全态势越来越严峻。考虑工控系统攻击呈现出的欺骗性、信息物理融合等特点，本报告将围绕典型应用，从威胁分析、威胁实时检测、弹性控制三个层面出发，探讨多阶段脆弱性分析策略，提出围绕已知威胁和未知威胁的实时感知技术，设计弹性控制与优化方法，为工控系统网络化、智能化提供关键安全保障。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>赵成成</span> </big> 2018年6月获浙江大学控制科学与工程专业博士学位。2018年12月，入职浙江大学控制学院工业控制研究所，从事博士后研究工作。2019年5月至2020年12月，赴加拿大维多利亚大学电子与计算机工程系从事博士后研究工作。回国后加入浙江大学控制科学与工程学院工业控制研究所，现任特聘研究员。赵成成博士长期致力于工控安全、信息物理系统安全等方向的研究，主持国家自然科学基金青年/面上、浙江省自然科学基金重点/杰出青年等项目。发表控制/通信领域旗舰期刊/会议论文50余篇，其中IEEE/ACM汇刊论文20余篇。研究成果获中国自动化学会自然科学一等奖、中国电子学会自然科学二等奖、中国科技产业化促进会科技创新奖一等奖等，入选第七届中国科协青年托举工程。长期受邀担任IEEE ICC和IEEE GLOBECOM等国际会议程序委员会委员，并担任Wireless Networks期刊编委。</p>
        <p><img src="/images/news/2025-5-8-赵成成-report1.png"/></p>
        <p><img src="/images/news/2025-5-8-赵成成-report2.png"/></p>
        <p><img src="/images/news/2025-5-8-赵成成-report3.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | Information Physical Fusion Security of Industrial Control Systems",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On May 8, 2025, at 16:00，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Chengcheng Zhao</span></big>,Zhejiang University, Zhejiang University School of Control Science and Engineering, Industrial Control Research Institute, Distinguished Researcher,shared“<big <span class="highlight-text">Information Physical Fusion Security of Industrial Control Systems</span></big>”as the keynote speaker.Jointly discussed the networking and intelligence of industrial control systems.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Chengcheng Zhao, Specially appointed researcher at the Industrial Control Research Institute of the School of Control Science and Engineering</p>
        <p><big <span class="highlight-text">Report time：</span> </big>May 8, 2025 (Thursday) 16:00-17 :00 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A105</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> With the deep integration of industrialization and informatization, industrial control systems have shown characteristics such as openness, interconnection, and cross domain, and their network security situation is becoming increasingly severe. Considering the deceptive and information physical fusion characteristics of industrial control system attacks, this report will focus on typical applications and explore multi-stage vulnerability analysis strategies from three levels: threat analysis, real-time threat detection, and elastic control. Real time perception technology for known and unknown threats will be proposed, and elastic control and optimization methods will be designed to provide key security guarantees for the networking and intelligence of industrial control systems.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Chengcheng Zhao</span> </big> Obtained a doctoral degree in Control Science and Engineering from Zhejiang University in June 2018. In December 2018, I joined the Industrial Control Research Institute of the School of Control at Zhejiang University and worked as a postdoctoral researcher. From May 2019 to December 2020, I worked as a postdoctoral researcher in the Department of Electronic and Computer Engineering at the University of Victoria in Canada. After returning to China, he joined the Industrial Control Research Institute of the School of Control Science and Engineering at Zhejiang University and is currently a specially appointed researcher. Dr. Zhao Chengcheng has long been committed to research in the fields of industrial control security and cyber physical system security, and has led projects such as the National Natural Science Foundation of China Youth/General Program and the Zhejiang Provincial Natural Science Foundation Key/Outstanding Youth Program. Published over 50 flagship journal/conference papers in the field of control/communication, including over 20 papers in IEEE/ACM journals. The research results have won the first prize of the Natural Science Award of the Chinese Society of Automation, the second prize of the Natural Science Award of the Chinese Society of Electronics, the first prize of the Science and Technology Innovation Award of the China Association for the Promotion of Science and Technology Industrialization, and have been selected for the 7th China Association for Science and Technology Youth Support Project. Long term invited to serve as a member of the program committee for international conferences such as IEEE ICC and IEEE GLOBECOM, and as an editorial board member for the Wireless Networks journal.</p>
        <p><img src="/images/news/2025-5-8-赵成成-report1.png"/></p>
        <p><img src="/images/news/2025-5-8-赵成成-report2.png"/></p>
        <p><img src="/images/news/2025-5-8-赵成成-report3.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 71,
    title: "学术报告 | 博士生专家论坛会",
    author: "宁凯丽",
    create_date: "2025-5-8",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2025年5月8日13:00举办了学术讲座，研究组内二年级全体<big <span class="highlight-text">博士生</span></big>分别作为主讲人分享了“<big <span class="highlight-text">论文成果/前沿进展</span></big>”，共同进行了学术交流。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>张玉超、张依媚、翁文超、倪辰昊、Wail Al-Asad（瓦乐）、Syauqie Muhammad Marier（邵齐）、Dominic（巴火）、周文峰、陈祥钒 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2025年5月8日（周四）13:00-15 :30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A105</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 本次博士生论坛会以城市科学与社会计算研究组内全体博士生为主讲人，围绕各自的研究任务和领域前沿进展进行了深入的工作分享。主讲人通过详细介绍研究背景、关键问题、方法创新及成果应用，展现了各自的研究特色与阶段性成果，同时将自己最新的论文成果与大家分享和讨论。活动中，组内成员积极参与讨论，在每一位主讲人分享后，其余成员提出问题、分享观点，碰撞出新的学术思路，进一步深化了组内的学术交流与协作，为后续研究提供了宝贵的启发与支持。</p>
<!--        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">-->
<!--        <br>高飞</span> </big> 国家优青。浙江大学控制学院长聘副教授，研究员，博士生导师。主要研究方向：空中机器人、轨迹规划、自主导航、集群协同、定位感知。近年来，以第一作者/通讯作者身份在Science Robotics, IEEE TRO，ACM TOG, RSS，ICRA等知名机器人期刊、会议发表论文70余篇；发表Science Robotics封面论文并被国内外媒体广泛报道；获IEEE TRO 2020年最佳论文荣誉提名奖、国际基础科学大会ICBS 2024前沿科学奖、IEEE ICRA 2024年最佳论文提名等学术荣誉；入选爱思唯尔数据库2023/24年度全球前2％顶尖科学家。</p>-->
        <p><img src="/images/news/2025-5-8-docs-report1.png"/></p>
        <p><img src="/images/news/2025-5-8-docs-report2.png"/></p>
        <p><img src="/images/news/2025-5-8-docs-report3.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | Doctoral Expert Forum Meeting",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On May 8, 2025, at 13:00，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">doctoral student</span></big>,all second grade students in the research group,shared“<big <span class="highlight-text">Paper achievements/cutting-edge progress</span></big>”as the keynote speaker respectively.Jointly conducted academic exchanges.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Yuchao Zhang, Yimei Zhang, Wenchao Weng, Chenhao Ni, Wail Al-Asad, Syauqie Muhammad Marier, Dominic, Wenfeng Zhou, Xiangfan Chen</p>
        <p><big <span class="highlight-text">Report time：</span> </big>May 8, 2025 (Thursday) 13:00-15 :30 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A105</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> The doctoral student forum this time was mainly hosted by all doctoral students in the Urban Science and Social Computing Research Group, who conducted in-depth work sharing around their respective research tasks and cutting-edge developments in the field. The speaker presented their research characteristics and phased achievements through a detailed introduction of the research background, key issues, innovative methods, and application of results. At the same time, they shared and discussed their latest paper results with everyone. During the event, members of the group actively participated in the discussion. After each speaker shared their ideas, the other members raised questions and shared their viewpoints, which led to the emergence of new academic ideas and further deepened the academic exchange and collaboration within the group. This provided valuable inspiration and support for subsequent research.</p>
<!--        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">-->
<!--        <br>Fei Gao</span> </big> National Outstanding Youth. Associate Professor, Researcher, and Doctoral Supervisor of the School of Control at Zhejiang University. Main research directions: Aerial robots, trajectory planning, autonomous navigation, cluster collaboration, and positioning perception. In recent years, as the first author/corresponding author in Science Robotics, Published over 70 papers in well-known robotics journals and conferences such as IEEE TRO, ACM TOG, RSS, ICRA, etc; Published a cover paper on Science Robotics and was widely reported by domestic and foreign media; Received academic honors such as the IEEE TRO 2020 Best Paper Honorary Nomination Award, the ICBS 2024 Frontier Science Award at the International Basic Sciences Conference, and the IEEE ICRA 2024 Best Paper Nomination Award; Selected as one of the top 2% global scientists in the Elsevier database for 2023/24.</p>-->
        <p><img src="/images/news/2025-5-8-docs-report1.png"/></p>
        <p><img src="/images/news/2025-5-8-docs-report2.png"/></p>
        <p><img src="/images/news/2025-5-8-docs-report3.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 70,
    title: "CSSC实验室1篇论文被WWW 2025录用",
    author: "宁凯丽",
    create_date: "2025-01-20",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>万维网：互联网和网络信息系统 （WWW） 是一本国际性的、存档的、同行评审的期刊，涵盖了万维网的所有方面，包括与体系结构、应用程序、互联网和 Web 信息系统以及社区相关的问题。该杂志的目的是为研究人员、专业人士和工业从业者提供一个国际论坛，以分享他们快速发展的知识并报告互联网和基于网络的系统的新进展。该杂志还关注与互联网和万维网相关的所有数据库和信息系统主题，特别是关于建模、设计、开发、集成和管理这些系统的方法。该杂志每季度出版一次，发表（1）描述原创想法和新成果的论文，（2）愿景论文，（3）相关领域重要技术综述，（4）创新应用论文，以及（5）重大国际研究项目的进展报告。在WWW期刊上发表的论文涉及与万维网直接或间接相关的主题。WWW期刊及时、深入地报道了万维网学科的最新发展，使任何参与其中的人都能跟上这种动态变化的技术。</p>
        <p><img src="/images/news/2025-1-20-zyc-paper.png"/></p>
        <p>恭喜CSSC实验室博士生张玉超的论文被WWW 2025录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《Tackling Sparse Facts for Temporal Knowledge Graph Completion》（处理稀疏事实以补全时态知识图谱）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>时态知识图补全（TKGC）旨在通过解决时态知识图（TKG）中缺失的关系和实体来开发更全面的知识表示，从而增强下游任务的推理和预测能力。尽管如此，现实世界的知识——如社交网络互动的进展和新闻事件的展开——本质上是动态的，导致TKG中存在大量稀疏问题，严重损害了TKGC模型的性能。为了克服这一挑战，我们引入了自适应邻域增强层（ANEL），这是一种新的模块，可以毫不费力地集成到现有的TKGC模型中，从而大大提高稀疏实体的表示质量。ANEL首先通过基础模型导出初始实体嵌入，然后通过潜在关系模块揭示实体之间隐藏的语义关系，丰富知识图中的显式关系。此外，ANEL还包含一个自适应的潜在信息调整组件，该组件根据实体的关系结构动态校准潜在信息的影响：连接较少的实体从潜在信息中获得更大的利益，而连接较密集的实体对潜在增强的依赖性较低，确保了精确和有弹性的表示。我们在四个著名的基准数据集上进行了全面的实验，结果强调了ANEL在TKGC任务中的有效性和优越性。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by WWW 2025",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>World Wide Web: The Internet and Web Information System (WWW) is an international, archived, peer reviewed journal that covers all aspects of the World Wide Web, including issues related to architecture, applications, the Internet and Web information systems, and communities. The purpose of the magazine is to provide an international forum for researchers, professionals and industrial practitioners to share their rapidly developing knowledge and report on new developments in the Internet and web-based systems. The magazine also focuses on all database and information system topics related to the Internet and the World Wide Web, especially on the methods of modeling, designing, developing, integrating and managing these systems. The magazine is published quarterly and publishes (1) papers describing original ideas and new achievements, (2) vision papers, (3) important technical reviews in related fields, (4) innovative application papers, and (5) progress reports on major international research projects. Papers published in WWW journals involve topics directly or indirectly related to the World Wide Web. WWW journals provide timely and in-depth reports on the latest developments in the field of the World Wide Web, enabling anyone involved to keep up with this dynamically changing technology.</p>
        <p><img src="/images/news/2025-1-20-zyc-paper.png"/></p>
        <p>Congratulations to Yuchao Zhang, a doctoral student in CSSC Lab, whose thesis has been accepted by WWW 2025!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Tackling Sparse Facts for Temporal Knowledge Graph Completion》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>Temporal Knowledge Graph Completion (TKGC) aims to develop a more comprehensive knowledge representation by addressing the missing relationships and entities in Temporal Knowledge Graph (TKG), thereby enhancing the inference and prediction capabilities of downstream tasks. However, knowledge in the real world, such as the progress of social network interactions and the unfolding of news events, is essentially dynamic, leading to a large number of sparsity problems in TKG, which seriously damages the performance of TKGC models. To overcome this challenge, we introduced the Adaptive Neighborhood Enhancement Layer (ANEL), a new module that can be seamlessly integrated into existing TKGC models, greatly improving the representation quality of sparse entities. ANEL first exports the initial entity embeddings through the basic model, and then reveals the hidden semantic relationships between entities through the latent relationship module, enriching the explicit relationships in the knowledge graph. In addition, ANEL also includes an adaptive latent information adjustment component that dynamically calibrates the impact of latent information based on the relationship structure of entities: entities with fewer connections benefit more from latent information, while entities with denser connections have lower dependence on latent enhancement, ensuring accurate and elastic representation. We conducted comprehensive experiments on four well-known benchmark datasets, and the results emphasized the effectiveness and superiority of ANEL in TKGC tasks.</p>
      </div>
    `,
    top:false
  },
  {
    id: 69,
    title: "学术报告 | 生物启发的飞行智能",
    author: "宁凯丽",
    create_date: "2024-12-31",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2024年12月31日15:00举办了学术讲座，浙江大学控制学院长聘副教授，研究员，博士生导师<big <span class="highlight-text">高飞</span></big>作为主讲人分享了“<big <span class="highlight-text">生物启发的飞行智能</span></big>”，共同探讨了无人机单机与集群自主导航方法上的最新研究成果。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>高飞 浙江大学控制学院长聘副教授，研究员，博士生导师 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2024年12月31日（周二）15:00-17:00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 对于感知范围、计算能力、机动性能、资源功耗等受限的空中机器人系统（无人机），其在无先验信息、卫星导航拒止、障碍物稠密环境中的自主化、鲁棒化，协同化、智能化运动仍面临理论与技术上的重大挑战。观察自然界的飞行生物，我们发现鸟群可以组成庞大的集群，仅依靠它们的眼睛和大脑跨越数千公里完成自然迁徙，而鹰隼可以在长远的距离下锁定目标，穿梭于各种障碍物之间。本次报告，我将类比生物导航现象的作用机理，从敏锐感知、自主决策、飞行交互、集群智能等方面介绍团队在无人机单机与集群自主导航方法上所做出的最新创新贡献，展示在不依赖外部定位和计算设施，仅靠机载摄像头、计算芯片和传感器的无人机动态环境鲁棒感知、快速灵巧机动飞行、飞行吊载与抓握、集群避障编队等方面的最新研究成果。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>高飞</span> </big> 国家优青。浙江大学控制学院长聘副教授，研究员，博士生导师。主要研究方向：空中机器人、轨迹规划、自主导航、集群协同、定位感知。近年来，以第一作者/通讯作者身份在Science Robotics, IEEE TRO，ACM TOG, RSS，ICRA等知名机器人期刊、会议发表论文70余篇；发表Science Robotics封面论文并被国内外媒体广泛报道；获IEEE TRO 2020年最佳论文荣誉提名奖、国际基础科学大会ICBS 2024前沿科学奖、IEEE ICRA 2024年最佳论文提名等学术荣誉；入选爱思唯尔数据库2023/24年度全球前2％顶尖科学家。</p>
        <p><img src="/images/news/2024-12-31-高飞-report1.png"/></p>
        <p><img src="/images/news/2024-12-31-高飞-report2.png"/></p>
        <p><img src="/images/news/2024-12-31-高飞-report3.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | Biological inspired flight intelligence",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On December 31, 2024, at 15:00，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Fei Gao</span></big>,Associate Professor, Researcher, and Doctoral Supervisor of the School of Control at Zhejiang University,shared“<big <span class="highlight-text">Biological inspired flight intelligence</span></big>”as the keynote speaker.Jointly discussed the latest research results on autonomous navigation methods for unmanned aerial vehicles (UAVs) in both single and cluster modes.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Fei Gao, Associate Professor, Researcher, and Doctoral Supervisor of the School of Control at Zhejiang University</p>
        <p><big <span class="highlight-text">Report time：</span> </big>December 31, 2024 (Tuesday) 15:00-17:00 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> For aerial robot systems (UAVs) with limited perception range, computing power, maneuverability, and resource consumption, their autonomous, robust, collaborative, and intelligent movements in environments with no prior information, satellite navigation denial, and dense obstacles still face significant theoretical and technical challenges. Observing flying creatures in nature, we have found that bird flocks can form large clusters and complete natural migrations across thousands of kilometers solely relying on their eyes and brains. Meanwhile, eagles and falcons can lock onto their targets over long distances and shuttle between various obstacles. In this report, I will compare the mechanism of biological navigation phenomena and introduce the latest innovative contributions made by the team in unmanned aerial vehicle (UAV) single machine and cluster autonomous navigation methods from the aspects of keen perception, autonomous decision-making, flight interaction, and cluster intelligence. I will showcase the latest research results in UAV dynamic environment robust perception, fast and agile maneuvering flight, flight suspension and grasping, cluster obstacle avoidance formation, etc., relying solely on onboard cameras, computing chips, and sensors without relying on external positioning and computing facilities.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Fei Gao</span> </big> National Outstanding Youth. Associate Professor, Researcher, and Doctoral Supervisor of the School of Control at Zhejiang University. Main research directions: Aerial robots, trajectory planning, autonomous navigation, cluster collaboration, and positioning perception. In recent years, as the first author/corresponding author in Science Robotics, Published over 70 papers in well-known robotics journals and conferences such as IEEE TRO, ACM TOG, RSS, ICRA, etc; Published a cover paper on Science Robotics and was widely reported by domestic and foreign media; Received academic honors such as the IEEE TRO 2020 Best Paper Honorary Nomination Award, the ICBS 2024 Frontier Science Award at the International Basic Sciences Conference, and the IEEE ICRA 2024 Best Paper Nomination Award; Selected as one of the top 2% global scientists in the Elsevier database for 2023/24.</p>
        <p><img src="/images/news/2024-12-31-高飞-report1.png"/></p>
        <p><img src="/images/news/2024-12-31-高飞-report2.png"/></p>
        <p><img src="/images/news/2024-12-31-高飞-report3.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 68,
    title: "学术报告 | 自动驾驶仿真平台",
    author: "宁凯丽",
    create_date: "2024-11-29",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2024年11月29日15:30举办了学术讲座，浙江大学信电学院特聘研究员<big <span class="highlight-text">廖依伊</span></big>作为主讲人分享了“<big <span class="highlight-text">自动驾驶仿真平台技术</span></big>”，共同探讨了如何提高自动驾驶视觉仿真的写实度和可控性。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>廖依伊 浙江大学信电学院特聘研究员 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2024年11月29日（周五）15:30-17:30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 高写实度的视觉仿真平台对于端到端自动驾驶具有重要意义，人工设计的仿真平台往往与现实世界存在一定差异且设计代价高昂。近年来，神经渲染场技术的发展为基于现实场景构造高写实度的仿真平台成为可能，然而现有方法这类方法在可控性上难以匹配人工设计的仿真平台。本次报告将从重建和生成两个角度出发，探讨如何提高自动驾驶视觉仿真的写实度和可控性。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>廖依伊</span> </big> 浙江大学信电学院特聘研究员。2018年获浙江大学博士学位，2018年到2021年在德国马普所从事博士后研究。研究兴趣主要为三维视觉与沉浸式媒体编码。在TPAMI、CVPR、ICCV、NeurIPS等期刊和会议发表文章四十余篇，谷歌学术引用4300余次。获ICRA 2024最佳机器人视觉论文奖，入选2023 百度 AI 华人女性青年学者。担任3DV 2025程序主席，CVPR 2023-2024、NeurIPS 2023领域主席，MPEG国际标准组织INVR专题组组长，IEEE 视频处理与通信技术委员会（VSPC）委员。</p>
        <p><img src="/images/news/2024-11-29-廖依伊-report1.png"/></p>
        <p><img src="/images/news/2024-11-29-廖依伊-report2.png"/></p>
        <p><img src="/images/news/2024-11-29-廖依伊-report3.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | Autonomous driving simulation platform",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On November 29, 2024, at 15:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Yiyi Liao</span></big>,Specially appointed researcher at the School of Information and Electronics Technology, Zhejiang University,shared“<big <span class="highlight-text">Autonomous driving simulation platform technology</span></big>”as the keynote speaker.Jointly discussed how to improve the realism and controllability of autonomous driving visual simulation.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Yiyi Liao, Specially appointed researcher at the School of Information and Electronics Technology, Zhejiang University</p>
        <p><big <span class="highlight-text">Report time：</span> </big>November 29, 2024 (Friday) 15:30-17:30 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> A highly realistic visual simulation platform is of great significance for end-to-end autonomous driving. Artificially designed simulation platforms often have certain differences from the real world and come at a high design cost. In recent years, the development of neural rendering field technology has made it possible to construct high realism simulation platforms based on real scenes. However, existing methods of this kind are difficult to match with artificially designed simulation platforms in terms of controllability. This report will explore how to improve the realism and controllability of autonomous driving visual simulation from the perspectives of reconstruction and generation.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Yiyi Liao</span> </big> Specially appointed researcher at the School of Information and Electronics, Zhejiang University. Obtained a doctoral degree from Zhejiang University in 2018 and conducted postdoctoral research at Max Planck Institute in Germany from 2018 to 2021. My research interests mainly focus on 3D vision and immersive media encoding. Published over 40 articles in journals and conferences such as TPAMI, CVPR, ICCV, NeurIPS, and cited over 4300 times on Google Scholar. Won the ICRA 2024 Best Robot Vision Paper Award and was selected as a 2023 Baidu AI Chinese Female Young Scholar. Serving as the Chair of 3DV 2025 Program, Chair of CVPR 2023-2024 and NeurIPS 2023, Leader of INVR Special Group of MPEG International Standards Organization, and Member of IEEE Video Processing and Communication Technology Committee (VSPC).</p>
        <p><img src="/images/news/2024-11-29-廖依伊-report1.png"/></p>
        <p><img src="/images/news/2024-11-29-廖依伊-report2.png"/></p>
        <p><img src="/images/news/2024-11-29-廖依伊-report3.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 67,
    title: "学术报告 | 博士生专家论坛会",
    author: "宁凯丽",
    create_date: "2024-11-29",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2024年11月29日13:30举办了学术讲座，研究组内二年级及以上<big <span class="highlight-text">博士生</span></big>作为主讲人分享了“<big <span class="highlight-text">研究任务/前沿进展</span></big>”，共同进行了学术交流。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>CSSC Lab二年级及以上博士生 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2024年11月29日（周五）13:30-15:30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 本次博士生论坛会以城市科学与社会计算研究组内二年级及以上博士生为主讲人，围绕各自的研究任务和领域前沿进展进行了深入的工作分享。主讲人通过详细介绍研究背景、关键问题、方法创新及成果应用，展现了各自的研究特色与阶段性成果。活动中，组内成员积极参与讨论，提出问题、分享观点，碰撞出新的学术思路，进一步深化了组内的学术交流与协作，为后续研究提供了宝贵的启发与支持。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>周文峰、张玉超、倪辰昊、顾文杰、Syauqie（邵齐）、Dominic（巴火）</span> </big> </p>
        <p><img src="/images/news/2024-11-29-phd-report1.png"/></p>
        <p><img src="/images/news/2024-11-29-phd-report2.png"/></p>
        <p><img src="/images/news/2024-11-29-phd-report3.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | Doctoral Expert Forum Meeting",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On November 29, 2024, at 13:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">doctoral student</span></big>,second grade and above within the research group,shared“<big <span class="highlight-text">Research tasks/cutting-edge progress</span></big>”as the keynote speaker.Jointly conducted academic exchanges.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> CSSC Lab second year and above doctoral students</p>
        <p><big <span class="highlight-text">Report time：</span> </big>November 29, 2024 (Friday) 13:30-15:30 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> The doctoral student forum this time was mainly hosted by second year and above doctoral students from the Urban Science and Social Computing Research Group, who conducted in-depth work sharing around their respective research tasks and cutting-edge developments in their fields. The speaker presented their research characteristics and phased achievements by providing a detailed introduction to the research background, key issues, innovative methods, and application of results. During the activity, members of the group actively participated in discussions, raised questions, shared viewpoints, and collided with new academic ideas, further deepening academic exchanges and collaboration within the group, and providing valuable inspiration and support for subsequent research.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Wenfeng Zhou, Yuchao Zhang, Chenhao Ni, Wenjie Gu, Syauqie, Dominic</span> </big> </p>
        <p><img src="/images/news/2024-11-29-phd-report1.png"/></p>
        <p><img src="/images/news/2024-11-29-phd-report2.png"/></p>
        <p><img src="/images/news/2024-11-29-phd-report3.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 66,
    title: "学术报告 | 车路协同发展现状和关键技术",
    author: "宁凯丽",
    create_date: "2024-9-28",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2024年9月28日9:30举办了学术讲座，浙江海康智联科技有限公司技术研发中心副主任<big <span class="highlight-text">朱芸</span></big>作为主讲人分享了“<big <span class="highlight-text">车路协同发展现状和关键技术</span></big>”，共同探讨了车路协同的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>朱芸 浙江海康智联科技有限公司技术研发中心副主任 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2024年9月28日（周六）9:30-10:30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A105</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 车路协同发展现状、关键技术和典型案例。介绍目前车路协同的发展现状，包括技术路线、行业组织课题研究情况、行业互联互通活动举办情况、行业标准制定情况、目前行业的主要问题等，同时剖析车路协同行业相关的关键技术，分析技术的重要性和难点，包括协议栈、定位、单车智能融合、跨网协同等。最后，介绍车路协同的典型实践案例，包括车路协同建设方案、应用功能、建设效果等。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>朱芸</span> </big> 浙江海康智联科技有限公司技术研发中心副主任，主要研究方向为车路协同。硕士毕业于浙江大学，曾任职华为技术有限公司、中电海康集团有限公司，有多年软件开发和研发管理工作经验。授权国家发明专利多项、软著几十项，同时参与多项行业标准定制与课题研究。先后获得公司知识产权先进工作者、党员先锋岗、优秀部门、春雨人才等称号。作为公司车路协同的带头人和开拓者，完成公司车路协同产品从0到1的开发，并参与多个国家级项目的开发与交付。目前作为公司技术研发负责人，带领团队进行车路协同产品、边缘计算产品、平台产品等的研发，总计完成十余款产品的研发并成功面市，支撑公司完成上百个项目的顺利交付。</p>
        <p><img src="/images/news/2024-9-28-朱芸-report.jpg"/></p>

      </div>
      `,
    title_en: "Academic Talk | Current Status and Key Technologies of Vehicle Road Collaboration Development",
    author_en: "Kaili Ning",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On September 28, 2024, at 9:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Yun Zhu</span></big>,Deputy Director of the Technology Research and Development Center of Zhejiang Haikang Zhilian Technology Co., Ltd,shared“<big <span class="highlight-text">Current Status and Key Technologies of Vehicle Road Collaboration Development</span></big>”as the keynote speaker.Jointly discussed the cutting-edge topics of vehicle road collaboration.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Yun Zhu, Deputy Director of the Technology Research and Development Center of Zhejiang Haikang Zhilian Technology Co., Ltd</p>
        <p><big <span class="highlight-text">Report time：</span> </big>September 28, 2024 (Saturday) 9:30-10:30 a.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A105</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> The current status, key technologies, and typical cases of vehicle road collaboration development. Introduce the current development status of vehicle road collaboration, including technical roadmap, research on industry organization topics, organization of industry interconnection activities, formulation of industry standards, current major problems in the industry, etc. At the same time, analyze the key technologies related to vehicle road collaboration industry, analyze the importance and difficulties of technologies, including protocol stack, positioning, intelligent integration of bicycles, cross network collaboration, etc. Finally, typical practical cases of vehicle road collaboration are introduced, including the construction plan, application functions, and construction effects of vehicle road collaboration.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Yun Zhu</span> </big> Deputy Director of the Technology Research and Development Center at Zhejiang Haikang Zhilian Technology Co., Ltd., with a main research focus on vehicle road collaboration. I graduated with a master's degree from Zhejiang University and have worked at Huawei Technologies Co., Ltd. and China Electronics Hikvision Group Co., Ltd. I have many years of experience in software development and R&D management. Authorized multiple national invention patents, dozens of software works, and participated in multiple industry standard customization and research projects. It has successively won the titles of exemplary individual of Intellectual Property Rights, Pioneer Post of Party Members, Outstanding Department, Chunyu Talent, etc. As the leader and pioneer of the company's vehicle road collaboration, I have completed the development of the company's vehicle road collaboration products from scratch and participated in the development and delivery of multiple national level projects. At present, as the technical R&D director of the company, he leads the team to research and develop vehicle road collaboration products, edge computing products, platform products, etc., and has completed the research and development of more than 10 products and successfully launched them, supporting the company to complete the smooth delivery of hundreds of projects.</p>
        <p><img src="/images/news/2024-9-28-朱芸-report.jpg"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 65,
    title: "CSSC实验室1篇论文被ACL 2024录用",
    author: "舒灿",
    create_date: "2024-06-05",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>Association for Computational Linguistics(ACL) 是自然语言处理（NLP）领域的顶级学术会议之一，被认为是自然语言处理领域最具影响力的国际会议之一，属于CCF推荐的A类期刊。</p>
        <p><img src="/images/news/2024-6-5-cxf-paper.png"/></p>
        <p>恭喜CSSC实验室硕士生陈祥钒的论文被ACL 2024录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《Pinpointing Diffusion Grid Noise to Enhance Aspect Sentiment Quad Prediction》（精确捕捉扩散网格噪声来提升属性情感四元组预测）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>方面情感四元预测（ASQP）在基于方面的情感分析（ABSA）中得到了极大的关注。目前的ASQP研究主要依靠预先训练的生成语言模型来生成模板化序列，通常辅以基于网格的辅助方法。尽管做出了这些努力，但发电不稳定的持续挑战仍未解决，目前的研究对网格方法的有效性仍未充分探索。为此，我们引入Grid Diffusion Pinpoint网络（GDP），一个基于T5的生成模型，旨在解决发电不稳定性问题。该模型由三个新模块组成，包括扩散模糊学习（DVL），以促进有效的模型学习并增强整体鲁棒性；一致性似然学习（CLL），用于辨别情感元素的特征和共性，从而减少分布式噪声的影响；以及GDP-FOR，一种新的生成模板，使模型能够以更自然的方式生成输出。在四个数据集上进行的大量实验证明了我们的方法在解决ASQP任务方面的显著有效性。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by ACL 2024",
    author_en: "Can Shu",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>Association for Computational Linguistics (ACL) is one of the top academic conferences in the field of natural language processing (NLP), and is considered one of the most influential international conferences in the field of natural language processing.</p>
        <p><img src="/images/news/2024-6-5-cxf-paper.png"/></p>
        <p>Congratulations to Xiangfan Chen, a master's student in CSSC Lab, whose thesis has been accepted by ACL 2024!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Pinpointing Diffusion Grid Noise to Enhance Aspect Sentiment Quad Prediction》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>Aspent Sentiment Quaternary Prediction (ASQP) has received great attention in aspect-based sentiment analysis (ABSA). Current ASQP research relies heavily on pre-trained generative language models to generate templated sequences, often supplemented by grid-based auxiliary methods. Despite these efforts, the ongoing challenge of unstable power generation remains unresolved, and the effectiveness of the grid approach has not been fully explored in current research. To this end, we introduce the Grid Diffusion Pinpoint Network (GDP), a T5-based generative model designed to address generation instability. The model consists of three new modules, including diffusion fuzzy learning (DVL), to facilitate effective model learning and enhance overall robustness; Consistent Likelihood Learning (CLL), which is used to identify the features and commonalities of emotional elements, thereby reducing the impact of distributed noise; and GDP-FOR, a new generation template that enables models to generate outputs in a more natural way. A large number of experiments on four datasets have demonstrated the remarkable effectiveness of our method in solving ASQP tasks.</p>
      </div>
    `,
    top:false
  },
  {
    id: 64,
    title: "CSSC实验室1篇论文被IJCAI 2024录用",
    author: "舒灿",
    create_date: "2024-05-16",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>国际人工智能联合会议（International Joint Conference on Artificial Intelligence, 简称为IJCAI）是人工智能领域中最主要的学术会议之一，属于CCF推荐的A类会议。</p>
        <p><img src="/images/news/2024-05-16-lyh-paper.png"/></p>
        <p>恭喜CSSC实验室博士生刘璎辉的论文被IJCAI 2024录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《KDDC: Knowledge-Driven Disentangled Causal Metric Learning for Pre-Travel Out-of-Town Recommendation》（KDDC：用于旅行前的城外推荐的知识驱动的解开因果度量学习）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>开发旅行前推荐系统是为了向计划离开家乡但尚未决定目的地的用户提供各种城外兴趣点（POI）。现有的城外推荐系统的工作原理是构建用户的潜在偏好，并从他们的签到序列中推断旅行意图。然而，仍有两个挑战阻碍了这些方法的性能：i) 用户的交互数据（包括家乡和外地签到）往往很少，而来自不同地区的候选 POI 包含各种语义信息；ii) 用户签到的原因不仅包括兴趣，还包括从众性，这两者很容易纠缠在一起并被忽略。为了填补这些空白，我们提出了一种知识驱动的因果分解度量学习框架（KDDC），该框架通过增强 POI 语义表示来缓解交互数据的稀疏性，并考虑两种原因（即从众性和兴趣）的分布，从而实现旅行前推荐。具体来说，我们通过分段交互方法对构建的 POI 属性知识图进行预训练，并通过关系异质性聚合 POI 语义信息。此外，我们还设计了一种分离的因果度量学习方法来建模和推断与用户相关的表征。在两个真实的全球数据集上进行的广泛实验表明，我们的 KDDC 始终优于最先进的基线。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by IJCAI 2024",
    author_en: "Can Shu",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>The International Joint Conference on Artificial Intelligence (Intel Natty Olcho Intekonference Enatificia Intelligens, abbreviated as Ikai) is one of the most important academic conferences in the field of artificial intelligence.</p>
        <p><img src="/images/news/2024-05-16-lyh-paper.png"/></p>
        <p>Congratulations to Yinghui Liu, a master's student in CSSC Lab, whose thesis has been accepted by IJCAI 2024!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《KDDC: Knowledge-Driven Disentangled Causal Metric Learning for Pre-Travel Out-of-Town Recommendation》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>The pre-trip recommendation system was developed to provide a variety of out-of-town points of interest (POIs) to users who are planning to leave their hometown but have not yet decided on a destination. Existing out-of-town recommender systems work by constructing users' potential preferences and inferring travel intent from their check-in sequences. However, there are still two challenges that hinder the performance of these approaches: i) user interaction data (including home and out-of-town check-ins) tends to be scarce, and candidate POIs from different regions contain a variety of semantic information; ii) The reasons for users to check in include not only interest but also herdity, which can easily become entangled and overlooked. To fill these gaps, we propose a knowledge-driven Measure Learning Framework for Causal Decomposition (KDDC) that mitigates the sparsity of interaction data by enhancing the semantic representation of POIs and considers the distribution of two reasons, i.e., conformity and interest, to achieve pre-trip recommendations. Specifically, we pre-train the constructed POI attribute knowledge graph through the segmented interaction method, and aggregate the POI semantic information through relational heterogeneity. In addition, we design a detached causal measure learning method to model and infer user-relevant representations. Extensive experiments on two real-world global datasets have shown that our KDDC consistently outperforms state-of-the-art baselines.</p>
      </div>
    `,
    top:false
  },
  {
    id: 63,
    title: "CSSC实验室1篇论文被TITS录用",
    author: "舒灿",
    create_date: "2023-12-16",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>IEEE Transactions on Intelligent Transportation Systems (IEEE TITS) 是一个在智能交通系统领域内顶尖的学术期刊，也是中国计算机学会推荐的（交叉/综合/新兴）领域的B类期刊。</p>

        <p>恭喜CSSC实验室硕士生沈哲辉的论文被TITS录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《Exploring Bus Stop Mobility Pattern: A Multi-Pattern Deep Learning Prediction Framework》（探索公交车站点移动模式:一个多模式的深度学习交通预测框架）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>交通网络中的时空预测任务是解决各种交通问题的核心。一方面，交通的流动模式可以反映在人群的出行行为中。在大多数交通预测任务中，移动模式的重要性常常被忽视。另一方面，交通预测也有多种预测场景，包括短期预测和长期预测，相关研究无法同时解决两种场景下的问题。针对现有工作的问题，我们提出了一种多模式流量预测框架MPGNNFormer。首先，我们构建一个新的公交车站距离网络来模拟车站之间的关系。然后，我们使用基于图神经网络的深度聚类方法来提取公交车站的移动模式。最后，我们设计了一个基于变压器的时空预测模型（STGNNFormer），充分利用时间依赖性和空间依赖性来预测公交车站流量。之后，我们进行了一系列实验，在真实的公交车数据集上评估和测试它们，包括分析移动模式并比较预测结果。实验结果证明MPGNNFormer在交通网络停流预测中能够在保证预测精度的同时提高预测场景中的计算效率。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by TITS",
    author_en: "Can Shu",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>Eltran Saktiens Enn IntergenteTran Portals (Eltitz) is a top academic journal in the field of intelligent transportation systems, and is also recommended by the China Computer Federation in the field of interdisciplinary/comprehensive/emerging.</p>

        <p>Congratulations to Zhehui Shen, a master's student in CSSC Lab, whose thesis has been accepted by TITS!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Exploring Bus Stop Mobility Pattern: A Multi-Pattern Deep Learning Prediction Framework》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>The spatio-temporal prediction task in the transportation network is the core of solving various traffic problems. On the one hand, the flow pattern of traffic can be reflected in the travel behavior of people. The importance of movement patterns is often overlooked in most traffic prediction tasks. On the other hand, there are multiple prediction scenarios for traffic forecasting, including short-term forecasting and long-term forecasting, and related studies cannot solve the problems in both scenarios at the same time. In order to solve the problems of the existing work, we propose a multi-modal traffic prediction framework MPGNNFormer. First, we construct a new bus stop distance network to simulate the relationship between stations. Then, we use a deep clustering method based on graph neural networks to extract the movement patterns of bus stops. Finally, we designed a transformer-based spatiotemporal prediction model (STGNNFormer) to make full use of the time dependence and spatial dependence to predict bus station traffic. After that, we conducted a series of experiments to evaluate and test them on a real bus dataset, including analyzing movement patterns and comparing the predictions. Experimental results show that MPGNNFormer can improve the computational efficiency in the prediction scenario while ensuring the prediction accuracy in the traffic network stop prediction.</p>
      </div>
    `,
    top:false
  },
  {
    id: 62,
    title: "CSSC实验室1篇论文被TMC 2023录用",
    author: "舒灿",
    create_date: "2023-09-26",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>IEEE Transactions on Mobile Computing (IEEE TMC) 是移动计算领域的国际顶级期刊，也是中国计算机学会推荐的计算机网络领域的三大核心期刊之一，属于CCF推荐的A类期刊。</p>
        <p><img src="/images/news/2023-9-26-zwy-paper.png"/></p>
        <p>恭喜CSSC实验室博士生张文熠的论文被TMC 2023录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《FedAWR: An Interactive Federated Active Learning Framework for Air Writing Recognition》（FedAWR:面向空中写作识别的交互式联邦主动学习框架）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>虚拟现实和增强现实等技术的快速发展，加上 COVID-19 大流行导致直接接触的减少，导致了一种更先进的交互模式的出现：空中手写。这种新形式的人机交互允许用户通过在空中自由书写来输入文本。然而，在实际场景中部署和应用现有的空气手写识别系统仍然存在挑战，特别是在实时性能、隐私保护和标签稀缺性方面。为了应对这些挑战，我们提出了一个名为FedAWR的联合主动学习框架，用于空中手写识别任务。FedAWR 利用分布式学习从网络边缘的多个用户设备在云中训练共享的全局模型，同时将用户的手写数据保留在本地以确保隐私。此外，FedAWR 采用交互式主动学习策略，在在线联邦学习过程中收集用户提供的注释以进行迭代训练，为每个客户引导个性化模型。为了进一步增强交互性和实时性能，我们设计了一个轻量级的识别模型，该模型集成到 FedAWR 中。最后，在真实世界的空气手写数据集上进行了广泛的实验，以验证FedAWR的优越性。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by TMC 2023",
    author_en: "Can Shu",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>IEEE Transactions on Mobile Computing (IEEE TMC) is one of the top international journals in the field of mobile computing and one of the three core journals in the field of computer networks recommended by the China Computer Federation.</p>
        <p><img src="/images/news/2023-9-26-zwy-paper.png"/></p>
        <p>Congratulations to Wenyi Zhang, a master's student in CSSC Lab, whose thesis has been accepted by TMC 2023!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《FedAWR: An Interactive Federated Active Learning Framework for Air Writing Recognition》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>The rapid development of technologies such as virtual reality and augmented reality, combined with the reduction in direct contact due to the COVID-19 pandemic, has led to the emergence of a more advanced mode of interaction: aerial handwriting. This new form of human-computer interaction allows users to enter text by writing freely in the air. However, there are still challenges in deploying and applying existing air handwriting recognition systems in real-world scenarios, especially in terms of real-time performance, privacy protection, and tag scarcity. To address these challenges, we propose a federated active learning framework called FedAWR for over-the-air handwriting recognition tasks. FedAWR leverages distributed learning to train a shared global model in the cloud from multiple user devices at the edge of the network, while keeping the user's handwritten data local for privacy. In addition, FedAWR employs an interactive active learning strategy that collects user-provided annotations for iterative training during the online federated learning process, leading to a personalized model for each customer. To further enhance interactivity and real-time performance, we designed a lightweight recognition model that is integrated into FedAWR. Finally, extensive experiments were conducted on real-world air-handwritten datasets to verify the superiority of FedAWR.</p>
      </div>
    `,
    top:false
  },
  {
    id: 61,
    title: "学术报告 | 面向高度偏差及异质数据的可信共享智能研究",
    author: "何雨薇",
    create_date: "2023-12-14",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年12月14日13:30举办了学术讲座，北京大学讲席教授，欧洲科学院院士<big <span class="highlight-text">张大庆</span></big>作为主讲人分享了“<big <span class="highlight-text">基于WiFi/4G/5G的非接触无线感知：回顾与思考</span></big>”，共同探讨了可信共享智能研究的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>张大庆 北京大学讲席教授，欧洲科学院院士 </p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年12月14日（周四）13：30-15:30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 基于WiFi/4G/5G CSI的无线非接触感知研究经过学术界和产业界过去10年的努力，取得了长足的进展并开始以产品形式落地应用。回顾过去十年泛在WiFi/4G/5G非接触感知的研究，国内外许多团队探索了各种无线感知技术和新型应用，在实验室环境开展了大量实验验证。不同于众多团队聚焦无线感知技术和应用的创新，我们试图通过提出新的基础理论和模型来理解无线感知的机理并回答领域最基本的理论问题，通过理论模型的创新带动关键感知技术和应用的突破；尝试构建完整的无线感知理论技术体系，重新审视传统无线感知技术并理解他们的适用条件，为理解无线电磁波的各种参数与感知应用性能之间的定量关系并为无线感知应用在实际环境中真正落地奠定理论技术基础。本报告将回顾总结团队在无线非接触感知理论技术体系方面的研究，包括菲涅尔区反射和衍射模型、速度与多普勒速度之间的定量模型、CSI天线商模型和载波商模型、感知信噪比与感知极限、感知边界和感知信号质量之间的关系，以及如何理解和解决位置朝向依赖性问题等，也将介绍团队开发的一系列无线感知应用系统。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>张大庆</span> </big> 北京大学讲席教授，欧洲科学院院士，IEEE Fellow，中国计算机学会普适计算专委会主任。主要研究方向包括普适计算、移动计算、智能物联网和智慧康养。在顶级国际期刊、会议发表学术论文 400余篇，文章总引用27600余次，H因子84, 国际国内专利40余项。所创的基于OWL的情境模型被国际普适计算、移动计算、服务计算等领域广泛采用，并成为国际、国内智慧城市的情境标准。早期工作曾获得IEEE PerCom 2013、IEEE UIC 2019和FCS期刊2023年授予的“十年最具影响力论文奖”，以及ACM UbiComp 2015、2016 最佳论文提名奖；近期主要从事无线感知的研究，在菲涅尔区感知模型与多普勒速度、速度和位置朝向的映射关系、无线感知的感知边界、感知极限、感知信号质量、移动场景的感知模型、量子无线感知等方面取得了一系列国际原创的成果；先后获得ACM IMWUT 2021杰出论文奖，ACM MobiCom 2022 最佳论文奖第二名和CCF TPCI 2023最佳论文奖等。张大庆教授是普适计算权威国际期刊ACM IMWUT的指导委员会七位委员之一, 担任过10多个国际会议的大会或程序委员会主席, 应邀在30多个国际会议做大会特邀报告。。</p>
        <p><img src="/images/news/2023-12-14-张大庆-report.png"/></p>

      </div>
      `,
    title_en: "Academic Talk | Research on trusted shared intelligence for highly biased and heterogeneous data",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On December 14, 2023, at 13:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text"Daqing Zhang</span></big>,Chair Professor of Peking University, Academician of the European Academy of Sciences,shared“<big <span class="highlight-text">Contactless wireless sensing based on WiFi/4G/5G: Review and reflections</span></big>”as the keynote speaker.The cutting-edge topics of trusted shared intelligence research were discussed.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Daqing Zhang, Chair Professor of Peking University, Academician of the European Academy of Sciences</p>
        <p><big <span class="highlight-text">Report time：</span> </big>December  14, 2023 (Thursday) 13:30-15:30 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> After the efforts of academia and industry in the past 10 years, the research on wireless contactless sensing based on WiFi/4G/5G CSI has made great progress and has begun to be applied in the form of products. Looking back on the research on ubiquitous WiFi/4G/5G contactless sensing in the past decade, many teams at home and abroad have explored various wireless sensing technologies and new applications, and carried out a large number of experimental verifications in the laboratory environment. Unlike many teams that focus on the innovation of wireless sensing technology and application, we try to understand the mechanism of wireless sensing and answer the most basic theoretical questions in the field by proposing new basic theories and models, and drive breakthroughs in key sensing technologies and applications through the innovation of theoretical models. This paper tries to construct a complete theoretical technology system of wireless perception, re-examines the traditional wireless sensing technology and understands their applicable conditions, so as to understand the quantitative relationship between various parameters of wireless electromagnetic wave and the performance of sensing applications, and lay a theoretical and technical foundation for the real implementation of wireless sensing applications in the actual environment. This report will review and summarize the team's research on the theoretical technology system of wireless non-contact perception, including the Fresnel region reflection and diffraction model, the quantitative model between velocity and Doppler velocity, the CSI antenna quotient model and carrier quotient model, the relationship between the perception signal-to-noise ratio and the perception limit, the perception boundary and the perception signal quality, and how to understand and solve the position-orientation dependence problem, and also introduce a series of wireless sensing application systems developed by the team.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Daqing Zhang</span> </big> Chair Professor of Peking University, Academician of the European Academy of Sciences, IEEE Fellow, Director of the Pervasive Computing Committee of the China Computer Federation. His research interests include ubiquitous computing, mobile computing, intelligent Internet of Things and smart health care. He has published more than 400 academic papers in top international journals and conferences, with a total of more than 27,600 citations, 84 H-factors, and more than 40 international and domestic patents. The OWL-based scenario model has been widely adopted in the fields of international ubiquitous computing, mobile computing, and service computing, and has become the scenario standard for international and domestic smart cities. His early work has won the "Most Influential Paper Award of the Decade" awarded by IEEE PerCom 2013, IEEE UIC 2019 and FCS journals in 2023, and the Best Paper Award of ACM UbiComp 2015 and 2016. Recently, he has been mainly engaged in the research of wireless sensing, and has made a series of international original achievements in the mapping relationship between the Fresnel zone perception model and Doppler velocity, velocity and position orientation, the perception boundary, perception limit, perception signal quality, the perception model of moving scenes, and quantum wireless sensing. He has won the ACM IMWUT 2021 Outstanding Paper Award, the second place of the ACM MobiCom 2022 Best Paper Award, and the CCF TPCI 2023 Best Paper Award. Professor Zhang Daqing is one of the seven members of the steering committee of ACM IMWUT, an authoritative international journal of ubiquitous computing, and has served as the chairman of the conference or program committee of more than 10 international conferences, and has been invited to give special reports at more than 30 international conferences..</p>
        <p><img src="/images/news/2023-12-14-张大庆-report.png"/></p>

      </div>
    `,
    top:false
  },
  {
    id: 60,
    title: "学术报告 | 网络大数据跨模态语义理解与事件推理",
    author: "何雨薇",
    create_date: "2023-11-10",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年11月10日14:00举办了学术讲座，中国科学院自动化研究所研究员<big <span class="highlight-text">胡卫明</span></big>作为主讲人分享了“<big <span class="highlight-text">网络大数据跨模态语义理解与事件推理</span></big>”，共同探讨了跨模态语义的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>胡卫明 博导、中国科学院自动化研究所研究院</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年11月10日（周日）14:00-15:00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 针对公共安全大数据多源、异质、时变、隐匿等复杂性特点导致的语义计算复杂、时空线索挖掘复杂和推理过程解释难问题，从模型构建、算法设计、关键技术和软件研制等方面进行网络大数据跨模态语义理解与事件推理方法研究。在大数据的跨模态语义理解方面，研究了基于局部文本错误建模的图像文本细粒度语义对齐、基于语义增强在线掩码图像恢复的图像文本预训练、基于文本知识引导的视频描述方法；在大数据多模态事理图谱与推理方面，研究了多模态事件抽取技术、篇章级复杂论元处理技术和基于多模态事理图谱的敏感视频搜索技术；在系统研发上，开发了网络多媒体数据的采集、建模和风控平台。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>胡卫明</span> </big> 中国科学院自动化研究所多模态人工智能系统全国重点实验室研究员、博士生导师、视频内容安全研究团队负责人，国家杰出青年科学基金获得者、中组部万人计划科技创新领军人才入选者、科技部中青年科技创新领军人才入选者、人社部百千万人才工程国家级人选、国家有突出贡献中青年专家、享受国务院政府特殊津贴、国家863重点专项项目首席专家，IEEE Trans. on PAMI、ACM Trans. on PML和IEEE Trans. on Cybernetics的Associate Editors。目前研究方向为网络多媒体敏感内容识别等，主持了国家自然科学基金重点项目、国家863重点专项项目、目标导向类课题等四十余项科研项目。已在PAMI、IJCV等国际刊物、国内一级刊物以及ICCV、ECCV、CVPR等重要国际学术会议上发表论文300余篇，获授权发明专利50余项。带领团队完成的敏感多媒体识别等技术实际应用于一百余家企事业单位，已在实战发挥作用，取得了显著的经济效益和社会效益。以第一完成人获国家自然科学二等奖、北京市科学技术(技术发明类)一等奖、北京市发明专利一等奖和吴文俊人工智能科学技术一等奖。</p>


      </div>
      `,
    title_en: "Academic Talk | Cross-modal semantic understanding and event inference of network big data",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On November 10, 2023, at 14:00，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text"Weiming Hu</span></big>,Researcher at the Institute of Automation, Chinese Academy of Sciences,shared“<big <span class="highlight-text">Cross-modal semantic understanding and event inference of network big data</span></big>”as the keynote speaker.The cutting-edge topics of cross-modal semantics are discusse.</p>
        <p><big <span class="highlight-text">Reported by：</span> </big> Weiming Hu, Ph.D. supervisor, Institute of Automation, Chinese Academy of Sciences</p>
        <p><big <span class="highlight-text">Report time：</span> </big>November  10, 2023 (Sunday) 14:00-15:00 p.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> In view of the complex semantic computing, complex spatiotemporal clue mining and difficult interpretation of the reasoning process caused by the complex characteristics of public safety big data such as multi-source, heterogeneity, time-varying and hidden, the cross-modal semantic understanding and event reasoning methods of network big data are studied from the aspects of model construction, algorithm design, key technology and software development. In terms of cross-modal semantic understanding of big data, the fine-grained semantic alignment of image text based on local text error modeling, the image text pre-training based on semantic enhancement online mask image recovery, and the video description method based on text knowledge guidance are studied. In terms of big data multimodal event graph and reasoning, the multimodal event extraction technology, the text-level complex argument meta-processing technology and the sensitive video search technology based on the multimodal event graph were studied. In terms of system research and development, we have developed a platform for the collection, modeling and risk control of network multimedia data.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Weiming Hu</span> </big> Researcher of the National Key Laboratory of Multimodal Artificial Intelligence Systems, Institute of Automation, Chinese Academy of Sciences, Doctoral Supervisor, Leader of the Video Content Security Research Team, Winner of the National Science Fund for Distinguished Young Scholars, Selected as a Leading Talent in Scientific and Technological Innovation of the Ten Thousand Talents Program of the Organization Department of the CPC Central Committee, Selected as a Young and Middle-aged Leading Talent in Scientific and Technological Innovation of the Ministry of Science and Technology, National Candidate for the Millions of Talents Project of the Ministry of Human Resources and Social Security, Young and Middle-aged Experts with Outstanding Contributions to the State, Enjoying Special Government Allowance of the State Council, Chief Expert of the National 863 Key Special Project, IEEE Trans. on PAMI、ACM Trans. on PML and IEEE Trans. Associate Editors on Cybernetics. At present, his research direction is network multimedia sensitive content recognition, etc., and he has presided over more than 40 scientific research projects, such as key projects of the National Natural Science Foundation of China, national 863 key special projects, and goal-oriented projects. He has published more than 300 papers in international journals such as PAMI and IJCV, domestic first-class journals, and important international academic conferences such as ICCV, ECCV, CVPR, etc., and has been authorized more than 50 invention patents. The sensitive multimedia recognition and other technologies completed by the team have been applied to more than 100 enterprises and institutions, and have played a role in actual combat and achieved significant economic and social benefits. As the first person to complete, he won the second prize of the National Natural Science Award, the first prize of Beijing Science and Technology (Technological Invention), the first prize of Beijing Invention Patent and the first prize of Wu Wenjun Artificial Intelligence Science and Technology..</p>


      </div>
    `,
    top:false
  },
  {
    id: 59,
    title: "CSSC实验室孔祥杰教授入选全球前2%顶尖科学家榜单",
    author: "舒灿",
    create_date: "2023-09-16",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>  近日，爱思唯尔（Elsevier）与美国斯坦福大学（Stanford University）更新了标准引文指标的全科学作者数据库，并发布了第六版《全球前2%顶尖科学家榜单2023》(World’s Top 2% Scientists 2023)。</p>
        <p>  CSSC实验室孔祥杰教授同时入选“终身科学影响力”榜单和“年度科学影响力”榜单。</p>
        <p><img src="/images/news/2023-10-16-kong-top2.png"/></p>
        <p align='center'>孔祥杰教授入选“终身科学影响力”榜单</p>
        <p><img src="/images/news/2023-10-16-kong-Lifetime influence.png"/></p>
        <p align='center'>孔祥杰教授入选“2022年度科学影响力”榜单</p>
        <p>据了解，全球前2%顶尖科学家榜单由斯坦福大学联合国际权威学术出版社爱思唯尔发布，基于全球近700万名科学家的论文引用数、h因子（全称“H-index”，用于评估科研人员的学术产出数量与学术产出水平）、合著者修正的hm因子、单独或第一作者的文章引用数等综合参数，遴选出全球排名前2%的科学家，分为22个学科领域、174个细分子学科领域，为科学家长期科研表现提供了一个衡量指标，能够更客观、更真实地反映科学家的影响力。“终身科学影响力榜单”更加关注科研人员整个学术生涯迄今的影响力，“年度科学影响力”则更聚焦于科研人员在本年度（2022年）的学术成就。</p>
        <p><img src="/images/news/2023-10-16-kong-Updataed science-wide author.png"/></p>

        <p>榜单来源：Ioannidis, John P.A. (2023), “October 2023 data-update for "Updated science-wide author databases of standardized citation indicators"”, Elsevier Data Repository, V6, DOI: 10.17632/btchxktzyw.6</p>
      </div>
      `,
    title_en: "Prof. Xiangjie Kong of the CSSC laboratory for being selected into the list of the top 2% of the world's top scientists",
    author_en: "Can Shu",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Elsevier and Stanford University updated its database of science-wide authors on standard citation metrics and released the sixth edition of World's Top 2% Scientists 2023.</p>
    <p>Prof Kong Xiangjie of the CSSC laboratory was selected into both the "Lifelong Scientific Impact" list and the "Annual Scientific Impact" list.</p>
    <p><img src="/images/news/2023-10-16-kong-top2.png"/></p>
    <p align='center'>Prof. Kong Xiangjie was selected into the list of "Lifelong Scientific Impact"</p>
    <p><img src="/images/news/2023-10-16-kong-Lifetime influence.png"/></p>
    <p align='center'>Prof. Kong Xiangjie was selected into the "2022 Scientific Impact List"</p>
    <br/>
    <p>It is understood that the list of the world's top 2% of top scientists is released by Stanford University and the international authoritative academic publishing house Elsevier, based on the number of paper citations of nearly 7 million scientists around the world, H-factor (full name "H-index", used to evaluate the number of academic output and academic output level of researchers), hm factor revised by co-authors, single or first author article citations and other comprehensive parameters, the top 2% of scientists in the world are selected, divided into 22 subject areas and 174 sub-disciplines, provides a measure of scientists' long-term scientific research performance, which can more objectively and truthfully reflect the influence of scientists. The "Lifetime Science Impact List" focuses more on the impact of researchers throughout their academic careers so far, while the "Annual Scientific Impact" focuses more on the academic achievements of researchers in this year (2022).</p>
    <p><img src="/images/news/2023-10-16-kong-Updataed science-wide author.png"/></p>
    <p>Ioannidis, John P.A. (2023), "October 2023 data-update for "Updated science-wide author databases of standardized citation indicators"", Elsevier Data Repository, V6, DOI: 10.17632/ btchxktzyw.6</p>
  </div>
    `,
    top:true
  },
  {
    id: 58,
    title: "学术报告 | Applied intelligent sensor and multimedia system and their applications in food science and Ag Tech",
    author: "何雨薇",
    create_date: "2023-06-11",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年6月11日 9:30举办了学术讲座，南澳大利亚大学副教授<big <span class="highlight-text">Ivan Lee</span></big>作为主讲人分享了“<big <span class="highlight-text">Applied intelligent sensor and multimedia system and their applications in food science and Ag Tech</span></big>”，共同探讨了传感器应用的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>Ivan Lee  University of South Australia</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年6月11日(周日)上午09：30-10：30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> Advances in intelligent sensors and multimedia systems supported by machine learning have found practical applications such as surveillance, monitoring, and quality inspection. These technologies can also be utilised in AgTech, assisting farmers to produce products that address the increasing demand of quality food. This presentation will begin with an overview of UniSA's past and recent work on intelligent sensor and multimedia systems. Then, specific AgTech projects, including almond quality and toxic analysis using RGB and hyperspectral imaging, machine-learning based tomato yield prediction, vision-based snail/slug tracking for pest control, and synchrotron-based analysis of wheat grain micronutrient and soil-root interactions.</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>Ivan Lee</span> </big> is an Associate Professor at University of South Australia, and a REDI Fellow. He received BE, MCom, ME, and PhD degrees from the University of Sydney, Australia. He was a software development engineer at Cisco Systems, a software engineer at Remotek Corporation, and an Assistant Professor at Ryerson University. His research interests include intelligent sensor, multimedia system, and data analytics. He has served as a Chief Investigator of 28 funded projects in Australia and in Canada. His research findings have been disseminated in over 150 peer-reviewed publications. He was a recipient of The Vannevar Bush Best Paper Honorable Mention of 2020 Jointed Conference on Digital Libraries (JCDL); the Lockheed Martin Best Paper Award of 2015 SPIE Defense + Security, Automatic Target Recognition XXV; and the Best Paper Award of 2007 Pacific-Rim Conference on Multimedia. He currently serves on the committee of National Computational Merit Allocation Scheme (NCMAS) in Australia.</p>

        <p><img src="/images/news/2023-06-11-Ivan_Lee-report.png"/></p>
      </div>
      `,
    title_en: "Academic Talk | Applied intelligent sensor and multimedia system and their applications in food science and Ag Tech",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>On June 11, 2023, at 9:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Ivan Lee</span></big>,Associate Professor of the University of South Australia,shared“<big <span class="highlight-text">Applied intelligent sensor and multimedia system and their applications in food science and Ag Tech</span></big>”as the keynote speaker.The cutting-edge topics of sensor applications were discussed。</p>
        <p><big <span class="highlight-text">Reported by：</span> </big>Ivan Lee  University of South Australia</p>
        <p><big <span class="highlight-text">Report time：</span> </big>June 11, 2023 (Sunday) 09:30-10:30 a.m</p>
        <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
        <p><big <span class="highlight-text">Abstract：</span> </big> Advances in intelligent sensors and multimedia systems supported by machine learning have found practical applications such as surveillance, monitoring, and quality inspection. These technologies can also be utilised in AgTech, assisting farmers to produce products that address the increasing demand of quality food. This presentation will begin with an overview of UniSA's past and recent work on intelligent sensor and multimedia systems. Then, specific AgTech projects, including almond quality and toxic analysis using RGB and hyperspectral imaging, machine-learning based tomato yield prediction, vision-based snail/slug tracking for pest control, and synchrotron-based analysis of wheat grain micronutrient and soil-root interactions.</p>
        <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
        <br>Ivan Lee</span> </big> is an Associate Professor at University of South Australia, and a REDI Fellow. He received BE, MCom, ME, and PhD degrees from the University of Sydney, Australia. He was a software development engineer at Cisco Systems, a software engineer at Remotek Corporation, and an Assistant Professor at Ryerson University. His research interests include intelligent sensor, multimedia system, and data analytics. He has served as a Chief Investigator of 28 funded projects in Australia and in Canada. His research findings have been disseminated in over 150 peer-reviewed publications. He was a recipient of The Vannevar Bush Best Paper Honorable Mention of 2020 Jointed Conference on Digital Libraries (JCDL); the Lockheed Martin Best Paper Award of 2015 SPIE Defense + Security, Automatic Target Recognition XXV; and the Best Paper Award of 2007 Pacific-Rim Conference on Multimedia. He currently serves on the committee of National Computational Merit Allocation Scheme (NCMAS) in Australia.</p>

        <p><img src="/images/news/2023-06-11-Ivan_Lee-report.png"/></p>
      </div>
    `,
    top:false
  },
  {
    id: 57,
    title: "学术报告 | 面向高度偏差及异质数据的可信共享智能研究",
    author: "何雨薇",
    create_date: "2023-06-02",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年6月2日 9:30举办了学术讲座，之江实验室智能计算平台研究中心研究专家<big <span class="highlight-text">杨耀</span></big>作为主讲人分享了“<big <span class="highlight-text">面向高度偏差及异质数据的可信共享智能研究</span></big>”，共同探讨了可信共享智能研究的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>Ivan Lee  University of South Australia</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年6月2日(周五)上午09：30-11：30</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 机器学习算法在金融、交通、科学等领域有广泛深入的应用。实际应用中的数据存在不同类型的缺失、偏差及异质性问题，例如存在高度随机或者块状缺失，训练数据和测试数据之间存在高度异质，多方数据联合建模时在特征维度、统计分布、建模任务等方面存在显著差异等。这为机器学习应用带来严重挑战，会大幅度降低算法模型的准确度和鲁棒性。针对上述问题，我们提出了创新的鲁棒机器学习算法，实现对单方数据的准确填充和建模；通过优化模型结构及求解过程，提升差异化多任务建模的准确性；提出双通道联合表征个性化联邦学习、小重叠场景纵向联邦学习等算法，提升多方数据建模的准确性。最后，报告也会对群体共识智能等前沿研究主题做开放性探讨。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>杨耀</span> </big> 之江实验室智能计算平台研究中心研究专家，研究方向为人工智能、隐私计算，以及上述前沿技术在科学、金融等领域的应用。博士毕业于上海交通大学，曾任加拿大国家研究院访问学者，有多年大型IT企业工作经验。累计在SIGIR, ACM MM, WWW, Knowledge Based System, Prog. Quantum Electron., APL等重要国际会议与期刊上发表20多篇高水平论文，授权国家发明专利15项。当前作为课题负责人牵头科技部重点项目计划机密计算项目课题，并作为项目负责人承担之江实验室揭榜挂帅项目《跨机构隐私保护机器学习平台开发和算法模型研究》，曾作为研发骨干参与完成国家重点研究计划重点支持项目《知识产权信息共享与运营服务应用示范》，带领团队研发了分布式可扩展的机器学习和联邦学习平台，并在深度学习的理论研究及算法模型创新方面做出一定工作。研发的算法平台和模型应用金融、互联网、自然科学等多类场景，显著的经济和社会效益。</p>

        <p><img src="/images/news/2023-06-02-yy-report.png"/></p>
      </div>
      `,
      title_en: "Academic Talk | Research on trusted shared intelligence for highly biased and heterogeneous data",
      author_en: "Yuwei He",
      summary_en: "",
      content_en: `
      <div style="text-align: justify;">
          <p>On June 02, 2023, at 9:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Yao Yang</span></big>,Research expert of Intelligent Computing Platform Research Center of Zhijiang Laboratory,shared“<big <span class="highlight-text">Research on trusted shared intelligence for highly biased and heterogeneous data</span></big>”as the keynote speaker.The cutting-edge topics of trusted shared intelligence research were discussed.</p>
          <p><big <span class="highlight-text">Reported by：</span> </big>Yao Yang  Research expert of Intelligent Computing Platform Research Center of Zhijiang Laboratory</p>
          <p><big <span class="highlight-text">Report time：</span> </big>June 02, 2023 (Friday) 09:30-11:30 a.m</p>
          <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
          <p><big <span class="highlight-text">Abstract：</span> </big> Machine learning algorithms have extensive and in-depth applications in finance, transportation, science, and other fields. There are different types of missing, bias and heterogeneity of data in practical applications, such as highly random or blocky deletions, high heterogeneity between training data and test data, and significant differences in feature dimensions, statistical distribution, and modeling tasks in multi-party data joint modeling. This poses a serious challenge to machine learning applications, which greatly reduces the accuracy and robustness of algorithmic models. To solve the above problems, we propose an innovative robust machine learning algorithm to achieve accurate filling and modeling of unilateral data. By optimizing the model structure and solving process, the accuracy of differentiated multi-task modeling is improved. Algorithms such as dual-channel joint representation personalized federated learning and longitudinal federated learning for small overlap scenarios are proposed to improve the accuracy of multi-party data modeling. Finally, the report will also make an open discussion on cutting-edge research topics such as crowd consensus intelligence.</p>
          <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
          <br>Yao Yang</span> </big> He is a research expert at the Intelligent Computing Platform Research Center of Zhijiang Laboratory, with research interests in artificial intelligence, privacy-preserving computing, and the application of the above-mentioned cutting-edge technologies in science, finance and other fields. He graduated from Shanghai Jiao Tong University with a Ph.D. degree, and was a visiting scholar at the National Research Institute of Canada, and has many years of experience in large IT companies. Accumulated in SIGIR, ACM MM, WWW, Knowledge Based System, Prog. He has published more than 20 high-level papers in important international conferences and journals such as Quantum Electron., APL, and authorized 15 national invention patents. At present, as the project leader, he leads the confidential computing project of the key project plan of the Ministry of Science and Technology, and as the project leader, he undertakes the unveiling project of Zhijiang Laboratory "Research on the Development of Cross-institutional Privacy Protection Machine Learning Platform and Algorithm Model", and has participated in the completion of the key support project of the National Key Research Program "Application Demonstration of Intellectual Property Information Sharing and Operation Services" as the R&D backbone, and led the team to develop a distributed and scalable machine learning and federated learning platform. He has also made some work in the theoretical research of deep learning and the innovation of algorithm models. The algorithm platform and model developed by the company are applied to various scenarios such as finance, Internet, and natural science, with significant economic and social benefits.</p>

    <p><img src="/images/news/2023-06-02-yy-report.png"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 56,
    title: "学术报告 | 基于内容建模的高效图像超分辨率方法研究",
    author: "何雨薇",
    create_date: "2023-05-23",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年5月23日 9:30举办了学术讲座，大连理工大学<big <span class="highlight-text">刘宇擎</span></big>作为主讲人分享了“<big <span class="highlight-text">基于内容建模的高效图像超分辨率方法研究</span></big>”，共同探讨了高效图像超分辨率设计的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>刘宇擎  工学博士</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年5月23日(周二)上午10：00-11：00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 图像是人们感知和交互信息的重要载体，随着超高清显示设备的发展和智能移动终端的普及，人们对高质量图像的需求逐渐增加。图像超分辨率方法指通过数字图像处理等手段，对采集到的低分辨率、缺少细节的图像进行内容恢复，生成高分辨率、细节丰富的图像。尽管近些年基于深度学习的超分辨率方法在画质提升上取得一定进展，但现阶段工作参数量和计算量较高，不能满足用户对处理速度的需求，缺少与主观体验一致的图像质量评价方法。该报告从内容建模的角度出发，讨论高效图像超分辨率的相关技术，并探索算法在移动终端上的部署方案。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>刘宇擎</span> </big> 工学博士。主要研究方向为深度学习、图像/视频质量增强。参与国家自然科学基金项目、国家重点研发专项、中国工程院战略咨询项目等5项，累计发表SCI期刊论文10篇。受邀担任IEEE TIP、IEEE TCSVT、ICME、ICASSP等高水平国际期刊和会议审稿人或程序委员，参与中国信通院关于实时音视频、金融音视频、元宇宙等多项标准制定讨论。曾获《中国计算机学会通讯（CCCF）》突出贡献奖，2023年移动智能影像处理（MIPI）竞赛双赛道冠军。</p>

        <p><img src="/images/news/2023-5-23-lyq-report.png"/></p>
      </div>
      `,
      title_en: "Academic Talk | Research on efficient image super-resolution method based on content modeling",
      author_en: "Yuwei He",
      summary_en: "",
      content_en: `
      <div style="text-align: justify;">
          <p>On May 23, 2023, at 9:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Yuqin Liu</span></big>,Dalian University of Technology,shared“<big <span class="highlight-text">Research on efficient image super-resolution method based on content modeling</span></big>”as the keynote speaker.The cutting-edge topics of efficient image super-resolution design were discussed.</p>
          <p><big <span class="highlight-text">Reported by：</span> </big>Yuqin Liu  Doctor of Engineering</p>
          <p><big <span class="highlight-text">Report time：</span> </big>May 23, 2023 (Friday) 10:00-11:00 a.m</p>
          <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
          <p><big <span class="highlight-text">Abstract：</span> </big>Image is an important carrier for people's perception and interaction of information, with the development of ultra-high-definition display equipment and the popularization of intelligent mobile terminals, people's demand for high-quality images is gradually increasing. The image super-resolution method refers to the content recovery of the acquired low-resolution and lack-detailed images through digital image processing and other means to generate high-resolution and detail-rich images. Although the super-resolution method based on deep learning has made some progress in improving image quality in recent years, the number of working parameters and computation at this stage is high, which cannot meet the user's demand for processing speed, and there is a lack of image quality evaluation methods consistent with subjective experience. From the perspective of content modeling, this report discusses the related technologies of high-efficiency image super-resolution, and explores the deployment scheme of the algorithm on mobile terminals.</p>
          <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
          <br>Yuqin Liu</span> </big> Doctor of Engineering. His main research interests are deep learning and image/video quality enhancement. He has participated in 5 projects such as the National Natural Science Foundation of China, the National Key R&D Project, and the Strategic Consulting Project of the Chinese Academy of Engineering, and has published 10 SCI journal papers. He has been invited to serve as a reviewer or program member of high-level international journals and conferences such as IEEE TIP, IEEE TCSVT, ICME, ICASSP, etc., and participated in the discussion of the formulation of many standards such as real-time audio and video, financial audio and video, and metaverse by the China Academy of Information and Communications Technology. He has won the Outstanding Contribution Award of the Communication of the China Computer Federation (CCCF) and the champion of the 2023 Mobile Intelligent Image Processing (MIPI) Competition.</p>

    <p><img src="/images/news/2023-5-23-lyq-report.png"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 55,
    title: "学术报告 |  ChatGPT的初步探索",
    author: "何雨薇",
    create_date: "2023-04-28",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年4月28日 15:30举办了学术讲座，大连理工大学长聘副教授<big <span class="highlight-text">刘晗</span></big>作为主讲人分享了“<big <span class="highlight-text">ChatGPT的初步探索</span></big>”，共同探讨了ChatGPT的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>刘晗  大连理工大学长聘副教授</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年4月28日(周五)下午15:00-16:00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 2022年11月30日，OpenAI研发的聊天机器人程序ChatGPT横空出世。ChatGPT发布后的五天时间里，收获了100万用户。推出仅仅两个月，月活跃用户就成功过亿，成为历史上增长最快的消费者应用程序。ChatGPT作为全新的对话式通用人工智能工具，在多个领域均表现出了非常惊艳的语言理解、生成、知识推理能力。该报告主要围绕ChatGPT的相关背景、关键技术、未来发展几个方面进行讨论，进而探索如何利用大模型赋能交叉学科领域，引领各行各业的发展。</p>
        <p><big <span class="highlight-text">演讲人简介：</span> </big> <big <span class="highlight-text">
        <br>刘晗</span> </big> 工学博士，大连理工大学长聘副教授，曾任香港理工大学博士后研究员。主要研究方向为人工智能、机器学习，具体包括对话系统、小样本/零样本学习、对抗样本生成、图神经网络等。主持在研国家自然科学基金项目，GF科技创新特区项目，星海骨干项目，企事业单位委托项目等5项，参与在研国家重点研发计划青年科学家等多项国家级纵向项目5项。已发表CCF A/B类等高水平学术论文40余篇，包括多篇TKDE、KDD、AAAI、IJCAI、SIGIR、WWW、CVPR、ACL等国际顶级期刊和会议论文。多次受邀担任TPAMI、AI、AAAI、IJCAI、KDD、CVPR、ICCV、ECCV、ACL、EMNLP等20余种高水平国际期刊和会议审稿人或程序委员。2019年入选香港创新及科技基金博士专才库计划，2020年入选大连市新引进高层次人才，2021年入选大连理工大学星海人才培育计划，2022年华为昇腾AI创新大赛赛区金奖、全国铜奖2022年字节跳动安全AI挑战赛（对抗文本攻击赛道）全国冠军。</p>

        <p><img src="/images/news/2023-4-28-lh-report.png"/></p>
      </div>
      `,
      title_en: "Academic Talk | Initial exploration of ChatGPT",
      author_en: "Yuwei He",
      summary_en: "",
      content_en: `
      <div style="text-align: justify;">
          <p>On April 28, 2023, at 15:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Han Liu</span></big>,Tenured associate professor at Dalian University of Technology,shared“<big <span class="highlight-text">Initial exploration of ChatGPT</span></big>”as the keynote speaker.The cutting-edge topics of ChatGPT were discussed.</p>
          <p><big <span class="highlight-text">Reported by：</span> </big>Han Liu  Tenured associate professor at Dalian University of Technology</p>
          <p><big <span class="highlight-text">Report time：</span> </big>April 28, 2023 (Tuesday) 15:00-16:00 p.m</p>
          <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
          <p><big <span class="highlight-text">Abstract：</span> </big>On November 30, 2022, ChatGPT, a chatbot program developed by OpenAI, was born. In the five days since its release, ChatGPT has gained 1 million users. Just two months after its launch, it surpassed 100 million monthly active users, making it the fastest-growing consumer app in history. As a new conversational general artificial intelligence tool, ChatGPT has demonstrated amazing language understanding, generation, and knowledge reasoning capabilities in many fields. The report mainly discusses the relevant background, key technologies, and future development of ChatGPT, and then explores how to use large models to empower interdisciplinary fields and lead the development of all walks of life.</p>
          <p><big <span class="highlight-text">Reporters' Profile：</span> </big> <big <span class="highlight-text">
          <br>Han Liu</span> </big> Doctor of Engineering, tenured associate professor of Dalian University of Technology, former postdoctoral researcher of Hong Kong Polytechnic University. His main research interests are artificial intelligence and machine learning, including dialogue systems, small-shot/zero-shot learning, adversarial sample generation, graph neural networks, etc. He has presided over 5 projects such as the National Natural Science Foundation of China, the GF Science and Technology Innovation Special Zone Project, the Xinghai Backbone Project, and the projects commissioned by enterprises and institutions, and participated in 5 national longitudinal projects such as the National Key R&D Program Young Scientists. He has published more than 40 high-level academic papers such as CCF A/B, including many top international journals and conference papers such as TKDE, KDD, AAAI, IJCAI, SIGIR, WWW, CVPR, ACL, etc. He has been invited to serve as a reviewer or program member of more than 20 high-level international journals and conferences, such as TPAMI, AI, AAAI, IJCAI, KDD, CVPR, ICCV, ECCV, ACL, EMNLP, etc. In 2019, he was selected into the Hong Kong Innovation and Technology Fund Doctoral Talent Pool Program, in 2020, he was selected as a newly introduced high-level talent in Dalian, in 2021, he was selected into the Xinghai Talent Cultivation Program of Dalian University of Technology, and in 2022, he won the Gold Award and the National Bronze Award in the Huawei Ascend AI Innovation Competition, and the National Champion of the 2022 ByteDance Security AI Challenge (Confrontational Text Attack Track).</p>

    <p><img src="/images/news/2023-4-28-lh-report.png"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 54,
    title: "学术报告 |  强化学习、图卷积在交通信号控制等方面的应用",
    author: "何雨薇",
    create_date: "2023-03-10",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年3月10日 9:30举办了学术讲座，香港城市大学<big <span class="highlight-text">韩笑</span></big>作为主讲人分享了“<big <span class="highlight-text">强化学习、图卷积在交通信号控制等方面的应用</span></big>”，共同探讨了机器学习的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>韩笑  香港城市大学</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年3月10日(周五)上午9:30-11:00</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>

        <p><img src="/images/news/2023-3-10-hx-report.png"/></p>
      </div>
      `,
      title_en: "Academic Talk | Application of reinforcement learning and graph convolution in traffic signal control",
      author_en: "Yuwei He",
      summary_en: "",
      content_en: `
      <div style="text-align: justify;">
          <p>On March 28, 2023, at 9:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Xiao Han</span></big>,City University of Hong Kong,shared“<big <span class="highlight-text">Application of reinforcement learning and graph convolution in traffic signal control</span></big>”as the keynote speaker.The cutting-edge topics of machine learning were discussed.</p>
          <p><big <span class="highlight-text">Reported by：</span> </big>Xiao Han  City University of Hong Kong</p>
          <p><big <span class="highlight-text">Report time：</span> </big>March 10, 2023 (Friday) 9:00-11:00 a.m</p>
          <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>


    <p><img src="/images/news/2023-3-10-hx-report.png"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 53,
    title: "学术报告 |  城市智能交通发展与典型应用",
    author: "何雨薇",
    create_date: "2023-03-06",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p><big <span class="highlight-text">浙江工业大学城市科学与社会计算研究组(CSSC Lab)</span></big>于 2023年3月6日 9:45举办了学术讲座，浙江浙大中控信息产业有限公司副总裁<big <span class="highlight-text">周俊杰</span></big>作为主讲人分享了“<big <span class="highlight-text">城市智能交通发展与典型应用</span></big>”，共同探讨了高效图像超分辨率设计的前沿话题。</p>
        <p><big <span class="highlight-text">演讲人：</span> </big>周俊杰  浙江浙大中控信息产业有限公司副总裁、智慧交通事业群常务副总经理学博士</p>
        <p><big <span class="highlight-text">报告时间：</span> </big>2023年3月6日(周一)上午9:45-11:15</p>
        <p><big <span class="highlight-text">报告地点：</span> </big>浙江工业大学 计算机大楼A411</p>
        <p><big <span class="highlight-text">报告摘要：</span> </big> 智能交通是信息技术在交通管控中的典型应用。本报告重点介绍基于数字孪生、深度学习、大数据、物联网等新技术城市交通控制技术以及相应的软硬件产品，并结合重点工程项目介绍典型应用场景。最后简单介绍基于行业需求的智能交通产业发展方向。</p>

      </div>
      `,
      title_en: "Academic Talk | Development and typical applications of urban intelligent transportation",
      author_en: "Yuwei He",
      summary_en: "",
      content_en: `
      <div style="text-align: justify;">
          <p>On March 06, 2023, at 15:30，the <big <span class="highlight-text">Research Group of Urban Science and Social Computing, Zhejiang University of Technology(CSSC Lab)</span></big> held an academic lecture，and <big <span class="highlight-text">Junjie Zhou</span></big>,Vice President of Zhejiang Supcon Information Technology Co.,Ltd,shared“<big <span class="highlight-text">Development and typical applications of urban intelligent transportation</span></big>”as the keynote speaker.The cutting-edge topics of efficient image super-resolution design were discussed.</p>
          <p><big <span class="highlight-text">Reported by：</span> </big>Junjie Zhou  Dr. Xue, Vice President of Zhejiang University SUPCON Information Industry Co., Ltd. and Executive Deputy General Manager of Intelligent Transportation Business Group </p>
          <p><big <span class="highlight-text">Report time：</span> </big>March 06, 2023 (Monday) 9:45-11:15 p.m</p>
          <p><big <span class="highlight-text">Report location：</span> </big>Zhejiang University of Technology, Computer Building, A411</p>
          <p><big <span class="highlight-text">Abstract：</span> </big>Intelligent transportation is a typical application of information technology in traffic control. This report focuses on urban traffic control technologies based on new technologies such as digital twins, deep learning, big data, and the Internet of Things, as well as corresponding software and hardware products, and introduces typical application scenarios in combination with key engineering projects. Finally, the development direction of the intelligent transportation industry based on the needs of the industry is briefly introduced.</p>

  </div>
    `,
    top:false
  },
  {
    id: 52,
    title: "CSSC实验室1篇论文被Information Fusion 2023录用",
    author: "何雨薇",
    create_date: "2023-02-28",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>该杂志旨在在一个论坛上展示多传感器、多源、多过程信息融合领域的所有发展，从而促进促进其发展的众多学科之间的协同作用。该杂志是传播信息融合领域研究与开发各个方面信息的主要工具。文章应强调三个方面中的一个或多个：架构、算法和应用程序。</p>
        <p><img src="/images/news/2023-02-28-zzc-paper.png"/></p>
        <p>恭喜CSSC实验室硕士生朱柘潮的论文被Information Fusion 2023录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《Multimodal Sentiment Analysis with Fusion Methods: A Survey》（基于融合方法的多模态情感分析：综述）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>情感分析是一种新兴的技术，旨在探索人们对实体的态度。可应用于产品评论分析、舆情分析、精神疾病分析、风险评估分析等不同领域和场景。传统的情感分析仅包含文本模态信息，通过推断句子内部的语义关系来提取情感信息。然而，一些特殊的表达，如讽刺和夸张，很难仅通过词汇来检测。多模态情感分析除包含文本外，还包含丰富的视觉和听觉信息，使用融合分析更准确地推断隐式情感极性(积极、中介、消极)。多模态情感分析的主要挑战是跨模态情感信息的融合，因此重点研究不同融合方法的框架和特点。此外，还讨论了多模态情感分析的发展现状、流行的数据集、特征提取算法、应用领域以及存在的挑战。希望我们的工作将帮助研究人员了解多模态情感分析领域的最新进展，并从文中提供的有用见解中得到启发，以开发有效的模型。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by Information Fusion 2023",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
     <div style="text-align: justify;">
        <p>The journal aims to present all developments in the field of multi-sensor, multi-source, multi-process information fusion in a single forum, thus promoting synergies between the numerous disciplines that contribute to its development. The journal is the main tool for disseminating information on all aspects of research and development in the field of information convergence. The article should emphasize one or more of three areas: architecture, algorithms, and applications.</p>
        <p><img src="/images/news/2023-02-28-zzc-paper.png"/></p>
        <p>Congratulations to Zhechao Zhu, a master's student in CSSC Lab, whose thesis has been accepted by Information Fusion 2023!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Multimodal Sentiment Analysis with Fusion Methods: A Survey》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>Sentiment analysis is an emerging technique that aims to explore people's attitudes towards entities. It can be applied to different fields and scenarios such as product review analysis, public opinion analysis, mental illness analysis, risk assessment analysis, etc. Traditional sentiment analysis contains only textual modal information, extracting sentiment information by inferring semantic relationships within sentences. However, some special expressions, such as sarcasm and exaggeration, are difficult to detect by words alone. Multimodal sentiment analysis contains a wealth of visual and auditory information in addition to text, using fusion analysis to more accurately infer implicit sentiment polarities (positive, mediated, negative). The main challenge of multimodal sentiment analysis is the fusion of cross-modal sentiment information, so the framework and characteristics of different fusion methods are studied. In addition, the development status of multimodal sentiment analysis, popular datasets, feature extraction algorithms, application fields, and existing challenges are discussed. Hopefully, our work will help researchers understand the latest advances in the field of multimodal sentiment analysis and be inspired by the useful insights provided in the article to develop effective models.</p>
      </div>
    `,
    top:false
  },
  {
    id: 51,
    title: "CSSC实验室1篇论文被Neurocomputing 2023录用",
    author: "何雨薇",
    create_date: "2023-02-28",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>神经计算欢迎旨在进一步理解神经网络和学习系统的理论贡献，包括但不限于架构、学习方法、网络动力学分析、学习理论、自组织、生物神经网络建模、感觉运动转换以及与人工智能、人工生命、认知科学、计算学习理论、模糊逻辑、遗传算法、 信息论、机器学习、神经生物学和模式识别。</p>
        <p><img src="/images/news/2023-02-28-zwf-paper.png"/></p>
        <p>恭喜CSSC实验室博士生周文峰的论文被Neurocomputing 2023录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>Bidirectional spatial-temporal traffic data imputation via graph attention recurrent neural network》（基于图注意力递归神经网络的双向时空交通数据插补）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>交通数据在智能交通系统（ITS）中占有重要地位。但是，收集的流量数据通常不完整。本文提出一种基于多视角时空学习（MST-GAN）的生成对抗网络（GAN）模型来修复数据。为了达到从时间、空间和时空三个角度插值数据的效果，我们利用具有独立参数的链式生成器逐步细化对时间和空间特征的学习。此外，我们通过多个生成器和一个鉴别器之间的对抗，实现了多视角特征的高级融合。我们在两个真实数据集上进行了实验，表明MST-GAN模型在不同缺失模式下的插补效果优于其他基线模型。例如，在随机缺失场景中，均方根误差（RMSE）小于7.5%，平均绝对误差（MAE）小于5%，远低于其他模型的最佳性能误差。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by Neurocomputing 2023",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>Neural computing welcomes theoretical contributions aimed at furthering the understanding of neural networks and learning systems, including but not limited to architecture, learning methods, network dynamics analysis, learning theory, self-organization, biological neural network modeling, sensorimotor transformation, and related to artificial intelligence, artificial life, cognitive science, computational learning theory, fuzzy logic, genetic algorithms, information theory, machine learning, neurobiology, and pattern recognition。</p>
        <p><img src="/images/news/2023-02-28-zwf-paper.png"/></p>
        <p>Congratulations to Wenfeng Zhou, a PhD student in CSSC Lab, whose paper has been accepted by Neurocomputing 2023!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Bidirectional spatial-temporal traffic data imputation via graph attention recurrent neural network》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>Traffic data plays an important role in Intelligent Transportation Systems (ITS). However, the traffic data collected is often incomplete. In this paper, we propose a Generative Adversarial Network (GAN) model based on Multi-View Spatiotemporal Learning (MST-GAN) to repair data. In order to interpolate data from the perspectives of time, space and space-time, we use a chain generator with independent parameters to gradually refine the learning of temporal and spatial features. In addition, we achieved advanced fusion of multi-view features through the confrontation between multiple generators and one discriminator. Experiments on two real datasets show that the imputation effect of the MST-GAN model in different deletion modes is better than that of other baseline models. For example, in the random missing scenario, the root mean square error (RMSE) is less than 7.5% and the mean absolute error (MAE) is less than 5%, which is much lower than the optimal performance error of other models.</p>
      </div>
    `,
    top:false
  },
  {
    id: 50,
    title: "热烈祝贺周文峰等同学完成的论文被Knowledge-Based Systems录用",
    author: "何雨薇",
    create_date: "2022-12-07",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>论文题目：</p>
        <p>《Dynamic graph convolutional recurrent imputation network for spatiotemporal traﬃc missing data》</p>
        <br/>
        <p>摘要：</p>
        <p>
        In real-world intelligent transportation systems，the spatiotemporal traffic data collected from sensors often exhibit missing or corrupted data, significantly hindering the development of traffic data research. Missing data imputation is a classic research topic that encompasses a wide range of methods. However, these methods are typically underdeveloped in two aspects：the dynamic spatial dependencies of the road network over time, and the information extraction and utilization of diverse data. In this study，we design a novel deep learning architecture—Dynamic Graph Convolutional Recurrent Imputation Network(DGCRIN)—as a tool to impute missing traffic data. The DGCRIN employs a graph generator and dynamic graph convolutional gated recurrent unit (DGCGRU) to perform fine-grained modeling of the dynamic spatiotemporal dependencies of road network. Additionally, an auxiliary GRU learns the missing pattern information of the data, and a fusion layer with a decay mechanism is introduced to fuse a diverse range of information. This architecture enables the DGCRIN to be highly adaptable to complex scenarios involving missing data. Extensive experiments on two datasets demonstrate the superiority of DGCRIN over multiple baseline models.
        </p>
      </div>
      `,
    title_en: "The paper by Wenfeng Zhou et al. was accepted by Knowledge-Based Systems",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: TAP: Dynamic graph convolutional recurrent imputation network for spatiotemporal traﬃc missing data</p>
    <p>Abstract：</p>
    <p>
    In real-world intelligent transportation systems，the spatiotemporal traffic data collected from sensors often exhibit missing or corrupted data, significantly hindering the development of traffic data research. Missing data imputation is a classic research topic that encompasses a wide range of methods. However, these methods are typically underdeveloped in two aspects：the dynamic spatial dependencies of the road network over time, and the information extraction and utilization of diverse data. In this study，we design a novel deep learning architecture—Dynamic Graph Convolutional Recurrent Imputation Network(DGCRIN)—as a tool to impute missing traffic data. The DGCRIN employs a graph generator and dynamic graph convolutional gated recurrent unit (DGCGRU) to perform fine-grained modeling of the dynamic spatiotemporal dependencies of road network. Additionally, an auxiliary GRU learns the missing pattern information of the data, and a fusion layer with a decay mechanism is introduced to fuse a diverse range of information. This architecture enables the DGCRIN to be highly adaptable to complex scenarios involving missing data. Extensive experiments on two datasets demonstrate the superiority of DGCRIN over multiple baseline models.

    </p>
  </div>
    `,
    top:false
  },
  {
    id: 49,
    title: "CSSC实验室1篇论文被TCSS 2022录用",
    author: "何雨薇",
    create_date: "2022-12-01",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>IEEE Transactions on Computational Social Systems (TCSS) 期刊（IEEE TCSS，IEEE计算社会系统汇刊）于2014年由IEEE SMC Society和IEEE Computer Society共同创刊，是中国自动化学会推荐的A类期刊。该期刊内容涵盖社会计算、社会系统建模与仿真、社会网络动力学、社会智能与认知、社会系统设计与架构、社会文化建模与表现、计算行为建模及其应用等。IEEE TCSS在“社会科学”学科类别的426个学术出版物中排名第10位，排名位列世界前3%。</p>
        <p><img src="/images/news/2022-12-01-hzq-paper.png"/></p>
        <p>恭喜CSSC实验室硕士生黄志强的论文被TCSS 2022录用！</p>

        <p><big <span class="highlight-text">题目：</span> </big>《Urban Overtourism Detection with Graph Temporal Convolutional Networks》（基于图时序卷积网络的城市过度旅游检测）</p>

        <br/>
        <p><big <span class="highlight-text">摘要：</span> </big>在现实世界的智能交通系统中，传感器采集的时空交通数据往往呈现出缺失或损坏的数据，严重阻碍了交通数据研究的发展。缺失数据插补是一个经典的研究课题，涵盖了广泛的方法。然而，这些方法在两个方面通常不成熟：道路网络随时间变化的动态空间依赖性，以及信息的提取和利用多样化数据。在这项研究中，我们设计了一种新颖的深度学习架构——动态图卷积递归值网络（DGCRIN）——作为插补缺失交通数据的工具。DGCRIN 采用图生成器和动态图卷积门控循环单元 （DGCGRU） 对道路网络的动态时空依赖性进行细粒度建模。此外，辅助GRU学习数据缺失的模式信息，并引入具有衰减机制的融合层来融合各种信息。这种架构使 DGCRIN 能够高度适应涉及缺失数据的复杂场景。在两个数据集上的大量实验证明了DGCRIN优于多个基线模型。</p>
      </div>
      `,
    title_en: "One paper from CSSC Lab was accepted by TCSS 2022",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
        <p>IEEE Transactions on Computational Social Systems (TCSS) was co-founded in 2014 by IEEE SMC Society and IEEE Computer Society, and is a Class A journal recommended by the Chinese Society of Automation. The journal covers social computing, social system modeling and simulation, social network dynamics, social intelligence and cognition, social system design and architecture, sociocultural modeling and representation, computational behavior modeling and its applications, etc. IEEE TCSS is ranked 10th out of 426 scholarly publications in the "Social Sciences" subject category, ranking in the top 3% of the world</p>
        <p><img src="/images/news/2022-12-01-hzq-paper.png"/></p>
        <p>Congratulations to Zhiqiang Huang, a master's student in CSSC Lab, whose thesis has been accepted by TCSS 2022!</p>

        <p><big <span class="highlight-text">Title：</span> </big>《Urban Overtourism Detection with Graph Temporal Convolutional Networks》</p>

        <br/>
        <p><big <span class="highlight-text">Abstract：</span> </big>In real-world intelligent transportation systems, the spatiotemporal traffic data collected by sensors often presents missing or damaged data, which seriously hinders the development of traffic data research. Missing data imputation is a classic research topic that covers a wide range of methods. However, these approaches are often immature in two ways: the dynamic spatial dependence of road networks over time, and the extraction and utilization of diverse data for information. In this study, we designed a novel deep learning architecture—a dynamic graph convolutional recursive value network (DGCRIN)—as a tool to impose missing traffic data. DGCRIN uses a graph generator and a dynamic graph convolutional gated recurrent unit (DGCGRU) to model the dynamic spatiotemporal dependencies of the road network on a fine-grained basis. In addition, the GRU is assisted to learn the missing schema information of the data, and a fusion layer with attenuation mechanism is introduced to fuse various information. This architecture allows DGCRIN to be highly adaptable to complex scenarios involving missing data. A large number of experiments on two datasets have demonstrated that DGCRIN is superior to multiple baseline models.</p>
      </div>
    `,
    top:false
  },
  {
    id: 48,
    title: "热烈祝贺朱迪锋同学顺利毕业获得博士学位",
    author: "何雨薇",
    create_date: "2022-12-01",
    summary: "",
    content:
      `
      <div style="text-align: justify;">

        <p><img src="/images/news/graduate_zhudifeng.jpg"/></p>
      </div>
      `,
    title_en: "Difeng Zhu successfully defended phd thesis on December 1st",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">

    <p><img src="/images/news/graduate_zhudifeng.jpg"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 47,
    title: "11月18日河海大学韩光洁学术报告",
    author: "何雨薇",
    create_date: "2022-11-18",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告主题：水声传感器网络中源节点位置隐私保护算法</p>
        <p>报告地点：计算机大楼A401</p>
        <br/>
        <p>报告摘要：</p>
        <p>
        随着智慧海洋的兴起，当今海洋正朝着数字化、生态化、安全化与和谐化发展，其中海洋安全，尤其是数据源（源节点）的位置安全，对于支撑智慧海洋的建设至关重要，表现出很强的研究及应用价值。源节点位置保护过程中面临的安全问题，特别是外部攻击者根据水下数据传输的时空相关性发现源节点位置的问题，成为制约水下源节点位置隐私保护技术发展的关键性因素。本报告将介绍实验室团队在水声传感器网络中源节点位置隐私保护算法研究中所取得的成果。首先介绍相关研究背景，并在此基础上介绍一种基于分层结构的源节点位置隐私保护算法；接着从均衡网络安全期和数据传播时延角度，介绍一种基于位置推送的源节点位置隐私保护算法；最后，在上述所提算法的基础上，考虑水下多信道干扰因素，介绍一种基于多信道干扰的源节点位置隐私保护算法。本报告介绍的研究工作对探索水声传感器网络的源节点位置隐私保护技术及应用具有重要的理论价值和实际意义。
        </p>
        <br/>
        <p>报告人简介：</p>
        <p>
        韩光洁，博士、河海大学教授/博导，IET Fellow，EAI Fellow。主要研究方向为工业物联网、智慧海洋、人工智能、移动计算等。近年来在IEEE JSAC, IEEE TMC, IEEE TPDS, IEEE TCC等国际期刊上发表高水平SCI期刊论文350篇（其中IEEE/ACM Trans. 系列汇刊90+篇），到目前为止Google Scholar引用次数12000+次，H-index为58。已出版专著3部、译著1部。主持包括国家重点研发计划和国家自然科学基金重点项目等省部级以上项目共30余项。授权国家发明专利117件，PCT国际授权专利6件。获得中国商业联合会科学技术奖二等奖，江苏省科学技术奖三等奖，辽宁省科技进步二等奖，IEEE Systems Journal 2020最佳论文奖等奖项。连续4年（2019-2022）入选全球排名前2%的科学家榜单，包括“终身科学影响力排行榜”（1960-2022）和“科学影响力排行榜”两个榜单；入选爱思唯尔2020年10万科学家终身科学影响力排行榜（Career Scientific Impact）榜单；连续2年（2020-2021）入选爱思唯尔中国高被引学者榜单。目前任多种国际期刊（其中包括 IEEE Systems, IEEE/CAA JAS）副主编。江苏省333高层次人才（第二层次）、江苏省有突出贡献中青年专家，闽江学者讲座教授，常州市五一劳动奖章等荣誉称号。

        </p>
        <p><img src="/images/news/2022-11-18-hgj-report.jpg"/></p>
      </div>
      `,
    title_en: "Pro. Guangjie Han from Hohai University visited the CSSC Lab and gave a talk on November 18th",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: Credibility map learning</p>
    <p>Abstract：</p>
    <p>
    With the rise of smart oceans, today's oceans are developing towards digitalization, ecology, security and harmony. Among them, ocean security, especially the location security of data sources (source nodes), is crucial to support the construction of smart oceans, showing strong research and application value. The security problems faced by the source node location protection process, especially the problem that external attackers find the location of the source node according to the spatio-temporal correlation of underwater data transmission, have become the key factors restricting the development of underwater source node location privacy protection technology. This report will introduce the achievements of the laboratory team in the research of source node location privacy protection algorithm in underwater acoustic sensor networks. Firstly, the research background is introduced, and then a source node location privacy protection algorithm based on hierarchical structure is introduced; Then, from the perspective of balancing the network security period and data propagation delay, a source node location privacy protection algorithm based on location push is introduced; Finally, on the basis of the above algorithm, considering the underwater multi-channel interference, a source node location privacy protection algorithm based on multi-channel interference is introduced. The research work introduced in this report has important theoretical value and practical significance for exploring the source node location privacy protection technology and application of underwater acoustic sensor networks.
    </p>
    <br/>
    <p>Reporters' Profile：</p>
    <p>
    Guangjie Han, doctor, professor/doctoral advisor of Hohai University, IET Fellow, EAI Fellow. The main research directions are industrial Internet of Things, intelligent ocean, artificial intelligence, mobile computing, etc. In recent years, 350 high-level SCI journals have been published in IEEE JSAC, IEEE TMC, IEEE TPDS, IEEE TCC and other international journals (including 90+IEEE/ACM Trans. series journals). Up to now, Google Scholar has been cited 12000+times, and H-index is 58. Three monographs and one translation have been published. He has presided over more than 30 provincial and ministerial level projects, including national key research and development plans and key projects of the National Natural Science Foundation of China. 117 national invention patents and 6 PCT international patents were authorized. It won the second prize of Science and Technology Award of China Federation of Commerce, the third prize of Jiangsu Science and Technology Award, the second prize of Liaoning Science and Technology Progress Award, IEEE Systems Journal 2020 Best Paper Award and other awards. For four consecutive years (2019-2022), it has been selected into the top 2% of the global scientists list, including the "Lifelong Scientific Influence List" (1960-2022) and the "Scientific Influence List"; Selected into the Career Scientific Impact of 100000 scientists in 2020; For two consecutive years (2020-2021), he was selected into the list of highly cited scholars of Elsevier China. At present, he is the deputy chief editor of various international journals (including IEEE Systems, IEEE/CAA JAS). 333 high-level talents (the second level) in Jiangsu Province, young and middle-aged experts with outstanding contributions in Jiangsu Province, chair professors of Minjiang scholars, Changzhou May Day Labor Medal and other honorary titles.
    </p>
    <p><img src="/images/news/2022-11-18-hgj-report.jpg"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 46,
    title: "11月12日大数据与城市计算前沿论坛",
    author: "何雨薇",
    create_date: "2022-11-16",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告时间：2022年11月12日（周六）09:00- 11:40</p>
        <p>报告摘要：</p>
        <p>研讨会议程：</p>
        <table border="1" style="text-align: center;">
          <tr>
            <th>时间</th>
            <th>报告嘉宾</th>
            <th>单位</th>
            <th>报告题目</th>
            <th>主持人</th>
          </tr>
          <tr>
            <td>09:00-09:10</td>
            <td colspan="3">沈国江教授致开幕辞</td>
            <td rowspan="6">孔祥杰</td>
          </tr>
          <tr>
            <td>09:10-09:40</td>
            <td>吴文祥</td>
            <td>北方工业大学</td>
            <td>高峰期城郊轨道交通线路列车跳站优化</td>
          </tr>
          <tr>
            <td>09:40-10:10</td>
            <td>周晓康</td>
            <td>日本滋贺大学</td>
            <td>Big Data Oriented Personalized Modeling in Cyber-Social Applications</td>
          </tr>
          <tr>
            <td>10:10-10:40</td>
            <td>宁兆龙</td>
            <td>重庆邮电大学</td>
            <td>边缘智能驱动的移动物联网通信与计算</td>
          </tr>
          <tr>
            <td>10:40-11:10</td>
            <td>吕宜生</td>
            <td>中科院自动化所</td>
            <td>基于CPSS的平行智能交通系统</td>
          </tr>
          <tr>
            <td>11:10-11:40</td>
            <td>曲悠扬</td>
            <td>澳大利亚联邦科学与工业研究组织（CSIRO）</td>
            <td>大数据时代的个性化隐私保护</td>
          </tr>
        </table>
        <p>联系方式：</p>
        <p>孔祥杰 <a>xjkong@ieee.org</a></p>
        <br/>
      </div>
      `,
    title_en: "Big Data and Urban Computing Frontier Forum on November 12th",
    author_en: "YuWei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
      <p>Report time: November 12, 2022 (Saturday) 09:00-11:40</p>
      <p>Report URL: Tencent Conference ID: 249-845-116</p>
      <table border="1" style="text-align: center;">
        <tr>
          <th>Time</th>
          <th>Speakers</th>
          <th>School</th>
          <th>Report title</th>
          <th>host</th>
        </tr>
        <tr>
          <td>09:00-09:10</td>
          <td colspan="3">Prof. Guojiang Shen delivered the opening speech</td>
          <td rowspan="6">XiangJie Kong</td>
        </tr>
        <tr>
          <td>09:10-09:40</td>
          <td>WenXiang Wu</td>
          <td>Northern Polytechnic University</td>
          <td>Optimization of Train Jumping on Suburban Rail Transit Line in Peak Period</td>
        </tr>
        <tr>
          <td>09:40-10:10</td>
          <td>XiaoKang Zhou</td>
          <td>Shiga University</td>
          <td>Big Data Oriented Personalized Modeling in Cyber-Social Applications</td>
        </tr>
        <tr>
          <td>10:10-10:40</td>
          <td>ZhaoLong Ning</td>
          <td>Chongqing University of Posts and Telecommunications</td>
          <td>Mobile Internet of Things Communication and Computing Driven by Edge Intelligence</td>
        </tr>
        <tr>
          <td>10:40-11:10</td>
          <td>YiSheng Lv</td>
          <td>Institute of Automation, Chinese Academy of Sciences</td>
          <td>Parallel Intelligent Transportation System Based on CPSS</td>
        </tr>
        <tr>
          <td>11:10-11:40</td>
          <td>YouYang Qu</td>
          <td>Commonwealth Scientific and Industrial Research Organization of Australia（CSIRO）</td>
          <td>Personalized privacy protection in the age of big data</td>
        </tr>
      </table>
      <p>contact details:</p>
      <p>XiangJie Kong <a>xjkong@ieee.org</a></p>
      <br/>
    </div>
    `,
    top:false,
  },
  {
    id: 45,
    title: "热烈祝贺刘娜利等同学的工作荣获CECNET 2022国际会议最佳论文奖",
    author: "何雨薇",
    create_date: "2022-11-10",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>论文题目：</p>
        <p>《Traffic Flow Imputation Based on Multi-Perspective Spatiotemporal Generative Adversarial Networks》</p>
        <br/>
        <p>摘要：</p>
        <p>
        Traffic data occupies an important position in intelligent transportation systems (ITS). However, the collected traffic data is often incomplete. We propose a generative adversarial network (GAN) model based on multi-perspective spatiotemporal learning(MST-GAN)to repair data.To achieve the effect of interpolating data from three perspectives: temporal, spatial, and spatiotemporal, we utilize chained generator with independent parameters to progressively refine the learning of temporal and spatial features. In addition ,we achieve high-level fusion of multi-perspective features by adversarial between multiple generators and one discriminator. We conduct experiments on two real datasets, showing that the imputation effect of the MST-GAN model is better than other baseline models under different missing patterns. For example, the root mean square error (RMSE) is less than 7.5% and the mean absolute error (MAE) is less than 5% in the random missing scenario, which is much lower than the best performance error of other models.
        </p>
      </div>
      `,
    title_en: "The paper by Nali Liu et al. won the CECNET'22 best paper.",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: TAP: Traffic Flow Imputation Based on Multi-Perspective Spatiotemporal Generative Adversarial Networks</p>
    <p>Abstract：</p>
    <p>
    Traffic data occupies an important position in intelligent transportation systems (ITS). However, the collected traffic data is often incomplete. We propose a generative adversarial network (GAN) model based on multi-perspective spatiotemporal learning(MST-GAN)to repair data.To achieve the effect of interpolating data from three perspectives: temporal, spatial, and spatiotemporal, we utilize chained generator with independent parameters to progressively refine the learning of temporal and spatial features. In addition ,we achieve high-level fusion of multi-perspective features by adversarial between multiple generators and one discriminator. We conduct experiments on two real datasets, showing that the imputation effect of the MST-GAN model is better than other baseline models under different missing patterns. For example, the root mean square error (RMSE) is less than 7.5% and the mean absolute error (MAE) is less than 5% in the random missing scenario, which is much lower than the best performance error of other models.
    </p>
  </div>
    `,
    top:false
  },
  {
    id: 44,
    title: "11月4日澳大利亚联邦大学夏锋学术报告",
    author: "何雨薇",
    create_date: "2022-11-07",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告主题：可信图学习</p>
        <br/>
        <p>报告摘要：</p>
        <p>
        图（或网络）被广泛用作连接数据的网络结构的流行表示。
        图表数据可以在社会系统、生态系统、生物网络、知识图表和信息系统等广泛领域中找到。
        随着人工智能技术的不断渗透，图学习（即图上的机器学习或图机器学习）正受到研究人员和实践者的巨大关注。
        事实证明，图学习对于现实应用中的许多任务都是有效的，例如回归、分类、聚类、匹配和排序。
        在过去的几年中，已经开发了许多图学习模型和算法（例如，图神经网络、网络嵌入、网络表示学习等）。
        然而，图学习领域面临着许多挑战，这些挑战来自于基础理论和模型、算法和方法、支持工具和平台以及现实世界的部署和工程。
        本次演讲将概述值得信赖的图形学习的现状，特别关注相关趋势和挑战。将展示该领域的一些最新进展。
        </p>
        <br/>
        <p>报告人简介：</p>
        <p>
        夏锋教授现任澳大利亚联邦大学创新、科学与可持续发展研究所副教授，
        是中国大连理工大学软件学院的正教授和副院长。
        现在/曾经是10多家国际期刊的编辑委员会成员，
        曾担任30多个国际会议和研讨会的总主席、项目委员会主席、研讨会主席或宣传主席，以及90多个会议的项目委员会成员。
        夏教授撰写/合著了两本书，在国际期刊和会议（如IEEE TAI、TKDE、TNNLS、TC、TMC、TPDS、TBD、TCSS、TNSE、TETCI、TETC、THMS、TVT、TITS、TASE、ACM TKDD、TIST、TWEB、TOMM、WWW、AAAI、SIGIR、CIKM、JCDL、EMNLP和INFOCOM）上发表了300多篇科学论文，以及3个章节，被Clarivate Analytics（Web of Science）评为高度引用研究员（2019）。夏教授获得了多项著名奖项，包括IEEE DSS 2021最佳论文奖、IEEE Vehicular Technology Society 2020最佳陆地运输论文奖、ACM/IEEE JCDL 2020 Vannevar Bush最佳论文荣誉奖、IEEE CSDE 2020最佳论文奖，WWW 2017最佳演示奖、IEEE DataCom 2017最佳论文奖和IEEE UIC 2013最佳论文奖，IEEE Access杰出副主编。研究兴趣包括数据科学、人工智能、图形学习和系统工程。此外，夏教授还是IEEE和ACM的高级成员，ACM杰出演讲者。
        <p>URL: http://xia.ai </p>
        </p>
        <p><img src="/images/news/2022-11-04-xf-report.jpg"/></p>
      </div>
      `,
    title_en: "Pro. Feng Xia from Commonwealth University of Australia visited the CSSC Lab and gave a talk on November 4th",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: Credibility map learning</p>
    <p>Abstract：</p>
    <p>
    Graphs (or networks) are widely used as a popular representation of the network structure of connected data. Graph data can be found in a broad spectrum of domains such as social systems, ecosystems, biological networks, knowledge graphs, and information systems. With the continuous penetration of artificial intelligence technologies, graph learning (i.e., machine learning on graphs or graph machine learning) is gaining huge attention from both researchers and practitioners. Graph learning proves effective for many tasks in real-world applications, such as regression, classification, clustering, matching, and ranking. Over the past few years, a lot of graph learning models and algorithms (e.g., graph neural networks, network embedding, network representation learning, etc.) have been developed. Nevertheless, the field of graph learning is facing many challenges deriving from, e.g., fundamental theory and models, algorithms and methods, supporting tools and platforms, and real-world deployment and engineering. This talk will give an overview of the state of the art of trustworthy graph learning, paying special attention to relevant trends and challenges. Some recent advancements in this field will be showcased.
    </p>
    <br/>
    <p>Reporters' Profile：</p>
    <p>
    Dr. Feng Xia is currently an Associate Professor in Institute of Innovation, Science and Sustainability, Federation University Australia. He was a Full Professor and Associate Dean of Research in School of Software, Dalian University of Technology (DUT), China. He is/was on the Editorial Boards of over 10 int’l journals. He has served as the General Chair, Program Committee Chair, Workshop Chair, or Publicity Chair of over 30 int’l conferences and workshops, and Program Committee Member of over 90 conferences. Dr. Xia has authored/co-authored two books, over 300 scientific papers in int’l journals and conferences (such as IEEE TAI, TKDE, TNNLS, TC, TMC, TPDS, TBD, TCSS, TNSE, TETCI, TETC, THMS, TVT, TITS, TASE, ACM TKDD, TIST, TWEB, TOMM, WWW, AAAI, SIGIR, CIKM, JCDL, EMNLP, and INFOCOM) and 3 book chapters. He was recognized as a Highly Cited Researcher (2019) by Clarivate Analytics (Web of Science). Dr. Xia received a number of prestigious awards, including IEEE DSS 2021 Best Paper Award, IEEE Vehicular Technology Society 2020 Best Land Transportation Paper Award, ACM/IEEE JCDL 2020 The Vannevar Bush Best Paper Honorable Mention, IEEE CSDE 2020 Best Paper Award, WWW 2017 Best Demo Award, IEEE DataCom 2017 Best Paper Award, IEEE UIC 2013 Best Paper Award, and IEEE Access Outstanding Associate Editor. His research interests include data science, artificial intelligence, graph learning, and systems engineering. He is a Senior Member of IEEE and ACM, and ACM Distinguished Speaker. URL: http://xia.ai.
    </p>
    <p><img src="/images/news/2022-11-04-xf-report.jpg"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 43,
    title: "10月21日大连理工大学刘晗学术报告",
    author: "何雨薇",
    create_date: "2022-10-24",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告主题：面向任务型对话系统的小样本/零样本学习</p>
        <br/>
        <p>报告摘要：</p>
        <p>
        任务型对话系统旨在利用人机对话的方式，准确捕捉用户在特定领域的需求，进而提供特定服务。
        任务型对话系统应用十分广泛，相关产品已经在众多领域展现出巨大的商业潜力，例如：在线客服、车载系统、手机助手、智能家居、地图导航等。
        传统任务型对话系统依赖于大规模、高质量的标注数据。然而，随着应用领域愈加广泛，用户表达愈渐多样，各种新的用户需求在新的领域中快速涌现，
        这些新的需求在出现初期往往面临严重的数据匮乏问题，这给任务型对话系统带来了巨大挑战。
        本报告将介绍讲者在任务型对话系统中小样本/零样本学习的研究工作，以及未来潜在的研究方向。
        </p>
        <br/>
        <p>报告人简介：</p>
        <p>
        刘晗，工学博士，大连理工大学副教授，曾任香港理工大学博士后研究员。
        主要研究方向为人工智能、数据挖掘，具体包括对话系统、小样本/零样本学习、图神经网络、对抗样本生成等。
        主持在研国家自然科学基金项目，GF科技创新特区项目，星海骨干项目，引进人才科研专题项目，
        参与在研国家重点研发计划青年科学家等多项国家级纵向项目。
        已发表论文30余篇（均为CCF推荐列表论文，CCF A类15篇，B类11篇），包括多篇TKDE、TKDD、SIGIR、ACL、EMNLP、KDD、CVPR、IJCAI、AAAI等
        国际顶级期刊和会议论文。多次受邀担任TPAMI、AI、TOIT、TITS、PR、AAAI、KDD、CVPR、ICCV、ECCV、ACL、EMNLP等20余种
        高水平国际期刊和会议审稿人或程序委员。中国图学学会高级会员，CAAI智能服务专业委员会委员，CAAI青年工作委员会委员，
        中文信息学会情感计算专委会委员，中国图学学会可视化与认知计算专委会委员。2019年入选香港创新及科技基金博士专才库计划，
        2020年入选大连市新引进高层次人才，2021年入选大连理工大学星海人才培育计划-星海骨干。
        </p>
        <p><img src="/images/news/2022-10-21-lh-report.jpg"/></p>
      </div>
      `,
    title_en: "Pro. Han Liu from Dalian University of Technology visited the CSSC Lab and gave a talk on October 21st",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: Small sample/zero sample learning for task-based dialogue system</p>
    <p>Abstract：</p>
    <p>
    Task-based dialogue system aims to capture users' needs in specific fields accurately
    and provide specific services by means of man-machine dialogue. Task-based dialogue systems are
    widely used, and related products have shown great commercial potential in many fields, such as
    online customer service, vehicle systems, mobile assistants, smart homes, map navigation, etc.
    Traditional task-based dialogue systems rely on large-scale, high-quality annotated data.
    However, as the application field becomes more extensive and the user expression becomes more diverse,
    a variety of new user requirements emerge rapidly in the new field. These new requirements often face
    the serious data shortage problem in the initial stage, which brings great challenges to the task-based
    dialogue system. This PRESENTATION WILL describe the speaker's work on small sample/zero sample learning
    in TASk-based dialogue systems and potential future research directions.
    </p>
    <br/>
    <p>Reporters' Profile：</p>
    <p>
    Han Liu is an associate professor at Dalian University of Technology and a former post-doctoral
    researcher at the Hong Kong Polytechnic University. His research interests include artificial
    intelligence and data mining, including dialogue systems, small sample/zero sample learning,
    graph neural networks, adversarial sample generation, etc. He presided over the National Natural
    Science Foundation Project in research, GF Science and Technology Innovation Special Zone project,
    Xinghai Backbone project, talent introduction research project, and participated in many national
    longitudinal projects such as young scientists under the national key Research and Development Plan.
    He has published more than 30 papers (all of which are CCF recommendation list papers, including 15
      CCF class A papers and 11 CCF class B papers), including many international top journals and conference
      papers such as TKDE, TKDD, SIGIR, ACL, EMNLP, KDD, CVPR, IJCAI, AAAI, etc. He has been invited to be
       the reviewer or program committee member of more than 20 high-level international journals and conferences,
       such as TPAMI, AI, TOIT, TITS, PR, AAAI, KDD, CVPR, ICCV, ECCV, ACL, EMNLP. Senior member of Chinese
       Graphic Society, member of CAAI Intelligent Service Professional Committee, member of CAAI Youth Working
       Committee, member of Emotional Computing Special Committee of Chinese Information Society, member of Visual
       and Cognitive Computing Special Committee of Chinese Graphic Society. In 2019, it was selected into the
       Doctoral Talent Pool program of Hong Kong Innovation and Technology Fund, in 2020, it was selected into
       the newly introduced high-level talents of Dalian City, and in 2021, it was selected into the Xinghai
       Talent Cultivation Program of Dalian University of Technology - Xinghai Backbone.
    </p>
    <p><img src="/images/news/2022-10-21-lh-report.jpg"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 42,
    title: "10月9日中国石油大学张卫山学术报告",
    author: "何雨薇",
    create_date: "2022-10-09",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告主题：异步联邦强化学习方法研究</p>
        <br/>
        <p>报告摘要：</p>
        <p>
        联邦学习由于能够进行数据隐私保护为基础的大规模分布式学习目前备受重视。
        然而，实际使用联邦学习时，由于存在设备异构性和Non-IID数据（不完全独立分布式），客户端节点之间的特性将影响联邦学习的效果。
        为此，我们提出了一种弹性强化联邦学习的方法R2Fed，将强化学习应用于联邦学习并使用强化学习进行加权融合。
        我们在Non-IID和客户端异质性的条件下，进行目标检测、目标分类和情感分类等不同数据类型的实验。
        实验结果表明，R2Fed方法优于传统的联邦学习，平均准确率提高4.7%。R2Fed具有良好的可靠行，实验证明R2Fed能够抵御联盟攻击。
        另外，我们还将讨论在联邦学习的其他一些工作。
        </p>
        <br/>
        <p>报告人简介：</p>
        <p>
        张卫山，中国石油大学（华东）教授，博导。主要研究方向是大数据智能处理、人工智能等。
        中科院自动化所客座研究员，黄岛区拔尖人才，黄岛区智能大数据处理团队负责人。
        山东省人工智能学会理事，西海岸人工智能科技创新中心发起人和理事。发表SCI文章60余篇，国际会议论文80余篇。
        目前H index=25，i10 index= 65。中国自动化学会社会计算与社会智能专委，中国通信学会云计算与大数据专委，
        中国计算机学会普适计算专委，指挥与控制学会智能穿戴技术专委，CCF高级会员。主持国家自然科学基金、国家重点研发计划子课题等等多项纵向项目。
        研发的大数据系统部署于海尔集团、中石油、中国电力、航天科工等。
        排名第一获得了山东省科技进步二等奖、吴文俊人工智能科技进步三等奖、青岛市技术发明三等奖以及其他多项省部级奖励。
        </p>
        <p><img src="/images/news/2022-10-09-zws-report.jpg"/></p>
      </div>
      `,
    title_en: "Pro. Weishan Zhang from China University of Petroleum visited the CSSC Lab and gave a talk on October 9th",
    author_en: "Yuwei He",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: A study of asynchronous federal reinforcement learning methods</p>
    <p>Abstract：</p>
    <p>
    Federated learning is currently highly valued due to its ability to perform large-scale distributed learning
    based on data privacy protection. However, when using federated learning in practice, the characteristics between
    client nodes will affect the effectiveness of federated learning due to the presence of device heterogeneity
    and Non-IID data (not fully independent distributed). For this reason, we propose a resilient reinforcement
    federation learning approach, R2Fed, which applies reinforcement learning to federation learning and uses
    reinforcement learning for weighted fusion. We conduct experiments with different data types such as target
    detection, target classification and sentiment classification under the conditions of Non-IID and client
    heterogeneity. The experimental results show that the R2Fed approach outperforms traditional federation learning
    with an average accuracy improvement of 4.7%. r2Fed has good reliability lines and experiments demonstrate that
    R2Fed can resist federation attacks. In addition, we will discuss some other works in federation learning.
    Translated with www.DeepL.com/Translator (free version)
    </p>
    <br/>
    <p>Reporters' Profile：</p>
    <p>
    Weishan Zhang is a professor and doctoral supervisor of China University of Petroleum (East China). His main research interests are big data intelligent processing, artificial intelligence, etc. He is a visiting researcher of Institute of Automation of Chinese Academy of Sciences, a top talent of Huangdao District, and the head of the intelligent big data processing team of Huangdao District. He is the director of Shandong Artificial Intelligence Society, the initiator and director of West Coast Artificial Intelligence Science and Technology Innovation Center. He has published more than 60 SCI articles and 80 international conference papers. Currently, he has H index=25, i10 index= 65. He is a member of Social Computing and Social Intelligence Committee of Chinese Society of Automation, Cloud Computing and Big Data Committee of Chinese Society of Communication, Pervasive Computing Committee of Chinese Computer Society, Smart Wearable Technology Committee of Command and Control Society, and senior member of CCF. He presided over many vertical projects such as the National Natural Science Foundation of China and the sub-projects of the National Key Research and Development Program. The developed big data system is deployed in Haier Group, PetroChina, China Electric Power, Aerospace Science and Industry, etc. Ranked first in the second prize of Shandong Province Science and Technology Progress, the third prize of Wu Wenjun Artificial Intelligence Science and Technology Progress, the third prize of Qingdao City Technology Invention and many other provincial and ministerial awards.
    </p>
    <p><img src="/images/news/2022-10-09-zws-report.jpg"/></p>
  </div>
    `,
    top:false
  },
  {
    id: 41,
    title: "热烈祝贺陈洋同学主要完成的论文被数据挖掘顶级期刊ACM Transactions on Knowledge Discovery from Data录用",
    author: "杨筱雪",
    create_date: "2022-09-16",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>论文题目：</p>
        <p>《TAP: Traffic Accident Profiling via Multi-task Spatio-Temporal Graph Representation Learning》</p>
        <br/>
        <p>摘要：</p>
        <p>
        Predicting traffic accidents can help traffic management departments respond to sudden traffic situations promptly,
         improve drivers’ vigilance, and reduce losses caused by traffic accidents. However, the causality of traffic accidents
         is complex and difficult to analyze. Most existing traffic accident prediction methods do not consider the dynamic
         spatio-temporal correlation of traffic data, which leads to unsatisfactory prediction accuracy. To address this issue,
         we propose a multi-task learning framework (TAP) based on the Spatio-temporal Variational Graph Auto-Encoders (ST-VGAE)
         for traffic accident profiling. We firstly capture the dynamic spatiotemporal correlation of traffic conditions through
         a spatio-temporal graph convolutional encoder and embed it as a low-latitude vector. Then we use a multi-task learning
         scheme to combine external factors to generate the traffic accident profiling. Furthermore, we propose a traffic accident
         profiling application framework based on edge computing. This method increases the speed of calculation by offloading
         the calculation of traffic accident profiling to edge nodes. Finally, the experimental results on real datasets
         demonstrate that TAP outperforms other state-of-the-art baselines.
        </p>
      </div>
      `,
    title_en: "The paper by Yang Chen et al. was accepted by ACM Transactions on Knowledge Discovery from Data",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Title: TAP: Traffic Accident Profiling via Multi-task Spatio-Temporal Graph Representation Learning</p>
    <p>Abstract：</p>
    <p>
    Predicting traffic accidents can help traffic management departments respond to sudden traffic situations promptly,
         improve drivers’ vigilance, and reduce losses caused by traffic accidents. However, the causality of traffic accidents
         is complex and difficult to analyze. Most existing traffic accident prediction methods do not consider the dynamic
         spatio-temporal correlation of traffic data, which leads to unsatisfactory prediction accuracy. To address this issue,
         we propose a multi-task learning framework (TAP) based on the Spatio-temporal Variational Graph Auto-Encoders (ST-VGAE)
         for traffic accident profiling. We firstly capture the dynamic spatiotemporal correlation of traffic conditions through
         a spatio-temporal graph convolutional encoder and embed it as a low-latitude vector. Then we use a multi-task learning
         scheme to combine external factors to generate the traffic accident profiling. Furthermore, we propose a traffic accident
         profiling application framework based on edge computing. This method increases the speed of calculation by offloading
         the calculation of traffic accident profiling to edge nodes. Finally, the experimental results on real datasets
         demonstrate that TAP outperforms other state-of-the-art baselines.
    </p>
  </div>
    `,
    top:false
  },
  {
    id: 40,
    title: "CAAI 第七届全国大数据与社会计算学术会议顺利开幕！",
    author: "杨筱雪",
    create_date: "2022-08-14",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>2022年8月12日主题为“数字化转型与共同富裕”的CAAI 第七届全国大数据与社会计算学术会议（China National Conference on Big Data & Social Computing，简称 BDSC2022）于杭州市余杭温德姆花园酒店顺利开幕。
        </p>
        <p>
        详细内容见<a href="https://mp.weixin.qq.com/s/DQEK8lgi4-VNnPOeHYmtDQ">https://mp.weixin.qq.com/s/DQEK8lgi4-VNnPOeHYmtDQ</a>
        </p>
        <p><img src="/images/news/bdsc2022.jpg"/></p>
      </div>
      `,
    title_en: "CAAI's 7th National Academic Conference on Big Data and Social Computing was successfully opened",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Subject：The Power of Data: Transforming and Optimizing Data Representation Space</p>
    <p>Abstract：</p>
    <p>In the past years, research has been focusing on optimizing model space in AI. Deep learning models have successfully applied to almost every area.  Models trained with millions of parameters and sophisticated neural architectures are now used routinely.  It seems models play more role than data. We investigate a question: Can optimizing data space be as powerful as optimizing model space? Relevant representation learning techniques can automatically reconstruct data representation space.  But the techniques needs more explainable and traceable explicitness, and flexible optimal. In this talk, we will propose a concept of self-optimizing data geometry. We will introduce explainable and optimal representation space reconstruction from a selection perspective and a generation perspective. Finally, we will discuss our future work.</p>
    <p>Introduction：</p>
    <p>
    Dr. Yanjie Fu is an assistant professor in the Department of Computer Science at the University of Central Florida. He received his Ph.D. degree from Rutgers, the State University of New Jersey in 2016, the B.E. degree from University of Science and Technology of China in 2008, and the M.E. degree from Chinese Academy of Sciences in 2011. His research interests include data mining and big data analytics. He has research experience in industry research labs, such as and IBM Thomas J. Watson Research Center and Microsoft Research Asia. He has published prolifically in refereed journals and conference proceedings, such as IEEE TKDE, IEEE TMC, ACM TKDD, ACM SIGKDD, AAAI, IJCAI, VLDB, WWW. He received US NSF CAREER Award (2021), ACM SIGSpatial Best Paper Runner-Up Award (2020), US NSF CRII Award (2018), ACM SIGKDD Best Student Paper Finalist (2018), University of Missouri System Research Board Award (2017), Microsoft Research Azure Research Award (2016), IEEE ICDM Best Paper Finalist (2014). He is committed to data science education. His graduated Ph.D. students have joined academia as tenure-track faculty members.
    </p>
    <br/>
  </div>
    `,
    top:false,
    hide_en:true
  },
  {
    id: 39,
    title: "7月22日时空数据分析与挖掘前沿研讨会预告",
    author: "杨筱雪",
    create_date: "2022-07-19",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告时间：2022年7月22日（周五）13:30- 16:35</p>
        <p>报告摘要：</p>
        <p>研讨会议程：</p>
        <table border="1" style="text-align: center;">
          <tr>
            <th>时间</th>
            <th>报告嘉宾</th>
            <th>单位</th>
            <th>报告题目</th>
            <th>主持人</th>
          </tr>
          <tr>
            <td>13:30-13:40</td>
            <td colspan="3">沈国江教授致开幕辞</td>
            <td rowspan="6">孔祥杰</td>
          </tr>
          <tr>
            <td>13:40-14:15</td>
            <td>丛高</td>
            <td>南洋理工大学</td>
            <td>Enriched Spatial Data Management and Trajectory Data Mining</td>
          </tr>
          <tr>
            <td>14:15-14:50</td>
            <td>李勇</td>
            <td>清华大学</td>
            <td>复杂城市系统时空模拟</td>
          </tr>
          <tr>
            <td>14:50-15:25</td>
            <td>陈超</td>
            <td>重庆大学</td>
            <td>AI+Smart Mobility: A Perspective from Taxi GPS Trajectory Big Data</td>
          </tr>
          <tr>
            <td>15:25-16:00</td>
            <td>王森章</td>
            <td>中南大学</td>
            <td>AI驱动的城市时空大数据挖掘：挑战、方法与展望</td>
          </tr>
          <tr>
            <td>16:00-16:35</td>
            <td>吴远</td>
            <td>澳门大学</td>
            <td>基于无线传能辅助的高效联邦学习方案设计</td>
          </tr>
        </table>
        <p>联系方式：</p>
        <p>孔祥杰 <a>xjkong@ieee.org</a></p>
        <br/>
      </div>
      `,
    title_en: "Preview of the frontier seminar on spatiotemporal data analysis and mining on July 22nd",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
      <p>Report time: July 22, 2022 (Friday) 13:30-16:35</p>
      <p>Report URL: Tencent Conference ID: 519-543-994</p>
      <table border="1" style="text-align: center;">
        <tr>
          <th>Time</th>
          <th>Speakers</th>
          <th>School</th>
          <th>Report title</th>
          <th>host</th>
        </tr>
        <tr>
          <td>13:30-13:40</td>
          <td colspan="3">Prof. Guojiang Shen delivered the opening speech</td>
          <td rowspan="6">XiangJie Kong</td>
        </tr>
        <tr>
          <td>13:40-14:15</td>
          <td>Gao Cong</td>
          <td>Nanyang Technological University</td>
          <td>Enriched Spatial Data Management and Trajectory Data Mining</td>
        </tr>
        <tr>
          <td>14:15-14:50</td>
          <td>Yong Li</td>
          <td>Tsinghua University</td>
          <td>Spatio-temporal simulation of complex urban systems</td>
        </tr>
        <tr>
          <td>14:50-15:25</td>
          <td>Chao Chen</td>
          <td>Chongqing University</td>
          <td>AI+Smart Mobility: A Perspective from Taxi GPS Trajectory Big Data</td>
        </tr>
        <tr>
          <td>15:25-16:00</td>
          <td>SenZhang Wang</td>
          <td>Central South University</td>
          <td>AI-driven urban spatiotemporal big data mining: challenges, methods and prospects</td>
        </tr>
        <tr>
          <td>16:00-16:35</td>
          <td>Yuan Wu</td>
          <td>University of Macau</td>
          <td>Design of efficient federated learning scheme based on wireless energy transfer assistance</td>
        </tr>
      </table>
      <p>contact details:</p>
      <p>Xiangjie Kong <a>xjkong@ieee.org</a></p>
      <br/>
    </div>
    `,
    top:false,
  },
  {
    id: 38,
    title: "傅衍杰老师应邀来实验室作学术报告",
    author: "杨筱雪",
    create_date: "2022-07-04",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告主题：The Power of Data: Transforming and Optimizing Data Representation Space</p>
        <p>报告摘要：</p>
        <p>In the past years, research has been focusing on optimizing model space in AI. Deep learning models have successfully applied to almost every area.  Models trained with millions of parameters and sophisticated neural architectures are now used routinely.  It seems models play more role than data. We investigate a question: Can optimizing data space be as powerful as optimizing model space? Relevant representation learning techniques can automatically reconstruct data representation space.  But the techniques needs more explainable and traceable explicitness, and flexible optimal. In this talk, we will propose a concept of self-optimizing data geometry. We will introduce explainable and optimal representation space reconstruction from a selection perspective and a generation perspective. Finally, we will discuss our future work.</p>
        <p>报告人简介：</p>
        <p>
        Dr. Yanjie Fu is an assistant professor in the Department of Computer Science at the University of Central Florida. He received his Ph.D. degree from Rutgers, the State University of New Jersey in 2016, the B.E. degree from University of Science and Technology of China in 2008, and the M.E. degree from Chinese Academy of Sciences in 2011. His research interests include data mining and big data analytics. He has research experience in industry research labs, such as and IBM Thomas J. Watson Research Center and Microsoft Research Asia. He has published prolifically in refereed journals and conference proceedings, such as IEEE TKDE, IEEE TMC, ACM TKDD, ACM SIGKDD, AAAI, IJCAI, VLDB, WWW. He received US NSF CAREER Award (2021), ACM SIGSpatial Best Paper Runner-Up Award (2020), US NSF CRII Award (2018), ACM SIGKDD Best Student Paper Finalist (2018), University of Missouri System Research Board Award (2017), Microsoft Research Azure Research Award (2016), IEEE ICDM Best Paper Finalist (2014). He is committed to data science education. His graduated Ph.D. students have joined academia as tenure-track faculty members.
        </p>
        <br/>
      </div>
      `,
    title_en: "Pro. Yanjie Fu from University of Central Florida visited the CSSC Lab and gave a talk",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
    <div style="text-align: justify;">
    <p>Subject：The Power of Data: Transforming and Optimizing Data Representation Space</p>
    <p>Abstract：</p>
    <p>In the past years, research has been focusing on optimizing model space in AI. Deep learning models have successfully applied to almost every area.  Models trained with millions of parameters and sophisticated neural architectures are now used routinely.  It seems models play more role than data. We investigate a question: Can optimizing data space be as powerful as optimizing model space? Relevant representation learning techniques can automatically reconstruct data representation space.  But the techniques needs more explainable and traceable explicitness, and flexible optimal. In this talk, we will propose a concept of self-optimizing data geometry. We will introduce explainable and optimal representation space reconstruction from a selection perspective and a generation perspective. Finally, we will discuss our future work.</p>
    <p>Introduction：</p>
    <p>
    Dr. Yanjie Fu is an assistant professor in the Department of Computer Science at the University of Central Florida. He received his Ph.D. degree from Rutgers, the State University of New Jersey in 2016, the B.E. degree from University of Science and Technology of China in 2008, and the M.E. degree from Chinese Academy of Sciences in 2011. His research interests include data mining and big data analytics. He has research experience in industry research labs, such as and IBM Thomas J. Watson Research Center and Microsoft Research Asia. He has published prolifically in refereed journals and conference proceedings, such as IEEE TKDE, IEEE TMC, ACM TKDD, ACM SIGKDD, AAAI, IJCAI, VLDB, WWW. He received US NSF CAREER Award (2021), ACM SIGSpatial Best Paper Runner-Up Award (2020), US NSF CRII Award (2018), ACM SIGKDD Best Student Paper Finalist (2018), University of Missouri System Research Board Award (2017), Microsoft Research Azure Research Award (2016), IEEE ICDM Best Paper Finalist (2014). He is committed to data science education. His graduated Ph.D. students have joined academia as tenure-track faculty members.
    </p>
    <br/>
  </div>
    `,
    top:false,
  },
  {
    id: 37,
    title: "5月24日天津大学王鑫学术报告",
    author: "杨筱雪",
    create_date: "2022-05-24",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>报告摘要：</p>
        <p>知识图谱是人工智能的重要基石。各领域大规模知识图谱的构建与应用已对知识图谱存储与查询技术提出了新挑战。
        本报告将介绍知识图谱存储与查询技术的最新进展，包括：知识图谱数据模型和查询语言、知识图谱存储管理和查询处理、知识图谱数据库管理系统等。
        同时介绍团队近年来在知识图谱存储与查询方向上所取得的研究成果。</p>
        <br/>
        <p>报告人简介：</p>
        <p>
        王鑫，天津大学智能与计算学部教授、博导，人工智能学院副院长。
        国家重点研发计划项目负责人、教育部重点领域教学资源及新型教材建设项目专家组成员、
        中国计算机学会杰出会员、中国计算机学会信息系统专委会秘书长、数据库专委会执行委员；
        中国中文信息学会语言与知识计算专委会委员。
        研究方向包括：知识图谱、图数据库、大数据处理。
        在IEEE TKDE、IEEE TPDS、WWW、ICDE、IJCAI、AAAI、CIKM、ISWC、《计算机学报》《软件学报》等国内外学术期刊和会议上发表论文100余篇。
        国际会议APWeb-WAIM2020、JIST2019程序委员会主席。中文期刊《计算机工程与应用》副主编，《计算机科学与探索》《计算机工程》《计算机系统应用》编委，
        国际期刊Knowledge-Based Systems副主编、Big Data Research、Data Science and Engineering编委。
        </p>
        <br/>
        <p><img src="/images/news/wangxin_report.png"/></p>
      </div>
      `,
    title_en: "Pro. Xin Wang from Tianjin University visited the CSSC Lab and gave a talk",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <div style="text-align: justify;">
        <p>The paper titled "GCN2CDD: A Commercial District Discovery Framework via Embedding Space Clustering on Graph Convolution Networks." was published in IEEE Transactions on Industrial Informatics this year.</p>
        <p><img src="/images/news/zzzpapercite.png"/></p>
      </div>
    `,
    top:false,
    hide_en:true
  },
  {
    id: 36,
    title: "热烈祝贺赵振振同学主要完成的的论文入选ESI高被引论文",
    author: "杨筱雪",
    create_date: "2022-05-14",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <p>论文题目为《GCN2CDD: A Commercial District Discovery Framework via Embedding Space Clustering on Graph Convolution Networks.》，于今年发表在IEEE Transactions on Industrial Informatics。</p>
        <p><img src="/images/news/zzzpapercite.png"/></p>
      </div>
      `,
    title_en: "The paper by ZhenZhen Zhao et al. was selected ESI highly cited papers",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <div style="text-align: justify;">
        <p>The paper titled "GCN2CDD: A Commercial District Discovery Framework via Embedding Space Clustering on Graph Convolution Networks." was published in IEEE Transactions on Industrial Informatics this year.</p>
        <p><img src="/images/news/zzzpapercite.png"/></p>
      </div>
    `,
    top:false,
  },
  {
    id: 35,
    title: "热烈祝贺朱迪锋同学主要完成的论文被中科院一区期刊Knowledge-Based Systems录用",
    author: "杨筱雪",
    create_date: "2022-05-11",
    summary: "",
    content:
      `
      <div style="text-align: justify;">
        <h2>论文题目：</h2>
        <p>《Motif Discovery based Traffic Pattern Mining in Attributed Road Networks》</p>
        <h2>摘要：</h2>
        <p>With the development of intelligent transportation systems, clustering methods are now being adopted for traffic pattern recognition to discover the time-varying laws in road networks; this had attracted significant attention from the industry and academia over the past decades. Existing methods mainly focus on the mobility pattern and spatiotemporal dimension, ignoring the complex relationships among these segments in road networks. The main issues can be divided into two categories: deep integration of the structural and attribute information; global spatial dependencies for clustering structural properties. To address these issues, a clustering method for motif-based attributed road networks is proposed. A higher-order connectivity model based on motif discovery is designed, and a weighted matrix of adjacent segments is defined in the road networks. Moreover, a clustering model for motif-based attributed road networks is constructed, considering the joint relationship between node structure and features. In this study, a set of experiments were conducted on two real-world datasets. The results indicated that the performance of the proposed method is superior to that of the state-of-the-art methods.</p>
      </div>
      `,
    title_en: "The paper by DiFeng Zhu et al. was accepted by Knowledge-Based Systems",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <div style="text-align: justify;">
        <h2>Title：</h2>
        <p>《Motif Discovery based Traffic Pattern Mining in Attributed Road Networks》</p>
        <h2>Abstract：</h2>
        <p>With the development of intelligent transportation systems, clustering methods are now being adopted for traffic pattern recognition to discover the time-varying laws in road networks; this had attracted significant attention from the industry and academia over the past decades. Existing methods mainly focus on the mobility pattern and spatiotemporal dimension, ignoring the complex relationships among these segments in road networks. The main issues can be divided into two categories: deep integration of the structural and attribute information; global spatial dependencies for clustering structural properties. To address these issues, a clustering method for motif-based attributed road networks is proposed. A higher-order connectivity model based on motif discovery is designed, and a weighted matrix of adjacent segments is defined in the road networks. Moreover, a clustering model for motif-based attributed road networks is constructed, considering the joint relationship between node structure and features. In this study, a set of experiments were conducted on two real-world datasets. The results indicated that the performance of the proposed method is superior to that of the state-of-the-art methods.</p>
      </div>
    `,
    top:false,
  },
  {
    id: 34,
    title: "之江实验室严笑然、陆亚飞应孔祥杰教授邀请来实验室作学术报告",
    author: "杨筱雪",
    create_date: "2022-04-25",
    summary: "",
    content:
      `
      <div style="text-indent: 2em; text-align: justify;">
        <p>2022年4月21日下午，之江实验室严笑然博士和陆亚飞博士应孔祥杰教授作学术报告，报告题目分别为《复杂系统中的社群涌现与跨学科应用》、《The stability analysis of reaction networks》。</p>
        <p>严笑然，博士毕业于新墨西哥大学，曾工作于圣塔菲研究所、南加州大学、印第安纳大学，现任之江实验室大数据智能研究中心研究专家。研究涉及复杂系统、社交网络、图论、统计推理、数据隐私等，多次发表PNAS、KDD等顶级论文，多年服务AAAI、WWW等顶级会议程序委员会，有广泛的国际合作基础。曾共同主持美国国家级基金重大项目，打造的文献大数据平台（<a>https://cadre.iu.edu/</a>）服务于北美11所高校。严老师首先向我们介绍了之江实验室群体智能研究中心的筹划情况，群体智能研究中心将聚焦群体智能的理论体系创新，并着重在类人群智知识的感知、表征、和计算三大方向展开工作。接下来严老师从复杂系统中的协同理论与社群涌现的统计物理模型和基于Z-Laplacian网络动力学的社群涌现机理和应用展开介绍。社群结构是复杂网络中刻画节点聚类及其结构关系的宏观抽象层次。有别于简单的聚类，社群内部及其之间微观结构关系更为复杂，宏观上往往会展现出非线性相变和自组织等涌现特性。我们将从基于统计物理学的协同论框架出发，分析社群结构在微观噪声和不同动力学模型下的宏观涌现规律，并展示相关成果在社交网络、脑科学和智慧交通等领域中的具体应用案例。</p>
        <p><img src="/images/news/yanxiaoran.jpg" style="width:500px;height:100%;"/></p>
        <p>陆亚飞，之江实验室大数据智能研究中心高级研究专员。2021年9月博士毕业于浙江大学数学科学学院，运筹学与控制论专业。博士期间主要研究方向包括数学系统理论、热力学系统控制等，在国际知名期刊《IEEE transactions on automatic control》、《Automatica》等发表过学术论文。陆老师首先向我们介绍了反应网络的研究背景，种间互作网络在许多科学领域中被用来表示动态系统的结构形式，如生物化学、生态学、流行病等。反应网络的稳定性同时受各参数和图结构的影响。其次介绍一些关于反应网络的知识，并给出一些关于反应网络稳定性分析的结果，包括网络分解技术和PDE方法。</p>
        <p><img src="/images/news/luyafei.jpg" style="width:500px;height:100%;"/></p>
      </div>
      `,
    title_en: "The laboratory and Zhejiang SUPCON Information Industry Co., Ltd. jointly issued the group standard of 《Specifications for construction of holographic smart intersect》",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <p>The laboratory and Zhejiang SUPCON Information Industry Co., Ltd. jointly issued the group standard 《Specifications for construction of holographic smart intersect》, which was released on January 17, 2022,
      and will be implemented from January 24, 2022. The document stipulates urban road holography The basic requirements, content, main methods and implementation of the construction of smart intersections are
      applicable to holographic smart intersections on urban roads.</p>
    `,
    top:false,
    hide_en:true
  },
  {
    id: 33,
    title: "实验室与浙江中控信息产业股份有限公司联合发布《全息智慧路口建设规范》团体标准",
    author: "杨筱雪",
    create_date: "2022-02-11",
    summary: "",
    content:
      `
      <p>实验室与浙江中控信息产业股份有限公司联合发布《全息智慧路口建设规范》团体标准，该标准于2022年01月17日发布，
      自2022年01月24日起实施，文件规定了城市道路全息智慧路口建设的基本要求、内容、主要方法和实施等内容，适用于城市道路全息智慧路口等。</p>
      `,
    title_en: "The laboratory and Zhejiang SUPCON Information Industry Co., Ltd. jointly issued the group standard of 《Specifications for construction of holographic smart intersect》",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <p>The laboratory and Zhejiang SUPCON Information Industry Co., Ltd. jointly issued the group standard 《Specifications for construction of holographic smart intersect》, which was released on January 17, 2022,
      and will be implemented from January 24, 2022. The document stipulates urban road holography The basic requirements, content, main methods and implementation of the construction of smart intersections are
      applicable to holographic smart intersections on urban roads.</p>
    `,
    top: false,
  },
  {
    id: 32,
    title: "热烈祝贺李宁同学主要完成的论文被IEEE Transactions on Network Science and Engineering录用",
    author: "杨筱雪",
    create_date: "2022-01-19",
    summary: "",
    content:
      `
      <p><strong>论文题目：</strong></p>
      <p>《Multi-Feature Representation based COVID-19 Risk Stage Evaluation with Transfer Learning》</p>
      <p><strong>摘要：</strong></p>
      <p>
      Accurate real-time COVID-19 confirmed case prediction and risk stage evaluation are of great significance for government decision-making. However, the complexity of the epidemic spread and the lack of data in countries where COVID19 has recently emerged are still an important challenge for researchers. In this paper, we propose a multi-feature representation based COVID-19 risk stage evaluation model with transfer learning (COV2RS) to solve these issues. Specifically, by analyzing COVID-19 spatio-temporal characteristics, we build a spatial epidemic spread network and obtain multi-feature representation using a hierarchical spatio-temporal framework. From this, we obtain the COVID-19 confirmed case prediction results by aggregating representations. Finally, with transfer learning, we utilize COVID-19 confirmed data from other countries to evaluate the risk stage. Experiments based on real-world COVID-19 datasets demonstrate that our prediction results outperform the state-of-the-art baselines and can evaluate the COVID-19 risk stage well.
      </p>
      `,
    title_en: "Congratulations to Ning Li's major thesis being accepted by IEEE Transactions on Network Science and Engineering",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <p><strong>Title of the paper:</strong></p>
      <p>《Multi-Feature Representation based COVID-19 Risk Stage Evaluation with Transfer Learning》</p>
      <p><strong>Abstract:</strong></p>
      <p>
      Accurate real-time COVID-19 confirmed case prediction and risk stage evaluation are of great significance for government decision-making. However, the complexity of the epidemic spread and the lack of data in countries where COVID19 has recently emerged are still an important challenge for researchers. In this paper, we propose a multi-feature representation based COVID-19 risk stage evaluation model with transfer learning (COV2RS) to solve these issues. Specifically, by analyzing COVID-19 spatio-temporal characteristics, we build a spatial epidemic spread network and obtain multi-feature representation using a hierarchical spatio-temporal framework. From this, we obtain the COVID-19 confirmed case prediction results by aggregating representations. Finally, with transfer learning, we utilize COVID-19 confirmed data from other countries to evaluate the risk stage. Experiments based on real-world COVID-19 datasets demonstrate that our prediction results outperform the state-of-the-art baselines and can evaluate the COVID-19 risk stage well.
      </p>
    `,
    top: false,
  },
  {
    id: 31,
    title: "热烈祝贺许敏皓等同学完成的论文被CCF-B类期刊World Wide Web 录用",
    author: "杨筱雪",
    create_date: "2022-01-19",
    summary: "论文题目为《A Multi-attribute Decision Making Approach based on Information Extraction for Real Estate Buyer Profiling》",
    content:
      `
      <p><strong>论文题目：</strong></p>
      <p>《A Multi-attribute Decision Making Approach based on Information Extraction for Real Estate Buyer Profiling》</p>
      <p><strong>摘要：</strong></p>
      <p>
      With the rapid development of the Internet and the widespread usage of mobile terminals, data-driven user profiling has become possible. User profiles describe the user’s overall behavior characteristic from multiple perspectives (e.g. basic information, feature preference, social attribute), which can explore the potential relationships between complex user behaviors and the decision-making process. In this paper, we focus on the problem of real estate buyer profiling and propose a novel multi-attribute decision making (MADM) approach, trying to solve the needs of enterprises to locate target customers accurately. Firstly, we reorganize the dataset by integrating structured with unstructured data, where an Enriched Bi-directional long short-term memory (Bi-LSTM) Conditional Random Field (EB-CRF) model is proposed to extract important information in the unstructured data. Based on four general dimensions (i.e. basic information, family situation, purchase intention, financial situation), we then design an entropy-based weight allocation algorithm to obtain attribute weights, which helps explore implicit heterogeneous relationships. Finally, with the help of expert knowledge, we use attribute weights and representation technology ”bag of attributes” to construct a buyer-specific feature representation. Extensive experimental results indicate that our approach outperforms strong baselines significantly and achieves state-of-the-art performance.
      </p>
      `,
    title_en: "Congratulations to Minhao Xu and other students for their papers being accepted by the CCF-B journal World Wide Web",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en: `
      <p><strong>Title of the paper:</strong></p>
      <p>《A Multi-attribute Decision Making Approach based on Information Extraction for Real Estate Buyer Profiling》</p>
      <p><strong>Abstract:</strong></p>
      <p>With the rapid development of the Internet and the widespread usage of mobile terminals, data-driven user profiling has become possible. User profiles describe the user’s overall behavior characteristic from multiple perspectives (e.g. basic information, feature preference, social attribute), which can explore the potential relationships between complex user behaviors and the decision-making process. In this paper, we focus on the problem of real estate buyer profiling and propose a novel multi-attribute decision making (MADM) approach, trying to solve the needs of enterprises to locate target customers accurately. Firstly, we reorganize the dataset by integrating structured with unstructured data, where an Enriched Bi-directional long short-term memory (Bi-LSTM) Conditional Random Field (EB-CRF) model is proposed to extract important information in the unstructured data. Based on four general dimensions (i.e. basic information, family situation, purchase intention, financial situation), we then design an entropy-based weight allocation algorithm to obtain attribute weights, which helps explore implicit heterogeneous relationships. Finally, with the help of expert knowledge, we use attribute weights and representation technology ”bag of attributes” to construct a buyer-specific feature representation. Extensive experimental results indicate that our approach outperforms strong baselines significantly and achieves state-of-the-art performance.</p>

    `,
    top: false,
  },
  {
    id: 30,
    title: "孔祥杰教授担任SCI期刊Electronics专刊“Big Data Analysis Based Network”特约编辑",
    author: "杨筱雪",
    create_date: "2021-12-21",
    summary: "",
    content:
      `
      <div>
        <h2>特刊信息</h2>
      </div>
      <br>
      <div style="text-indent: 2em;">
        <p>各个领域中的实体及其交互关系复杂多样，不仅数量庞大，而且变化多样，形成了电力网络、交通网络、通信网络、社交网络和生物网络等多种网络。因此，对网络的研究面临着诸多挑战。随着大数据分析技术的兴起，对各种网络的感知和分析使得了极大的进步。例如，随着对电力可靠性、效率、安全性和可持续性要求的不断提高，大数据分析可以改善电力网络中电力的传输、分配和控制，从而实现智能管理和维护。</p>
        <p>本期特刊的主要目的是寻求高质量的投稿，突出网络中的大数据分析和应用，解决网络行为、网络嵌入学习、大规模网络、异构网络、网络可视化和存储、网络异常等方面的最新突破分析等。感兴趣的话题包括但不限于以下内容： </p>
        <p>• 复杂网络中的大数据分析；</p>
        <p>• 大数据分析的网络行为挖掘；</p>
        <p>• 具有大数据分析的网络嵌入学习技术；</p>
        <p>• 大规模或异构网络应用；</p>
        <p>• 大数据动态时空网络分析；</p>
        <p>• 大数据分析网络可视化系统；</p>
        <p>• 大数据的网络结构存储；</p>
        <p>• 大数据网络异常分析与检测；</p>
        <p>• 电力网络、交通网络、通信网络、社交网络、生物网络等大数据应用。</p>
        </div>
        <div>
        <h2>特刊编辑</h2><br>
        <p><strong>孔祥杰教授 <a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">邮箱</a>  <a href="http://www.cssclab.cn/xjkong/">主页</a></strong><br>
        特约编辑<br>
        浙江工业大学计算机科学与技术学院 杭州 310023<br>
        <strong>研究兴趣：</strong>城市计算、移动计算、网络科学</p>

        <p><strong>Mario Collotta教授 <a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">邮箱</a>  <a href="https://unikore.it/index.php/it/ingegneria-informatica-persone/docenti-del-corso/itemlist/category/1724-prof-mario-collotta">主页</a></strong><br>
        特约编辑<br>
        Engineering and Architecture Faculty, Kore University of Enna, 94100 Enna, Italy<br>
        <strong>研究兴趣：</strong>分布式系统中的专家系统和网络； 物联网； 实时和医疗保健应用</p>

        <p><a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">MDPI 期刊中的特刊、合集和主题</a></p>
        <br>
        <br>

        <p>更多详细信息请查看：<a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">Electronics | Special Issue : Big Data Analysis Based Network (mdpi.com)</a></p>
        </div>
      `,
    title_en: "Prof. Xiangjie Kong served as the special editor of the SCI journal Electronics Special Issue \"Big Data Analysis Based Network\"",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en:
      `
      <div>
        <h2>Special Issue Information</h2>
      </div>
      <br>
      <div style="text-indent: 2em;">

        <p>Entities and their interactive relations are complex and diverse in various fields, and they are not only huge in number but also rich in variance, which form a variety of networks, such as electrical power networks, transportation networks, communication networks, social networks, and biological networks. Thus, the research on networks is more challenging. With the rise of big data analysis technology, advances in the perception and analysis of various networks have been more prosperous. For example, big data analysis can improve the transmission, distribution, and control of power in the electrical power networks with the increasing requirement for greater reliability, efficiency, security, and sustainability of power, which realize smart management and maintenance.</p>
        <p>The main aim of this Special Issue is to seek high-quality submissions that highlight big data analysis and applications in networks, address recent breakthroughs in network behaviors, network embedding learning, large-scale networks, heterogeneous networks, network visualization and storage, network anomaly analysis, etc. The topics of interest include, but are not limited to, the following:</p>
        <p>•  Big data analysis in complex networks;</p>
        <p>•  Network behaviors mining with big data analysis;</p>
        <p>•	Network embedding learning technology with big data analysis;</p>
        <p>•	Large-scale or heterogeneous network applications;</p>
        <p>•	Dynamic spatio-temporal network analysis with big data;</p>
        <p>•	Network visualization system with big data analysis;</p>
        <p>•	Network structure storage with big data;</p>
        <p>•	Network anomaly analysis and detection with big data;</p>
        <p>•	Big data applications in electrical power networks, transportation networks, communication networks, social networks, and biological networks, etc.</p>
        </div>
        <div>
        <h2>Special Issue Editors</h2><br>
        <p><strong>Prof. Dr. Xiangjie Kong <a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">E-mail</a>  <a href="http://www.cssclab.cn/xjkong/">Website</a></strong><br>
        Guest Editor<br>
        College of Computer Science and Technology, Zhejiang University of Technology, Hangzhou 310023, China<br>
        <strong>Interests:</strong>urban computing; mobile computing; network science</p>

        <p><strong>Prof. Dr. Xiangjie Kong<a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">E-mail</a>  <a href="https://unikore.it/index.php/it/ingegneria-informatica-persone/docenti-del-corso/itemlist/category/1724-prof-mario-collotta">Website</a></strong><br>
        Guest Editor<br>
        Engineering and Architecture Faculty, Kore University of Enna, 94100 Enna, Italy<br>
        <strong>Interests:</strong>expert systems and networks in distributed systems; IoT; real-time and healthcare application</p>

        <p><a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">Special Issues, Collections and Topics in MDPI journals</a></p>
        <br>
        <br>

        <p><i>more information:</i> <a href="https://www.mdpi.com/journal/electronics/special_issues/BigData_Network_Electronics">Electronics | Special Issue : Big Data Analysis Based Network (mdpi.com)</a></p>
        </div>
      `,
    top: false,
  },
  {
    id: 29,
    title: "祝贺赵振振同学获2020年浙江省专业学位研究生优秀实践成果奖项",
    author: "杨筱雪",
    create_date: "2021-12-13",
    summary: "祝贺赵振振同学获2020年浙江省专业学位研究生优秀实践成果奖项。",
    content:
      `
      <div style="text-indent: 2em;">
        <p>日前，浙江省研究生教育学会公布了2020年浙江省专业学位研究生优秀实践成果评选结果并予以表彰。我院计算机技术工程领域专业学位点在读研究生赵振振的实践成果《智能小站—面向“云-边-端”架构的智慧路口计算平台》获此荣誉,导师团队为计算机智能系统研究所所长沈国江教授。</p>
        <p><img src="/images/news/news29_1.png" /></p>
        <p>赵振振同学在研究生导师组沈国江教授、产业导师李德文老师的共同指导下，针对路口现有信号控制算法存在滞后性的问题，通过引入智能小站作为高性能“云”服务器的辅助计算单元，实现零距离接入多源路端感知控制设备，本地化接管并替代部分云服务器功能，零延迟分析处理多源异构数据、全面感知交通状态的目标，对解决路口管控滞后、缓解交通拥堵等具有重要的现实意义，为正在进行城市智慧化研究的企业提供了一定的经验和参考，具有很高的实践价值和广阔的应用前景。</p>
        <p><img src="/images/news/news29_2.png" /></p>
        <p>据悉，经过个人申报、培养单位推荐、形式审查、专家评审等程序，今年共选出100项2020年浙江省专业学位研究生优秀实践成果，其中实践报告类44项，应用设计类46项，文艺作品类10项。我校一共有10项专业学位硕士研究生实践成果入选，其中实践报告类4项，应用设计类6项。我院计算机技术专业赵振振同学成为学院首个获得“浙江省专业学位研究生优秀成果实践”奖的在读研究生。</p>
        </div>
      `,
    title_en: "Congratulations to Zhenzhen Zhao for winning the 2020 Zhejiang Provincial Professional Degree Graduate Outstanding Practice Achievement Award.",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en:
      `
      `,
    top: false,
  },
  {
    id: 28,
    title: "学院举办第十六期青年科学家沙龙",
    author: "杨筱雪",
    create_date: "2021-11-15",
    summary: "11月12日下午，由校科学技术协会和科学技术研究院（工研院、军工院）联合主办，计算机承办的“浙江工业大学第十六期青年科学家沙龙”在我校屏峰校区举办。",
    content:
      `
      <div style="text-indent: 2em;">
        <p>11月12日下午，由校科学技术协会和科学技术研究院（工研院、军工院）联合主办，计算机承办的“浙江工业大学第十六期青年科学家沙龙”在我校屏峰校区举办。本期沙龙的主题是“AI赋能的城市计算”，科研院副院长鄢波、计算机学院负责人梁荣华出席会议并致辞，相关学院的青年学者以及师生代表50余人参加沙龙。</p>
        <p>沙龙邀请了浙江大学计算机学院网络空间安全学院教授王志波，之江实验室正高级研究员陈红阳，浙江大学公共管理学院长聘副教授吴超，杭州电子科技大学教授张建辉，计算机学院孔祥杰教授，曹斌副教授，信息工程学院校聘副教授史秀纺作学术报告。与会的青年学者与技术代表围绕让分享更安全—抗压缩“隐身衣”、数据赋能城市智能化、人工智能时代的数据要素化、动态能量采集网络中提高吞吐量的时间扩展方法、以高效性和有效性视角提升AI应用效能、联邦学习赋能的城市计算进行了深入探讨，并交流和探索了校际和校内的合作方式和模式。</p>
        <p>据悉，青年科学家沙龙是校科学技术协会和科学技术研究院重点打造的品牌活动，致力于促进多学科交叉融合，打造高端学术生态，提升我校青年科学家科研创新能力。</p>
      </div>
      <div>
          <img class="news-salon-img" src="/images/news/2021_11_12_salon/1.jpg" alt="">
          <img class="news-salon-img" src="/images/news/2021_11_12_salon/2.jpg" alt="">
          <img class="news-salon-img" src="/images/news/2021_11_12_salon/3.jpg" alt="">
          <img class="news-salon-img" src="/images/news/2021_11_12_salon/4.jpg" alt="">
          <img class="news-salon-img" src="/images/news/2021_11_12_salon/5.jpg" alt="">
          </div>
      `,
    title_en: "Congratulations to many students including Zhao Zhenzhen from the laboratory for winning scholarships in this academic year!",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en:
      `
      `,
    top: false,
    hide_en:true
  },
  {
    id: 27,
    title: "祝贺实验室赵振振等多位同学在本学年度中获得奖学金",
    author: "杨筱雪",
    create_date: "2021-11-10",
    summary: "根据《浙江工业大学研究生学业奖学金管理办法（试行）》及相关奖学金评定实施办法以及相关通知，经过研究生本人申请，学院研究生办评选审核，本年度实验室同学获奖情况如下：",
    content:
      `
      <div style="text-indent: 2em;">
        <p>根据《浙江工业大学研究生学业奖学金管理办法（试行）》及相关奖学金评定实施办法以及相关通知，经过研究生本人申请，学院研究生办评选审核，本年度实验室同学获奖情况如下：</p>
        <p>赵振振同学获得研究生国家奖学金及学术论文二等奖；</p>
        <p>赵振振、李宁、朱秉、张艳、季展豪、刘娜利、黄志强等同学获得硕士生一等学业奖学金；</p>
        <p>沈阳、许敏皓、陈洋、檀佳佳、许鑫博、熊海涛、卞纪新、徐翼飞、郦鹏飞等同学获得硕士生二等学业奖学金！</p>
        <p>在此，谨向获奖的赵振振等十六名同学表示衷心祝贺！</p>
      </div>
      `,
    title_en: "Congratulations to many students including Zhenzhen Zhao from the laboratory for winning scholarships in this academic year!",
    author_en: "Xiaoxue Yang",
    summary_en: "",
    content_en:
      `
      `,
    top: false,
  },
  {
    id: 26,
    title: "沈国江教授牵头的项目成功入选2022年度浙江省“尖兵”研发攻关计划",
    author: "卞纪新",
    create_date: "2021-11-01",
    summary: "10月30日，浙江省科学技术厅网站公示了2022年度“尖兵”“领雁”研发攻关计划拟立项项目清单，有527项通过评审拟被立项。",
    content:
      `
      <div style="text-indent: 2em;">
        <p>10月30日，浙江省科学技术厅网站公示了2022年度“尖兵”“领雁”研发攻关计划拟立项项目清单，有527项通过评审拟被立项。其中沈国江老师教授牵头的《城市智慧交通云边端一体化管控关键技术研究及应用示范》项目成功入选2022年度浙江省“尖兵”研发攻关计划，项目承担单位为浙江浙大中控信息技术有限公司。</p>
      </div>
      `,
    title_en: "The project led by Prof Guojiang Shen from the laboratory was successfully selected into the 2022 Zhejiang Provincial \"Jian Bing\" R&D Project ",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en:
      `
      `,
    top: false,
    hide_en:true
  },
	{
    id: 25,
    title: "热烈祝贺孔祥杰教授晋升为CCF杰出会员",
    author: "卞纪新",
    create_date: "2021-11-01",
    summary: "近日， CCF杰出会员评审工作会议在北京举行，实验室孔祥杰教授通过评选，晋升为杰出会员。",
    content:
      `
      <div style="text-indent: 2em;">
        <p>近日， CCF杰出会员评审工作会议在北京举行。实验室孔祥杰教授通过评选，晋升为杰出会员。</p>
        <p>CCF个人会员分为四个级别：学生会员、专业会员、高级会员、杰出会员和会士。其中，杰出会员仅占专业会员数的10%，只有在计算领域取得突出成就、具有至少15年专业经验、至少5年CCF连续会龄的CCF高级会员才具备申请资格，最后经CCF会员评审委员从学术成就、对CCF的贡献、业界认可度、CCF会龄等诸多维度对申请人进行综合考量后评选出杰出会员。</p>
        <p>本年度共评选出110位杰出会员，所公示名单如下。</p>
        <p><img src="/images/news/new25.jpg" /></p>
      </div>
      `,
    title_en: "Congratulations to Prof. Xiangjie Kong of the CSSC Lab for being promoted to CCF Distinguished Member",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en:
      `
        <div style="text-indent: 1em;">
        </div>
      `,
    top: false,
  },
  {
    id: 24,
    title: "浙江师范大学鲁剑锋教授访问实验室并作报告",
    author: "卞纪新",
    create_date: "2021-09-26",
    summary: "9月26日，浙江师范大学鲁剑锋教授做客我院作题为“多群智任务在线分配与公平优化”的学术报告，学院孔祥杰教授主持本次报告。",
    content:
      `
      <div style="text-indent: 2em;">
        <p>9月26日，浙江师范大学鲁剑锋教授做客我院作题为“多群智任务在线分配与公平优化”的学术报告，学院孔祥杰教授主持本次报告。</p>
        <p>在报告中，鲁教授首先介绍了当前物联网技术的发展情况，强调了群智感知对当前物联网的重要作用，并通过三个案例进行了详细地讲述。然后针对在线型群智任务不断涌现而参与者资源相对有限且分布不均这一现实困境，鲁教授从寻求社会公平和系统效用最优平衡的角度出发，介绍了所研究的移动群智感知中多任务在线分配与公平优化理论和方法，为促进移动群智感知的可持续性健康发展提供新的思路和方法。</p>
        <p>在报告的最后，鲁教授与在场的老师们就报告中的一些问题进行了讨论和交流，并对同学们的疑问进行了细致的解答，使同学们获益匪浅。</p>
      </div>
      <p><strong>人物简介：</strong></p>
      <div style="text-indent: 2em;">
        <p>鲁剑锋，浙江师范大学教授、博导、博士后合作导师，浙江省杰出青年基金获得者。是CCF、IEEE、ACM会员，CCF普适计算专业委员会委员、国家重点研发计划“物联网与智慧城市”重点专项答辩评审专家、浙江省科技专家库专家、广东省基础与应用基础研究基金项目评审专家。主要研究兴趣包括智能感知与计算、博弈论及其应用、联邦学习等。近年来以第一作者/通讯作者在IEEE TIFS、IEEE TII、ACM TOIT、IEEE TVT、IEEE TCSS、IEEE IOTJ等国内外重要期刊及会议上发表/录用论文40余篇。先后主持国家自然科学基金3项、省部级课题5项。</p>
        <p><img src="/images/news/24.jpg" /></p>
      </div>
      `,
    title_en: "Dr. Jianfeng Lu from Zhejiang Normal University visited CSSC and gave a talk",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en:
      `
      <p><img src="/images/news/24.jpg" /></p>
      `,
    top: false,
  },
  {
    id: 23,
    title: "热烈欢迎新同学的到来",
    author: "卞纪新",
    create_date: "2021-09-15",
    summary: "9月15日中午，实验室成功举办新学期迎新会，欢迎新成员的到来。",
    content:
      `
      <div style="text-indent: 2em;">
        <p>9月15日中午，实验室成功举办新学期迎新会，欢迎新成员的到来。</p>
        <p>新学期开始，城市科学与社会计算实验室迎来了新研一的14名同学、新博一的2名同学以及来自亳州学院的访问学者单守雪老师。为了让新成员快速融入集体，实验室在四楼大会议室举行了迎新会。</p>
        <p>会上，沈国江老师、孔祥杰老师和刘志老师先后发言，对同学们和单老师的加入表示热烈的欢迎，同时表达了自己对同学们在日常生活和学习上的期望和建议，明确了实验室的纪律。随后，同学们分别进行了自我介绍，增加了相互之间的了解。</p>
        <p>在同学们的欢声笑语中，本次迎新会圆满结束，会后大家一起合影留念。</p>
        <p><img src="/images/news/23a.jpg" /></p>
        <p><img src="/images/news/23b.jpg" /></p>
      </div>
      `,
    title_en: "Warmly welcome the new students in the lab",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en:
      `
      <p><img src="/images/news/23a.jpg" /></p>
      <p><img src="/images/news/23b.jpg" /></p>
      `,
    top: false,
  },
  {
    id: 22,
    title: "热烈祝贺朱秉等同学完成的论文被中科院1区期刊IEEE Transactions on Industrial Infomatics录用",
    author: "卞纪新",
    create_date: "2021-09-04",
    summary: "论文题目为《Spatial-Temporal-Cost Combination based Taxi Driving Fraud Detection for Collaborative Internet of Vehicles》",
    content:
      `
      <p><strong>论文题目：</strong></p>
      <p>《Spatial-Temporal-Cost Combination based Taxi Driving Fraud Detection for Collaborative Internet of Vehicles》</p>
      <p><strong>摘要：</strong></p>
      <p>
        Vehicle-to-vehicle (V2V) interaction and collaboration can provide us with a large number of mobile traffic trajectories that can be used to analyze driving behavior. In this paper, we propose a spatio-temporal cost combination based framework for taxi driving fraud detection (STC). First, the point of interest (POI) where taxis interact and collaborate with Collaborative Internet of Vehicles (C-IoVs) participants is identified, and a baseline trajectory model is built to determine the typical trajectory distribution. Second, a statistical model is used to calculate the travel distribution, travel time, and travel cost. At the same time, the taxi trajectory points are converted into evolving graphs to detect the abnormality of the local road segment. Then we can analyze the causes of outlier trajectories combined with the perception of abnormal road environments. Finally, the trajectories of real taxis were used to evaluate outliers, which proves the effectiveness and efficiency of the method.
      </p>
      <p><strong>框架概览：</strong></p>
      <p><img src="/images/news/22.png" /></p>
      `,
    title_en: "The paper completed by Zhu Bing and other students was accepted by IEEE TII, a journal of cas area 1",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en: `
      <p><strong>Title of the paper:</strong></p>
      <p>《Spatial-Temporal-Cost Combination based Taxi Driving Fraud Detection for Collaborative Internet of Vehicles》</p>
      <p><strong>Abstract:</strong></p>
      <p>Vehicle-to-vehicle (V2V) interaction and collaboration can provide us with a large number of mobile traffic trajectories that can be used to analyze driving behavior. In this paper, we propose a spatio-temporal cost combination based framework for taxi driving fraud detection (STC). First, the point of interest (POI) where taxis interact and collaborate with Collaborative Internet of Vehicles (C-IoVs) participants is identified, and a baseline trajectory model is built to determine the typical trajectory distribution. Second, a statistical model is used to calculate the travel distribution, travel time, and travel cost. At the same time, the taxi trajectory points are converted into evolving graphs to detect the abnormality of the local road segment. Then we can analyze the causes of outlier trajectories combined with the perception of abnormal road environments. Finally, the trajectories of real taxis were used to evaluate outliers, which proves the effectiveness and efficiency of the method.</p>
      <p><strong>Overview of the proposed framework:</strong></p>
      <p><img src="/images/news/22.png" /></p>
    `,
    top: false,
  },
  {
    id: 21,
    title: "沈国江教授的一项专利成功转化",
    author: "卞纪新",
    create_date: "2021-08-20",
    summary: "实验室沈国江教授发明的专利“一种城市交通大数据处理中多源数据自适应融合方法”，近日以200万元的价格，成功转让给浙江浙大中控信息技术有限公司。",
    content:
      `
        <div style="text-indent: 2em;">
          <p>实验室沈国江教授发明的专利“一种城市交通大数据处理中多源数据自适应融合方法”，近日以200万元的价格，成功转让给浙江浙大中控信息技术有限公司。</p>
          <p>计算机学院沈国江教授团队长期致力于智能交通技术研究，与浙大中控等行业龙头企业等开展科技合作及技术攻关，立项了"互联网+交通"关键技术与装备研发项目，产生了10余项发明专利，通过产学研合作和成果转化，申请人及研究团队的部分研究成果在浙江杭州、云南蒙自、四川成都等地进行了推广应用，实现了城市广域交通一体化管控，有效提升了城市道路交通管控的智能化水平和运行效率，强力保障了2018德清世界地理信息大会和2016年杭州G20峰会等重大活动，为合作企业新增产值近10亿，新增利税收近2亿，取得了显著的社会经济效益，合作成果曾获得中国智能交通协会科学技术奖二等奖两项。</p>
        </div>
      `,
    title_en: "",
    author_en: "",
    summary_en: "",

    content_en: "",

    top: false,
    hide_en: true,
  },
  {
    id: 20,
    title: "大华股份研发中心智慧交管解决方案总经理史志见和李燕飞博士访问实验室",
    author: "卞纪新",
    create_date: "2021-08-20",
    summary: "8月20日，大华股份研发中心智慧交管解决方案总经理史志见和李燕飞博士访问实验室，洽谈合作交流。",
    content: "<p>8月20日，大华股份研发中心智慧交管解决方案总经理史志见和李燕飞博士访问实验室，洽谈合作交流。</p>",
    title_en: "",
    author_en: "",
    summary_en: "",

    content_en: "",

    top: false,
    hide_en: true,
  },
  {
    id: 19,
    title: "热烈祝贺沈国江教授被评为2020年度浙江工业大学优秀中层干部",
    author: "卞纪新",
    create_date: "2021-08-20",
    summary: "",
    content: "<p><img src=\"/images/news//new19.jpg\"></p>",
    title_en: "",
    author_en: "",
    summary_en: "",

    content_en: "",

    top: false,
    hide_en: true,
  },
  {
    id: 18,
    title: "之江实验室吕明杰博士访问实验室并作学术报告",
    author: "卞纪新",
    create_date: "2021-08-18",
    summary: "8月18日上午，之江实验室人工智能社会实验研究中心吕明杰博士访问实验室并作题为“之江实验室与人工智能社会实验与未来教育”的学术报告，本次报告由孔祥杰教授主持，实验室全体成员参加。",
    content: "<p>8月18日上午，之江实验室人工智能社会实验研究中心吕明杰博士访问实验室并作题为“之江实验室与人工智能社会实验与未来教育”的学术报告，本次报告由孔祥杰教授主持，实验室全体成员参加。</p>\r\n<p><img src=\"/images/news//new18.jpg\"></p>\r\n<p>报告中，吕明杰博士首先对之江实验室进行了介绍，之江实验室是国家级研究平台，是国内首个混合所有制研究机构，纳入国家实验室体系，承担多项国家重大科研任务；随后，吕博士从任务部署、组织方式和典型案例三个方面讲述了人工智能社会实验的相关内容，其中任务部署方面主要介绍了人工智能社会实验的三个阶段：组织应用、科学测量和综合反馈。组织方式方面主要以医疗系统为例介绍了其基本结构及现存的三个普遍问题。典型案例方面则主要介绍霍桑实验、民国三大乡村实验和之江实验室工作这三个人工智能社会实验的比较典型的案例。最后，吕博士介绍了人工智能技术为代表的新一代信息技术在教育行业的应用现状，及其对教育行业的影响与冲击，并对未来教育形态进行了展望。</p>\r\n<p>在最后的讨论环节，吕博士对现场提出的问题作了细致的解答。这次交流让实验室的老师同学们获益匪浅，给同学们的科研工作带来很多启发。</p>",
    title_en: "Dr. Mingjie Lv from Zhejiang Lab visited CSSC and gave a talk",
    author_en: "Zhanhao Ji",
    summary_en: "",

    content_en: "<p><img src=\"/images/news//new18.jpg\"></p>",

    top: false,

  },
  {
    id: 17,
    title: "河海大学韩光洁教授访问实验室并作报告",
    author: "卞纪新",
    create_date: "2021-05-31",
    summary: "5月31日，河海大学韩光洁教授做客CSSC作题为“科技创新思路与国际高水平期刊论文撰写方法”的学术报告，该报告为我校“科研大讨论”系列活动之一，学院孔祥杰教授主持本次报告。",
    content: "<p>5月31日，河海大学韩光洁教授做客CSSC作题为“科技创新思路与国际高水平期刊论文撰写方法”的学术报告，该报告为我校“科研大讨论”系列活动之一，学院孔祥杰教授主持本次报告。</p>\r\n<p><img src=\"/images/news//new17.jpg\"></p>\r\n<p>在报告中，韩教授从什么是高水平论文出发，细致讲述了开展科学研究工作和撰写高质量论文的方法。韩教授首先强调了一个明确具体的研究问题对科研工作及学术论文整体框架的重要性，并指出应以具体实例作为切入点进行原始创新；其次提出了一篇高水平期刊论文应具备的要点，介绍了整篇论文的策划布局及撰写易读懂论文的方法，并着重强调了图示的重要性。</p>\r\n<p>在报告的最后，韩教授从自己的科学研究和国际高水平期刊论文撰写的体会出发，对老师同学们的问题和疑问进行了细致的解答，分享相关经验，同学们获益匪浅。</p>\r\n<p><strong>人物简介</strong></p>\r\n<p>韩光洁，博士、河海大学教授/博导，IET Fellow，EAI Fellow，CCF 杰出会员，IEEE 高级会员。主要研究方向为工业物联网、智慧海洋、人工智能、移动计算等。近年来在IEEE JSAC, IEEE COMST, IEEE TII, IEEE TMC, IEEE TIE, IEEE TPDS, IEEE TCC等国际期刊上发表论文290多篇（其中IEEE/ACM Trans. 系列汇刊60+篇），到目前为止Google Scholar引用次数8600+次，H-index为46。已出版专著3部。主持/参与包括国家重点研发计划、国家重大科技专项及国家自然科学基金重点项目在内的省部级以上项目共30余项。授权国家发明专利99件，PCT美国、日本、澳大利亚、韩国授权专利各1项。获得中国商业联合会科学技术奖二等奖，江苏省科学技术奖三等奖，江苏省教育教学与研究成果奖二等奖，辽宁省科技进步二等奖，IEEE Systems Journal 2020最佳论文奖。连续2年（2019，2020）入选全球排名前2%的科学家(Stanford University List of World's Top 2% Scientists)，入选爱思唯尔2020年10万科学家终身科学影响力排行榜（Career Scientific Impact 排名），入选爱思唯尔2020年中国高被引学者（Highly Cited Chinese Researchers）榜单。目前任多种国际期刊（其中包括IEEE JSAC, IEEE Communications, IEEE Wireless Communications, IEEE Network, IEEE Systems, IEEE TII）编委或客座主编。江苏省有突出贡献中青年专家，江苏省高校青蓝工程学术带头人，江苏省六大人才高峰高层次人才，闽江学者讲座教授，常州市五一劳动奖章等荣誉称号。</p>",
    title_en: "Prof. Guangjie Han from Hohai University visited CSSC and gave a talk",
    author_en: "Jixin Bian",
    summary_en: "",

    content_en: "<p><img src=\"/images/news//new17.jpg\"></p>",

    top: false,

  },
  {
    id: 16,
    title: "浙大中控周俊杰、胡灵龙访问实验室并作报告",
    author: "卞纪新",
    create_date: "2021-05-20",
    summary: "5月20日下午，浙江浙大中控信息技术有限公司周俊杰、胡灵龙访问实验室作题为“雷视数据分析的关键技术与前沿挑战”的学术报告，学院孔祥杰教授主持报告。",
    content: "<p>5月20日下午，浙江浙大中控信息技术有限公司周俊杰、胡灵龙访问实验室作题为“雷视数据分析的关键技术与前沿挑战”的学术报告，学院孔祥杰教授主持报告。</p>\r\n<p><img src=\"/images/news//new16.jpg\"></p>\r\n<p>本次报告主要通过对雷视数据的挖掘、分析，及其在智慧城市中的应用进行介绍，讨论雷视数据分析的前沿挑战问题。报告中，周俊杰总经理首先对目前的行业现状进行了概述，然后介绍了中控公司关于雷视数据与其他多源城市数据的整合、挖掘和分析的现有研究，为解决城市交通本身所面临的挑战，提升资源运用的效率，优化城市管理和服务，改善居民生活质量，创造智慧城市提供了新的思路，同时指出了当前研究中所遇到的技术难题。</p>\r\n<p>在最后的讨论环节，周俊杰总经理、胡灵龙经理和与会教授对相关问题和技术难点进行了激烈的讨论，并对雷视数据分析的未来研究进行了展望，给同学们的科研工作带来了很大的启发。</p>\r\n<p><strong>人物简介</strong></p>\r\n<p>周俊杰，浙江浙大中控信息技术有限公司交通大脑事业部总经理</p>\r\n<p>胡灵龙，浙江浙大中控信息技术有限公司交通大脑事业部基础研发部经理</p>",
    title_en: "Junjie Zhou and Linglong Hu from SUPCON visited CSSC and gave a talk",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new16.jpg\"></p>",
    top: false,

  },
  {
    id: 15,
    title: "祝贺研究组成员韩笑被香港城市大学博士生全奖录取",
    author: "季展豪",
    create_date: "2021-04-01",
    summary: "香港城市大学（City University of Hong Kong），简称城大（CityU），是一所世界知名的国际化公立研究型综合大学",
    content: "<p>香港城市大学（City University of Hong Kong），简称城大（CityU），是一所世界知名的国际化公立研究型综合大学。</p>\r\n<p>实验室全体师生热烈祝贺研究组优秀硕士生韩笑被香港城市大学博士生全奖录取。</p>\r\n",
    title_en: "CSSC member Xiao Han has been accepted as a doctoral student with full scholarship from City University of Hong Kong",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "",
    top: false,

  },
  {
    id: 14,
    title: "北京航空航天大学王磊教授访问实验室并作报告",
    author: "卞纪新",
    create_date: "2021-03-13",
    summary: "3月13日上午，北京航空航天大学自动化科学与电气工程学院副院长王磊教授访问实验室作题为“异构集群同步态的数学刻画与分析”的学术报告，学院孔祥杰教授主持报告。",
    content: "<p>3月13日上午，北京航空航天大学自动化科学与电气工程学院副院长王磊教授访问实验室作题为“异构集群同步态的数学刻画与分析”的学术报告，学院孔祥杰教授主持报告。</p>\r\n\r\n<p><strong>人物简介</strong></p>\r\n<p>王磊，北京航空航天大学自动化科学与电气工程学院教授、博士生导师、副院长。2004年和2009年均毕业于浙江大学，先后获得自动化工学学士学位和控制科学与工程博士学位。2014至2016年分别以Senior Research Fellow和Senior Research Associate Professor身份访问新加坡国立大学和香港大学。主要研究方向为复杂网络系统建模与控制、智能无人系统控制与优化，在Automatica，SIAM，IEEE汇刊等控制领域重要期刊发表论文50余篇，授权发明专利10项，先后获得浙江省科学技术奖二等奖，中国仪器仪表学会技术发明二等奖（排名1），麒麟科学技术奖-首都优秀科技创新奖（排名1）。现担任ISA Transaction副编辑、International Conference on Complex Networks and their Application等多个会议程序委员会成员。</p>\r\n\r\n<p><strong>报告内容</strong></p>\r\n<p>本次报告主要讨论了异构集群同步行为的刻画与分析问题。报告中，王磊教授首先介绍了集群智能的国内外研究现状；然后从集群同步出发，将异构网络的同步问题等价转化为类同构网络的同步问题和异构网络的稳定性问题，通过定义同步轨道w-极限集的最大闭不变集代替同构集群中的不变流形以刻画异构集群的同步态，为异构集群协同分析与控制提供了重要的理论新方法。</p>\r\n<p>在最后的讨论环节，王磊教授对老师同学们的问题和疑问进行了细致的解答，同时根据自己做科研工作的经验提出了一些比较好的科研方法，给了同学们很大的启迪。</p>\r\n\r\n<p><img src=\"/images/news//new14.jpg\"></p>",
    title_en: "Prof. Lei Wang from Beihang University visited CSSC and gave a talk",
    author_en: "Jixin Bian",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new14.jpg\"></p>",
    top: false,

  },
  {
    id: 12,
    title: "祝贺研究组成员赵振振在Transactions on Industrial Informatics上发表论文",
    author: "季展豪",
    create_date: "2021-01-13",
    summary: "论文题目为《GCN2CDD: A Commercial District Discovery Framework via Embedding Space Clustering on Graph Convolution Networks》。",
    content: "<p>论文题目为《GCN2CDD: A Commercial District Discovery Framework via Embedding Space Clustering on Graph Convolution Networks.》。</p>\r\n<p><strong>摘要：</strong></p>\r\n<p>暂无</p>",
    title_en: "CSSC member Zhenzhen Zhao published a paper on Transactions on Industrial Informatics",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "",
    top: false,

  },
  {
    id: 11,
    title: "中山大学王伟副教授访问实验室并作报告",
    author: "季展豪",
    create_date: "2020-12-23",
    summary: "12月11日，中山大学王伟副教授访问实验室并举办学术报告。",
    content: "<p>12月21日，中山大学王伟副教授访问实验室并举办学术报告。</p>\r\n<p><strong>报告主题</strong></p>\r\n<p>数据驱动的计算社会科学</p>\r\n<p><strong>报告时间</strong></p>\r\n<p>2020年12月23日（星期三）下午15：00-16：00</p>\r\n<p><strong>报告地点</strong></p>\r\n<p>计算机新大楼A318</p>\r\n<p><strong>报告摘要</strong></p>\r\n<p>关于人类的各种数据的可访问性极大地影响了研究人员关注的研究主题或方法。通过利用这些数据，可以从新的角度研究传统的社会问题。可以发现更多的社会现象。同时，由于数据的可用性，出现了新的研究主题或方法。因此，探索计算社会科学领域中以数据为中心的研究主题已引起越来越多的关注。基于社会调查的原理，建立了用于检索经验数据以分析社会科学领域问题的传统方法。这些程序通常是通过人力资源调查表以手动方式进行的。这不仅非常耗费资源，而且由于人为过失或其他固有限制而导致严重不准确。因此，计算社会科学（CSS）应运而生，它利用数学理论以及计算机科学的数据处理和分析技术来解决这些社会问题。</p>",
    title_en: "A/Prof. Wei Wang from Sun Yat-sen University visited CSSC and gave a talk",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "",
    top: false,

  },
  {
    id: 10,
    title: "祝贺实验室获得最美研究生实验室称号",
    author: "季展豪",
    create_date: "2020-12-21",
    summary: "12月21日，浙江工业大学2020年实验室安全文化月闭幕式圆满结束，实验室成功获评最美研究生实验室称号。",
    content: "<p>12月21日，浙江工业大学2020年实验室安全文化月闭幕式圆满结束。</p>\r\n<p>在闭幕式上，实验室荣获最美研究生实验室的称号，并获得学校颁发的称号奖牌，以及作为奖品的一台空气净化器。</p>\r\n<p><img src=\"/images/news//new10.jpg\"></p>\r\n<p>虽然这是个小荣誉，但对实验室来说也是一件大事。希望实验室的成员还要努力好好维护实验室的环境，环境、卫生、安全靠大家！</p>",
    title_en: "The CSSC Lab won the title of the most beautiful graduate laboratory",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new10.jpg\"></p>",
    top: false,

  },
  {
    id: 9,
    title: "苏州大学贾鹤鹏教授访问实验室并作报告",
    author: "季展豪",
    create_date: "2020-12-08",
    summary: "12月8日，苏州大学贾鹤鹏教授访问实验室并举办学术报告。",
    content: "<p>12月8日，苏州大学贾鹤鹏教授访问实验室并举办学术报告。</p>\r\n<p><strong>报告主题</strong></p>\r\n<p>科学传播促进科学生产力—如何有效传播自己科研成果</p>\r\n<p><strong>报告摘要</strong></p>\r\n<p>科学传播一直被视为提高公民科学素质的主要途径。与此同时，大量中外研究也表明，积极从事科学传播将为科研工作者带来论文引用率提升、获得科研基金几率增加和得到决策者认可等收益。但如何开展有效的科学传播工作？康奈尔作为世界知名高校，又在这方面可以为研究人员提供哪些资源？如何高效利用这些资源？主讲人将根据多年科学传播实践和近年的理论研究与大家共同探讨上述议题。</p>",
    title_en: "Prof. Hepeng Jia of Soochow University visited CSSC and gave a talk",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "",
    top: false,

  },
  {
    id: 8,
    title: "大连理工大学宁兆龙副教授、浙江大学邓瑞龙教授访问实验室并作报告",
    author: "季展豪",
    create_date: "2020-11-10",
    summary: "11月10日，大连理工大学宁兆龙副教授、浙江大学邓瑞龙教授访问实验室并分别举办两场学术报告。",
    content: "<p>11月10日，大连理工大学宁兆龙副教授、浙江大学邓瑞龙教授访问实验室并分别举办两场学术报告。</p>\r\n<p><strong>报告主题</strong></p>\r\n<p>宁兆龙：移动边缘物联网智能通信与计算。</p>\r\n<p>邓瑞龙：智能电网中的信息物理协同攻击及其对策。</p>\r\n<p><strong>报告摘要</strong></p>\r\n<p>宁兆龙：针对物联网低延迟和广覆盖等网络特征和性能需求，边缘网络有望将通信、计算和存储资源延伸至用户侧，通过边缘网络高效资源管理满足用户需求。本报告聚焦实时高效通信、智能边缘计算、资源受限服务三大科学问题，探讨全新的移动边缘网络资源管理方法体系，目标是通过对通信和计算资源的高效管理提升边缘网络服务能力。通过新型网络框架设计，将人工智能技术与3C技术融合实现异构资源共享与应用协同。</p>\r\n<p>邓瑞龙：智能电网已被广泛认为是一种典型的网络物理系统（CPS），它利用信息和通信技术（ICT）来自动收集电表数据并对其进行操作，以提高敏捷性，可靠性，效率，安全性，经济性，可持续性以及环境友好性。随着ICT和网络组件的集成，新的切入点和漏洞的引入，智能电网网络安全成为关键基础架构的重中之重。在本次演讲中，我将首先简要介绍我在智能电网和网络安全领域的研究概述。然后，我将向智能电网介绍一种新的威胁类别，称为协作式网络物理攻击（CCPA），利用该网络攻击来掩盖物理攻击，并提出有效的对策，分别检测网络空间和物理空间中的CCPA。</p>",
    title_en: "A/Prof. Zhaolong Ning from Dalian University of Technology and Prof. Ruilong Deng from Zhejiang University visited CSSC and give a talk",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "",
    top: false,

  },
  {
    id: 7,
    title: "祝贺研究组成员韩笑在Transaportation Research C上发表论文",
    author: "季展豪",
    create_date: "2020-11-03",
    summary: "论文题目为《Congestion Recognition for Hybrid Urban RoadSystems via Digraph Convolutional Network》。",
    content: "<p>论文题目为《Congestion Recognition for Hybrid Urban RoadSystems via Digraph Convolutional Network》。</p>\r\n<p><strong>摘要：</strong></p>\r\n<p>在智能交通系统中，拥塞识别是交通控制和管理、车辆出行和许多其他应用的先决条件。不同交通设施类型的道路提供了多源异构的现场交通数据，这些数据包含了拥堵识别的基本信息和特征。为了充分利用这些交通大数据，本文提出了一种基于机器学习的框架来解决拥塞识别问题。它可以分为两部分：基于图的混合城市交通网络表示和基于图卷积神经网络（DGCN）的学习模型。首先，该方法将基本流量变量与不同流量的相关性结合起来，并将全局拓扑与局部流量信息部分解耦。然后针对基于有向图的样本，提出了一种新的图特征提取方法，并据此定义了图的傅里叶变换。这使得我们的模型有别于传统的卷积网络。基于实际交通数据进行了综合实验。实验结果表明，该方法优于现有的拥塞识别方法。</p>\r\n<p><img src=\"/images/news//new7.png\"></p>\r\n<p><img src=\"/images/news//new7s.png\"></p>",
    title_en: "CSSC member Xiao Han published a paper on Transportation Research C",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new7.png\"></p>\r\n<p><img src=\"/images/news//new7s.png\"></p>",
    top: false,

  },
  {
    id: 6,
    title: "祝贺研究组成员徐浩然同学荣获国家奖学金",
    author: "季展豪",
    create_date: "2020-10-22",
    summary: "研究组成员徐浩然同学荣获计算机科学与技术学院、软件学院2019/2020学年国家奖学金。",
    content: "<p>经学院审核推荐，学校审定，计算机学院2019/2020学年奖学金名单现已公示。</p>\r\n<p>我们研究小组隆重祝贺徐浩然同学获得此荣誉！</p>",
    title_en: "CSSC member Haoran Xu won the National Scholarship",
    author_en: "Zhanhao Ji",
    summary_en: "",
    content_en: "",
    top: false,

  },
  {
    id: 5,
    title: "祝贺科研组科研成果获Nature Index头条新闻报道",
    author: "朱秉",
    create_date: "2020-09-23",
    summary: "该成果由孔祥杰教授负责的城市科学与社会计算研究组(www.cssclab.cn)与德克萨斯大学奥斯汀分校丁颖教授团队等合作完成。",
    content: "<p>9月23日，自然指数（Nature Index）网站头条发表题为 “Predicting your future h-index”的新闻，该新闻报道了我校计算机科学与技术学院孔祥杰教授领衔的大数据与城市计算高水平科研团队的科技成果“The Gene of Scientific Success”，该成果于2020年发表在数据挖掘权威期刊《ACM Transactions on Knowledge Discovery from Data》上。</p>\r\n<p>该成果由孔祥杰教授负责的城市科学与社会计算研究组(www.cssclab.cn)与德克萨斯大学奥斯汀分校丁颖教授团队等合作完成。Nature Index的新闻报道点名指出，孔祥杰等人利用特征工程，分析了微软MAG数据库中超过80000名计算机科学家以及APS数据库中超过80000名物理学家，从作者、论文、机构、期刊、时间等多个特征出发，对科学家h指数进行预测，并基于预测结果进一步分析各组特征影响h指数的权重。论文较为准确的预测了学者5年至10年的指数，并给出了如下结论：不同领域的科学家合作发表论文有利于提升h指数。该研究引起了国内外学者的广泛关注和讨论。</p>\r\n<p>Nature Index，中文名为自然指数，是Nature集团在2014年11月推出的数据库，用以追踪学者或机构在全球一流期刊的论文发表情况，在全球的科研机构和科研人员中具有广泛影响。据悉，Nature Index网站的新闻频道每个月在全球范围内仅重点报道不到10项研究工作。</p>\r\n<!-- <p><img src=\"/images/news//new2.png\" ></p>-->\r\n<p><img src=\"/images/news//new2s.jpg\"></p>",
    title_en: "The scientific research results of the CSSC research team were reported in the headline news of Nature Index",
    author_en: "Bing Zhu",
    summary_en: "",
    content_en: "<!-- <p><img src=\"/images/news//new2.png\" ></p>-->\r\n<p><img src=\"/images/news//new2s.jpg\"></p>",
    top: false,

  },
  {
    id: 4,
    title: "祝贺研究组的两个项目获国家自然科学基金资助",
    author: "朱秉",
    create_date: "2020-09-22",
    summary: "分别是：基于注意力机制和多结构图卷积的时空特征融合交通态势评估方法和数据缺失环境下基于图学习的城市出行画像关键技术研究。",
    content: "<p>热烈祝贺我们团队的两个项目获国家自然科学基金资助。</p>\r\n<p><strong>分别是：</strong></p>\r\n<p><strong>基于注意力机制和多结构图卷积的时空特征融合交通态势评估方法：</strong></p>\r\n<p>针对传统评估模型和方法存在的时空特征提取不全面、时空信息融合程度低、评估模型鲁棒性和泛化能力差等方面的不足，本项目综合应用深度学习方法、交通流理论和自动化技术，研究基于注意力机制和多结构图卷积的时空特征融合交通态势评估方法。</p>\r\n<p><img src=\"/images/news//new3t.png\"></p>\r\n<p><img src=\"/images/news//new3.png\"></p>\r\n<p><strong>数据缺失环境下基于图学习的城市出行画像关键技术研究：</strong></p>\r\n<p>本项目以城市出行画像为基本切入点，拟对数据缺失环境下的异构时空网络挖掘相关的理论和技术进行研究。其中所有研究内容的逻辑关系为：轨迹数据填补与轨迹数据生成，是时空数据融合及城市异构时空网络构建中建立起时空依赖关系的基础；多源异构数据融合的最终形式为异构时空网络；异构时空网络建立起城市实体之间复杂的关系，通过对异构时空网络的深入挖掘，从而构建起精准的城市出行画像。</p>\r\n<p><img src=\"/images/news//new3f.png\"></p>\r\n<p><img src=\"/images/news//new3s.png\"></p>",
    title_en: "Two projects of the CSSC research team were funded by the National Natural Science Foundation of China",
    author_en: "Bing Zhu",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new3t.png\"></p>\r\n<p><img src=\"/images/news//new3.png\"></p>\r\n<p><img src=\"/images/news//new3f.png\"></p>\r\n<p><img src=\"/images/news//new3s.png\"></p>",
    top: false,

  },
  {
    id: 3,
    title: "沈国江教授受邀主持第九届(2020)中国智能交通市场年会",
    author: "朱秉",
    create_date: "2020-08-19",
    summary: "由赛文交通网主办的第九届中国智能交通市场年会在杭州钱江新城万豪酒店召开。",
    content: "<p>由赛文交通网主办的第九届中国智能交通市场年会在杭州钱江新城万豪酒店召开，大会将汇聚智能交通产业领袖及产、学、研、用行业资源，共同总结过去，展望行业未来。</p>\r\n<p>内容涵盖信号控制、互联网+公交、智慧高速、车路协同等细分领域。</p>\r\n<p><img src=\"/images/news//new4.jpg\"></p>",
    title_en: "Prof. Guojiang Shen was invited to host the 9th (2020) China Intelligent Transportation Market Annual Conference",
    author_en: "Bing Zhu",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new4.jpg\"></p>",
    top: false,

  },
  {
    id: 2,
    title: "祝贺研究组在IEEE Transactions on Industrial Informatics 上发表论文",
    author: "朱秉",
    create_date: "2020-07-30",
    summary: "论文题目为《Mobile Edge Cooperation Optimization for Wearable Internet of Things: A Network Representation based》。",
    content: "<p>论文题目为《Mobile Edge Cooperation Optimization for Wearable Internet of Things: A Network Representation based》。</p>\r\n<p><strong>摘要：</strong></p>\r\n<p>边缘计算作为一种新的计算范式出现在各个领域。许多以前依赖于云计算的任务被分发到各种边缘设备上，这些设备协作完成任务。然而，边缘网络中的环境因素（如功能、传输效率、资源限制）比云中的因素更加复杂计算。因此在边缘设备的协同工作中，存在着不可忽视的不稳定性。本文提出了一种新的边缘协同网络优化框架ECN-Opt，以提高边缘计算任务的性能。具体来说，我们首先定义合作的评估指标。其次，对ECN的协作进行优化，以提高具体任务的性能。在足球队球员身上使用可穿戴传感器的真实数据集进行了大量的实验，证明了我们的ECN-Opt框架具有良好的性能嗯。还有验证了所提出的优化算法的有效性。</p>\r\n<p><img src=\"/images/news//new5.png\"></p>\r\n<p><img src=\"/images/news//new5s.png\"></p>",
    title_en: "The CSSC research team published a paper on IEEE Transactions on Industrial Informatics",
    author_en: "Bing Zhu",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new5.png\"></p>\r\n<p><img src=\"/images/news//new5s.png\"></p>",
    top: false,

  },
  {
    id: 1,
    title: "沈国江教授参加第二届浙江国际智能交通产业博览会暨未来交通大会",
    author: "朱秉",
    create_date: "2019-12-06",
    summary: "12月6日，第二届浙江省国际智能交通产业博览会暨未来交通大会（以下简称“世博会”）在杭州国际博览中心举行。为期三天的博览会以“交通新时代的新工业格局”为主题，聚焦国内外综合运输业的“新技术，新产品，新模式，新形式”。\r\n",
    content: "<p>12月6日，第二届浙江省国际智能交通产业博览会暨未来交通大会（以下简称“世博会”）在杭州国际博览中心举行。为期三天的博览会以“交通新时代的新工业格局”为主题，聚焦国内外综合运输业的“新技术，新产品，新模式，新形式”。</p>\r\n<p>浙江工业大学计算机智能系统研究所所长沈国江发表了题为“大数据时代的城市广域交通管理与控制集成技术”的主题演讲。分别分析了智能交通管理与控制的发展趋势、大数据演绎时代的多源交通数据分析融合与趋势，人工智能交通控制技术，大数据驱动的城市广域管理与控制集成平台。</p>\r\n<p><img src=\"/images/news//new1.png\"></p>",
    title_en: "Prof. Guojiang Shen attended the second Zhejiang International Intelligent Transportation Industry Expo & Future Transportation Conference",
    author_en: "Bing Zhu",
    summary_en: "",
    content_en: "<p><img src=\"/images/news//new1.png\"></p>",
    top: false,

  }
]
