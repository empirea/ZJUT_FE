// interface INoticeContentImg {
//   type: "img",
//   src: string,
// }

// interface INoticeContentText {
//   type: "text" | "heading",
//   text: string,
// }

// interface INoticeContentNewline {
//   type: "blankLine",
// }

interface INotice {
  id: number,
  title: string,
  author: string,
  create_date: string,
  summary: string,
  // content: (INoticeContentImg | INoticeContentText | INoticeContentNewline)[],
  content: string,
  top: boolean,
  // hide in website cn
  hide_cn?: true,
  // hide in website en
  hide_en?: true,
  title_en: string,
  author_en: string,
  summary_en: string,
  content_en: string,
}

export const notices: INotice[] = [
  // {
  //   id: 25,
  //   title: "2021(1)学年CSSC小组第1次研讨会",
  //   author: "季展豪",
  //   create_date: "2021-09-24",
  //   summary:
  //     "",
  //   // "报告文献：《不完全时间序列聚类的学习表示》；《人类流动的普遍访问规律》。",
  //   content: `
  //   <p><strong>报告时间：</strong></p>
  //   <p>2021年9月25日，下午1：30</p>
  //   <p><strong>报告地点：</strong></p>
  //   <p>计算机楼A320</p>
  //   <p><strong>主持人：</strong></p>
  //   <p>沈国江教授、孔祥杰教授、刘志教授</p>
  //   <p><strong>汇报人：</strong></p>
  //   <p>1.许敏浩</p>
  //   <p>2.沈阳</p>
  //   `,
  //   // <p><strong>报告主题：</strong></p>
  //   // <p>1.刘娜利作题为“不完全时间序列聚类的学习表示”的报告</p>
  //   // <p>2.熊海涛作题为“人类流动的普遍访问规律”的报告</p>
  //   title_en: "The 1st seminar of CSSC group in 2021(1) school year",
  //   author_en: "Zhanhao JI",
  //   summary_en:
  //     "",
  //   // "Report Paper: “Learning Representations for Incomplete Time Series Clustering”; “The universal visitation law of human mobility”.",
  //   content_en: `
  //   <p><strong>Report time:</strong></p>
  //   <p>September 25, 2021, 1:30 pm</p>
  //   <p><strong>Report location:</strong></p>
  //   <p>Computer Building A320</p>
  //   <p><strong>Moderator:</strong></p>
  //   <p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
  //   <p><strong>Reporter:</strong></p>
  //   <p>1.Minhao Xu</p>
  //   <p>2.Yang Shen</p>
  //   `,
  //   // <p><strong>Theme:</strong></p>
  //   // <p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p>
  //   // <p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>
  //   top: false,
  // },
  {
    id: 33,
    title: "城市科学与社会计算实验室招收2026级博士/硕士研究生",
    author: "吴一楠",
    create_date: "2025-06-30",
    summary: "浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。",
    content: `
    <div style="text-align: justify;">
    <p><img src="/images/notice/notice25_zhaosheng.png"/></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室的重点研究方向包括城市计算、大数据、网络科学、计算社会科学等。现有博士生、硕士生和高年级本科生共计40余人。具体情况如下：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室负责人为孔祥杰教授、浙江工业大学运河青年学者、CCF杰出会员、IEEE高级会员；首席专家为沈国江教授、计算机学院副院长、杭州市钱江特聘专家、浙江工业大学计算机智能系统研究所所长。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 核心导师团队由8名优秀的中青年教师和一名海外兼职教授组成，包括4名教授和2名特聘副研究员。交流零代沟，沟通无障碍！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 实验室毕业生主要就职于国内知名企事业单位（阿里巴巴、百度、字节跳动、腾讯、华为、小米等），或在国内外深造（如清华大学、浙江大学、香港城市大学等）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 多元化，国际化实验室！有多名留学生，实验室例会、学术报告全英文！实验室与美国、加拿大、澳大利亚、日本等许多国际知名高校和著名学者建立了良好的合作关系。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 近年来，实验室成员在几个主要研究领域相关的国际知名会议和期刊（如WWW、IEEE系列、ACM系列等）发表百余篇论文，并取得了多项相关专利，详情见实验室网站。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. 实验室工作环境舒适，科研经费充足，每年颁发“杰出贡献奖”。（最多可达10000元！！！）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. 技术大神OR文档高手，科研大拿OR生活达人，总有一款适合你；实验室男女比例合理，男女搭配，学习不累！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>想要更多细节，欢迎登陆实验室主页： <a href=\"http://www.cssclab.cn\" > http://www.cssclab.cn/</a>。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室拟招收2026级博士/硕士研究生。如有兴趣，请发送简历到xjkong@ieee.org 。欢迎咨询联系 。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>城市科学与社会计算实验室希望有个如你一般的人，如小和山间清爽的风，如西溪湿地温暖的阳光，从清晨到夜晚，由山野到书房，只要最后是你，就好。</strong></p>
    </div>
      `,
    title_en: "City Science and Social Computing Laboratory recruits 2026 Ph.D/Master students",
    author_en: "Yinan Wu",
    summary_en: "The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.",
    content_en: "<p>&nbsp;&nbsp;&nbsp;&nbsp; The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong> The key research directions of the laboratory include urban computing, big data, network science, computational social science, etc. There are more than 40 doctoral students, master students and senior undergraduates. Details are as follows:</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp; 1. The person in charge of the laboratory is Prof. Xiangjie Kong, the Young Canal Scholar of Zhejiang University of Technology, CCF distinguished member,and a senior member of IEEE; the chief expert is Prof. Guojiang Shen, the deputy dean of the School of Computer, Hangzhou Qianjiang Distinguished Expert, and the director of the Institute of Computer Intelligent System of Zhejiang University of Technology.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The core tutor team is composed of 8 outstanding young and middle-aged teachers and an overseas part-time professor, including 4 professors and 2 specially appointed associate researchers. Zero generation gap in communication, barrier-free communication!</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 3. Laboratory graduates mainly work in well-known domestic enterprises and institutions (Alibaba, Baidu, ByteDance, Tencent, Huawei, Xiaomi, etc.), or study at home and abroad (such as Tsinghua University, Zhejiang University, City University of Hong Kong, etc.) .</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 4. Diversified, international laboratory! The laboratory has established good cooperative relations with many internationally renowned universities and well-known scholars such as the United States, Canada, Australia, and Japan.</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5. In recent years, members of the laboratory have published more than 100 papers in internationally renowned conferences and journals related to several major research fields (such as WWW, IEEE series, ACM series, etc.), and have obtained a number of related patents. Please refer to the laboratory for details website.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Five reasons why we can’t refuse the Urban Science and Social Computing Laboratory (Why are we different^_^):</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;1. The official working language of the laboratory is English; English level is up! up! up!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The OR document master of the technical god, the OR life expert of scientific research, there is always one suitable for you; the ratio of men and women in the laboratory is reasonable, and the men and women are matched, and the study is not tired!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;3. The laboratory atmosphere of group , friends , love, and laboratory activities of abundance rich multi color , we are a love each other extended family!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;4. The laboratory has a comfortable working environment and sufficient funds for scientific research. The \"Outstanding Contribution Award\" is awarded every year. (Up to 10,000 yuan!!!)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;5. Significant improvement in programming ability and algorithm ability; master the principles and implementation of cutting-edge algorithms in the current hot artificial intelligence and deep learning fields, and become more competitive after joining the work in the future!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>For more details, please visit the homepage of the laboratory: <a href=\"http://www.cssclab.cn\"> http://www.cssclab.cn/</a>.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The laboratory plans to recruit 2026 Ph.D/Master students. If you are interested, please send your resume to xjkong@ieee.org (the elegant and handsome teacher Kong Xiangjie). Welcome to contact us.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Urban Science and Social Computing Laboratory hopes to have someone like you, such as the refreshing wind in the mountains and the warm sunshine in the Xixi Wetland, from early morning to night, from the mountains to the study, as long as it is you in the end.</strong></p>",
    top: true,
  },
  {
    id: 32,
    title: "城市科学与社会计算实验室招收2025级博士/硕士研究生",
    author: "舒灿",
    create_date: "2024-07-19",
    summary: "浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。",
    content: `
    <div style="text-align: justify;">
    <p><img src="/images/notice/notice24_zhaosheng.jpg"/></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室的重点研究方向包括城市计算、大数据、网络科学、计算社会科学等。现有博士生、硕士生和高年级本科生共计50余人。具体情况如下：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室负责人为孔祥杰教授、浙江工业大学运河青年学者、CCF杰出会员、IEEE高级会员；首席专家为沈国江教授、计算机学院副院长、杭州市钱江特聘专家、浙江工业大学计算机智能系统研究所所长。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 核心导师团队由5名优秀的中青年教师和一名海外兼职教授组成，包括3名教授和3名副教授。其中4人为80后。交流零代沟，沟通无障碍！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 实验室毕业生主要就职于国内知名企事业单位（阿里巴巴、百度、字节跳动、腾讯、华为、小米等），或在国内外深造（如清华大学、浙江大学、香港城市大学等）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 多元化，国际化实验室！有多名留学生，实验室例会、学术报告全英文！实验室与美国、加拿大、澳大利亚、日本等许多国际知名高校和著名学者建立了良好的合作关系。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 近年来，实验室成员在几个主要研究领域相关的国际知名会议和期刊（如WWW、IEEE系列、ACM系列等）发表百余篇论文，并取得了多项相关专利，详情见实验室网站。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. 实验室工作环境舒适，科研经费充足，每年颁发“杰出贡献奖”。（最多可达10000元！！！）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7.技术大神OR文档高手，科研大拿OR生活达人，总有一款适合你；实验室男女比例合理，男女搭配，学习不累！。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>想要更多细节，欢迎登陆实验室主页： <a href=\"http://www.cssclab.cn\" > http://www.cssclab.cn/</a>。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室拟招收2025级博士/硕士研究生。如有兴趣，请发送简历到xjkong@ieee.org 。欢迎咨询联系 。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>城市科学与社会计算实验室希望有个如你一般的人，如小和山间清爽的风，如西溪湿地温暖的阳光，从清晨到夜晚，由山野到书房，只要最后是你，就好。</strong></p>
    </div>
      `,
    title_en: "City Science and Social Computing Laboratory recruits 2025 Ph.D/Master students",
    author_en: "Can Shu",
    summary_en: "The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.",
    content_en: "<p>&nbsp;&nbsp;&nbsp;&nbsp; The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results..</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong> The key research directions of the laboratory include urban computing, big data, network science, computational social science, etc. There are more than 40 doctoral students, master students and senior undergraduates. Details are as follows:</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp; 1. The person in charge of the laboratory is Prof. Xiangjie Kong, the Young Canal Scholar of Zhejiang University of Technology, CCF distinguished member,and a senior member of IEEE; the chief expert is Prof. Guojiang Shen, the deputy dean of the School of Computer, Hangzhou Qianjiang Distinguished Expert, and the director of the Institute of Computer Intelligent System of Zhejiang University of Technology.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The core tutor team is composed of 5 outstanding young and middle-aged teachers and an overseas part-time professor, including 3 professors and 3 associate professors. Four of them are born in the 80s. Zero generation gap in communication, barrier-free communication!</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 3. Laboratory graduates mainly work in well-known domestic enterprises and institutions (Alibaba, Baidu, ByteDance, Tencent, Huawei, Xiaomi, etc.), or study at home and abroad (such as Tsinghua University, Zhejiang University, City University of Hong Kong, etc.) .</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 4. Diversified, international laboratory! The laboratory has established good cooperative relations with many internationally renowned universities and well-known scholars such as the United States, Canada, Australia, and Japan.</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5. In recent years, members of the laboratory have published more than 100 papers in internationally renowned conferences and journals related to several major research fields (such as WWW, IEEE series, ACM series, etc.), and have obtained a number of related patents. Please refer to the laboratory for details website.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Five reasons why we can’t refuse the Urban Science and Social Computing Laboratory (Why are we different^_^):</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;1. The official working language of the laboratory is English; English level is up! up! up!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The OR document master of the technical god, the OR life expert of scientific research, there is always one suitable for you; the ratio of men and women in the laboratory is reasonable, and the men and women are matched, and the study is not tired!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;3. The laboratory atmosphere of group , friends , love, and laboratory activities of abundance rich multi color , we are a love each other extended family!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;4. The laboratory has a comfortable working environment and sufficient funds for scientific research. The \"Outstanding Contribution Award\" is awarded every year. (Up to 10,000 yuan!!!)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;5. Significant improvement in programming ability and algorithm ability; master the principles and implementation of cutting-edge algorithms in the current hot artificial intelligence and deep learning fields, and become more competitive after joining the work in the future!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>For more details, please visit the homepage of the laboratory: <a href=\"http://www.cssclab.cn\"> http://www.cssclab.cn/</a>.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The laboratory plans to recruit 2025 Ph.D/Master students. If you are interested, please send your resume to xjkong@ieee.org (the elegant and handsome teacher Kong Xiangjie). Welcome to contact us.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Urban Science and Social Computing Laboratory hopes to have someone like you, such as the refreshing wind in the mountains and the warm sunshine in the Xixi Wetland, from early morning to night, from the mountains to the study, as long as it is you in the end.</strong></p>",
    top: false,
  },
  {
    id: 31,
    title: "会议征稿通知：第二届物联网与机器学习国际学术会议（IoTML 2022）",
    author: "杨筱雪",
    create_date: "2022-09-15",
    summary: "浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。",
    content: `
      <p>
        <strong>大会时间：</strong>2022年12月16-18日
      </p>
      <p>
        <strong>大会地点：</strong>中国·哈尔滨
      </p>
      <p>
        <strong>收录检索：</strong>EI Compendex，Scopus
      </p>
      <p>
        <strong>大会官网：</strong>www.ic-iotml.org
      </p>
      <p>
        <strong>投稿详情：</strong><a href="https://www.ais.cn/attendees/index/RN2QFY">https://www.ais.cn/attendees/index/RN2QFY</a>
      </p>
      <p>
        <strong>投稿系统：</strong><a href="https://www.ais.cn/attendees/paperSubmit/RN2QFY">https://www.ais.cn/attendees/paperSubmit/RN2QFY</a>
      </p>
      <p>
        <img class="notice-img" src="/images/notice/notice31a.jpg" alt="">
      </p>
    `,
    title_en: "City Science and Social Computing Laboratory recruits 2023 Ph.D/Master students",
    author_en: "Xiaoxue Yang",
    summary_en: "The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.",
    content_en: "<p>&nbsp;&nbsp;&nbsp;&nbsp; The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results..</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong> The key research directions of the laboratory include urban computing, big data, network science, computational social science, etc. There are more than 40 doctoral students, master students and senior undergraduates. Details are as follows:</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp; 1. The person in charge of the laboratory is Prof. Xiangjie Kong, the Young Canal Scholar of Zhejiang University of Technology, CCF distinguished member,and a senior member of IEEE; the chief expert is Prof. Guojiang Shen, the deputy dean of the School of Computer, Hangzhou Qianjiang Distinguished Expert, and the director of the Institute of Computer Intelligent System of Zhejiang University of Technology.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The core tutor team is composed of 5 outstanding young and middle-aged teachers and an overseas part-time professor, including 3 professors and 3 associate professors. Four of them are born in the 80s. Zero generation gap in communication, barrier-free communication!</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 3. Laboratory graduates mainly work in well-known domestic enterprises and institutions (Alibaba, Baidu, ByteDance, Tencent, Huawei, Xiaomi, etc.), or study at home and abroad (such as Tsinghua University, Zhejiang University, City University of Hong Kong, etc.) .</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 4. Diversified, international laboratory! The laboratory has established good cooperative relations with many internationally renowned universities and well-known scholars such as the United States, Canada, Australia, and Japan.</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5. In recent years, members of the laboratory have published more than 100 papers in internationally renowned conferences and journals related to several major research fields (such as WWW, IEEE series, ACM series, etc.), and have obtained a number of related patents. Please refer to the laboratory for details website.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Five reasons why we can’t refuse the Urban Science and Social Computing Laboratory (Why are we different^_^):</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;1. The official working language of the laboratory is English; English level is up! up! up!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The OR document master of the technical god, the OR life expert of scientific research, there is always one suitable for you; the ratio of men and women in the laboratory is reasonable, and the men and women are matched, and the study is not tired!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;3. The laboratory atmosphere of group , friends , love, and laboratory activities of abundance rich multi color , we are a love each other extended family!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;4. The laboratory has a comfortable working environment and sufficient funds for scientific research. The \"Outstanding Contribution Award\" is awarded every year. (Up to 10,000 yuan!!!)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;5. Significant improvement in programming ability and algorithm ability; master the principles and implementation of cutting-edge algorithms in the current hot artificial intelligence and deep learning fields, and become more competitive after joining the work in the future!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>For more details, please visit the homepage of the laboratory: <a href=\"http://www.cssclab.cn\"> http://www.cssclab.cn/</a>.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The laboratory plans to recruit 2022 Ph.D/Master students. If you are interested, please send your resume to xjkong@ieee.org (the elegant and handsome teacher Kong Xiangjie). Welcome to contact us.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Urban Science and Social Computing Laboratory hopes to have someone like you, such as the refreshing wind in the mountains and the warm sunshine in the Xixi Wetland, from early morning to night, from the mountains to the study, as long as it is you in the end.</strong></p>",
    top: false,
    hide_en:true,
    hide_cn:true,
  },
  {
    id: 30,
    title: "城市科学与社会计算实验室招收2023级博士/硕士研究生",
    author: "杨筱雪",
    create_date: "2022-07-02",
    summary: "浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。",
    content: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室的重点研究方向包括城市计算、大数据、网络科学、计算社会科学等。现有博士生、硕士生和高年级本科生共计40余人。具体情况如下：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室负责人为孔祥杰教授、浙江工业大学运河青年学者、CCF杰出会员、IEEE高级会员；首席专家为沈国江教授、计算机学院副院长、杭州市钱江特聘专家、浙江工业大学计算机智能系统研究所所长。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 核心导师团队由5名优秀的中青年教师和一名海外兼职教授组成，包括3名教授和3名副教授。其中4人为80后。交流零代沟，沟通无障碍！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 实验室毕业生主要就职于国内知名企事业单位（阿里巴巴、百度、字节跳动、腾讯、华为、小米等），或在国内外深造（如清华大学、浙江大学、香港城市大学等）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 多元化，国际化实验室！实验室与美国、加拿大、澳大利亚、日本等许多国际知名高校和著名学者建立了良好的合作关系。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 近年来，实验室成员在几个主要研究领域相关的国际知名会议和期刊（如WWW、IEEE系列、ACM系列等）发表百余篇论文，并取得了多项相关专利，详情见实验室网站。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>无法拒绝城市科学与社会计算实验室的五大理由(为何我们与众不同^_^)：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室官方工作语言为英文；英语水平up！up！up！。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 技术大神OR文档高手，科研大拿OR生活达人，总有一款适合你；实验室男女比例合理，男女搭配，学习不累！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 团（huan）结（le）友（dou）爱（bi）的实验室氛围，丰（chi）富（he）多（wan）彩（le）的实验室活动，我们是一个相亲相爱的大家庭！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 实验室工作环境舒适，科研经费充足，每年颁发“杰出贡献奖”。（最多可达10000元！！！）</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.编程能力和算法能力的大幅提升；掌握当下火热的人工智能和深度学习领域中前沿算法的原理和实现，在未来参加工作后更有竞争力！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>想要更多细节，欢迎登陆实验室主页： <a href=\"http://www.cssclab.cn\" > http://www.cssclab.cn/</a>。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室拟招收2022级博士/硕士研究生。如有兴趣，请发送简历到xjkong@ieee.org (优雅帅气的孔祥杰老师)。欢迎咨询联系 。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>城市科学与社会计算实验室希望有个如你一般的人，如小和山间清爽的风，如西溪湿地温暖的阳光，从清晨到夜晚，由山野到书房，只要最后是你，就好。</strong></p>",
    title_en: "City Science and Social Computing Laboratory recruits 2023 Ph.D/Master students",
    author_en: "Xiaoxue Yang",
    summary_en: "The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.",
    content_en: "<p>&nbsp;&nbsp;&nbsp;&nbsp; The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results..</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong> The key research directions of the laboratory include urban computing, big data, network science, computational social science, etc. There are more than 40 doctoral students, master students and senior undergraduates. Details are as follows:</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp; 1. The person in charge of the laboratory is Prof. Xiangjie Kong, the Young Canal Scholar of Zhejiang University of Technology, CCF distinguished member,and a senior member of IEEE; the chief expert is Prof. Guojiang Shen, the deputy dean of the School of Computer, Hangzhou Qianjiang Distinguished Expert, and the director of the Institute of Computer Intelligent System of Zhejiang University of Technology.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The core tutor team is composed of 5 outstanding young and middle-aged teachers and an overseas part-time professor, including 3 professors and 3 associate professors. Four of them are born in the 80s. Zero generation gap in communication, barrier-free communication!</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 3. Laboratory graduates mainly work in well-known domestic enterprises and institutions (Alibaba, Baidu, ByteDance, Tencent, Huawei, Xiaomi, etc.), or study at home and abroad (such as Tsinghua University, Zhejiang University, City University of Hong Kong, etc.) .</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 4. Diversified, international laboratory! The laboratory has established good cooperative relations with many internationally renowned universities and well-known scholars such as the United States, Canada, Australia, and Japan.</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5. In recent years, members of the laboratory have published more than 100 papers in internationally renowned conferences and journals related to several major research fields (such as WWW, IEEE series, ACM series, etc.), and have obtained a number of related patents. Please refer to the laboratory for details website.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Five reasons why we can’t refuse the Urban Science and Social Computing Laboratory (Why are we different^_^):</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;1. The official working language of the laboratory is English; English level is up! up! up!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The OR document master of the technical god, the OR life expert of scientific research, there is always one suitable for you; the ratio of men and women in the laboratory is reasonable, and the men and women are matched, and the study is not tired!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;3. The laboratory atmosphere of group , friends , love, and laboratory activities of abundance rich multi color , we are a love each other extended family!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;4. The laboratory has a comfortable working environment and sufficient funds for scientific research. The \"Outstanding Contribution Award\" is awarded every year. (Up to 10,000 yuan!!!)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;5. Significant improvement in programming ability and algorithm ability; master the principles and implementation of cutting-edge algorithms in the current hot artificial intelligence and deep learning fields, and become more competitive after joining the work in the future!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>For more details, please visit the homepage of the laboratory: <a href=\"http://www.cssclab.cn\"> http://www.cssclab.cn/</a>.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The laboratory plans to recruit 2022 Ph.D/Master students. If you are interested, please send your resume to xjkong@ieee.org (the elegant and handsome teacher Kong Xiangjie). Welcome to contact us.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Urban Science and Social Computing Laboratory hopes to have someone like you, such as the refreshing wind in the mountains and the warm sunshine in the Xixi Wetland, from early morning to night, from the mountains to the study, as long as it is you in the end.</strong></p>",
    top: false,
  },
  {
    id: 29,
    title: "城市科学与社会计算实验室招收2022级博士/硕士研究生",
    author: "卞纪新",
    create_date: "2021-11-02",
    summary: "浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。",
    content: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室的重点研究方向包括城市计算、大数据、网络科学、计算社会科学等。现有博士生、硕士生和高年级本科生共计40余人。具体情况如下：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室负责人为孔祥杰教授、浙江工业大学运河青年学者、CCF杰出会员、IEEE高级会员；首席专家为沈国江教授、计算机学院副院长、杭州市钱江特聘专家、浙江工业大学计算机智能系统研究所所长。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 核心导师团队由5名优秀的中青年教师和一名海外兼职教授组成，包括3名教授和3名副教授。其中4人为80后。交流零代沟，沟通无障碍！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 实验室毕业生主要就职于国内知名企事业单位（阿里巴巴、百度、字节跳动、腾讯、华为、小米等），或在国内外深造（如清华大学、浙江大学、香港城市大学等）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 多元化，国际化实验室！实验室与美国、加拿大、澳大利亚、日本等许多国际知名高校和著名学者建立了良好的合作关系。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 近年来，实验室成员在几个主要研究领域相关的国际知名会议和期刊（如WWW、IEEE系列、ACM系列等）发表百余篇论文，并取得了多项相关专利，详情见实验室网站。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>无法拒绝城市科学与社会计算实验室的五大理由(为何我们与众不同^_^)：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室官方工作语言为英文；英语水平up！up！up！。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 技术大神OR文档高手，科研大拿OR生活达人，总有一款适合你；实验室男女比例合理，男女搭配，学习不累！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 团（huan）结（le）友（dou）爱（bi）的实验室氛围，丰（chi）富（he）多（wan）彩（le）的实验室活动，我们是一个相亲相爱的大家庭！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 实验室工作环境舒适，科研经费充足，每年颁发“杰出贡献奖”。（最多可达10000元！！！）</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.编程能力和算法能力的大幅提升；掌握当下火热的人工智能和深度学习领域中前沿算法的原理和实现，在未来参加工作后更有竞争力！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>想要更多细节，欢迎登陆实验室主页： <a href=\"http://www.cssclab.cn\" > http://www.cssclab.cn/</a>。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室拟招收2022级博士/硕士研究生。如有兴趣，请发送简历到xjkong@ieee.org (优雅帅气的孔祥杰老师)。欢迎咨询联系 。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>城市科学与社会计算实验室希望有个如你一般的人，如小和山间清爽的风，如西溪湿地温暖的阳光，从清晨到夜晚，由山野到书房，只要最后是你，就好。</strong></p>",
    title_en: "City Science and Social Computing Laboratory recruits 2022 Ph.D/Master students",
    author_en: "Jixin Bian",
    summary_en: "The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.",
    content_en: "<p>&nbsp;&nbsp;&nbsp;&nbsp; The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results..</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong> The key research directions of the laboratory include urban computing, big data, network science, computational social science, etc. There are more than 40 doctoral students, master students and senior undergraduates. Details are as follows:</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp; 1. The person in charge of the laboratory is Prof. Xiangjie Kong, the Young Canal Scholar of Zhejiang University of Technology, CCF distinguished member,and a senior member of IEEE; the chief expert is Prof. Guojiang Shen, the deputy dean of the School of Computer, Hangzhou Qianjiang Distinguished Expert, and the director of the Institute of Computer Intelligent System of Zhejiang University of Technology.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The core tutor team is composed of 5 outstanding young and middle-aged teachers and an overseas part-time professor, including 3 professors and 3 associate professors. Four of them are born in the 80s. Zero generation gap in communication, barrier-free communication!</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 3. Laboratory graduates mainly work in well-known domestic enterprises and institutions (Alibaba, Baidu, ByteDance, Tencent, Huawei, Xiaomi, etc.), or study at home and abroad (such as Tsinghua University, Zhejiang University, City University of Hong Kong, etc.) .</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 4. Diversified, international laboratory! The laboratory has established good cooperative relations with many internationally renowned universities and well-known scholars such as the United States, Canada, Australia, and Japan.</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5. In recent years, members of the laboratory have published more than 100 papers in internationally renowned conferences and journals related to several major research fields (such as WWW, IEEE series, ACM series, etc.), and have obtained a number of related patents. Please refer to the laboratory for details website.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Five reasons why we can’t refuse the Urban Science and Social Computing Laboratory (Why are we different^_^):</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;1. The official working language of the laboratory is English; English level is up! up! up!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The OR document master of the technical god, the OR life expert of scientific research, there is always one suitable for you; the ratio of men and women in the laboratory is reasonable, and the men and women are matched, and the study is not tired!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;3. The laboratory atmosphere of group , friends , love, and laboratory activities of abundance rich multi color , we are a love each other extended family!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;4. The laboratory has a comfortable working environment and sufficient funds for scientific research. The \"Outstanding Contribution Award\" is awarded every year. (Up to 10,000 yuan!!!)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;5. Significant improvement in programming ability and algorithm ability; master the principles and implementation of cutting-edge algorithms in the current hot artificial intelligence and deep learning fields, and become more competitive after joining the work in the future!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>For more details, please visit the homepage of the laboratory: <a href=\"http://www.cssclab.cn\"> http://www.cssclab.cn/</a>.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The laboratory plans to recruit 2022 Ph.D/Master students. If you are interested, please send your resume to xjkong@ieee.org (the elegant and handsome teacher Kong Xiangjie). Welcome to contact us.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Urban Science and Social Computing Laboratory hopes to have someone like you, such as the refreshing wind in the mountains and the warm sunshine in the Xixi Wetland, from early morning to night, from the mountains to the study, as long as it is you in the end.</strong></p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  },
  {
    id: 28,
    title: "青年科学家沙龙—AI赋能的城市计算活动预告",
    author: "杨筱雪",
    create_date: "2021-11-02",
    summary: "沙龙主题：AI赋能的城市计算",
    content: `<p><strong>报告时间：</strong></p>
              <p>2021年11月12日（周五），下午1：30</p>
              <p><strong>报告地点：</strong></p>
              <p>屏峰校区计算机大楼411</p>
              <p><strong>沙龙组织：</strong></p>
              <p>主办单位：浙江工业大学科协、科研院（工研院、军工院）</p>
              <p>承办单位：浙江工业大学计算机科学与技术学院</p>
              <p><strong>主讲信息：</strong></p>
              <div>
                <img class="salon-img" src="/images/notice/notice28a.jpg" alt="">
                <label for="">王志波</label>
                <p><strong>主讲题目：</strong>让分享更安全—抗压缩“隐身衣”</p>
                <p><strong>嘉宾简介：</strong>浙江大学计算机学院/网络空间安全学院教授，国家优秀青年科学基金获得者。2007年毕业于浙江大学信息学院自动化专业，获学士学位；2014年毕业于美国田纳西大学诺克斯维尔分校，获计算机工程博士学位。研究方向包括物联网、人工智能安全、网络安全与隐私保护，发表CCF A类论文40余篇，七篇论文入选ESI高被引论文。荣获IEEE HPCC 2019杰出论文奖、电子学会优秀科技工作者和先进工作者。主持与参与了多项国家自然科学基金、科技创新2030-新一代人工智能重大项目、973计划等国家级项目，并与华为、蚂蚁金服、阿里达摩院等公司开展多项合作研发项目，受邀担任INFOCOM、ICDCS、AAAI等多个国际会议的大会程序委员。现为IEEE/CCF/电子学会高级会员，CCF物联网专委会常委、CCF大数据专家委员会委员和电子学会物联网青年专技组常委。</p>
              </div>
              <div>
                  <img class="salon-img" src="/images/notice/notice28b.jpg" alt="">
                  <label for="">吴超</label>
                  <p><strong>主讲题目：</strong>人工智能时代的数据要素化</p>
                  <p><strong>嘉宾简介：</strong>浙江大学公共管理学院长聘副教授，人工智能协同创新中心研究员，博士生导师，计算社会科学研究中心主任，伦敦帝国理工学院计算机系荣誉研究员。研究方向为联邦学习和分布式建模、数据隐私保护和数据定价、计算社会科学等。在AAAI、ICCV、KDD等国际会议和期刊上发表论文60余篇，主持包括国家自然科学基金重点类项目在内的多个科研项目，并获得三星全球创新奖等奖项。</p>
              </div>
              <div>
                  <img class="salon-img" src="/images/notice/notice28c.jpg" alt="">
                  <label for="">张建辉</label>
                  <p><strong>主讲题目：</strong>动态能量采集网络中提高吞吐量的时间扩展方法</p>
                  <p><strong>嘉宾简介：</strong>博士、教授、院长助理、物联网团队负责人。2008年浙江大学获得博士学位，同年在杭州电子科技大学参加工作。近几年主持国家自然科学基金青年基金和面向项目各1项，省科技厅科技计划项目1项，核心成员参与国家自然科学基金重大，面上项目等多项；在国内外顶级期刊和会议等上发表论文50余篇。2018年被所在单位评为“十佳导师”。所带领团队由5名骨干教师及40余名研究生组成，在物联网、机器学习及博弈论等方面发表学术论文一百余篇。获得浙江省科学技术奖三等奖，国家教学成果奖二等奖，浙江省教学成果奖一等奖等奖项多项。编写教材2部，申请发明专利20余项，并已获得11项授权。其中近5年来，主持国家、省部级及军工项目等项目总经费800余万；指导研究生获得国家奖学金4人次，省优秀毕业研究生1名，获得诺基亚奖学金、研究生科研创新基金等各类学生奖项和项目10余项。2018年被所在单位评为“十佳导学团队”。</p>
              </div>
              <div>
                  <img class="salon-img" src="/images/notice/notice28d.jpg" alt="">
                  <label for="">曹斌</label>
                  <p><strong>主讲题目：</strong>提升AI应用效能：以高效性和有效性视角</p>
                  <p><strong>嘉宾简介：</strong>浙江工业大学计算机学院副教授，博士生导师。浙江大学计算机博士毕业，香港科技大学/华为诺亚方舟联合博士后，美国明尼苏达大学公派联合培养博士。长期致力于时空大数据、过程数据、文本等结构与非结构化数据的相关查询优化与挖掘算法研究工作。相关研究成果录用和发表在IEEE TKDE、IEEE TCYB、IEEE TSC、ACM TOIT、Geoinformatica、WWWJ、ACM CIKM等国内外权威期刊和会议上40余篇。2015年获得CCF-腾讯犀牛鸟卓创奖。</p>
              </div>
              <div>
                  <img class="salon-img" src="/images/notice/notice28e.jpg" alt="">
                  <label for="">史秀纺</label>
                  <p><strong>主讲题目：</strong>协作定位中的位置隐私保护</p>
                  <p><strong>嘉宾简介：</strong>浙江工业大学校聘副教授，2016年9月毕业于浙江大学，获得工学博士学位。2016年10月至2018年12月在浙江大学从事博士后研究工作。2014年12月至2015年12月在澳大利亚悉尼大学做访问研究。主要研究方向包括：无线定位，目标跟踪，安全与隐私保护，物联网等。主持国家自然科学基金青年项目1项，浙江省自然科学基金探索项目1项，中国博士后科学基金1项，并参与多项国家自然科学基金重大、重点项目。发表高水平论文30余篇，包括IEEE Transactions on Signal Processing, IEEE Communications Magazine, IEEE Transactions on Wireless Communications等顶级期刊。</p>
              </div>
              <div>
                  <img class="salon-img" src="/images/notice/notice28f.jpg" alt="">
                  <label for="">孔祥杰</label>
                  <p><strong>主讲题目：</strong>联邦学习赋能的城市计算</p>
                  <p><strong>嘉宾简介：</strong>浙江工业大学计算机科学与技术学院教授，博士生导师，浙江省杰出青年基金获得者，浙江工业大学运河青年学者，城市科学与社会计算实验室创始人兼主任。主要研究兴趣包括城市计算、数据科学、网络科学等。先后担任Wireless Communications and Computing等国际SCI期刊的编委。担任IEEE BigData等多个国际会议Co-Chair或TPC member。在IEEE TKDE, WWW等国际期刊或会议发表/录用论文150多篇。以第一作者发表于IEEE TVT的论文获得2020年IEEE车载技术协会（VTS）地面交通最佳论文奖。2016和2017年两次以第一作者获得辽宁省自然科学学术成果奖一等奖。入选斯坦福全球前2%顶尖科学家榜单-2019年度科学影响力排行榜。研究工作被Nature Index、科学网等媒体广泛报道。现为CCF杰出会员、IEEE高级会员、美国科学研究荣誉协会会员（Sigma Xi）、中国自动化学会平行智能专业委员会委员、中国计算机学会信息系统专业委员会委员、中国计算机学会普适计算专业委员会委员。</p>
              </div>`,
    title_en: "Announcement of Young Scientist Salon—AI-enabled Urban Computing Activities",
    author_en: "Xiaoxue Yang",
    summary_en: "AI-enabled city computing",
    content_en: `
                <p><strong>Report time:</strong></p>
                <p>November 12, 2021 1:30 PM</p>
                <p><strong>Report location:</strong></p>
                <p>Computer Building A411</p>
                <p><strong>Salon organization：</strong></p>
                <p>Sponsor: Zhejiang University of Technology Association for Science and Technology, Research Institute (Institute of Industrial Technology, Institute of Military Industry)</p>
                <p>Organizer: School of Computer Science and Technology, Zhejiang University of Technology</p>
                <p><strong>Speaker information:</strong></p>
      <div>
          <img class="salon-img" src="/images/notice/notice28a.jpg" alt="">
          <label for="">Zhibo Wang</label>
          <p><strong>Topic:</strong>Making Sharing Safer-Anti-compression "Invisibility Cloak"</p>
          <p><strong>Guest profile:</strong>Professor of the School of Computer Science/School of Cyberspace Security, Zhejiang University, winner of the National Science Fund for Outstanding Youth. In 2007, he graduated from Zhejiang University School of Information with a bachelor's degree in automation; in 2014, he graduated from the University of Tennessee, Knoxville, with a Ph.D. in computer engineering. Research directions include Internet of Things, artificial intelligence security, network security and privacy protection. He has published more than 40 CCF-A papers, and seven papers have been selected as ESI Highly Cited Papers. Won the IEEE HPCC 2019 Outstanding Paper Award, Outstanding Scientific and Technical Worker and Advanced Worker of the Institute of Electronics. Presided over and participated in a number of national projects such as the National Natural Science Foundation of China, Science and Technology Innovation 2030-New Generation Artificial Intelligence Major Project, 973 Plan, etc., and carried out a number of cooperative research and development projects with Huawei, Ant Financial, Ali Dharma Academy and other companies. Invited to serve as conference program committee member of many international conferences such as INFOCOM, ICDCS, AAAI, etc. He is currently a senior member of IEEE/CCF/The Institute of Electronics, a member of the Standing Committee of the CCF Internet of Things Special Committee, a member of the CCF Big Data Expert Committee, and a member of the Standing Committee of the Young Professionals Group of the Institute of Electronics.</p>
      </div>
      <div>
        <img class="salon-img" src="/images/notice/notice28b.jpg" alt="">
        <label for="">Chao Wu</label>
        <p><strong>Topic:</strong>Data elementization in the era of artificial intelligence</p>
        <p><strong>Guest profile:</strong>Associate Professor of the Dean of the School of Public Administration of Zhejiang University, researcher of the Artificial Intelligence Collaborative Innovation Center, doctoral supervisor, director of the Center for Computational Social Science Research, and honorary researcher of the Department of Computer Science at Imperial College London. Research directions include federated learning and distributed modeling, data privacy protection and data pricing, and computational social sciences. He has published more than 60 papers in AAAI, ICCV, KDD and other international conferences and journals, presided over a number of scientific research projects including key projects of the National Natural Science Foundation of China, and won the Samsung Global Innovation Award and other awards.</p>
      </div>
      <div>
          <img class="salon-img" src="/images/notice/notice28c.jpg" alt="">
          <label for="">Jianhui Zhang</label>
          <p><strong>Topic:</strong>Time extension method to improve throughput in dynamic energy harvesting network</p>
          <p><strong>Guest profile:</strong>PhD, professor, assistant to the dean, head of the Internet of Things team. In 2008, he received his Ph.D degree from Zhejiang University, and started work at Hangzhou Dianzi University in the same year. In recent years, presided over 1 National Natural Science Foundation Youth Fund and 1 project-oriented project, 1 Provincial Science and Technology Department Science and Technology Plan Project, core members participated in the National Natural Science Foundation of China's major, general projects, etc.; in top domestic and foreign journals and conferences, etc. More than 50 papers have been published. In 2018, he was named "Top Ten Mentors" by his unit. The team led by 5 key teachers and more than 40 graduate students has published more than 100 academic papers on the Internet of Things, machine learning and game theory. Won the third prize of Zhejiang Science and Technology Award, the second prize of National Teaching Achievement Award, and the first prize of Zhejiang Teaching Achievement Award. Compile 2 textbooks, apply for more than 20 invention patents, and have obtained 11 authorizations. In the past five years, he has hosted national, provincial and military projects with a total funding of more than 8 million; guided graduate students to win 4 national scholarships, 1 provincial outstanding graduate student, and received various student awards such as Nokia scholarships and graduate research and innovation funds. And more than 10 items. In 2018, he was rated as one of the "Top Ten Guiding Teams" by his unit.</p>
      </div>
      <div>
          <img class="salon-img" src="/images/notice/notice28d.jpg" alt="">
          <label for="">Bin Cao</label>
          <p><strong>Topic:</strong>Improving the effectiveness of AI applications: from the perspective of efficiency and effectiveness</p>
          <p><strong>Guest profile:</strong>associate professor and doctoral supervisor of the School of Computer Science, Zhejiang University of Technology. Graduated from Zhejiang University with a PhD in Computer Science, a joint postdoctoral fellow from Hong Kong University of Science and Technology/Huawei Noah's Ark, and a joint doctoral degree from the University of Minnesota in the United States. He has long been committed to research on related query optimization and mining algorithms for structured and unstructured data such as spatio-temporal big data, process data, and text. Relevant research results were accepted and published in more than 40 authoritative journals and conferences at home and abroad, such as IEEE TKDE, IEEE TCYB, IEEE TSC, ACM TOIT, Geoinformatica, WWWJ, ACM CIKM, etc. In 2015, he won the CCF-Tencent Rhino Bird Zhuo Chuang Award.</p>
      </div>
      <div>
          <img class="salon-img" src="/images/notice/notice28e.jpg" alt="">
          <label for="">Xiufang Shi</label>
          <p><strong>Topic:</strong> Location privacy protection in collaborative positioning</p>
          <p><strong>Guest profile:</strong>Associate professor hired by Zhejiang University of Technology, graduated from Zhejiang University in September 2016 with a doctorate in engineering. From October 2016 to December 2018, he was engaged in postdoctoral research at Zhejiang University. From December 2014 to December 2015, he did visiting research at the University of Sydney, Australia. The main research directions include: wireless positioning, target tracking, security and privacy protection, Internet of Things, etc. Presided over 1 National Natural Science Foundation Youth Project, 1 Zhejiang Natural Science Foundation Exploration Project, 1 China Postdoctoral Science Foundation, and participated in a number of major and key projects of the National Natural Science Foundation of China. Published more than 30 high-level papers, including top journals such as IEEE Transactions on Signal Processing, IEEE Communications Magazine, IEEE Transactions on Wireless Communications.</p>
      </div>
      <div>
          <img class="salon-img" src="/images/notice/notice28f.jpg" alt="">
          <label for="">Xiangjie Kong</label>
          <p><strong>Topic:</strong>Urban computing empowered by federated learning</p>
          <p><strong>Guest profile:</strong>Professor of the School of Computer Science and Technology, Zhejiang University of Technology, doctoral supervisor, winner of the Zhejiang Outstanding Youth Fund, Young Scholar of the Canal of Zhejiang University of Technology, founder and director of the Urban Science and Social Computing Laboratory. His main research interests include urban computing, data science, network science, etc. He has served as an editorial board member of International SCI journals such as Wireless Communications and Computing. Served as Co-Chair or TPC member of many international conferences such as IEEE BigData. More than 150 papers have been published/accepted in international journals or conferences such as IEEE TKDE, WWW, etc. The first author's paper published in IEEE TVT won the 2020 IEEE Vehicle Technology Society (VTS) Ground Transportation Best Paper Award. In 2016 and 2017, he won the first prize of the Liaoning Provincial Natural Science Academic Achievement Award as the first author twice. Selected in the Stanford Global Top 2% Top Scientists-2019 Science Impact Ranking. The research work has been widely reported by Nature Index, Science Net and other media. He is currently an outstanding member of CCF, a senior member of IEEE, a member of Sigma Xi, a member of the Parallel Intelligence Professional Committee of the Chinese Society of Automation, a member of the Information System Professional Committee of the Chinese Computer Society, and a member of the Pervasive Computing Professional Committee of the Chinese Computer Society.</p>
      </div>
    `,
    top: false,
    hide_cn:true,
    hide_en:true
  },
  {
    id: 27,
    title: "2021年CSSC小组第18次研讨会",
    author: "杨筱雪",
    create_date: "2021-11-02",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年10月22日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.张艳</p><p>2.熊海涛</p><p>3.赵振振</p><p><strong>报告主题：</strong></p><p>1.张艳作题为“基于隐私保护的风险驾驶行为预估”的报告</p><p>2.熊海涛作题为“基于用户个性化生活模式的POI推荐方法”的报告</p><p>3.赵振振作最新研究进展报告</p>",
    title_en: "The 18th seminar of CSSC group in 2021",
    author_en: "Xiaoxue Yang",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>October 22, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yan Zhang</p><p>2.Haitao Xiong</p><p>3.Zhenzhen Zhao</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  },
  {
    id: 26,
    title: "2021年CSSC小组第17次研讨会",
    author: "杨筱雪",
    create_date: "2021-11-02",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年10月08日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.卞纪新</p><p>2.徐翼飞</p><p><strong>报告主题：</strong></p><p>1.卞纪新作题为“Pre-training Context and Time Aware Location Embeddings from Spatial-Temporal Trajectories for User Next Location Prediction”的报告</p><p>2.徐翼飞作题为“房地产潜在客户画像”的实验进展报告</p>",
    title_en: "The 17th seminar of CSSC group in 2021",
    author_en: "Xiaoxue Yang",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>October 08, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Nali Liu</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  },
  {
    id: 25,
    title: "2021年CSSC小组第16次研讨会",
    author: "杨筱雪",
    create_date: "2021-11-02",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年9月24日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.许敏皓</p><p><strong>报告主题：</strong></p><p>1.沈阳作题为“GLOM——transformer之后的一种通用认识结构”的报告</p><p>2.许敏皓作题为“基于混合结构数据的房屋用户画像建模”的报告</p>",
    title_en: "The 16th seminar of CSSC group in 2021",
    author_en: "Xiaoxue Yang",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>September 24, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Nali Liu</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>",
    top: false,
    hide_cn: true,
    hide_en:true
  },
  {
    id: 24,
    title: "2021年CSSC小组第15次研讨会",
    author: "卞纪新",
    create_date: "2021-06-09",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年6月9日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.刘娜利</p><p>2.熊海涛</p><p><strong>报告主题：</strong></p><p>1.刘娜利作题为“不完全时间序列聚类的学习表示”的报告</p><p>2.熊海涛作题为“人类流动的普遍访问规律”的报告</p><p><img src=\"/images/notice//notice24a.jpg\" /> </p><p><img src=\"/images/notice/notice24b.jpg\" /></p>",
    title_en: "The 15th seminar of CSSC group in 2021",
    author_en: "Jixin Bian",
    summary_en: "Report Paper: “Learning Representations for Incomplete Time Series Clustering”; “The universal visitation law of human mobility”.",
    content_en: "<p><strong>Report time:</strong></p><p>June 9, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Nali Liu</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p><p><img src=\"/images/notice/notice24a.jpg\" /></p><p><img src=\"/images/notice/notice24b.jpg\" /></p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  },
  {
    id: 23,
    title: "2021年CSSC小组第14次研讨会",
    author: "季展豪",
    create_date: "2021-06-02",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年6月2日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.张艳</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 14th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>June 2, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Shen</p><p>2.Yan Zhang</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  },
  {
    id: 22,
    title: "2021年CSSC小组第13次研讨会",
    author: "季展豪",
    create_date: "2021-05-26",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年5月26日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.郦鹏飞</p><p>2.孔祥杰老师</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 13th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>May 26, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Pengfei Li</p><p>2.Xiangjie Kong</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 21,
    title: "2021年CSSC小组第12次研讨会",
    author: "季展豪",
    create_date: "2021-05-12",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年5月12日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.余凯峰</p><p>2.管林涛</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 12th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>May 12, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Kaifeng Yu</p><p>2.Lintao Guan</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 20,
    title: "2021年CSSC小组第11次研讨会",
    author: "季展豪",
    create_date: "2021-04-28",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年4月28日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.韩笑</p><p>2.舒文迪</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 11th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>April 28, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Xiao Han</p><p>2.Wendi Shu</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 19,
    title: "2021年CSSC小组第10次研讨会",
    author: "季展豪",
    create_date: "2021-04-21",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年4月21日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.陈洋</p><p>2.黄志强</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 10th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>April 21, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Chen</p><p>2.Zhiqiang Huang</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 18,
    title: "2021年CSSC小组第9次研讨会",
    author: "季展豪",
    create_date: "2021-04-14",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年4月14日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.管林涛</p><p>2.熊海涛</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 9th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>April 14, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Wentao Guan</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 17,
    title: "2021年CSSC小组第8次研讨会",
    author: "季展豪",
    create_date: "2021-04-07",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年4月7日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.李宁</p><p>2.周文峰</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 8th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>April 7, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Ning Li</p><p>2.Wenfeng Zhou</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 16,
    title: "2021年CSSC小组第7次研讨会",
    author: "季展豪",
    create_date: "2021-03-31",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年3月31日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.檀佳佳</p><p>2.季展豪</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 7th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>March 31, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Jiajia Tan</p><p>2.Zhanhao Ji</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 15,
    title: "2021年CSSC小组第6次研讨会",
    author: "季展豪",
    create_date: "2021-03-24",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年3月24日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.舒文迪</p><p>2.刘娜利</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 6th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>March 24, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Wendi Shu</p><p>2.Nali Liu</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 14,
    title: "2021年CSSC小组第5次研讨会",
    author: "季展豪",
    create_date: "2021-03-17",
    summary: "报告主题：毕业生大论文汇报及专著讨论",
    content: "<p><strong>报告时间：</strong></p><p>2021年3月18日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A318</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>报告主题：</strong></p><p>1.毕业生大论文汇报及专著讨论</p>",
    title_en: "The 5th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Graduate thesis report and monograph discussion",
    content_en: "<p><strong>Report time:</strong></p><p>March 18, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A318</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Theme:</strong></p><p>1. Graduate thesis report and monograph discussion</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 13,
    title: "2021年CSSC小组第4次研讨会",
    author: "季展豪",
    create_date: "2021-03-08",
    summary: "报告主题：毕业论文题目及大纲讨论；专著修改讨论；其他事宜",
    content: "<p><strong>报告时间：</strong></p><p>2021年3月3日，上午9：30</p><p><strong>报告地点：</strong></p><p>计算机楼A318</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>报告主题：</strong></p><p>1.毕业论文题目及大纲讨论（研三同学准备好word文档）</p><p>2.专著修改讨论</p><p>3.其他事宜</p><br/><p>注：研一同学有课程冲突可不参加</p>",
    title_en: "The 4th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Discussion on the title and outline of graduation thesis; discussion on the revision of monograph; other matters",
    content_en: "<p><strong>Report time:</strong></p><p>March 3, 2021, 9:30 am</p><p><strong>Report location:</strong></p><p>Computer Building A318</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Theme:</strong></p><p>1.Topic and outline discussion of graduation thesis(Grade 3 master prepares the word document)</p><p>2.Discussion on Revision of monograph</p><p>3.Other matters</p><br/><p>Note: Grade 1 master are not allowed to participate if they have course conflict</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 12,
    title: "2021年CSSC小组第3次研讨会",
    author: "季展豪",
    create_date: "2021-01-22",
    summary: "报告主题：《Spatio-temporal Graph Convolutional Network》相关文献分享；《Temporal Multi-Graph Convolutional Network for Traffic Flow Prediction》文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年1月22日，上午10：00-11：35</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.王锦梦</p><p>2.张艳</p><p><strong>报告主题：</strong></p><p>1.《Spatio-temporal Graph Convolutional Network》相关文献分享</p><p>2.《Temporal Multi-Graph Convolutional Network for Traffic Flow Prediction》文献分享</p>",
    title_en: "The 3th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: \"Spatio- temporal Graph Convolutional Network\" related literature sharing; Sharing paper about \"Temporal Multi - Graph Convolutional Network for Traffic Flow Prediction\".",
    content_en: "<p><strong>Report time:</strong></p><p>January 21, 2021, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.JinMeng Wang</p><p>2.Yan Zhang</p><p><strong>Theme:</strong></p><p>1.\"Spatio - temporal Graph Convolutional Network\" related literature sharing.</p><p>2.Sharing paper about \"Temporal Multi - Graph Convolutional Network for Traffic Flow Prediction\"</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 11,
    title: "2021年CSSC小组第2次研讨会",
    author: "季展豪",
    create_date: "2021-01-15",
    summary: "报告主题：个人研究介绍；《基于时空数据的交通流预测》文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年1月15日，上午10：00-11：35</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.卞纪新</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.《基于时空数据的交通流预测》文献分享</p>",
    title_en: "The 2th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Sharing paper about \"Traffic Flow Prediction Based on Temporal and Spatial Data\".",
    content_en: "<p><strong>Report time:</strong></p><p>January 15, 2021, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Shen</p><p>2.Jixin Bian</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Share paper about \"Traffic Flow Prediction Based on Temporal and Spatial Data\"</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 10,
    title: "2021年CSSC小组第1次研讨会",
    author: "季展豪",
    create_date: "2021-01-08",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2021年1月8日，上午10：00-11：35</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.陈洋</p><p>2.郦鹏飞</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 1th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>January 8, 2021, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Chen</p><p>2.Pengfei Li</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 9,
    title: "2020年CSSC小组第18次研讨会",
    author: "季展豪",
    create_date: "2020-12-25",
    summary: "报告主题：演化数据中异常检测的研究进展；对比自监督学习。",
    content: "<p><strong>报告时间：</strong></p><p>2020年12月25日，上午10：00-11：35 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.朱秉</p><p>2.李宁</p><p><strong>报告主题：</strong></p><p>1.演化数据中异常检测的研究进展</p><p>2.对比自监督学习</p>",
    title_en: "The 18th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: A Survey on Anomaly detection in Evolving Data;Contrastive Self-Supervised Learning.",
    content_en: "<p><strong>Report Time:</strong></p><p>December 25, 2020, 10:00-11:35 am</p><p><strong>Report Location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter:</strong></p><p>1.Bing Zhu</p><p>2.Ning Li</p><p><strong>Theme:</strong></p><p>1.A Survey on Anomaly detection in Evolving Data</p><p>2.Contrastive Self-Supervised Learning</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 8,
    title: "2020年CSSC小组第17次研讨会",
    author: "季展豪",
    create_date: "2020-12-17",
    summary: "报告主题：香港大学交换生经历分享；研究方向选择与论文写作技巧分享。",
    content: "<p><strong>报告时间：</strong></p><p>2020年12月17日，上午10：00-11：35 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.韩笑</p><p>2.孔祥杰教授</p><p><strong>报告主题：</strong></p><p>1.香港大学交换生经历分享</p><p>2.研究方向选择与论文写作技巧分享</p>",
    title_en: "The 17th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Exchange student experience of the University of Hong Kong; Research direction selection and essay writing skills sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>December 17, 2020, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Xiao Han</p><p>2.Prof Xiangjie Kong</p><p><strong>Theme:</strong></p><p>1.Exchange student experience of the University of Hong Kong.</p><p>2.Research direction selection and essay writing skills sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 7,
    title: "2020年CSSC小组第16次研讨会",
    author: "季展豪",
    create_date: "2020-12-11",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: "<p><strong>报告时间：</strong></p><p>2020年12月11日，上午10：00-11：35 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.郭东岩教授</p><p>2.余凯峰</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 16th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: "<p><strong>Report time:</strong></p><p>December 11, 2020, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Dr. Dongyan Guo</p><p>2.Kaifeng Yu</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 6,
    title: "2020年CSSC小组第10次研讨会",
    author: "季展豪",
    create_date: "2020-10-29",
    summary: "报告主题：对非均匀密度分布信息的进一步研究；基于时空轨迹的高效可疑人群检测。",
    content: "<p><strong>报告时间：</strong></p><p>2020年10月29日，下午13：30-15：00 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>赵振振</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.卞纪新</p><p><strong>报告主题：</strong></p><p>1.对非均匀密度分布信息的进一步研究</p><p>2.基于时空轨迹的高效可疑人群检测</p>",
    title_en: "The 10th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en: "Report Subject: Further research on non-uniform density distribution information; efficient suspicious crowd detection based on spatiotemporal trajectory.",
    content_en: "<p><strong>Report time:</strong></p><p>October 29, 2020 13:30-15:00 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Zhenzhen Zhao</p><p><strong>Reporter :</strong></p><p>1.Yang Shen</p><p>2.Jixian Bian</p><p><strong>Theme:</strong></p><p>1.Making progress in information distribution of non-uniform density.</p><p>2.Efficient Suspected Infected Crowds Detection Based on Spatio-Temporal Trajectories</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 5,
    title: "城市科学与社会计算实验室招收2021级推免生",
    author: "朱秉",
    create_date: "2020-09-23",
    summary: "浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。",
    content: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 浙江工业大学城市科学与社会计算实验室是计算机学院高水平研究团队，依托浙江省可视媒体智能处理技术重点实验室，开展以实际或未来应用需求为导向、世界级、学科交叉性前沿研究。实验室一直致力于培养具有国际视野的优秀人才，鼓励科研合作，注重成果的原创性与现实价值。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室的重点研究方向包括城市计算、大数据、网络科学、计算社会科学等。现有博士生、硕士生和高年级本科生共计40余人。具体情况如下：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室负责人为孔祥杰教授、浙江工业大学运河青年学者、IEEE高级会员；首席专家为沈国江教授、计算机学院副院长、杭州市钱江特聘专家、浙江工业大学计算机智能系统研究所所长。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 核心导师团队由5名优秀的中青年教师和一名海外兼职教授组成，包括3名教授和3名副教授。其中4人为80后。交流零代沟，沟通无障碍！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 实验室毕业生主要就职于国内知名企事业单位（阿里巴巴、百度、字节跳动、腾讯、华为、小米等），或在国内外深造（如清华大学、浙江大学、香港城市大学等）。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 多元化，国际化实验室！实验室与美国、加拿大、澳大利亚、日本等许多国际知名高校和著名学者建立了良好的合作关系。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 近年来，实验室成员在几个主要研究领域相关的国际知名会议和期刊（如WWW、IEEE系列、ACM系列等）发表百余篇论文，并取得了多项相关专利，详情见实验室网站。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>无法拒绝城市科学与社会计算实验室的五大理由(为何我们与众不同^_^)：</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 实验室官方工作语言为英文；英语水平up！up！up！。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 技术大神OR文档高手，科研大拿OR生活达人，总有一款适合你；实验室男女比例合理，男女搭配，学习不累！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 团（huan）结（le）友（dou）爱（bi）的实验室氛围，丰（chi）富（he）多（wan）彩（le）的实验室活动，我们是一个相亲相爱的大家庭！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 实验室工作环境舒适，科研经费充足，每年颁发“杰出贡献奖”。（最多可达10000元！！！）</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.编程能力和算法能力的大幅提升；掌握当下火热的人工智能和深度学习领域中前沿算法的原理和实现，在未来参加工作后更有竞争力！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>想要更多细节，欢迎登陆实验室主页： <a href=\"http://www.cssclab.cn\" > http://www.cssclab.cn/</a>。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>实验室拟招收2021年度推免生6-8名。如有兴趣，请发送简历到xjkong@ieee.org (优雅帅气的孔祥杰老师)。欢迎咨询联系 。</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>城市科学与社会计算实验室希望有个如你一般的人，如小和山间清爽的风，如西溪湿地温暖的阳光，从清晨到夜晚，由山野到书房，只要最后是你，就好。</strong></p>",
    title_en: "City Science and Social Computing Laboratory recruits 2021 graduates",
    author_en: "Bing Zhu",
    summary_en: "The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results.",
    content_en: "<p>&nbsp;&nbsp;&nbsp;&nbsp; The City Science and Social Computing Laboratory of Zhejiang University of Technology is a high-level research team of the School of Computer Science. Relying on the Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, it conducts world-class, interdisciplinary frontier research oriented by actual or future application needs. The laboratory has always been committed to cultivating outstanding talents with international perspectives, encouraging scientific research cooperation, and focusing on the originality and practical value of results..</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong> The key research directions of the laboratory include urban computing, big data, network science, computational social science, etc. There are more than 40 doctoral students, master students and senior undergraduates. Details are as follows:</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp; 1. The person in charge of the laboratory is Prof. Xiangjie Kong, the Young Canal Scholar of Zhejiang University of Technology, and a senior member of IEEE; the chief expert is Prof. Guojiang Shen, the deputy dean of the School of Computer, Hangzhou Qianjiang Distinguished Expert, and the director of the Institute of Computer Intelligent System of Zhejiang University of Technology.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The core tutor team is composed of 5 outstanding young and middle-aged teachers and an overseas part-time professor, including 3 professors and 3 associate professors. Four of them are born in the 80s. Zero generation gap in communication, barrier-free communication!</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 3. Laboratory graduates mainly work in well-known domestic enterprises and institutions (Alibaba, Baidu, ByteDance, Tencent, Huawei, Xiaomi, etc.), or study at home and abroad (such as Tsinghua University, Zhejiang University, City University of Hong Kong, etc.) .</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 4. Diversified, international laboratory! The laboratory has established good cooperative relations with many internationally renowned universities and well-known scholars such as the United States, Canada, Australia, and Japan.</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5. In recent years, members of the laboratory have published more than 100 papers in internationally renowned conferences and journals related to several major research fields (such as WWW, IEEE series, ACM series, etc.), and have obtained a number of related patents. Please refer to the laboratory for details website.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Five reasons why we can’t refuse the Urban Science and Social Computing Laboratory (Why are we different^_^):</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;1. The official working language of the laboratory is English; English level is up! up! up!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;2. The OR document master of the technical god, the OR life expert of scientific research, there is always one suitable for you; the ratio of men and women in the laboratory is reasonable, and the men and women are matched, and the study is not tired!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;3. The laboratory atmosphere of group , friends , love, and laboratory activities of abundance rich multi color , we are a love each other extended family!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;4. The laboratory has a comfortable working environment and sufficient funds for scientific research. The \"Outstanding Contribution Award\" is awarded every year. (Up to 10,000 yuan!!!)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;5. Significant improvement in programming ability and algorithm ability; master the principles and implementation of cutting-edge algorithms in the current hot artificial intelligence and deep learning fields, and become more competitive after joining the work in the future!</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>For more details, please visit the homepage of the laboratory: <a href=\"http://www.cssclab.cn\"> http://www.cssclab.cn/</a>.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The laboratory plans to recruit 6-8 exempt students in 2021. If you are interested, please send your resume to xjkong@ieee.org (the elegant and handsome teacher Kong Xiangjie). Welcome to contact us.</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Urban Science and Social Computing Laboratory hopes to have someone like you, such as the refreshing wind in the mountains and the warm sunshine in the Xixi Wetland, from early morning to night, from the mountains to the study, as long as it is you in the end.</strong></p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 4,
    title: "城市科学与社会计算研究组硕士、博士招生",
    author: "李宁",
    create_date: "2020-08-20",
    summary: "城市科学与社会计算研究组（Group of CSSC）依托计算机科学与技术浙江省A 类一流学科、浙江省可视媒体智能处理技术重点实验室、智能感知与系统教育部工程研究中心，拥有智能交通协同创新校企合作实验室，实验设备齐全、先进。热忱欢迎所有对大数据分析、深度学习理论和智能交通管控等技术方面的研究相关领域感兴趣，愿意在此领域工作学习的同学和科研人员加入，有意者请联系。",
    content: "<p><strong>城市科学与社会计算研究组（Group of CSSC）</strong>依托计算机科学与技术浙江省A 类一流学科、浙江省可视媒体智能处理技术重点实验室、智能感知与系统教育部工程研究中心，拥有智能交通协同创新校企合作实验室，实验设备齐全、先进。热忱欢迎所有对大数据分析、深度学习理论和智能交通管控等技术方面的研究相关领域感兴趣，愿意在此领域工作学习的同学和科研人员加入，有意者请联系。</p><p><strong>研究组优势与成果：</strong></p><p>1）研究团队成员以具有博士学位的青年骨干教师为主体，包括众多博士、硕士研究生。近年来，研究团队成员一直从事大数据分析、深度学习理论和智能交通管控技术方面的研究，主持了多项国家级项目，发表和出版了一系列学术论文和著作，获得多项专利授权和省部级科研奖项，部分研究成果得到了产业化推广应用。</p><p>2）研究团队与国内一些智能交通行业龙头企业有着良好的产-学-研合作关系，在科研项目合作、成果推广应用、研究生实践等方面取得了丰硕的成果。</p><p>3）研究团队与浙江省各地市交通管理部门有着良好的合作关系，积极参与地方智能交通建设的规划、方案评估和技术指导，尤其是近年来一直参与省内“交通大脑”建设，在交通大数据的分析与应用方面积累了一定的成果。</p><p><strong>招收计划：</strong></p><p>常年招收博士、硕士研究人员，欢迎有志在计算机科学、智能交通等方面有一番作为的优秀人才联系入队，研究组将在学校提供的优厚条件基础上、尽力提供优越的科研工作、对外交流条件和生活待遇。</p><p><strong>培养计划：</strong></p><p>研究组将积极为所有组内同学和职工提供国内外交流、学习及进修的机会，致力于培养组内年轻科研人员迅速成长成才。</p>",
    title_en: "Admissions for Master's and Doctoral Degrees in CSSC's Group",
    author_en: "Ning Li",
    summary_en: "Group of CSSC relies on the Zhejiang A-class discipline of Computer Science and Technology, Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, and the Engineering Research Center of Intelligent Perception and Systems of the Ministry of Education. It has intelligent transportation collaborative innovation. We warmly welcome all students and researchers who are interested in big data analysis, deep learning theory and intelligent transportation control and other technical research related fields. Please contact us.",
    content_en: "<p><strong>Group of CSSC</strong> relies on the Zhejiang A-class discipline of Computer Science and Technology, Zhejiang Provincial Key Laboratory of Visual Media Intelligent Processing Technology, and the Engineering Research Center of Intelligent Perception and Systems of the Ministry of Education. It has intelligent transportation collaborative innovation. We warmly welcome all students and researchers who are interested in big data analysis, deep learning theory and intelligent transportation control and other technical research related fields. Please contact us.</p><p><strong>Advantages and achievements of the research group:</strong></p><p>1) The research team consists of young backbone teachers with doctoral degrees as the main body, including many doctoral and master students. In recent years, members of the research team have been engaged in big data analysis, deep learning theory and intelligent transportation control technology research, presided over a number of national projects, published a series of academic papers and works, obtained a number of patent authorizations and provincial Ministry-level scientific research awards, and some research results have been industrialized and applied.</p><p>2) The research team has a good industry-academy-research cooperation relationship with some leading companies in the intelligent transportation industry in China, and has achieved fruitful results in scientific research project cooperation, application of results, and postgraduate practice.</p><p>3) The research team has a good cooperative relationship with the transportation management departments of various cities in Zhejiang Province, and actively participates in the planning, program evaluation and technical guidance of local intelligent transportation construction. Certain results have been accumulated in data analysis and application.</p><p><strong>Recruitment plans:</strong></p><p>Recruit doctors and masters researchers throughout the year, welcome outstanding talents who are interested in computer science, intelligent transportation, etc. The research team will do our best to provide excellent research work and foreign exchange conditions based on the excellent conditions provided by the school.</p><p><strong>Training plans:</strong></p><p>The research group will actively provide opportunities for domestic and foreign exchanges, learning and advanced studies for all students and employees in the group, Committed to cultivating young researchers in the group to grow into talents quickly.</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 3,
    title: "2020年CSSC小组第1次研讨会",
    author: "朱秉",
    create_date: "2020-08-19",
    summary: "报告主题：基于神经网络、边缘计算的实时个人路线推荐",
    content: "<p><strong>报告时间：</strong></p><p>2020年8月19日，早上9：00-10：00 </p><p><strong>腾讯会议号：</strong></p><p>4799083819 </p><p><strong>报告地点：</strong></p><p>计算机楼D317</p><p><strong>主持人：</strong></p><p>赵振振</p><p><strong>汇报人：</strong></p><p>李宁</p><p><strong>报告主题：</strong></p><p>基于神经网络、边缘计算的实时个人路线推荐</p>",
    title_en: "The 1st seminar of CSSC Group in 2020",
    author_en: "Bing Zhu",
    summary_en: "Report Subject: Real-time personal route recommendation based on neural network and edge computing",
    content_en: "<p><strong>Report time:</strong></p><p>August 17, 2020 9:00-10:00 am</p><p><strong>Tencent Conference ID:</strong></p><p>4799083819</p><p><strong>Report location:</strong></p><p>Computer Building D317</p><p><strong>Moderator:</strong></p><p>Zhenzhen Zhao</p><p><strong>Reporter :</strong></p><p>Ning Li.</p><p><strong>Theme:</strong></p><p>Neural Networks、Edge Computing for Real Time Personalized Route Recommendation.</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 2,
    title: "北方工业大学交通信息与控制团队学术报告",
    author: "朱秉",
    create_date: "2019-11-16",
    summary: "来自北方工业大学交通信息与控制团队的李正熙教授、李颖宏教授、刘小明教授和王志建副教授为我们带来学术报告。",
    content: "<p><strong>报告时间：</strong></p><p>11月16日（周六）下午15：00</p><p><strong>报告地点：</strong></p><p>计算机楼A401</p><p><strong>报告主体：</strong> </p><p>李正熙：交通信号控制系统发展历程</p><p>李颖宏：车联网环境下的交通流建模</p><p>刘小明：人机混合增强智能的交通控制系统</p><p>王志建：城市道路交通在线平行仿真平台及应用</p><p><strong>报告人简介：</strong></p><p>李正熙，男，教授，博士生导师，原任北方工业大学副校长，研究方向为智能交通控制与管理、电气传动技术。</p><p>李颖宏，女，教授，电气与控制工程学院党委书记，研究方向为智能交通控制，智能交通信号检测及短时交通流、交通状态预测。</p><p>刘小明，男，教授，博士生导师，研究方向为智能交通控制理论与技术、城市交通系统工程。</p><p>王志建，男，副教授，硕士生导师，研究方向为浮动车技术，短时交通预测，交通组织与设计。</p>",
    title_en: "Academic Lecture of Traffic Information and Control Team of North China University of Technology",
    author_en: "Bing Zhu",
    summary_en: "Professor Li Zhengxi, Professor Li Yinghong, Professor Liu Xiaoming and Associate Professor Wang Zhijian from the Traffic Information and Control Team of North China University of Technology brought us academic reports.",
    content_en: "<p><strong>Report time:</strong></p><p>Saturday, November 16, 2019, 3 pm.</p><p><strong>Report location:</strong></p><p>Computer Building A401.</p><p><strong>Report title:</strong> </p><p>Zhengxi Li: Development of traffic signal control system.</p><p>Yinghong Li: Traffic Flow Modeling in the Internet of Vehicles Environment.</p><p>Xiaoming Liu: Human-machine hybrid enhanced intelligent traffic control system.</p><p>Zhijian Wang: Online parallel simulation platform for urban road traffic and its application.</p><p><strong>Reporter Introduction:</strong></p><p>Zhengxi Li: male, professor, doctoral tutor, former vice president of North China University of Technology, research direction is intelligent traffic control and management, electric drive technology.</p><p>Yinghong Li: female, professor, secretary of the Party Committee of the School of Electrical and Control Engineering, the research direction is intelligent traffic control, intelligent traffic signal detection and short-term traffic flow, traffic state prediction.</p><p>Xiaoming Liu: male, professor, doctoral tutor, research direction is intelligent traffic control theory and technology, urban transportation system engineering.</p><p>Zhijian Wang: male, associate professor, master tutor, research direction is floating car technology, short-term traffic prediction, traffic organization and design.</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }, {
    id: 1,
    title: "2019年浙江省和杭州市计算机学会人工智能专委会年会暨人工智能学术交流会",
    author: "朱秉",
    create_date: "2019-11-16",
    summary: "浙江省计算机学会人工智能委员会和杭州市计算机学会人工智能委员会定于2019年11月16日在杭州海外皇冠假日酒店举行。",
    content: "<p><strong>参会人员：</strong></p><p>浙江省计算机学会人工智能专委会会员和杭州市计算机学会人工智能专委会委员。</p><p><strong>年会主要议程：</strong></p><p>1. 省市计算机学会领导讲话；</p><p>2. 浙江省计算机学会人工智能专委会委员聘任仪式；</p><p>3. 杭州市计算机学会人工智能专委会委员聘任仪式；</p><p>4. 2019年专委会工作总结及2020年工作计划报告；</p><p>5. 主题报告；</p><p>6. 论坛及2020年工作讨论；</p><p>7. 大会总结</p><p><strong>会议地点：</strong></p><p>杭州海外海皇冠假日酒店</p><p><strong>会议时间：</strong></p><p>2019年11月16日9:00-16:00</p><p><strong>会务相关信息：</strong></p><p>协议酒店供参考：</p><p>1. 杭州海外海皇冠假日酒店550元/晚(含早)</p><p>2. 杭州海外海皇冠大酒店300元/晚(含早)</p><p>3. 浙工大翔园宾馆300元/晚(含早)</p><p><strong>联系方式：</strong></p><p>1.会议报到专用邮箱：1723847712@qq.com；联系人电话（微信）：13906504972/Guan_4972</p><p>2. 住宿酒店事项，联系人商经理，电话：13588125095</p><p><strong>主办方：</strong></p><p>浙江省计算机学会人工智能专委会、杭州市计算机学会人工智能专委会</p><p><strong>承办方:</strong></p><p>浙江工业大学计算机科学与技术学院、浙江省可视媒体智能处理技术研究重点实验室</p><p><strong>协办方：</strong></p><p>虹软科技股份有限公司</p>",
    title_en: "2019 Annual Meeting of the Computer Society Artificial Intelligence Committee and Artificial Intelligence Academic Exchange",
    author_en: "Bing Zhu",
    summary_en: "The Artificial Intelligence Committee of Zhejiang Computer Society and the Artificial Intelligence Committee of Hangzhou Computer Society will be held on November 16, 2019 at the Crowne Plaza Overseas Hotel in Hangzhou.",
    content_en: "<p><strong>Participants:</strong></p><p>Member of the Artificial Intelligence Committee of Zhejiang Computer Society and member of the Artificial Intelligence Committee of Hangzhou Computer Society.</p><p><strong>Annual meeting main agenda:</strong></p><p>1. Provincial and municipal computer society leadership speech;</p><p>2. Appointment ceremony for the committee members of the Artificial Intelligence Committee of Zhejiang Computer Society;</p><p>3. Appointment ceremony for the committee members of Artificial Intelligence Committee of Hangzhou Computer Society;</p><p>4. Summary of the work of the special committee in 2019 and report of the work plan in 2020;</p><p>5. Theme report;</p><p>6. Forum and work discussion in 2020;</p><p>7. Summary of the conference.</p><p><strong>Conference hall:</strong></p><p>Crowne Plaza Hangzhou Overseas Sea.</p><p><strong>Conference time:</strong></p><p>Saturday, November 16, 2019 9:00-16:00.</p><p><strong>Conference related information:</strong></p><p>Agreement hotel for reference:</p><p>1. Crowne Plaza Hangzhou Overseas Sea 550 yuan/night (with breakfast).</p><p>2. Hangzhou Overseas Sea Crown Hotel 300 yuan/night (including breakfast).</p><p>3. Zhegong Daxiangyuan Hotel 300 yuan/night (including breakfast).</p><p><strong>Contact information:</strong></p><p>1.Dedicated mailbox for conference registration: 1723847712@qq.com; contact phone number (WeChat): 13906504972/Guan_4972.</p><p>2. Accommodation hotel matters, contact business manager, phone: 13588125059.</p><p><strong>Organizers:</strong></p><p>Artificial Intelligence Committee of Zhejiang Computer Society, Artificial Intelligence Committee of Hangzhou Computer Society.</p><p><strong>Undertakers:</strong></p><p>School of Computer Science and Technology, Zhejiang University of Technology, Zhejiang Key Laboratory of Visual Media Intelligent Processing Technology.</p><p><strong>Co-organizer:</strong></p><p>Rainbow Software Co., Ltd.</p>",
    top: false,
    hide_cn: true,
    hide_en: true,
  }]
