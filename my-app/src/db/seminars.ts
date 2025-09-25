interface ISeminar {
  id: number;
  title: string;
  author: string;
  create_date: string;
  summary: string;
  // content: (INoticeContentImg | INoticeContentText | INoticeContentNewline)[],
  content: string;
  top: boolean;
  // hide in website cn
  hide_cn?: true;
  // hide in website en
  hide_en?: true;
  title_en: string;
  author_en: string;
  summary_en: string;
  content_en: string;
  // term:string,
  year: number;
}

export const seminars: ISeminar[] = [
  {
    id: 126,
    title: "2025年CSSC小组第29次研讨会",
    author: "宁凯丽",
    create_date: "2025-9-12",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
<!--              <p>社会计算组：2025年9月5日，上午10:00</p>-->
              <p>移动计算组：2025年9月10日，上午9:30</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
<!--              <p>交通智能感知与控制组：2025年9月5日，上午9:00</p>-->
<!--              <p>自然语言处理组：2025年7月23日，上午10:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
<!--              <p>1.社会计算组：宁凯丽、叶恺伦	</p>-->
              <p>1.移动计算组：全体	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
<!--              <p>2.交通智能感知与控制组：全体	</p>-->
<!--              <p>3.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.工作内容交流	</p>
<!--              <p>2.工作内容交流	</p>-->
<!--              <p>3.徐梦菲论文分享	</p>-->



              `,
    title_en: "The 29th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
<!--                <p>Social Computing Group: September 5, 2025, 10:00 am</p>-->
                <p>Mobile Computing Group: September 10, 2025, 9:30 am</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
<!--                <p>Traffic Intelligent Perception and Control Group: September 5, 2025, 9:00 am</p>-->
<!--                <p>Natural Language Processing Group: June 23, 2025, 10:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
<!--                <p>1.Social Computing Group: Kaili Ning, Kailun Ye</p>-->
                <p>1.Mobile Computing Group: All members</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
<!--                <p>2.Traffic Intelligent Perception and Control Group: All members</p>-->
<!--                <p>3.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
<!--                <p>1.Social Computing Group: Job Content Exchange.</p>-->
                <p>1.Mobile Computing Group: Job Content Exchange.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
<!--                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>-->
<!--                <p>3.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 125,
    title: "2025年CSSC小组第28次研讨会",
    author: "宁凯丽",
    create_date: "2025-9-5",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年9月5日，上午10:00</p>
<!--              <p>移动计算组：2025年7月30日，上午10:00</p>-->
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年9月5日，上午9:00</p>
<!--              <p>自然语言处理组：2025年7月23日，上午10:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：宁凯丽、叶恺伦	</p>
<!--              <p>1.移动计算组：全体	</p>-->
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
<!--              <p>3.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.工作内容交流	</p>
              <p>2.工作内容交流	</p>
<!--              <p>3.徐梦菲论文分享	</p>-->



              `,
    title_en: "The 28th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: September 5, 2025, 10:00 am</p>
<!--                <p>Mobile Computing Group: July 30, 2025, 10:00 am</p>-->
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: September 5, 2025, 9:00 am</p>
<!--                <p>Natural Language Processing Group: June 23, 2025, 10:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Kaili Ning, Kailun Ye</p>
<!--                <p>1.Mobile Computing Group: All members</p>-->
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>3.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Job Content Exchange.</p>
<!--                <p>1.Mobile Computing Group: Job Content Exchange.</p>-->
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>3.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 124,
    title: "2025年CSSC小组第27次研讨会",
    author: "宁凯丽",
    create_date: "2025-8-22",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年8月22日，上午10:00</p>
<!--              <p>移动计算组：2025年7月30日，上午10:00</p>-->
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
<!--              <p>交通智能感知与控制组：2025年8月8日，下午15:00</p>-->
<!--              <p>自然语言处理组：2025年7月23日，上午10:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：胡旭圆、徐晨洋	</p>
<!--              <p>1.移动计算组：全体	</p>-->
<!--              <p>2.城市计算组：沈钰琦	</p>-->
<!--              <p>2.交通智能感知与控制组：全体	</p>-->
<!--              <p>3.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.工作内容交流	</p>
<!--              <p>2.工作内容交流	</p>-->
<!--              <p>3.徐梦菲论文分享	</p>-->



              `,
    title_en: "The 27th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: August 22, 2025, 10:00 am</p>
<!--                <p>Mobile Computing Group: July 30, 2025, 10:00 am</p>-->
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
<!--                <p>Traffic Intelligent Perception and Control Group: August 8, 2025, 3:00 pm</p>-->
<!--                <p>Natural Language Processing Group: June 23, 2025, 10:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Xuyuan Hu, Chenyang Xu</p>
<!--                <p>1.Mobile Computing Group: All members</p>-->
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
<!--                <p>2.Traffic Intelligent Perception and Control Group: All members</p>-->
<!--                <p>3.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Job Content Exchange.</p>
<!--                <p>1.Mobile Computing Group: Job Content Exchange.</p>-->
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
<!--                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>-->
<!--                <p>3.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 123,
    title: "2025年CSSC小组第26次研讨会",
    author: "宁凯丽",
    create_date: "2025-8-8",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年8月8日，上午10:00</p>
<!--              <p>移动计算组：2025年7月30日，上午10:00</p>-->
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年8月8日，下午15:00</p>
<!--              <p>自然语言处理组：2025年7月23日，上午10:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320、铂悦城</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：吴一楠、叶恺伦	</p>
<!--              <p>1.移动计算组：全体	</p>-->
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
<!--              <p>3.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.工作内容交流	</p>
              <p>2.工作内容交流	</p>
<!--              <p>3.徐梦菲论文分享	</p>-->



              `,
    title_en: "The 26th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: August 8, 2025, 10:00 am</p>
<!--                <p>Mobile Computing Group: July 30, 2025, 10:00 am</p>-->
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: August 8, 2025, 3:00 pm</p>
<!--                <p>Natural Language Processing Group: June 23, 2025, 10:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320、Bejoy City</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Yinan Wu, Kailun Ye</p>
<!--                <p>1.Mobile Computing Group: All members</p>-->
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>3.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Job Content Exchange.</p>
<!--                <p>1.Mobile Computing Group: Job Content Exchange.</p>-->
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>3.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 122,
    title: "2025年CSSC小组第25次研讨会",
    author: "宁凯丽",
    create_date: "2025-8-1",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
<!--              <p>社会计算组：2025年7月25日，上午10:00</p>-->
              <p>移动计算组：2025年7月30日，上午10:00</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年8月1日，下午15:00</p>
<!--              <p>自然语言处理组：2025年7月23日，上午10:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
<!--              <p>1.社会计算组：徐晨洋、宁凯丽	</p>-->
              <p>1.移动计算组：全体	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
<!--              <p>3.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.工作内容交流	</p>
              <p>2.工作内容交流	</p>
<!--              <p>3.徐梦菲论文分享	</p>-->



              `,
    title_en: "The 25th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
<!--                <p>Social Computing Group: July 25, 2025, 10:00 am</p>-->
                <p>Mobile Computing Group: July 30, 2025, 10:00 am</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: August 1, 2025, 3:00 pm</p>
<!--                <p>Natural Language Processing Group: June 23, 2025, 10:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
<!--                <p>1.Social Computing Group: Chenyang Xu, Kaili Ning</p>-->
                <p>1.Mobile Computing Group: All members</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>3.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
<!--                <p>1.Social Computing Group: Chenyang Xu, Kaili Ning's paper Sharing.</p>-->
                <p>1.Mobile Computing Group: Job Content Exchange.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>3.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 121,
    title: "2025年CSSC小组第24次研讨会",
    author: "宁凯丽",
    create_date: "2025-7-25",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年7月25日，上午10:00</p>
<!--              <p>移动计算组：2025年7月16日，下午1:30</p>-->
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年7月25日，上午10:00</p>
              <p>自然语言处理组：2025年7月23日，上午10:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：徐晨洋、宁凯丽	</p>
<!--              <p>1.移动计算组：郭旭	</p>-->
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
              <p>3.自然语言处理组：徐梦菲	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.徐晨洋、宁凯丽论文分享	</p>
              <p>2.工作内容交流	</p>
              <p>3.徐梦菲论文分享	</p>



              `,
    title_en: "The 24th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: July 25, 2025, 10:00 am</p>
<!--                <p>Mobile Computing Group: July 16, 2025, 1:30 pm</p>-->
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: July 25, 2025, 10:00 am</p>
                <p>Natural Language Processing Group: June 23, 2025, 10:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Chenyang Xu, Kaili Ning</p>
<!--                <p>1.Mobile Computing Group: Xu Guo</p>-->
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
                <p>3.Natural Language Processing Group: Mengfei Xu</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Chenyang Xu, Kaili Ning's paper Sharing.</p>
<!--                <p>1.Mobile Computing Group: Xu Guo's paper Sharing.</p>-->
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>3.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 120,
    title: "2025年CSSC小组第23次研讨会",
    author: "宁凯丽",
    create_date: "2025-7-18",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
<!--              <p>社会计算组：2025年7月11日，上午10:00</p>-->
              <p>移动计算组：2025年7月16日，下午1:30</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年7月18日，上午10:00</p>
<!--              <p>自然语言处理组：2025年6月18日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
<!--              <p>1.社会计算组：吴一楠、胡旭圆	</p>-->
              <p>1.移动计算组：郭旭	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
<!--              <p>3.自然语言处理组：郭晓磊	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.郭旭论文分享	</p>
              <p>2.工作内容交流	</p>



              `,
    title_en: "The 23th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
<!--                <p>Social Computing Group: July 11, 2025, 10:00 am</p>-->
                <p>Mobile Computing Group: July 16, 2025, 1:30 pm</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: July 18, 2025, 10:00 am</p>
<!--                <p>Natural Language Processing Group: June 18, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
<!--                <p>1.Social Computing Group: Yinan Wu, Xuyuan Hu</p>-->
                <p>1.Mobile Computing Group: Xu Guo</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>3.Natural Language Processing Group: Xiaolei Guo</p>-->



                <p><strong>Theme:</strong></p>
<!--                <p>1.Social Computing Group: Yinan Wu, Xuyuan Hu's paper Sharing.</p>-->
                <p>1.Mobile Computing Group: Xu Guo's paper Sharing.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>3.Natural Language Processing Group: Xiaolei Guo's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 119,
    title: "2025年CSSC小组第22次研讨会",
    author: "宁凯丽",
    create_date: "2025-7-11",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年7月11日，上午10:00</p>
<!--              <p>移动计算组：2025年7月2日，下午1:30</p>-->
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年7月11日，上午10:00</p>
<!--              <p>自然语言处理组：2025年6月18日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：吴一楠、胡旭圆	</p>
<!--              <p>1.移动计算组：胡逾越、韩旭涛	</p>-->
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
<!--              <p>3.自然语言处理组：郭晓磊	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.吴一楠、胡旭圆论文分享	</p>
              <p>2.工作内容交流	</p>



              `,
    title_en: "The 22th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: July 11, 2025, 10:00 am</p>
<!--                <p>Mobile Computing Group: July 2, 2025, 1:30 pm</p>-->
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: July 11, 2025, 10:00 am</p>
<!--                <p>Natural Language Processing Group: June 18, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Yinan Wu, Xuyuan Hu</p>
<!--                <p>1.Mobile Computing Group: Yuyue Hu, Xutao Han</p>-->
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>3.Natural Language Processing Group: Xiaolei Guo</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Yinan Wu, Xuyuan Hu's paper Sharing.</p>
<!--                <p>1.Mobile Computing Group: Yuyue Hu, Xutao Han's paper Sharing.</p>-->
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>3.Natural Language Processing Group: Xiaolei Guo's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 118,
    title: "2025年CSSC小组第21次研讨会",
    author: "宁凯丽",
    create_date: "2025-7-4",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
<!--              <p>社会计算组：2025年6月17日，下午1:30</p>-->
              <p>移动计算组：2025年7月2日，下午1:30</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年7月3日，下午1:30</p>
<!--              <p>自然语言处理组：2025年6月18日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
<!--              <p>1.社会计算组：徐晨洋	</p>-->
              <p>1.移动计算组：胡逾越、韩旭涛	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
<!--              <p>3.自然语言处理组：郭晓磊	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.胡逾越、韩旭涛论文分享	</p>
              <p>2.工作内容交流	</p>



              `,
    title_en: "The 21th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
<!--                <p>Social Computing Group: June 17, 2025, 1:30 pm</p>-->
                <p>Mobile Computing Group: July 2, 2025, 1:30 pm</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: July 3, 2025, 1:30 pm</p>
<!--                <p>Natural Language Processing Group: June 18, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
<!--                <p>1.Social Computing Group: Chenyang Xu</p>-->
                <p>1.Mobile Computing Group: Yuyue Hu, Xutao Han</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>3.Natural Language Processing Group: Xiaolei Guo</p>-->



                <p><strong>Theme:</strong></p>
<!--                <p>1.Social Computing Group: Chenyang Xu's paper Sharing.</p>-->
                <p>1.Mobile Computing Group: Yuyue Hu, Xutao Han's paper Sharing.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>3.Natural Language Processing Group: Xiaolei Guo's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 117,
    title: "2025年CSSC小组第20次研讨会",
    author: "宁凯丽",
    create_date: "2025-6-20",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年6月17日，下午1:30</p>
<!--              <p>移动计算组：2025年6月12日，下午6:30</p>-->
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年6月20日，上午9:00</p>
              <p>自然语言处理组：2025年6月18日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：徐晨洋	</p>
<!--              <p>2.移动计算组：韩旭涛	</p>-->
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>2.交通智能感知与控制组：全体	</p>
              <p>3.自然语言处理组：郭晓磊	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.徐晨洋论文分享	</p>
              <p>2.工作内容交流	</p>
              <p>3.郭晓磊论文分享	</p>



              `,
    title_en: "The 20th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: June 17, 2025, 1:30 pm</p>
<!--                <p>Mobile Computing Group: June 12, 2025, 6:30 pm</p>-->
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: June 20, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: June 18, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Chenyang Xu</p>
<!--                <p>2.Mobile Computing Group: Xutao Han</p>-->
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: All members</p>
                <p>3.Natural Language Processing Group: Xiaolei Guo</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Chenyang Xu's paper Sharing.</p>
<!--                <p>2.Mobile Computing Group: Xutao Han's paper Sharing.</p>-->
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>2.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>3.Natural Language Processing Group: Xiaolei Guo's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 116,
    title: "2025年CSSC小组第19次研讨会",
    author: "宁凯丽",
    create_date: "2025-6-13",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年6月10日，下午1:30</p>
              <p>移动计算组：2025年6月12日，下午6:30</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年6月13日，上午9:00</p>
<!--              <p>自然语言处理组：2025年5月14日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：叶恺伦	</p>
              <p>2.移动计算组：韩旭涛	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>3.交通智能感知与控制组：全体	</p>
<!--              <p>5.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.叶恺伦论文分享	</p>
              <p>2.韩旭涛论文分享	</p>
              <p>3.工作内容交流	</p>



              `,
    title_en: "The 19th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: June 10, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: June 12, 2025, 6:30 pm</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: June 13, 2025, 9:00 am</p>
<!--                <p>Natural Language Processing Group: May 14, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Kailun Ye</p>
                <p>2.Mobile Computing Group: Xutao Han</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>3.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Kailun Ye's paper Sharing.</p>
                <p>2.Mobile Computing Group: Xutao Han's paper Sharing.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>3.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 115,
    title: "2025年CSSC小组第18次研讨会",
    author: "宁凯丽",
    create_date: "2025-6-6",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年6月3日，下午1:30</p>
              <p>移动计算组：2025年6月5日，下午6:30</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年6月6日，上午9:00</p>
<!--              <p>自然语言处理组：2025年5月14日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：吴振鹏	</p>
              <p>2.移动计算组：张锦帆、胡逾越	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>3.交通智能感知与控制组：全体	</p>
<!--              <p>5.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.吴振鹏论文分享	</p>
              <p>2.张锦帆、胡逾越论文分享	</p>
              <p>3.工作内容交流	</p>



              `,
    title_en: "The 18th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: June 3, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: June 5, 2025, 6:30 pm</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: June 6, 2025, 9:00 am</p>
<!--                <p>Natural Language Processing Group: May 14, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Zhenpeng Wu</p>
                <p>2.Mobile Computing Group: Jinfan Zhang, Yuyue Hu</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>3.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Zhenpeng Wu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Jinfan Zhang, Yuyue Hu's paper Sharing.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>3.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 114,
    title: "2025年CSSC小组第17次研讨会",
    author: "宁凯丽",
    create_date: "2025-5-30",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年5月27日，下午1:30</p>
              <p>移动计算组：2025年5月29日，下午6:30</p>
<!--              <p>城市计算组：2025年5月16日，上午11:00</p>-->
              <p>交通智能感知与控制组：2025年5月30日，上午9:00</p>
<!--              <p>自然语言处理组：2025年5月14日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：舒灿	</p>
              <p>2.移动计算组：郭旭、季晨	</p>
<!--              <p>2.城市计算组：沈钰琦	</p>-->
              <p>3.交通智能感知与控制组：吴佳文	</p>
<!--              <p>5.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.舒灿论文分享	</p>
              <p>2.郭旭、季晨论文分享	</p>
              <p>3.吴佳文论文分享	</p>



              `,
    title_en: "The 17th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: May 27, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: May 29, 2025, 6:30 pm</p>
<!--                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>-->
                <p>Traffic Intelligent Perception and Control Group: May 30, 2025, 9:00 am</p>
<!--                <p>Natural Language Processing Group: May 14, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Can Shu</p>
                <p>2.Mobile Computing Group: Xu Guo, Chen Ji</p>
<!--                <p>2.Urban Computing Group: Yuqi Shen</p>-->
                <p>3.Traffic Intelligent Perception and Control Group: Jiawen Wu</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Can Shu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>
<!--                <p>2.Urban Computing Group: Xu Guo, Chen Ji's paper Sharing.</p>-->
                <p>3.Traffic Intelligent Perception and Control Group: Jiawen Wu's paper Sharing.</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 113,
    title: "2025年CSSC小组第16次研讨会",
    author: "宁凯丽",
    create_date: "2025-5-23",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
<!--              <p>社会计算组：2025年5月13日，下午1:30</p>-->
              <p>移动计算组：2025年5月22日，下午6:30</p>
              <p>城市计算组：2025年5月16日，上午11:00</p>
              <p>交通智能感知与控制组：2025年5月23日，上午9:00</p>
<!--              <p>自然语言处理组：2025年5月14日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
<!--              <p>1.社会计算组：周文峰、沈哲辉、郑宏	</p>-->
              <p>1.移动计算组：张锦帆、胡逾越	</p>
              <p>2.城市计算组：沈钰琦	</p>
              <p>3.交通智能感知与控制组：全体	</p>
<!--              <p>5.自然语言处理组：徐梦菲	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.张锦帆、胡逾越论文分享	</p>
              <p>2.沈钰琦论文分享	</p>
              <p>3.工作内容交流	</p>



              `,
    title_en: "The 16th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
<!--                <p>Social Computing Group: May 13, 2025, 1:30 pm</p>-->
                <p>Mobile Computing Group: May 22, 2025, 6:30 pm</p>
                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: May 23, 2025, 9:00 am</p>
<!--                <p>Natural Language Processing Group: May 14, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
<!--                <p>1.Social Computing Group: Wenfeng Zhou, Zhehui Shen, Hong Zheng</p>-->
                <p>1.Mobile Computing Group: Jinfan Zhang, Yuyue Hu</p>
                <p>2.Urban Computing Group: Yuqi Shen</p>
                <p>3.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu</p>-->



                <p><strong>Theme:</strong></p>
<!--                <p>1.Social Computing Group: Simulated graduation defense.</p>-->
                <p>1.Mobile Computing Group: Jinfan Zhang, Yuyue Hu's paper Sharing.</p>
                <p>2.Urban Computing Group: Yuqi Shen's paper Sharing.</p>
                <p>3.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>5.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 112,
    title: "2025年CSSC小组第15次研讨会",
    author: "宁凯丽",
    create_date: "2025-5-16",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年5月13日，下午1:30</p>
              <p>移动计算组：2025年5月15日，下午6:30</p>
              <p>城市计算组：2025年5月16日，上午11:00</p>
              <p>交通智能感知与控制组：2025年5月16日，上午9:00</p>
              <p>自然语言处理组：2025年5月14日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：周文峰、沈哲辉、郑宏	</p>
              <p>2.移动计算组：郭旭、戴哲豪	</p>
              <p>3.城市计算组：邓俊慧	</p>
              <p>4.交通智能感知与控制组：全体	</p>
              <p>5.自然语言处理组：徐梦菲	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.模拟毕业答辩	</p>
              <p>2.郭旭、戴哲豪论文分享	</p>
              <p>3.邓俊慧论文分享	</p>
              <p>4.工作内容交流	</p>
              <p>5.徐梦菲论文分享	</p>



              `,
    title_en: "The 15th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: May 13, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: May 15, 2025, 6:30 pm</p>
                <p>Urban Computing Group: May 16, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: May 16, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: May 14, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Wenfeng Zhou, Zhehui Shen, Hong Zheng</p>
                <p>2.Mobile Computing Group: Xu Guo, Zhehao Dai</p>
                <p>3.Urban Computing Group: Junhui Deng</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
                <p>5.Natural Language Processing Group: Mengfei Xu</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Simulated graduation defense.</p>
                <p>2.Mobile Computing Group: Xu Guo, Zhehao Dai's paper Sharing.</p>
                <p>3.Urban Computing Group: Junhui Deng's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>5.Natural Language Processing Group: Mengfei Xu's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 111,
    title: "2025年CSSC小组第14次研讨会",
    author: "宁凯丽",
    create_date: "2025-5-9",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年5月6日，下午1:30</p>
              <p>移动计算组：2025年5月8日，下午6:30</p>
              <p>城市计算组：2025年5月9日，上午11:00</p>
              <p>交通智能感知与控制组：2025年5月9日，上午9:00</p>
              <p>自然语言处理组：2025年5月7日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：刘蔚瑶	</p>
              <p>2.移动计算组：倪辰昊、张文熠	</p>
              <p>3.城市计算组：吴一楠	</p>
              <p>4.交通智能感知与控制组：全体	</p>
              <p>5.自然语言处理组：Syauqie Muhammad Marier	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.刘蔚瑶论文分享	</p>
              <p>2.倪辰昊、张文熠论文分享	</p>
              <p>3.吴一楠论文分享	</p>
              <p>4.工作内容交流	</p>
              <p>5.Syauqie Muhammad Marier论文分享	</p>



              `,
    title_en: "The 14th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: May 6, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: May 8, 2025, 6:30 pm</p>
                <p>Urban Computing Group: May 9, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: May 9, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: May 7, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Weiyao Liu</p>
                <p>2.Mobile Computing Group: Chenhao Ni, Wenyi Zhang</p>
                <p>3.Urban Computing Group: Yinan Wu</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
                <p>5.Natural Language Processing Group: Syauqie Muhammad Marier</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Weiyao Liu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Chenhao Ni, Wenyi Zhang's paper Sharing.</p>
                <p>3.Urban Computing Group: Yinan Wu's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>5.Natural Language Processing Group: Syauqie Muhammad Marier's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 110,
    title: "2025年CSSC小组第13次研讨会",
    author: "宁凯丽",
    create_date: "2025-5-2",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年4月29日，下午1:30</p>
<!--              <p>移动计算组：2025年4月24日，下午6:30</p>-->
<!--              <p>城市计算组：2025年4月25日，上午11:00</p>-->
<!--              <p>交通智能感知与控制组：2025年4月25日，上午9:00</p>-->
<!--              <p>自然语言处理组：2025年4月16日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：邓兆林	</p>
<!--              <p>2.移动计算组：胡逾越	</p>-->
<!--              <p>3.城市计算组：吴一楠	</p>-->
<!--              <p>4.交通智能感知与控制组：全体	</p>-->
<!--              <p>5.自然语言处理组：陈祥钒	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.邓兆林论文分享	</p>
<!--              <p>2.胡逾越论文分享	</p>-->
<!--              <p>3.吴一楠论文分享	</p>-->
<!--              <p>4.工作内容交流	</p>-->
<!--              <p>5.陈祥钒论文分享	</p>-->



              `,
    title_en: "The 13th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: April 29, 2025, 1:30 pm</p>
<!--                <p>Mobile Computing Group: April 24, 2025, 6:30 pm</p>-->
<!--                <p>Urban Computing Group: April 25, 2025, 11:00 am</p>-->
<!--                <p>Traffic Intelligent Perception and Control Group: April 25, 2025, 9:00 am</p>-->
<!--                <p>Natural Language Processing Group: April 16, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Zhaolin Deng</p>
<!--                <p>2.Mobile Computing Group: Yuyue Hu</p>-->
<!--                <p>3.Urban Computing Group: Yinan Wu</p>-->
<!--                <p>4.Traffic Intelligent Perception and Control Group: All members</p>-->
<!--                <p>5.Natural Language Processing Group: Xiangfan Chen</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Zhaolin Deng's paper Sharing.</p>
<!--                <p>2.Mobile Computing Group: Yuyue Hu's paper Sharing.</p>-->
<!--                <p>3.Urban Computing Group: Yinan Wu's paper Sharing.</p>-->
<!--                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>-->
<!--                <p>5.Natural Language Processing Group: Xiangfan Chen's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 109,
    title: "2025年CSSC小组第12次研讨会",
    author: "宁凯丽",
    create_date: "2025-4-25",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年4月22日，下午1:30</p>
              <p>移动计算组：2025年4月24日，下午6:30</p>
              <p>城市计算组：2025年4月25日，上午11:00</p>
              <p>交通智能感知与控制组：2025年4月25日，上午9:00</p>
<!--              <p>自然语言处理组：2025年4月16日，上午9:00</p>-->
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：胡旭圆	</p>
              <p>2.移动计算组：胡逾越	</p>
              <p>3.城市计算组：吴一楠	</p>
              <p>4.交通智能感知与控制组：全体	</p>
<!--              <p>5.自然语言处理组：陈祥钒	</p>-->



              <p><strong>报告主题：</strong></p>
              <p>1.胡旭圆论文分享	</p>
              <p>2.胡逾越论文分享	</p>
              <p>3.吴一楠论文分享	</p>
              <p>4.工作内容交流	</p>
<!--              <p>5.陈祥钒论文分享	</p>-->



              `,
    title_en: "The 12th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: April 22, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: April 24, 2025, 6:30 pm</p>
                <p>Urban Computing Group: April 25, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: April 25, 2025, 9:00 am</p>
<!--                <p>Natural Language Processing Group: April 16, 2025, 9:00 am</p>-->
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Xuyuan Hu</p>
                <p>2.Mobile Computing Group: Yuyue Hu</p>
                <p>3.Urban Computing Group: Yinan Wu</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
<!--                <p>5.Natural Language Processing Group: Xiangfan Chen</p>-->



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Xuyuan Hu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Yuyue Hu's paper Sharing.</p>
                <p>3.Urban Computing Group: Yinan Wu's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
<!--                <p>5.Natural Language Processing Group: Xiangfan Chen's paper Sharing.</p>-->



                `,
    top: false,
    year: 2025,
  },
  {
    id: 108,
    title: "2025年CSSC小组第11次研讨会",
    author: "宁凯丽",
    create_date: "2025-4-18",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年4月15日，下午1:30</p>
              <p>移动计算组：2025年4月17日，下午6:30</p>
              <p>城市计算组：2025年4月18日，上午11:00</p>
              <p>交通智能感知与控制组：2025年4月18日，上午9:00</p>
              <p>自然语言处理组：2025年4月16日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：沈哲辉	</p>
              <p>2.移动计算组：韩旭涛、Wail Al-Asad	</p>
              <p>3.城市计算组：陈馨琪	</p>
              <p>4.交通智能感知与控制组：全体	</p>
              <p>5.自然语言处理组：陈祥钒	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.沈哲辉论文分享	</p>
              <p>2.韩旭涛、Wail Al-Asad论文分享	</p>
              <p>3.陈馨琪论文分享	</p>
              <p>4.工作内容交流	</p>
              <p>5.陈祥钒论文分享	</p>



              `,
    title_en: "The 11th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: April 15, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: April 17, 2025, 6:30 pm</p>
                <p>Urban Computing Group: April 18, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: April 18, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: April 16, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Zhehui Shen</p>
                <p>2.Mobile Computing Group: Xutao Han, Wail Al-Asad</p>
                <p>3.Urban Computing Group: Xinqi Chen</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
                <p>5.Natural Language Processing Group: Xiangfan Chen</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Zhehui Shen's paper Sharing.</p>
                <p>2.Mobile Computing Group: Xutao Han, Wail Al-Asad's paper Sharing.</p>
                <p>3.Urban Computing Group: Xinqi Chen's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>5.Natural Language Processing Group: Xiangfan Chen's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 107,
    title: "2025年CSSC小组第10次研讨会",
    author: "宁凯丽",
    create_date: "2025-4-11",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年4月8日，下午1:30</p>
              <p>移动计算组：2025年4月10日，下午6:30</p>
              <p>城市计算组：2025年4月11日，上午11:00</p>
              <p>交通智能感知与控制组：2025年4月11日，上午9:00</p>
              <p>自然语言处理组：2025年4月9日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：周文峰	</p>
              <p>2.移动计算组：张锦帆、胡逾越	</p>
              <p>3.城市计算组：何雨薇	</p>
              <p>4.交通智能感知与控制组：全体	</p>
              <p>5.自然语言处理组：周泽海	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.周文峰论文分享	</p>
              <p>2.张锦帆、胡逾越论文分享	</p>
              <p>3.何雨薇论文分享	</p>
              <p>4.工作内容交流	</p>
              <p>5.周泽海论文分享	</p>



              `,
    title_en: "The 10th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: April 8, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: April 10, 2025, 6:30 pm</p>
                <p>Urban Computing Group: April 11, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: April 11, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: April 9, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Wenfeng Zhou</p>
                <p>2.Mobile Computing Group: Jinfan Zhang, Yuyue Hu</p>
                <p>3.Urban Computing Group: Yuwei He</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
                <p>5.Natural Language Processing Group: Zehai Zhou</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Wenfeng Zhou's paper Sharing.</p>
                <p>2.Mobile Computing Group: Jinfan Zhang, Yuyue Hu's paper Sharing.</p>
                <p>3.Urban Computing Group: Yuwei He's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>5.Natural Language Processing Group: Zehai Zhou's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 106,
    title: "2025年CSSC小组第9次研讨会",
    author: "宁凯丽",
    create_date: "2025-4-4",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年4月1日，下午1:30</p>
              <p>移动计算组：2025年4月3日，下午6:30</p>
              <p>自然语言处理组：2025年4月2日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：张依媚	</p>
              <p>2.移动计算组：张文熠、郭旭	</p>
              <p>3.自然语言处理组：伊秋华	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.张依媚论文分享	</p>
              <p>2.张文熠、郭旭论文分享	</p>
              <p>3.伊秋华论文分享	</p>



              `,
    title_en: "The 9th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: April 1, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: April 3, 2025, 6:30 pm</p>
                <p>Natural Language Processing Group: April 2, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Yimei Zhang</p>
                <p>2.Mobile Computing Group: Wenyi Zhang, Xu Guo</p>
                <p>3.Natural Language Processing Group: Qiuhua Yi</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Yimei Zhang's paper Sharing.</p>
                <p>2.Mobile Computing Group: Wenyi Zhang, Xu Guo's paper Sharing.</p>
                <p>3.Natural Language Processing Group: Qiuhua Yi's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 105,
    title: "2025年CSSC小组第8次研讨会",
    author: "宁凯丽",
    create_date: "2025-3-28",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年3月25日，下午1:30</p>
              <p>移动计算组：2025年3月27日，下午6:30</p>
              <p>城市计算组：2025年3月28日，上午11:00</p>
              <p>交通智能感知与控制组：2025年3月28日，上午9:00</p>
              <p>自然语言处理组：2025年3月26日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：张玉超	</p>
              <p>2.移动计算组：倪辰昊、戴哲豪	</p>
              <p>3.城市计算组：何雨薇	</p>
              <p>4.交通智能感知与控制组：全体	</p>
              <p>5.自然语言处理组：郭晓磊	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.张玉超论文分享	</p>
              <p>2.倪辰昊、戴哲豪论文分享	</p>
              <p>3.何雨薇论文分享	</p>
              <p>4.工作内容交流	</p>
              <p>5.郭晓磊论文分享	</p>



              `,
    title_en: "The 8th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: March 25, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: March 27, 2025, 6:30 pm</p>
                <p>Urban Computing Group: March 28, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: March 28, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: March 26, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Yuchao Zhang</p>
                <p>2.Mobile Computing Group: Chenhao Ni、Zhehao Dai</p>
                <p>3.Urban Computing Group: Yuwei He</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
                <p>5.Natural Language Processing Group: Xiaolei Guo</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Yuchao Zhang's paper Sharing.</p>
                <p>2.Mobile Computing Group: Chenhao Ni、Zhehao Dai's paper Sharing.</p>
                <p>3.Urban Computing Group: Yuwei He's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>5.Natural Language Processing Group: Xiaolei Guo's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 104,
    title: "2025年CSSC小组第7次研讨会",
    author: "宁凯丽",
    create_date: "2025-3-21",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年3月18日，下午1:30</p>
              <p>移动计算组：2025年3月20日，下午6:30</p>
              <p>城市计算组：2025年3月21日，上午11:00</p>
              <p>交通智能感知与控制组：2025年3月21日，上午9:00</p>
              <p>自然语言处理组：2025年3月19日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：翁文超	</p>
              <p>2.移动计算组：顾文杰、瓦乐	</p>
              <p>3.城市计算组：刘晋	</p>
              <p>4.交通智能感知与控制组：全体	</p>
              <p>5.自然语言处理组：赵宏彦	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.翁文超论文分享	</p>
              <p>2.顾文杰、瓦乐论文分享	</p>
              <p>3.刘晋论文分享	</p>
              <p>4.工作内容交流	</p>
              <p>5.赵宏彦论文分享	</p>



              `,
    title_en: "The 7th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: March 18, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: March 20, 2025, 6:30 pm</p>
                <p>Urban Computing Group: March 21, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: March 21, 2025, 9:00 am</p>
                <p>Natural Language Processing Group: March 19, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Wenchao Weng</p>
                <p>2.Mobile Computing Group: Wenjie Gu、Wail Al-Asad</p>
                <p>3.Urban Computing Group: Jin Liu</p>
                <p>4.Traffic Intelligent Perception and Control Group: All members</p>
                <p>5.Natural Language Processing Group: Hongyan Zhao</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Wenchao Weng's paper Sharing.</p>
                <p>2.Mobile Computing Group: Wenjie Gu、Wail Al-Asad's paper Sharing.</p>
                <p>3.Urban Computing Group: Jin Liu's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>
                <p>5.Natural Language Processing Group: Hongyan Zhao's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 103,
    title: "2025年CSSC小组第6次研讨会",
    author: "宁凯丽",
    create_date: "2025-3-14",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年3月11日，下午1:30</p>
              <p>移动计算组：2025年3月13日，下午6:30</p>
              <p>城市计算组：2025年3月14日，上午11:00</p>
              <p>交通智能感知与控制组：2025年3月14日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：胡旭圆	</p>
              <p>2.移动计算组：胡逾越、张锦帆	</p>
              <p>3.城市计算组：毕俊辉	</p>
              <p>4.交通智能感知与控制组：周昊	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.胡旭圆论文分享	</p>
              <p>2.胡逾越、张锦帆论文分享	</p>
              <p>3.毕俊辉论文分享	</p>
              <p>4.周昊论文分享	</p>



              `,
    title_en: "The 6th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: March 11, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: March 13, 2025, 6:30 pm</p>
                <p>Urban Computing Group: March 14, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: March 14, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Xuyuan Hu</p>
                <p>2.Mobile Computing Group: Yuyue Hu、Jinfan Zhang</p>
                <p>3.Urban Computing Group: Junhui Bi</p>
                <p>4.Traffic Intelligent Perception and Control Group: Hao Zhou</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Xuyuan Hu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Yuyue Hu、Jinfan Zhang's paper Sharing.</p>
                <p>3.Urban Computing Group: Junhui Bi's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Hao Zhou's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 102,
    title: "2025年CSSC小组第5次研讨会",
    author: "宁凯丽",
    create_date: "2025-3-7",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年3月4日，下午1:30</p>
              <p>移动计算组：2025年3月6日，下午6:30</p>
              <p>城市计算组：2025年3月7日，上午11:00</p>
              <p>交通智能感知与控制组：2025年3月7日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：郭旭	</p>
              <p>2.移动计算组：韩旭涛、胡逾越	</p>
              <p>3.城市计算组：刘璎辉	</p>
              <p>4.交通智能感知与控制组：孙亮	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.郭旭论文分享	</p>
              <p>2.韩旭涛、胡逾越论文分享	</p>
              <p>3.刘璎辉论文分享	</p>
              <p>4.孙亮论文分享	</p>



              `,
    title_en: "The 5th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: March 4, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: March 6, 2025, 6:30 pm</p>
                <p>Urban Computing Group: March 7, 2025, 11:00 am</p>
                <p>Traffic Intelligent Perception and Control Group: March 7, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Xu Guo</p>
                <p>2.Mobile Computing Group: Xutao Han, Yuyue Hu</p>
                <p>3.Urban Computing Group: Yinghui Liu</p>
                <p>4.Traffic Intelligent Perception and Control Group: Liang Sun</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Xu Guo's paper Sharing.</p>
                <p>2.Mobile Computing Group: Xutao Han, Yuyue Hu's paper Sharing.</p>
                <p>3.Urban Computing Group: Yinghui Liu's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Liang Sun's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 101,
    title: "2025年CSSC小组第4次研讨会",
    author: "宁凯丽",
    create_date: "2025-2-28",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年2月25日，下午1:30</p>
              <p>移动计算组：2025年2月27日，下午6:30</p>
              <p>交通智能感知与控制组：2025年2月28日，上午9:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：全体	</p>
              <p>2.移动计算组：戴哲豪	</p>
              <p>3.交通智能感知与控制组：吴佳文	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.学期工作安排	</p>
              <p>2.戴哲豪论文分享	</p>
              <p>3.吴佳文论文分享	</p>



              `,
    title_en: "The 4th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: February 25, 2025, 1:30 pm</p>
                <p>Mobile Computing Group: February 27, 2025, 6:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: February 28, 2025, 9:00 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: all</p>
                <p>2.Mobile Computing Group: Zhehao Dai</p>
                <p>3.Traffic Intelligent Perception and Control Group: Jiawen Wu</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Semester work arrangement.</p>
                <p>2.Mobile Computing Group: Zhehao Dai's paper Sharing.</p>
                <p>3.Traffic Intelligent Perception and Control Group: Jiawen Wu's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 100,
    title: "2025年CSSC小组第3次研讨会",
    author: "宁凯丽",
    create_date: "2025-1-17",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>移动计算组：2025年1月17日，下午3:30</p>
              <p>交通智能感知与控制组：2025年1月17日，上午8:40</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.移动计算组：韩旭涛	</p>
              <p>2.交通智能感知与控制组：张恺煜	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.韩旭涛论文分享	</p>
              <p>2.张恺煜论文分享	</p>



              `,
    title_en: "The 3th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mobile Computing Group: January 17, 2025, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: January 17, 2025, 8:40 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Mobile Computing Group: Xutao Han</p>
                <p>2.Traffic Intelligent Perception and Control Group: Kaiyu Zhang</p>



                <p><strong>Theme:</strong></p>
                <p>1.Mobile Computing Group: Xutao Han's paper Sharing.</p>
                <p>2.Traffic Intelligent Perception and Control Group: Kaiyu Zhang's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 99,
    title: "2025年CSSC小组第2次研讨会",
    author: "宁凯丽",
    create_date: "2025-1-10",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>移动计算组：2025年1月10日，下午3:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.移动计算组：胡逾越	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.胡逾越论文分享	</p>



              `,
    title_en: "The 2th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mobile Computing Group: January 10, 2025, 3:30 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Mobile Computing Group: Yuyue Hu</p>



                <p><strong>Theme:</strong></p>
                <p>1.Mobile Computing Group: Yuyue Hu's paper Sharing.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 98,
    title: "2025年CSSC小组第1次研讨会",
    author: "宁凯丽",
    create_date: "2025-1-3",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2025年1月3日，下午1:30</p>
              <p>城市计算组：2025年1月3日，下午2:30</p>
              <p>移动计算组：2025年1月3日，下午3:30</p>
              <p>交通智能感知与控制组：2025年1月3日，上午8:40</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：宁凯丽	</p>
              <p>2.城市计算组：胡泽昊	</p>
              <p>3.移动计算组：袁浩鹏	</p>
              <p>4.交通智能感知与控制组：无	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.宁凯丽论文分享	</p>
              <p>2.胡泽昊论文分享	</p>
              <p>3.袁浩鹏论文分享	</p>
              <p>4.工作内容交流	</p>



              `,
    title_en: "The 1th seminar of CSSC group in 2025",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: January 3, 2025, 1:30 pm</p>
                <p>Urban Computing Group: January 3, 2025, 2:30 pm</p>
                <p>Mobile Computing Group: January 3, 2025, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: January 3, 2025, 8:40 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Kaili Ning</p>
                <p>2.Urban Computing Group: Zehao Hu</p>
                <p>3.Mobile Computing Group: Haopeng Yuan</p>
                <p>4.Traffic Intelligent Perception and Control Group: None</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Kaili Ning's paper Sharing.</p>
                <p>2.Urban Computing Group: Zehao Hu's paper Sharing.</p>
                <p>3.Mobile Computing Group: Haopeng Yuan's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Job Content Exchange.</p>



                `,
    top: false,
    year: 2025,
  },
  {
    id: 97,
    title: "2024年CSSC小组第32次研讨会",
    author: "宁凯丽",
    create_date: "2024-12-27",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年12月27日，下午1:30</p>
              <p>城市计算组：2024年12月27日，下午2:30</p>
              <p>移动计算组：2024年12月27日，下午3:30</p>
              <p>交通智能感知与控制组：2024年12月27日，上午8:40</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：徐晨洋	</p>
              <p>2.城市计算组：邓俊慧	</p>
              <p>3.移动计算组：李国文	</p>
              <p>4.交通智能感知与控制组：王浩楠	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.徐晨洋论文分享	</p>
              <p>2.邓俊慧论文分享	</p>
              <p>3.李国文论文分享	</p>
              <p>4.王浩楠论文分享	</p>



              `,
    title_en: "The 32th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: December 27, 2024, 1:30 pm</p>
                <p>Urban Computing Group: December 27, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: December 27, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: December 27, 2024, 8:40 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Chenyang Xu</p>
                <p>2.Urban Computing Group: Junhui Deng</p>
                <p>3.Mobile Computing Group: Guowen Li</p>
                <p>4.Traffic Intelligent Perception and Control Group: Haonan Wang</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Chenyang Xu's paper Sharing.</p>
                <p>2.Urban Computing Group: Junhui Deng's paper Sharing.</p>
                <p>3.Mobile Computing Group: Guowen Li's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Haonan Wang's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 96,
    title: "2024年CSSC小组第31次研讨会",
    author: "宁凯丽",
    create_date: "2024-12-20",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年12月20日，下午1:30</p>
              <p>城市计算组：2024年12月20日，下午2:30</p>
              <p>移动计算组：2024年12月20日，下午3:30</p>
              <p>交通智能感知与控制组：2024年12月20日，上午8:40</p>
              <p>自然语言处理组：2024年12月18日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：叶恺伦	</p>
              <p>2.城市计算组：何雨薇	</p>
              <p>3.移动计算组：张锦帆	</p>
              <p>4.交通智能感知与控制组：吴佳文	</p>
              <p>5.自然语言处理组：无	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.叶恺伦论文分享	</p>
              <p>2.何雨薇论文分享	</p>
              <p>3.张锦帆论文分享	</p>
              <p>4.吴佳文论文分享	</p>
              <p>5.工作交流	</p>



              `,
    title_en: "The 31th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: December 20, 2024, 1:30 pm</p>
                <p>Urban Computing Group: December 20, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: December 20, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: December 20, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: December 18, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Kailun Ye</p>
                <p>2.Urban Computing Group: Yuwei He</p>
                <p>3.Mobile Computing Group: Jinfan Zhang</p>
                <p>4.Traffic Intelligent Perception and Control Group: Jiawen Wu</p>
                <p>5.Natural Language Processing Group: None</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Kailun Ye's paper Sharing.</p>
                <p>2.Urban Computing Group: Yuwei He's paper Sharing.</p>
                <p>3.Mobile Computing Group: Jinfan Zhang's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Jiawen Wu's paper Sharing.</p>
                <p>5.Natural Language Processing Group: Work exchange.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 95,
    title: "2024年CSSC小组第30次研讨会",
    author: "宁凯丽",
    create_date: "2024-12-13",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年12月13日，下午1:30</p>
              <p>城市计算组：2024年12月13日，下午2:30</p>
              <p>移动计算组：2024年12月13日，下午3:30</p>
              <p>交通智能感知与控制组：2024年12月13日，上午8:40</p>
              <p>自然语言处理组：2024年12月11日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：吴振鹏	</p>
              <p>2.城市计算组：刘晋	</p>
              <p>3.移动计算组：倪辰昊	</p>
              <p>4.交通智能感知与控制组：周昊	</p>
              <p>5.自然语言处理组：无	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.吴振鹏论文分享	</p>
              <p>2.刘晋论文分享	</p>
              <p>3.倪辰昊论文分享	</p>
              <p>4.周昊论文分享	</p>
              <p>5.工作交流	</p>



              `,
    title_en: "The 30th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: December 13, 2024, 1:30 pm</p>
                <p>Urban Computing Group: December 13, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: December 13, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: December 13, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: December 11, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Zhenpeng Wu</p>
                <p>2.Urban Computing Group: Jin Liu</p>
                <p>3.Mobile Computing Group: Chenhao Ni</p>
                <p>4.Traffic Intelligent Perception and Control Group: Hao Zhou</p>
                <p>5.Natural Language Processing Group: None</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Zhenpeng Wu's paper Sharing.</p>
                <p>2.Urban Computing Group: Jin Liu's paper Sharing.</p>
                <p>3.Mobile Computing Group: Chenhao Ni's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Hao Zhou's paper Sharing.</p>
                <p>5.Natural Language Processing Group: Work exchange.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 94,
    title: "2024年CSSC小组第29次研讨会",
    author: "宁凯丽",
    create_date: "2024-12-6",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年12月6日，下午1:30</p>
              <p>城市计算组：2024年12月6日，下午2:30</p>
              <p>交通智能感知与控制组：2024年12月6日，上午8:40</p>
              <p>自然语言处理组：2024年12月4日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：舒灿	</p>
              <p>2.城市计算组：吴一楠	</p>
              <p>3.交通智能感知与控制组：李宇龙	</p>
              <p>4.自然语言处理组：陈建林	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.舒灿论文分享	</p>
              <p>2.吴一楠论文分享	</p>
              <p>3.李宇龙论文分享	</p>
              <p>4.陈建林论文分享	</p>



              `,
    title_en: "The 29th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: December 6, 2024, 1:30 pm</p>
                <p>Urban Computing Group: December 6, 2024, 2:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: December 6, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: December 4, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Can Shu</p>
                <p>2.Urban Computing Group: Yinan Wu</p>
                <p>3.Traffic Intelligent Perception and Control Group: Yulong Li</p>
                <p>4.Natural Language Processing Group: Jianlin Chen</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Can Shu's paper Sharing.</p>
                <p>2.Urban Computing Group: Yinan Wu's paper Sharing.</p>
                <p>3.Traffic Intelligent Perception and Control Group: Yulong Li's paper Sharing.</p>
                <p>4.Natural Language Processing Group: Jianlin Chen's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 93,
    title: "2024年CSSC小组第28次研讨会",
    author: "宁凯丽",
    create_date: "2024-11-29",
    summary: "报告主题：博士生论坛会。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年11月29日，下午1:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.周文峰	</p>
              <p>2.张玉超	</p>
              <p>3.倪辰昊	</p>
              <p>4.顾文杰	</p>
              <p>5.Syauqie（邵齐）	</p>
              <p>6.Dominic（巴火）	</p>



              <p><strong>报告主题：</strong></p>
              <p>二年级及以上博士生结合自己研究任务进行工作汇报。	</p>



              <p><img src="/images/news/2024-11-29-report1.png"/></p>
              <p><img src="/images/news/2024-11-29-report2.png"/></p>
              <p><img src="/images/news/2024-11-29-report3.png"/></p>
              `,
    title_en: "The 28th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Doctoral Forum Meeting.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>November 29, 2024, 1:30 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Wenfeng Zhou</p>
                <p>2.Yuchao Zhang</p>
                <p>3.Chenhao Ni</p>
                <p>4.Wenjie Gu</p>
                <p>5.Syauqie Muhammad Marier</p>
                <p>6.Dominic</p>



                <p><strong>Theme:</strong></p>
                <p>Second year and above doctoral students present work reports based on their own research tasks.</p>



                <p><img src="/images/news/2024-11-29-report1.png"/></p>
                <p><img src="/images/news/2024-11-29-report2.png"/></p>
                <p><img src="/images/news/2024-11-29-report3.png"/></p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 92,
    title: "2024年CSSC小组第27次研讨会",
    author: "宁凯丽",
    create_date: "2024-11-22",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年11月22日，下午1:30</p>
              <p>城市计算组：2024年11月22日，下午2:30</p>
              <p>移动计算组：2024年11月22日，下午3:30</p>
              <p>交通智能感知与控制组：2024年11月22日，上午8:40</p>
              <p>自然语言处理组：2024年11月20日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：研二同学	</p>
              <p>2.城市计算组：研二同学	</p>
              <p>3.移动计算组：研二同学	</p>
              <p>4.交通智能感知与控制组：研二同学	</p>
              <p>5.自然语言处理组：邵齐	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.模拟开题答辩	</p>
              <p>2.模拟开题答辩	</p>
              <p>3.模拟开题答辩	</p>
              <p>4.模拟开题答辩	</p>
              <p>5.邵齐论文分享	</p>



              `,
    title_en: "The 27th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: November 22, 2024, 1:30 pm</p>
                <p>Urban Computing Group: November 22, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: November 22, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: November 22, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: November 20, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Second year graduate student</p>
                <p>2.Urban Computing Group: Second year graduate student</p>
                <p>3.Mobile Computing Group: Second year graduate student</p>
                <p>4.Traffic Intelligent Perception and Control Group: Second year graduate student</p>
                <p>5.Natural Language Processing Group: Syauqie Muhammad Marier</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Simulated opening defense.</p>
                <p>2.Urban Computing Group: Simulated opening defense.</p>
                <p>3.Mobile Computing Group: Simulated opening defense.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Simulated opening defense.</p>
                <p>5.Natural Language Processing Group: Syauqie Muhammad Marier's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 91,
    title: "2024年CSSC小组第26次研讨会",
    author: "宁凯丽",
    create_date: "2024-11-15",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年11月15日，下午1:30</p>
              <p>城市计算组：2024年11月15日，下午2:30</p>
              <p>移动计算组：2024年11月15日，下午3:30</p>
              <p>交通智能感知与控制组：2024年11月15日，上午8:40</p>
              <p>自然语言处理组：2024年11月15日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：刘蔚瑶	</p>
              <p>2.城市计算组：毕俊辉	</p>
              <p>3.移动计算组：Wail Al-Asad	</p>
              <p>4.交通智能感知与控制组：吴佳文	</p>
              <p>5.自然语言处理组：Dominic	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.刘蔚瑶论文分享	</p>
              <p>2.毕俊辉论文分享	</p>
              <p>3.Wail Al-Asad论文分享	</p>
              <p>4.吴佳文论文分享	</p>
              <p>5.Dominic论文分享	</p>



              `,
    title_en: "The 26th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: November 15, 2024, 1:30 pm</p>
                <p>Urban Computing Group: November 15, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: November 15, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: November 15, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: November 15, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Weiyao Liu</p>
                <p>2.Urban Computing Group: Junhui Bi</p>
                <p>3.Mobile Computing Group: Wail Al-Asad</p>
                <p>4.Traffic Intelligent Perception and Control Group: Jiawen Wu</p>
                <p>5.Natural Language Processing Group: Dominic</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Weiyao Liu's paper Sharing.</p>
                <p>2.Urban Computing Group: Junhui Bi's paper Sharing.</p>
                <p>3.Mobile Computing Group: Wail Al-Asad's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Jiawen Wu's paper Sharing.</p>
                <p>5.Natural Language Processing Group: Dominic's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 90,
    title: "2024年CSSC小组第25次研讨会",
    author: "宁凯丽",
    create_date: "2024-11-08",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>城市计算组：2024年11月08日，下午2:30</p>
              <p>移动计算组：2024年11月08日，下午3:30</p>
              <p>交通智能感知与控制组：2024年11月08日，上午8:40</p>
              <p>自然语言处理组：2024年11月06日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.城市计算组：胡泽昊	</p>
              <p>2.移动计算组：全体	</p>
              <p>3.交通智能感知与控制组：周昊	</p>
              <p>4.自然语言处理组：伊秋华	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.胡泽昊论文分享	</p>
              <p>2.工作内容汇报	</p>
              <p>3.周昊论文分享	</p>
              <p>4.伊秋华论文分享	</p>



              `,
    title_en: "The 25th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Urban Computing Group: November 8, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: November 8, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: November 8, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: November 6, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Urban Computing Group: Zehao Hu</p>
                <p>2.Mobile Computing Group: All members</p>
                <p>3.Traffic Intelligent Perception and Control Group: Hao Zhou</p>
                <p>4.Natural Language Processing Group: Qiuhua Yi</p>



                <p><strong>Theme:</strong></p>
                <p>1.Urban Computing Group: Zehao Hu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Work Content Report.</p>
                <p>3.Traffic Intelligent Perception and Control Group: Hao Zhou's paper Sharing.</p>
                <p>4.Natural Language Processing Group: Qiuhua Yi's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 89,
    title: "2024年CSSC小组第24次研讨会",
    author: "宁凯丽",
    create_date: "2024-11-01",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年11月01日，下午1:30</p>
              <p>自然语言处理组：2024年10月30日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：郑宏	</p>
              <p>2.自然语言处理组：赵宏彦	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.郑宏论文分享	</p>
              <p>2.赵宏彦论文分享	</p>



              `,
    title_en: "The 24th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: November 1, 2024, 1:30 pm</p>
                <p>Natural Language Processing Group: October 30, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Hong Zheng</p>
                <p>2.Natural Language Processing Group: Hongyan Zhao</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Hong Zheng's paper Sharing.</p>
                <p>2.Natural Language Processing Group: Hongyan Zhao's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 88,
    title: "2024年CSSC小组第23次研讨会",
    author: "宁凯丽",
    create_date: "2024-10-25",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>城市计算组：2024年10月25日，下午2:30</p>
              <p>移动计算组：2024年10月25日，下午3:30</p>
              <p>交通智能感知与控制组：2024年10月25日，上午8:40</p>
              <p>自然语言处理组：2024年10月23日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.城市计算组：刘璎辉	</p>
              <p>2.移动计算组：胡逾越	</p>
              <p>3.交通智能感知与控制组：孙亮	</p>
              <p>4.自然语言处理组：郭晓磊	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.刘璎辉论文分享	</p>
              <p>2.胡逾越论文分享	</p>
              <p>3.孙亮论文分享	</p>
              <p>4.郭晓磊论文分享	</p>



              `,
    title_en: "The 23th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Urban Computing Group: October 25, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: October 25, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: October 25, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: October 23, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Urban Computing Group: Yinghui Liu</p>
                <p>2.Mobile Computing Group: Yuyue Hu</p>
                <p>3.Traffic Intelligent Perception and Control Group: Liang Sun</p>
                <p>4.Natural Language Processing Group: Xiaolei Guo</p>



                <p><strong>Theme:</strong></p>
                <p>1.Urban Computing Group: Yinghui Liu's paper Sharing.</p>
                <p>2.Mobile Computing Group: Yuyue Hu's paper Sharing.</p>
                <p>3.Traffic Intelligent Perception and Control Group: Liang Sun's paper Sharing.</p>
                <p>4.Natural Language Processing Group: Xiaolei Guo's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 87,
    title: "2024年CSSC小组第22次研讨会",
    author: "宁凯丽",
    create_date: "2024-10-18",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年10月18日，下午1:30</p>
              <p>城市计算组：2024年10月18日，下午2:30</p>
              <p>移动计算组：2024年10月18日，下午3:30</p>
              <p>交通智能感知与控制组：2024年10月18日，上午8:40</p>
              <p>自然语言处理组：2024年10月16日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：邓兆林	</p>
              <p>2.城市计算组：沈钰琦	</p>
              <p>3.移动计算组：戴哲豪	</p>
              <p>4.交通智能感知与控制组：张恺煜	</p>
              <p>5.自然语言处理组：周泽海	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.邓兆林论文分享	</p>
              <p>2.沈钰琦论文分享	</p>
              <p>3.戴哲豪论文分享	</p>
              <p>4.张恺煜论文分享	</p>
              <p>5.周泽海论文分享	</p>



              `,
    title_en: "The 22th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: October 18, 2024, 1:30 pm</p>
                <p>Urban Computing Group: October 18, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: October 18, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: October 18, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: October 16, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Zhaolin Deng</p>
                <p>2.Urban Computing Group: Yuqi Shen</p>
                <p>3.Mobile Computing Group: Zhehao Dai</p>
                <p>4.Traffic Intelligent Perception and Control Group: Kaiyu Zhang</p>
                <p>5.Natural Language Processing Group: Zehai Zhou</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Zhaolin Deng's paper Sharing.</p>
                <p>2.Urban Computing Group: Yuqi Shen's paper Sharing.</p>
                <p>3.Mobile Computing Group: Zhehao Dai's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Kaiyu Zhang's paper Sharing.</p>
                <p>5.Natural Language Processing Group: Zehai Zhou's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 86,
    title: "2024年CSSC小组第21次研讨会",
    author: "宁凯丽",
    create_date: "2024-10-11",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>社会计算组：2024年10月11日，下午1:30</p>
              <p>城市计算组：2024年10月11日，下午2:30</p>
              <p>移动计算组：2024年10月11日，下午3:30</p>
              <p>交通智能感知与控制组：2024年10月11日，上午8:40</p>
              <p>自然语言处理组：2024年10月09日，晚上7:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼D435</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.社会计算组：沈哲辉	</p>
              <p>2.城市计算组：邓俊慧	</p>
              <p>3.移动计算组：张锦帆	</p>
              <p>4.交通智能感知与控制组：李宇龙	</p>
              <p>5.自然语言处理组：陈祥钒	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.沈哲辉论文分享	</p>
              <p>2.邓俊慧论文分享	</p>
              <p>3.张锦帆论文分享	</p>
              <p>4.李宇龙论文分享	</p>
              <p>5.陈祥钒论文分享	</p>



              `,
    title_en: "The 21th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Social Computing Group: October 11, 2024, 1:30 pm</p>
                <p>Urban Computing Group: October 11, 2024, 2:30 pm</p>
                <p>Mobile Computing Group: October 11, 2024, 3:30 pm</p>
                <p>Traffic Intelligent Perception and Control Group: October 11, 2024, 8:40 am</p>
                <p>Natural Language Processing Group: October 09, 2024, 7:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building D435</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Social Computing Group: Zhehui Shen</p>
                <p>2.Urban Computing Group: Junhui Deng</p>
                <p>3.Mobile Computing Group: Jinfan Zhang</p>
                <p>4.Traffic Intelligent Perception and Control Group: Yulong Li</p>
                <p>5.Natural Language Processing Group: Xiangfan Chen</p>



                <p><strong>Theme:</strong></p>
                <p>1.Social Computing Group: Zhehui Shen's paper Sharing.</p>
                <p>2.Urban Computing Group: Junhui Deng's paper Sharing.</p>
                <p>3.Mobile Computing Group: Jinfan Zhang's paper Sharing.</p>
                <p>4.Traffic Intelligent Perception and Control Group: Yulong Li's paper Sharing.</p>
                <p>5.Natural Language Processing Group: Xiangfan Chen's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 85,
    title: "2024年CSSC小组第20次研讨会",
    author: "宁凯丽",
    create_date: "2024-09-24",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年09月24日，下午1:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授、王蒙蒙老师、杜嘉欣老师</p>
              <p><strong>汇报人：</strong></p>
              <p>1.倪辰昊	</p>
              <p>2.郭晓磊	</p>
              <p>3.赵宏彦	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.倪辰昊论文分享	</p>
              <p>2.郭晓磊论文分享	</p>
              <p>3.赵宏彦论文分享	</p>



              `,
    title_en: "The 20th seminar of CSSC group in 2024",
    author_en: "Kaili Ning",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>September 24, 2024, 1:30 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu, Mengmeng Wang, Jiaxin Du</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Chenhao Ni</p>
                <p>2.Xiaolei Guo</p>
                <p>3.Hongyan Zhao</p>



                <p><strong>Theme:</strong></p>
                <p>1.Chenhao Ni's paper Sharing.</p>
                <p>2.Xiaolei Guo's paper Sharing.</p>
                <p>3.Hongyan Zhao's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 84,
    title: "2024年CSSC小组第19次研讨会",
    author: "舒灿",
    create_date: "2024-09-04",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年09月04日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张恺煜	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.张恺煜论文分享	</p>



              `,
    title_en: "The 19th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>September 04, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Kaiyu Zhang</p>



                <p><strong>Theme:</strong></p>
                <p>1.Kaiyu Zhang's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 83,
    title: "2024年CSSC小组第18次研讨会",
    author: "舒灿",
    create_date: "2024-08-11",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年08月11日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张文熠	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.张文熠论文分享	</p>



              `,
    title_en: "The 18th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>August 11, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Wenyi Zhang</p>



                <p><strong>Theme:</strong></p>
                <p>1.Wenyi Zhang's paper Sharing.</p>



                `,
    top: false,
    year: 2024,
  },
  {
    id: 82,
    title: "2024年CSSC小组第17次研讨会",
    author: "舒灿",
    create_date: "2024-08-07",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年08月07日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.王浩楠	</p>



              <p><strong>报告主题：</strong></p>
              <p>1.王浩楠论文分享	</p>


              `,
    title_en: "The 17th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>August 07, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Haonan Wang</p>



                <p><strong>Theme:</strong></p>
                <p>1.Haonan Wang's paper Sharing.</p>


                `,
    top: false,
    year: 2024,
  },
  {
    id: 81,
    title: "2024年CSSC小组第16次研讨会",
    author: "舒灿",
    create_date: "2024-07-24",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年07月24日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张文熠	</p>
              <p>2.张依媚	</p>
              <p>3.姚立民	</p>

              <p><strong>报告主题：</strong></p>
              <p>1.张文熠论文分享	</p>
              <p>2.张依媚论文分享	</p>
              <p>3.姚立民论文分享	</p>

              `,
    title_en: "The 16th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>July 24, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Wenyi Zhang</p>
                <p>2.Yimei Zhang</p>
                <p>3.Limin Yao</p>

                <p><strong>Theme:</strong></p>
                <p>1.Wenyi Zhang's paper Sharing.</p>
                <p>2.Yimei Zhang's paper Sharing.</p>
                <p>3.Limin Yao's paper Sharing.</p>

                `,
    top: false,
    year: 2024,
  },
  {
    id: 80,
    title: "2024年CSSC小组第15次研讨会",
    author: "舒灿",
    create_date: "2024-07-03",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年07月03日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.吴振鹏	</p>
              <p>2.邓兆林	</p>

              <p><strong>报告主题：</strong></p>
              <p>1.吴振鹏论文分享	</p>
              <p>2.邓兆林论文分享	</p>

              `,
    title_en: "The 15th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>July 03, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhenpeng Wu</p>
                <p>2.Zhaolin Deng</p>

                <p><strong>Theme:</strong></p>
                <p>1.Zhenpeng Wu's paper Sharing.</p>
                <p>2.Zhaolin Deng's paper Sharing.</p>

                `,
    top: false,
    year: 2024,
  },
  {
    id: 79,
    title: "2024年CSSC小组第14次研讨会",
    author: "舒灿",
    create_date: "2024-06-19",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年06月19日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.郭晓磊	</p>
              <p>2.刘蔚瑶	</p>

              <p><strong>报告主题：</strong></p>
              <p>1.郭晓磊论文分享	</p>
              <p>2.刘蔚瑶论文分享	</p>

              `,
    title_en: "The 14th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>June 19, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Xiaolei Guo</p>
                <p>2.Weiyao Liu</p>

                <p><strong>Theme:</strong></p>
                <p>1.Xiaolei Guo's paper Sharing.</p>
                <p>2.Weiyao Liu's paper Sharing.</p>

                `,
    top: false,
    year: 2024,
  },
  {
    id: 78,
    title: "2024年CSSC小组第13次研讨会",
    author: "舒灿",
    create_date: "2024-06-12",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年06月12日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.陈祥钒	</p>
              <p>2.刘璎辉	</p>
              <p>3.倪辰昊</p>
              <p>4.舒灿</p>
              <p><strong>报告主题：</strong></p>
              <p>1.陈祥钒论文分享	</p>
              <p>2.刘璎辉论文分享	</p>
              <p>3.倪辰昊论文分享 </p>
              <p>4.舒灿论文分享 </p>
              `,
    title_en: "The 13th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>June 12, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Xiangfan Chen</p>
                <p>2.Yinghui Liu</p>
                <p>3.Chenhao Ni</p>
                <p>4.Can Shu</p>
                <p><strong>Theme:</strong></p>
                <p>1.Xiangfan Chen's paper Sharing.</p>
                <p>2.Yinghui Liu's paper Sharing.</p>
                <p>3.Chenhao Ni's paper Sharing.</p>
                <p>4.Can Shu's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 77,
    title: "2024年CSSC小组第12次研讨会",
    author: "舒灿",
    create_date: "2024-06-05",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年06月05日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.研二学生</p>
              <p><strong>报告主题：</strong></p>
              <p>1.研二开题报告</p>

              `,
    title_en: "The 12th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>June 05, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Second-year graduate student</p>

                <p><strong>Theme:</strong></p>
                <p>1.Thesis proposal for the second year of graduate school.</p>

                `,
    top: false,
    year: 2024,
  },
  {
    id: 76,
    title: "2024年CSSC小组第11次研讨会",
    author: "舒灿",
    create_date: "2024-05-29",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年05月29日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.研二学生</p>
              <p><strong>报告主题：</strong></p>
              <p>1.研二开题报告</p>

              `,
    title_en: "The 11th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 29, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Second-year graduate student</p>

                <p><strong>Theme:</strong></p>
                <p>1.Thesis proposal for the second year of graduate school.</p>

                `,
    top: false,
    year: 2024,
  },
  {
    id: 75,
    title: "2024年CSSC小组第10次研讨会",
    author: "舒灿",
    create_date: "2024-05-22",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年05月22日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.刘晋	</p>
              <p>2.邵齐	</p>
              <p>3.何雨薇</p>
              <p><strong>报告主题：</strong></p>
              <p>1.刘晋论文分享</p>
              <p>2.邵齐论文分享</p>
              <p>3.何雨薇论文分享</p>
              `,
    title_en: "The 10th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 22, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Jin Liu</p>
                <p>2.Syauqie Muhammad Marie</p>
                <p>3.Yuwei He</p>
                <p><strong>Theme:</strong></p>
                <p>1.Jin Liu's paper Sharing.</p>
                <p>2.Syauqie Muhammad Marie's paper Sharing.</p>
                <p>3.Yuwei He's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 74,
    title: "2024年CSSC小组第9次研讨会",
    author: "舒灿",
    create_date: "2024-05-10",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年05月10日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.赵振振	</p>
              <p>2.朱柘潮	</p>
              <p>3.鲍寅威	</p>
              <p>4.林航	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.赵振振预答辩</p>
              <p>2.朱柘潮预答辩</p>
              <p>3.鲍寅威预答辩</p>
              <p>4.林航预答辩</p>
              `,
    title_en: "The 9th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 10, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhenzhen Zhao</p>
                <p>2.Tuochao Zhu</p>
                <p>3.Yinwei Bao</p>
                <p>4.Hang Lin</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zhenzhen Zhao's pre-denfence.</p>
                <p>2.Tuochao Zhu's pre-denfence.</p>
                <p>3.Yinwei Bao's pre-denfence.</p>
                <p>4.Hang Lin's pre-denfence.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 73,
    title: "2024年CSSC小组第8次研讨会",
    author: "舒灿",
    create_date: "2024-05-08",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年05月08日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.周涵林	</p>
              <p>2.李欢	</p>
              <p>3.王奔锋	</p>
              <p>4.张德举	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.周涵林预答辩</p>
              <p>2.李欢预答辩</p>
              <p>3.王奔锋预答辩</p>
              <p>4.张德举预答辩</p>
              `,
    title_en: "The 8th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 08, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Hanlin Zhou</p>
                <p>2.Huan Li</p>
                <p>3.Benfeng Wang</p>
                <p>4.Deju Zhang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Hanlin Zhou's pre-denfence.</p>
                <p>2.Huan Li's pre-denfence.</p>
                <p>3.Benfeng Wang's pre-denfence.</p>
                <p>4.Deju Zhang's pre-denfence.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 72,
    title: "2024年CSSC小组第7次研讨会",
    author: "舒灿",
    create_date: "2024-04-24",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年04月24日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.王凌云	</p>
              <p>2.马旭林	</p>
              <p>3.陈之瑜	</p>
              <p>4.王钧涛	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.王凌云预答辩</p>
              <p>2.马旭林预答辩</p>
              <p>3.陈之瑜预答辩</p>
              <p>4.王钧涛预答辩</p>
              `,
    title_en: "The 7th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>April 24, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Lingyun Wang</p>
                <p>2.Xulin Ma</p>
                <p>3.Zhiyu Chen</p>
                <p>4.Juntao Wang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Lingyun Wang's pre-denfence.</p>
                <p>2.Xulin Ma's pre-denfence.</p>
                <p>3.Zhiyu Chen's pre-denfence.</p>
                <p>4.Juntao Wang's pre-denfence.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 71,
    title: "2024年CSSC小组第6次研讨会",
    author: "舒灿",
    create_date: "2024-04-17",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年04月17日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.戴哲豪	</p>
              <p>2.王浩楠	</p>
              <p>3.赵宏彦	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.戴哲豪论文分享</p>
              <p>2.王浩楠论文分享</p>
              <p>3.赵宏彦论文分享</p>
              `,
    title_en: "The 6th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>April 17, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhehao Dai</p>
                <p>2.Haonan Wang</p>
                <p>3.Hongyan Zhao</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zhehao Dai's paper Sharing.</p>
                <p>2.Haonan Wang's paper Sharing.</p>
                <p>3.Hongyan Zhao's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 70,
    title: "2024年CSSC小组第5次研讨会",
    author: "舒灿",
    create_date: "2024-04-10",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年04月10日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张恺煜	</p>
              <p>2.李国文	</p>
              <p>3.伊秋华	</p>
              <p>4.郑宏	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.张恺煜论文分享</p>
              <p>2.李国文论文分享</p>
              <p>3.伊秋华论文分享</p>
              <p>4.郑宏论文分享</p>
              `,
    title_en: "The 5th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>April 10, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Kaiyu Zhang</p>
                <p>2.Huowen Li</p>
                <p>3.Qiuhua Yi</p>
                <p>4.Hong Zheng</p>
                <p><strong>Theme:</strong></p>
                <p>1.Kaiyu Zhang's paper Sharing.</p>
                <p>2.Huowen Li's paper Sharing.</p>
                <p>3.Qiuhua Yi's paper Sharing.</p>
                <p>4.Hong Zheng's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 69,
    title: "2024年CSSC小组第4次研讨会",
    author: "舒灿",
    create_date: "2024-04-03",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年04月03日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.吴振鹏	</p>
              <p>2.谈昊飞	</p>
              <p>3.张锦帆	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.吴振鹏论文分享</p>
              <p>2.谈昊飞论文分享</p>
              <p>3.张锦帆论文分享</p>
              `,
    title_en: "The 4th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>April 03, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhenpeng Wu</p>
                <p>2.Haofei Tan</p>
                <p>3.Jinfan Zhang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zhenpeng Wu's paper Sharing.</p>
                <p>2.Haofei Tan's paper Sharing.</p>
                <p>3.Jinfan Zhang's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 68,
    title: "2024年CSSC小组第3次研讨会",
    author: "舒灿",
    create_date: "2024-03-27",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年03月27日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼D317</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.戴哲豪	</p>
              <p>2.沈哲辉	</p>
              <p>3.周泽海	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.戴哲豪论文分享</p>
              <p>2.沈哲辉论文分享</p>
              <p>3.周泽海论文分享</p>
              `,
    title_en: "The 3th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>March 27, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building D317</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhehao Dai</p>
                <p>2.Zhehui Shen</p>
                <p>3.Zehai Zhou</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zhehao Dai's paper Sharing.</p>
                <p>2.Zhehui Shen's paper Sharing.</p>
                <p>3.Zehai Zhou's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 67,
    title: "2024年CSSC小组第2次研讨会",
    author: "舒灿",
    create_date: "2024-03-06",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年03月06日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张恺煜	</p>
              <p>2.邓兆林	</p>
              <p>3.沈钰琦	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.张恺煜论文分享</p>
              <p>2.邓兆林论文分享</p>
              <p>3.沈钰琦论文分享</p>
              `,
    title_en: "The 2th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>March 06, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Kaiyu Zhang</p>
                <p>2.Zhaolin Deng</p>
                <p>3.Yuqi Shen</p>
                <p><strong>Theme:</strong></p>
                <p>1.Kaiyu Zhang's paper Sharing.</p>
                <p>2.Zhaolin Deng's paper Sharing.</p>
                <p>3.Yuqi Shen's paper Sharing.</p>
                `,
    top: false,
    year: 2024,
  },
  {
    id: 66,
    title: "2024年CSSC小组第1次研讨会",
    author: "舒灿",
    create_date: "2024-01-04",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2024年01月04日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.姚立民	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.姚立民论文分享</p>
              `,
    title_en: "The 1th seminar of CSSC group in 2024",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>January 04, 2024, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Limin Yao</p>
                <p><strong>Theme:</strong></p>
                <p>1.Limin Yao's paper Sharing.</p>`,
    top: false,
    year: 2024,
  },
  {
    id: 65,
    title: "2023年CSSC小组第25次研讨会",
    author: "舒灿",
    create_date: "2023-12-21",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年12月21日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.刘璎辉	</p>
              <p>2.倪辰昊	</p>
              <p>3.舒灿	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.刘璎辉论文分享</p>
              <p>2.倪辰昊论文分享</p>
              <p>3.舒灿论文分享</p>
              `,
    title_en: "The 25th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>December 21, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Yinghui Liu</p>
                <p>2.Chenhao Ni</p>
                <p>3.Can Shu</p>
                <p><strong>Theme:</strong></p>
                <p>1.Yinghui Liu's paper Sharing.</p>
                <p>2.Chenhao Ni's paper Sharing.</p>
                <p>3.Can Shu's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 64,
    title: "2023年CSSC小组第24次研讨会",
    author: "舒灿",
    create_date: "2023-12-14",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年12月14日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.巴火	</p>
              <p>2.伊秋华	</p>
              <p>3.贺小骅	</p>
              <p>4.顾文杰	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.巴火论文分享</p>
              <p>2.伊秋华论文分享</p>
              <p>3.贺小骅论文分享</p>
              <p>4.顾文杰论文分享</p>
              `,
    title_en: "The 24th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>December 07, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Huo Ba</p>
                <p>2.Qiuhua Yi</p>
                <p>3.Xiaohua He</p>
                <p>4.Wenjie Gu</p>
                <p><strong>Theme:</strong></p>
                <p>1.Huo Ba's paper Sharing.</p>
                <p>2.Qiuhua Yi's paper Sharing.</p>
                <p>3.Xiaohua He's paper Sharing.</p>
                <p>4.Wenjie Gu's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 63,
    title: "2023年CSSC小组第23次研讨会",
    author: "舒灿",
    create_date: "2023-12-07",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年12月07日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.邵齐	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.邵齐论文分享</p>
              `,
    title_en: "The 23th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>December 07, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Shao Qi</p>
                <p><strong>Theme:</strong></p>
                <p>1.Shao Qi's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 62,
    title: "2023年CSSC小组第22次研讨会",
    author: "舒灿",
    create_date: "2023-11-30",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年11月30日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.倪辰昊	</p>
              <p>2.王凌云	</p>
              <p>3.周泽海	</p>
              <p>4.郑宏	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.倪辰昊论文分享</p>
              <p>2.王凌云论文分享</p>
              <p>3.周泽海论文分享</p>
              <p>4.郑宏论文分享</p>
              `,
    title_en: "The 22th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>November 30, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Haochen Ni</p>
                <p>2.Lingyun Wang</p>
                <p>3.Zehai Zhou</p>
                <p>4.Hong Zheng</p>
                <p><strong>Theme:</strong></p>
                <p>1.Haochen Ni's paper Sharing.</p>
                <p>2.Lingyun Wang's paper Sharing.</p>
                <p>3.Zehai Zhou's paper Sharing.</p>
                <p>4.Hong Zheng's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 61,
    title: "2023年CSSC小组第21次研讨会",
    author: "舒灿",
    create_date: "2023-11-23",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年11月23日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.刘晋	</p>
              <p>2.李国文	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.刘晋论文分享</p>
              <p>2.李国文论文分享</p>`,
    title_en: "The 21th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>November 23, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Jin Liu</p>
                <p>2.Guowen Li</p>
                <p><strong>Theme:</strong></p>
                <p>1.Jin Liu's paper Sharing.</p>
                <p>2.Guowen Li's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 60,
    title: "2023年CSSC小组第20次研讨会",
    author: "舒灿",
    create_date: "2023-11-16",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年11月16日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A318</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.马旭林	</p>
              <p>2.李欢	</p>
              <p>3.陈祥钒	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.马旭林论文分享</p>
              <p>2.李欢论文分享</p>
              <p>3.陈祥钒论文分享</p>`,
    title_en: "The 20th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>November 16, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A318</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Xulin Ma</p>
                <p>2.Huan Li</p>
                <p>3.Xiangfan Chen</p>
                <p><strong>Theme:</strong></p>
                <p>1.Xulin Ma's paper Sharing.</p>
                <p>2.Huan Li's paper Sharing.</p>
                <p>3.Xiangfan's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 59,
    title: "2023年CSSC小组第19次研讨会",
    author: "舒灿",
    create_date: "2023-11-09",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年11月09日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.顾文杰	</p>
              <p><strong>报告主题：</strong></p>
              <p>1.顾文杰论文分享</p>`,
    title_en: "The 19th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>November 09, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Wenjie Gu</p>
                <p><strong>Theme:</strong></p>
                <p>1.Wenjie Gu's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 58,
    title: "2023年CSSC小组第18次研讨会",
    author: "舒灿",
    create_date: "2023-11-02",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年11月02日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.周文峰	</p>
              <p>2.赵宏彦</p>
              <p>3.邓俊慧</p>
              <p><strong>报告主题：</strong></p>
              <p>1.周文峰论文分享</p>
              <p>2.赵宏彦论文分享</p>
              <p>3.邓俊慧论文分享</p>`,
    title_en: "The 18th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>November 02, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Wenfeng Zhou</p>
                <p>2.Hongyan Zhao</p>
                <p>3.Junhui Deng</p>
                <p><strong>Theme:</strong></p>
                <p>1.Wenfeng Zhou's paper Sharing.</p>
                <p>2.Hongyan Zhao's paper Sharing.</p>
                <p>3.Junhui Deng's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },


  {
    id: 57,
    title: "2023年CSSC小组第17次研讨会",
    author: "舒灿",
    create_date: "2023-10-26",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年10月26日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.尹秋华	</p>
              <p>2.沈哲辉</p>
              <p><strong>报告主题：</strong></p>
              <p>1.尹秋华论文分享</p>
              <p>2.沈哲辉论文分享</p>`,
    title_en: "The 17th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>October 26, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Qiuhua Yin</p>
                <p>2.Zhehui Shen</p>
                <p><strong>Theme:</strong></p>
                <p>1.Qiuhua Yin's paper Sharing.</p>
                <p>2.Zhehui Shen's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 56,
    title: "2023年CSSC小组第16次研讨会",
    author: "舒灿",
    create_date: "2023-10-19",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年10月19日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.袁浩鹏	</p>
              <p>2.郭晓磊</p>
              <p>3.何雨薇</p>
              <p><strong>报告主题：</strong></p>
              <p>1.袁浩鹏论文分享</p>
              <p>2.郭晓磊论文分享</p>
              <p>3.何雨薇论文分享</p>`,
    title_en: "The 16th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>October 19, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Haopeng Yuan</p>
                <p>2.Xiaolei Guo</p>
                <p>3.Yuwei He</p>
                <p><strong>Theme:</strong></p>
                <p>1.Haopeng Yuan's paper Sharing.</p>
                <p>2.Xiaolei Guo's paper Sharing.</p>
                <p>3.Yuwei He's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },

  {
    id: 55,
    title: "2023年CSSC小组第15次研讨会",
    author: "舒灿",
    create_date: "2023-10-12",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年10月12日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张依媚</p>
              <p>2.邓俊慧</p>
              <p>3.周涵林</p>
              <p><strong>报告主题：</strong></p>
              <p>1.张依媚论文分享</p>
              <p>2.邓俊慧论文分享</p>
              <p>3.周涵林论文分享</p>`,
    title_en: "The 15th seminar of CSSC group in 2023",
    author_en: "Can Shu",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>October 12, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Yimei Zhang</p>
                <p>2.Junhui Deng</p>
                <p>3.Hanlin Zhou</p>
                <p><strong>Theme:</strong></p>
                <p>1.Yimei Zhang's paper Sharing.</p>
                <p>2.Junhui Deng's paper Sharing.</p>
                <p>3.Hanlin Zhou's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 54,
    title: "2023年CSSC小组第14次研讨会",
    author: "何雨薇",
    create_date: "2023-06-09",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年06月09日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.何雨薇</p>
              <p>2.毕俊辉</p>
              <p>3.王凌云</p>
              <p>4.马旭林</p>
              <p><strong>报告主题：</strong></p>
              <p>1.何雨薇论文分享</p>
              <p>2.毕俊辉论文分享</p>
              <p>3.王凌云论文分享</p>
              <p>4.马旭林论文分享</p>`,
    title_en: "The 14th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>June 9, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Yuwei He</p>
                <p>2.Junhui Bi</p>
                <p>3.Lingyun Wang</p>
                <p>4.Xulin Ma</p>
                <p><strong>Theme:</strong></p>
                <p>1.Yuwei He's paper Sharing.</p>
                <p>2.Junhui Bi's paper Sharing.</p>
                <p>3.Lingyun Wang's paper Sharing.</p>
                <p>4.Xulin Ma's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 53,
    title: "2023年CSSC小组第13次研讨会",
    author: "何雨薇",
    create_date: "2023-06-02",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年06月02日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.顾文杰</p>
              <p>2.毕俊辉</p>
              <p>3.郑宏</p>
              <p><strong>报告主题：</strong></p>
              <p>1.顾文杰论文分享</p>
              <p>2.毕俊辉论文分享</p>
              <p>3.郑宏论文分享</p>`,
    title_en: "The 13th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>June 2, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.WenJie Gu</p>
                <p>2.Junhui Bi</p>
                <p>3.Hong Zheng</p>
                <p><strong>Theme:</strong></p>
                <p>1.WenJie Gu's paper Sharing.</p>
                <p>2.Junhui Bi's paper Sharing.</p>
                <p>3.Hong Zheng's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 52,
    title: "2023年CSSC小组第12次研讨会",
    author: "何雨薇",
    create_date: "2023-5-26",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年5月26日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.李国文</p>
              <p>2.袁浩鹏</p>
              <p>3.沈哲辉</p>
              <p><strong>报告主题：</strong></p>
              <p>1.李国文论文分享</p>
              <p>2.袁浩鹏论文分享</p>
              <p>3.沈哲辉论文分享</p>`,
    title_en: "The 12th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 26, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Guowen Li</p>
                <p>2.Haopeng Yuan</p>
                <p>3.Zhehui Shen</p>
                <p><strong>Theme:</strong></p>
                <p>1.Guowen Li's paper Sharing.</p>
                <p>2.Haopeng Yuan's paper Sharing.</p>
                <p>3.Zhehui Shen's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 51,
    title: "2023年CSSC小组第11次研讨会",
    author: "何雨薇",
    create_date: "2023-5-19",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年5月18日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.沈哲辉</p>
              <p>2.伊秋华</p>
              <p><strong>报告主题：</strong></p>
              <p>1.沈哲辉论文分享</p>
              <p>2.伊秋华论文分享</p>`,
    title_en: "The 11th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 19, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhehui Shen</p>
                <p>2.Qiuhua Yi</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zhehui Shen's paper Sharing.</p>
                <p>2.Qiuhua Yi's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 50,
    title: "2023年CSSC小组第10次研讨会",
    author: "何雨薇",
    create_date: "2023-5-05",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年5月5日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.袁浩鹏</p>
              <p>2.刘晋</p>
              <p>3.潘企弘</p>
              <p><strong>报告主题：</strong></p>
              <p>1.袁浩鹏论文分享</p>
              <p>2.刘晋论文分享</p>
              <p>3.潘企弘论文分享</p>`,
    title_en: "The 10th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 5, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.HaoPeng Yuan</p>
                <p>2.Jin Liu</p>
                <p>3.QiHong Pan</p>
                <p><strong>Theme:</strong></p>
                <p>1.HaoPeng Yuan's paper Sharing.</p>
                <p>2.Jin Liu's paper Sharing.</p>
                <p>3.QiHong Pan's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 49,
    title: "2023年CSSC小组第9次研讨会",
    author: "何雨薇",
    create_date: "2023-4-28",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年4月28日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.郑宏</p>
              <p>2.张依媚</p>
              <p>3.周泽海</p>
              <p>4.邓俊慧</p>
              <p>5.陈祥钒</p>
              <p><strong>报告主题：</strong></p>
              <p>1.郑宏论文分享</p>
              <p>2.张依媚论文分享</p>
              <p>3.周泽海论文分享</p>
              <p>4.邓俊慧论文分享</p>
              <p>5.陈祥钒论文分享</p>`,
    title_en: "The 9th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Apr 28, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Hong Zheng</p>
                <p>2.YiMei Zhang</p>
                <p>3.ZeHai Zhou</p>
                <p>4.JunHui Deng</p>
                <p>5.XiangFan Chen</p>
                <p><strong>Theme:</strong></p>
                <p>1.Hong Zheng's paper Sharing.</p>
                <p>2.YiMei Zhang's paper Sharing.</p>
                <p>3.ZeHai Zhou's paper Sharing.</p>
                <p>4.JunHui Deng's paper Sharing.</p>
                <p>5.XiangFan Chen's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 48,
    title: "2023年CSSC小组第8次研讨会",
    author: "何雨薇",
    create_date: "2023-4-21",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年4月21日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.胡泽昊</p>
              <p>2.李国文</p>
              <p><strong>报告主题：</strong></p>
              <p>1.胡泽昊论文分享</p>
              <p>2.李国文论文分享</p>`,
    title_en: "The 8th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mar 24, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zehao Hu </p>
                <p>2.Guowen Li</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zehao Hu's paper Sharing.</p>
                <p>2.Guowen Li's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 47,
    title: "2023年CSSC小组第7次研讨会",
    author: "何雨薇",
    create_date: "2023-4-14",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年4月14日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.顾文杰</p>
              <p>2.刘璎辉</p>
              <p>3.刘晋</p>
              <p>4.伊秋华</p>
              <p><strong>报告主题：</strong></p>
              <p>1.顾文杰论文分享</p>
              <p>2.刘璎辉论文分享</p>
              <p>3.刘晋论文分享</p>
              <p>4.伊秋华论文分享</p>`,
    title_en: "The 7th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Apr 14, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.WenJie Gu</p>
                <p>2.YingHui Liu</p>
                <p>3.Jin Liu</p>
                <p>4.QiuHua Yi</p>
                <p><strong>Theme:</strong></p>
                <p>1.WenJie Gu's paper Sharing.</p>
                <p>2.YingHui Liu's paper Sharing.</p>
                <p>3.Jin Liu's paper Sharing.</p>
                <p>4.QiuHua Yi's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 46,
    title: "2023年CSSC小组第6次研讨会",
    author: "何雨薇",
    create_date: "2023-4-07",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年4月7日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.何雨薇</p>
              <p>2.张依媚</p>
              <p>3.帅思越</p>
              <p><strong>报告主题：</strong></p>
              <p>1.何雨薇论文分享</p>
              <p>2.张依媚论文分享</p>
              <p>3.帅思越论文分享</p>`,
    title_en: "The 6th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Apr 7, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.YuWei He</p>
                <p>2.YiMei Zhang</p>
                <p>3.SiYue Shuai</p>
                <p><strong>Theme:</strong></p>
                <p>1.YuWei He's paper Sharing.</p>
                <p>2.YiMei Zhang's paper Sharing.</p>
                <p>3.SiYue Shuai's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 45,
    title: "2023年CSSC小组第5次研讨会",
    author: "何雨薇",
    create_date: "2023-3-31",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年3月31日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.李欢</p>
              <p>2.杨筱雪</p>
              <p>3.王钧涛</p>
              <p>4.帅思越</p>
              <p><strong>报告主题：</strong></p>
              <p>1.李欢论文分享</p>
              <p>2.杨筱雪论文分享</p>
              <p>3.王钧涛论文分享</p>
              <p>4.帅思越论文分享</p>`,
    title_en: "The 5th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mar 31, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Huan Li</p>
                <p>2.XiaoXue Yang</p>
                <p>3.JunTao Wang</p>
                <p>4.SiYue Shuai</p>
                <p><strong>Theme:</strong></p>
                <p>1.Huan Li's paper Sharing.</p>
                <p>2.XiaoXue Yang's paper Sharing.</p>
                <p>3.JunTao Wang's paper Sharing.</p>
                <p>4.SiYue Shuai's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 44,
    title: "2023年CSSC小组第4次研讨会",
    author: "何雨薇",
    create_date: "2023-3-24",
    summary: "报告主题：个人论文分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年3月24日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A411</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.胡泽昊</p>
              <p>2.李国文</p>
              <p><strong>报告主题：</strong></p>
              <p>1.胡泽昊论文分享</p>
              <p>2.李国文论文分享</p>`,
    title_en: "The 4th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Personal paper sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mar 24, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A411</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zehao Hu </p>
                <p>2.Guowen Li</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zehao Hu's paper Sharing.</p>
                <p>2.Guowen Li's paper Sharing.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 43,
    title: "2023年CSSC小组第3次研讨会",
    author: "何雨薇",
    create_date: "2023-3-17",
    summary: "报告主题：个人论文进展介绍。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年3月17日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.王奔锋</p>
              <p>2.张德举</p>
              <p>3.周涵林</p>
              <p>4.鲍寅威</p>
              <p><strong>报告主题：</strong></p>
              <p>1.王奔锋汇报个人论文进展</p>
              <p>2.张德举汇报个人论文进展</p>
              <p>3.周涵林汇报个人论文进展</p>
              <p>4.鲍寅威汇报个人论文进展</p>`,
    title_en: "The 3th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Introduction to the Progress of Personal Paper.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mar 17, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Benfeng Wang </p>
                <p>2.Deju Zhang</p>
                <p>3.Hanlin Zhou</p>
                <p>4.Yinwei Bao</p>
                <p><strong>Theme:</strong></p>
                <p>1.Benfeng Wang reports on the progress of personal paper Progress.</p>
                <p>2.Deju Zhang's report personal paper progress.</p>
                <p>3.Hanlin Zhou reported on his paper progress.</p>
                <p>4.Yinwei Bao reported on her paper progress.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 42,
    title: "2023年CSSC小组第2次研讨会",
    author: "何雨薇",
    create_date: "2023-3-03",
    summary: "报告主题：个人论文进展介绍。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年3月03日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.林航</p>
              <p>2.陈之瑜</p>
              <p>3.朱柘潮</p>
              <p>4.张文熠</p>
              <p><strong>报告主题：</strong></p>
              <p>1.林航汇报个人论文进展</p>
              <p>2.陈之瑜汇报个人论文进展</p>
              <p>3.朱柘潮汇报个人论文进展</p>
              <p>4.张文熠汇报个人论文进展</p>`,
    title_en: "The 2th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: Introduction to the Progress of Personal Paper.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Mar 03, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Hang Lin </p>
                <p>2.Zhiyu Chen</p>
                <p>3.Zhechao Zhu</p>
                <p>4.Wenyi Zhang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Hang Lin reports on the progress of personal paper Progress.</p>
                <p>2.Zhiyu Chen's report personal paper progress.</p>
                <p>3.Zhechao Zhu reported on his paper progress.</p>
                <p>4.Wenyi Zhang reported on his paper progress.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 41,
    title: "2023年CSSC小组第1次研讨会",
    author: "何雨薇",
    create_date: "2023-2-28",
    summary: "报告主题：研三全体同学汇报毕业论文大框架，大家探讨并提出意见。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2023年2月24日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>全体研三同学</p>
              <p><strong>报告主题：</strong></p>
              <p>毕业论文大框架</p>`,
    title_en: "The 1th seminar of CSSC group in 2023",
    author_en: "YuWei He",
    summary_en:
      "Report topic: All the students in the third grade report the overall framework of the graduation thesis, and discuss and put forward suggestions.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Feb 24, 2023, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>All the students in Grade Three </p>
                <p><strong>Theme:</strong></p>
                <p>General framework of graduation thesis.</p>`,
    top: false,
    year: 2023,
  },
  {
    id: 40,
    title: "2022年CSSC小组第13次研讨会",
    author: "何雨薇",
    create_date: "2022-12-03",
    summary: "报告主题：个人论文进展介绍；个人研究进度介绍。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年12月02日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.朱柘潮</p>
              <p>2.王钧涛</p>
              <p>3.毕俊辉</p>
              <p>4.潘企弘</p>
              <p><strong>报告主题：</strong></p>
              <p>1.朱柘潮汇报个人论文进展</p>
              <p>2.王钧涛汇报个人研究进展</p>
              <p>3.毕俊辉汇报个人研究进展</p>
              <p>4.潘企弘汇报个人研究进展</p>`,
    title_en: "The 13th seminar of CSSC group in 2022",
    author_en: "YuWei He",
    summary_en:
      "Report topic: introduction to the progress of personal papers; Introduction to personal research progress.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Dec 02, 2022, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Zhechao Zhu </p>
                <p>2.Juntao Wang</p>
                <p>3.Junhui Bi</p>
                <p>4.Qihong Pan</p>
                <p><strong>Theme:</strong></p>
                <p>1.Zhechao Zhu reports on the progress of personal paper Progress.</p>
                <p>2.Juntao Wang's report personal research progress.</p>
                <p>3.Junhui Bi reported on her research progress.</p>
                <p>4.Qihong Pan reported on his research progress.</p>`,
    top: false,
    year: 2022,
  },
  {
    id: 39,
    title: "2022年CSSC小组第12次研讨会",
    author: "何雨薇",
    create_date: "2022-11-18",
    summary: "报告主题：个人论文进展介绍；个人研究进度介绍。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年11月18日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.陈之瑜</p>
              <p>2.鲍寅威</p>
              <p>3.帅思越</p>
              <p>4.崔成勇</p>
              <p><strong>报告主题：</strong></p>
              <p>1.陈之瑜汇报个人论文进展</p>
              <p>2.鲍寅威汇报个人研究进展</p>
              <p>3.帅思越汇报个人研究进展</p>
              <p>4.崔成勇汇报个人研究进展</p>`,
    title_en: "The 12th seminar of CSSC group in 2022",
    author_en: "YuWei He",
    summary_en:
      "Report topic: introduction to the progress of personal papers; Introduction to personal research progress.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Nov 18, 2022, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.ZhiYu Chen</p>
                <p>2.YinWei Bao</p>
                <p>3.SiYue Shuai</p>
                <p>4.ChengYong Cui</p>
                <p><strong>Theme:</strong></p>
                <p>1. ZhiYu Chen reports on the progress of personal paper Progress.</p>
                <p>2.YinWei Bao's report personal research progress.</p>
                <p>3.SiYue Shuai reported on her research progress.</p>
                <p>4.ChengYong Cui reported on his research progress.</p>`,
    top: false,
    year: 2022,
  },
  {
    id: 38,
    title: "2022年CSSC小组第11次研讨会",
    author: "张德举",
    create_date: "2022-11-04",
    summary: "报告主题：夏峰教授做有关可信图学习的报告；个人论文进展介绍；个人研究进度介绍。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年11月4日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.夏锋</p>
              <p>2.申思</p>
              <p>3.林航</p>
              <p><strong>报告主题：</strong></p>
              <p>1.夏峰教授做有关可信图学习的报告</p>
              <p>2.申思汇报个人论文进展</p>
              <p>3.林航汇报个人研究进展</p>`,
    title_en: "The 11th seminar of CSSC group in 2022",
    author_en: "Deju Zhang",
    summary_en:
      "Report Subject: Professor Xia Feng gives a report on the study of credible map; Introduction to the progress of personal papers; Introduction to personal research progress.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Nov 4, 2022, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Feng Xia</p>
                <p>2.Si Shen</p>
                <p>3.Hang Lin</p>
                <p><strong>Theme:</strong></p>
                <p>1.Professor Xia Feng gives a report on the study of credible map.</p>
                <p>2.Si Shen's report personal paper progress.</p>
                <p>3.Hang Lin reported on his research progress.</p>`,
    top: false,
    year: 2022,
  },
  {
    id: 37,
    title: "2022年CSSC小组第10次研讨会",
    author: "张德举",
    create_date: "2022-10-21",
    summary: "报告主题：个人研究进度介绍；阅读文献分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年10月21日，上午9:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.张玉超</p>
              <p>2.张文熠</p>
              <p>3.杨筱雪</p>
              <p><strong>报告主题：</strong></p>
              <p>1.张玉超论文分享</p>
              <p>2.张文熠汇报个人研究进展</p>
              <p>3.杨筱雪汇报个人研究进展</p>`,
    title_en: "The 10th seminar of CSSC group in 2022",
    author_en: "Deju Zhang",
    summary_en:
      "Report Subject: Introduction to personal research progress; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>Oct 20, 2022, 9:30 am</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Yuchao Zhang</p>
                <p>2.Wenyi Zhang</p>
                <p>2.Xiaoxue Yang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Yuchao Zhang's paper sharing.</p>
                <p>2.Wenyi Zhang reported his personal research progress.</p>
                <p>3.Xiaoxue Yang reported on her research progress.</p>`,
    top: false,
    year: 2022,
  },
  {
    id: 36,
    title: "2022年CSSC小组第7次研讨会",
    author: "杨筱雪",
    create_date: "2022-05-20",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年05月20日，下午1:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.王奔锋</p>
              <p>2.李欢</p>
              <p>3.周涵林</p>
              <p><strong>报告主题：</strong></p>
              <p>1.王奔锋汇报工作最新进展"Game theory of government policy in response to COVID-19"</p>
              <p>2.李欢分享《数据异常检测研究》</p>
              <p>3.周涵林分享“踩坑总结于新思路汇报”</p>`,
    title_en: "The 7th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 20, 2022, 1:30 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Benfeng Wang</p>
                <p>2.Huan Li</p>
                <p>2.Hanlin Zhou</p>
                <p><strong>Theme:</strong></p>
                <p>1.Benfeng Wang reports on the latest work progress "Game theory of government policy in response to COVID-19".</p>
                <p>2.Huan Li shares "Research on Data Anomaly Detection".</p>
                <p>3.Hanlin Zhou shared "The Summary of Stepping on the Pit and the Report on New Ideas".</p>`,
    top: false,
    year: 2022,
  },
  {
    id: 35,
    title: "2022年CSSC小组第6次研讨会",
    author: "杨筱雪",
    create_date: "2022-05-11",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年05月06日，下午1:30</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.潘企弘</p>
              <p>2.李宁</p>
              <p>3.王凌云</p>
              <p><strong>报告主题：</strong></p>
              <p>1.潘企弘分享"城市知识图谱的表示学习"的相关研究和方法</p>
              <p>2.李宁作毕业答辩模拟汇报《基于多特征表征和迁移学习的新冠疫情预测与评估》</p>
              <p>3.王凌云报告综述最新进展《Horizontal Federated Recommender System: A Survey》</p>`,
    title_en: "The 6th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>May 06, 2022, 1:30 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Qihong Pan</p>
                <p>2.Ning Li</p>
                <p>2.Lingyun Wang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Qihong Pan shares related research and methods on "Representation Learning of Urban Knowledge Graph".</p>
                <p>2.Ning Li made a graduation defense simulation report "New Crown Epidemic Prediction and Evaluation Based on Multi-feature Representation and Transfer Learning".</p>
                <p>3.Lingyun Wang reported the latest progress of the review "Horizontal Federated Recommender System: A Survey".</p>`,
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2022,
  },
  {
    id: 34,
    title: "2022年CSSC小组第5次研讨会",
    author: "杨筱雪",
    create_date: "2022-04-25",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: `<p><strong>报告时间：</strong></p>
              <p>2022年04月22日，下午18:00</p>
              <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
              <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
              <p><strong>汇报人：</strong></p>
              <p>1.周文峰</p>
              <p>2.刘娜利</p>
              <p>3.王均涛</p>
              <p><strong>报告主题：</strong></p>
              <p>1.周文峰分享论文《Graph Convolutional Adversarial Networks for Spatiotemporal Anomay Detection》</p>
              <p>2.刘娜利报告论文最新进展《Traffic Flow Imputation Based on Independent-Joint Spatiotemporal Generative Adversarial Networks》</p>
              <p>3.王均涛报告论文最新进展《基于多模态特征提取的轻量级网络驾驶行为分析方法》</p>`,
    title_en: "The 5th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                <p>April 22, 2022, 6:00 pm</p>
                <p><strong>Report location:</strong>
                </p><p>Computer Building A320</p>
                <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                <p><strong>Reporter :</strong></p>
                <p>1.Wenfeng Zhou</p>
                <p>2.Nali Liu</p>
                <p>2.Juntao Wang</p>
                <p><strong>Theme:</strong></p>
                <p>1.Wenfeng Zhou shared the paper "Graph Convolutional Adversarial Networks for Spatiotemporal Anomay Detection".</p>
                <p>2.Nali Liu reported the latest progress of the paper "Traffic Flow Imputation Based on Independent-Joint Spatiotemporal Generative Adversarial Networks".</p>
                <p>3.Juntao Wang reported the latest progress of the paper "Lightweight network driving behavior analysis method based on multimodal feature extraction"</p>`,
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2022,
  },
  {
    id: 33,
    title: "2022年CSSC小组第4次研讨会",
    author: "杨筱雪",
    create_date: "2022-04-08",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: `<p><strong>报告时间：</strong></p>
                  <p>2022年04月08日，下午1：30</p>
                  <p><strong>报告地点：</strong></p><p>计算机楼A320</p>
                  <p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
                  <p><strong>汇报人：</strong></p>
                  <p>1.季展豪</p>
                  <p>2.郦鹏飞</p>
                  <p>3.陈洋</p>
                  <p><strong>报告主题：</strong></p>
                  <p>1.季展豪分享最新研究进展《Multi-vehicle trajectory tracking based on spatial–temporal interaction》</p>
                  <p>2.郦鹏飞分享论文最新进展《Spatio-Temporal Interactive Graph Convolution Network for Vehicle Trajectory Prediction》</p>
                  <p>3.陈洋作毕业答辩模拟汇报《基于时空图表示学习的城市交通事故预测方法研究》</p>`,
    title_en: "The 4th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                    <p>April 8, 2022, 1:30 pm</p>
                    <p><strong>Report location:</strong>
                    </p><p>Computer Building A320</p>
                    <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                    <p><strong>Reporter :</strong></p>
                    <p>1.Zhanhao Ji</p>
                    <p>2.Pengfei Li</p>
                    <p>2.Yang Chen</p>
                    <p><strong>Theme:</strong></p>
                    <p>1.Zhanhao Ji shared the latest research progress "multi vehicle trajectory tracking based on spatial–temporary interaction".</p>
                    <p>2.Pengfei Li shared the latest progress of the paper "spatial temporal interactive graph revolution network for vehicle trajectory prediction".</p>
                    <p>3.Yang Chen gave a simulated report on graduation defense: "Research on urban traffic accident prediction method based on spatio-temporal map representation learning".</p>`,
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2022,
  },
  {
    id: 32,
    title: "2022年CSSC小组第3次研讨会",
    author: "杨筱雪",
    create_date: "2022-03-25",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content: `<p><strong>报告时间：</strong></p>
                  <p>2022年03月25日，下午1：30</p>
                  <p><strong>报告地点：</strong>
                  </p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p>
                  <p><strong>汇报人：</strong></p><p>1.黄志强</p><p>2.徐翼飞</p><p>3.谭佳佳</p>
                  <p><strong>报告主题：</strong></p>
                  <p>1.黄志强分享论文最新进展《UOD: Urban Overtourism Detection Based on Multi-source Data and Spatio-temporal Convolution》</p>
                  <p>2.徐翼飞分享论文最新进展《基于预训练语言模型的细粒度情感文本生成方法》</p>
                  <p>3.谭佳佳分享论文《I Want to Break Free! Recommending Friends from Outside the Echo Chamber》</p>`,
    title_en: "The 3th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p>
                    <p>March 25, 2022, 1:30 pm</p>
                    <p><strong>Report location:</strong></p><p>Computer Building A320</p>
                    <p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p>
                    <p><strong>Reporter :</strong></p>
                    <p>1.Zhiqiang Huang</p>
                    <p>2.Yifei Xu</p>
                    <p>2.Jiajia Tan</p>
                    <p><strong>Theme:</strong></p>
                    <p>1.Zhiqiang Huang shared the latest progress of the paper "UOD:urban overtourism detection based on multi source data and spatial temporary revolution".</p>
                    <p>2.Yifei Xu shared the latest progress of the paper "fine grained emotional text generation method based on pre training language model".</p>
                    <p>3.Jiajia Tan shared the paper "I want to break free! Recommending friends from outside the echo chamber".</p>`,
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2022,
  },
  {
    id: 31,
    title: "2022年CSSC小组第2次研讨会",
    author: "杨筱雪",
    create_date: "2022-03-11",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2022年03月11日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.卞纪新</p><p>2.许敏皓</p><p><strong>报告主题：</strong></p><p>1.卞纪新作最新研究进展报告。</p><p>2.许敏皓作最新研究进展报告。</p>",
    title_en: "The 2th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>March 11, 2022, 1:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Jixin Bian</p><p>2.Minhao Xu</p><p><strong>Theme:</strong></p><p>1.Jixin Bian made the latest research progress report.</p><p>2.Minhao Xu made the latest research progress report.</p>",
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2022,
  },
  {
    id: 30,
    title: "2022年CSSC小组第1次研讨会",
    author: "杨筱雪",
    create_date: "2022-02-25",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2022年02月25日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.张艳</p><p>2.马旭林</p><p><strong>报告主题：</strong></p><p>1.张艳作题为“Spatio-Temporal Digraph Convolutional Network based Taxi Pick-up Location Recommendation”的报告。</p><p>2.马旭林作题为“一种新型的邻接矩阵构造设想”的报告。</p>",
    title_en: "The 1th seminar of CSSC group in 2022",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      '<p><strong>Report time:</strong></p><p>February 25, 2022, 1:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yan Zhang</p><p>2.Xulin Ma</p><p><strong>Theme:</strong></p><p>1.Yan Zhang made a report entitled "spatial temporal digraph revolutionary network based taxi pick up location recommendation".</p><p>2.Xulin Ma gave a report entitled "a new idea of adjacency matrix construction".</p>',
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2022,
  },
  {
    id: 29,
    title: "2021年CSSC小组第20次研讨会",
    author: "张德举",
    create_date: "2021-12-31",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年12月24日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.陈洋</p><p>2.潘企宏</p><p><strong>报告主题：</strong></p><p>1.陈洋分享TKDD审稿意见及修改。</p><p>2.潘企宏分享“交通事故预测”方面的研究想法分享。</p>",
    title_en: "The 20th seminar of CSSC group in 2021",
    author_en: "Deju Zhang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      '<p><strong>Report time:</strong></p><p>October 24, 2021, 1:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Chen</p><p>2.Qihong Pan</p><p><strong>Theme:</strong></p><p>1.Yang Chen shared TKDD review comments and revisions.</p><p>2.Qihong Pan shared his research ideas on "traffic accident prediction".</p>',
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 28,
    title: "2021年CSSC小组第19次研讨会",
    author: "张德举",
    create_date: "2021-12-31",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年12月10日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.檀佳佳、马旭林</p><p>2.季展豪</p><p>3.郦鹏飞</p><p><strong>报告主题：</strong></p><p>1.檀佳佳、马旭林做“基于交互图增强的序列推荐研究”报告。</p><p>2.季展豪做“基于时空交互的端到端多车辆轨迹跟踪模型”的报告。</p><p>3.郦鹏飞做“基于动态交互图卷积网络的车辆轨迹预测”的报告。</p>",
    title_en: "The 19th seminar of CSSC group in 2021",
    author_en: "Deju Zhang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en: `<p><strong>Report time:</strong></p><p>October 10, 2021, 1:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Jiajia Tan、Xulin Ma</p><p>2.Zhanhao Ji</p><p>3.Pengfei Li</p><p><strong>Theme:</strong></p>
        <p>1.Jiajia Tan and Xulin Ma gave a report on "Sequence Recommendation Research Based on Interaction Graph Enhancement".</p>
        <p>2.Zhanhao Ji gave a report on "end-to-end multi-vehicle trajectory tracking model based on time-space interaction".</p>
        <p>3.Li Pengfei gave a report on "Vehicle Trajectory Prediction Based on Dynamic Interactive Graph Convolutional Network".</p>
        `,
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 27,
    title: "2021年CSSC小组第18次研讨会",
    author: "杨筱雪",
    create_date: "2021-12-13",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年10月22日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.张艳</p><p>2.熊海涛</p><p>3.赵振振</p><p><strong>报告主题：</strong></p><p>1.张艳作题为“基于隐私保护的风险驾驶行为预估”的报告</p><p>2.熊海涛作题为“基于用户个性化生活模式的POI推荐方法”的报告</p><p>3.赵振振作最新研究进展报告</p>",
    title_en: "The 18th seminar of CSSC group in 2021",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>October 22, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yan Zhang</p><p>2.Haitao Xiong</p><p>3.Zhenzhen Zhao</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>",
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 26,
    title: "2021年CSSC小组第17次研讨会",
    author: "杨筱雪",
    create_date: "2021-12-13",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年10月08日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.卞纪新</p><p>2.徐翼飞</p><p><strong>报告主题：</strong></p><p>1.卞纪新作题为“Pre-training Context and Time Aware Location Embeddings from Spatial-Temporal Trajectories for User Next Location Prediction”的报告</p><p>2.徐翼飞作题为“房地产潜在客户画像”的实验进展报告</p>",
    title_en: "The 17th seminar of CSSC group in 2021",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>October 08, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Nali Liu</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>",
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 25,
    title: "2021年CSSC小组学期第16次研讨会",
    author: "杨筱雪",
    create_date: "2021-12-13",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年9月24日，下午1：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.许敏皓</p><p><strong>报告主题：</strong></p><p>1.沈阳作题为“GLOM——transformer之后的一种通用认识结构”的报告</p><p>2.许敏皓作题为“基于混合结构数据的房屋用户画像建模”的报告</p>",
    title_en: "The 16th seminar of CSSC group in 2021",
    author_en: "Xiaoxue Yang",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>September 24, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Nali Liu</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p>",
    top: false,
    // hide_cn: true,
    // hide_en: true,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 24,
    title: "2021年CSSC小组第15次研讨会",
    author: "卞纪新",
    create_date: "2021-06-09",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      '<p><strong>报告时间：</strong></p><p>2021年6月9日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.刘娜利</p><p>2.熊海涛</p><p><strong>报告主题：</strong></p><p>1.刘娜利作题为“不完全时间序列聚类的学习表示”的报告</p><p>2.熊海涛作题为“人类流动的普遍访问规律”的报告</p><p><img src="/images/notice//notice24a.jpg" /> </p><p><img src="/images/notice/notice24b.jpg" /></p>',
    title_en: "The 15th seminar of CSSC group in 2021",
    author_en: "Jixin Bian",
    summary_en:
      "Report Paper: “Learning Representations for Incomplete Time Series Clustering”; “The universal visitation law of human mobility”.",
    content_en:
      '<p><strong>Report time:</strong></p><p>June 9, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Nali Liu</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Nali Liu gave a report about learning Representations for Incomplete Time Series Clustering.</p><p>2.Haitao Xiong made a presenation about the universal visitation law of human mobility.</p><p><img src="/images/notice/notice24a.jpg" /></p><p><img src="/images/notice/notice24b.jpg" /></p>',
    top: false,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 23,
    title: "2021年CSSC小组第14次研讨会",
    author: "季展豪",
    create_date: "2021-06-02",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年6月2日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.张艳</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 14th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>June 2, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Shen</p><p>2.Yan Zhang</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    // term:'autumn',
    year: 2021,
  },
  {
    id: 22,
    title: "2021年CSSC小组第13次研讨会",
    author: "季展豪",
    create_date: "2021-05-26",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年5月26日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.郦鹏飞</p><p>2.孔祥杰老师</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 13th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>May 26, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Pengfei Li</p><p>2.Xiangjie Kong</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    // term:'spring',
    year: 2021,
  },
  {
    id: 21,
    title: "2021年CSSC小组第12次研讨会",
    author: "季展豪",
    create_date: "2021-05-12",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年5月12日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.余凯峰</p><p>2.管林涛</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 12th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>May 12, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Kaifeng Yu</p><p>2.Lintao Guan</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    // term:'spring',
    year: 2021,
  },
  {
    id: 20,
    title: "2021年CSSC小组第11次研讨会",
    author: "季展豪",
    create_date: "2021-04-28",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年4月28日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.韩笑</p><p>2.舒文迪</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 11th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>April 28, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Xiao Han</p><p>2.Wendi Shu</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    // term:'spring',
    year: 2021,
  },
  {
    id: 19,
    title: "2021年CSSC小组第10次研讨会",
    author: "季展豪",
    create_date: "2021-04-21",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年4月21日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.陈洋</p><p>2.黄志强</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 10th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>April 21, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Chen</p><p>2.Zhiqiang Huang</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    // term:'spring',
    year: 2021,
  },
  {
    id: 18,
    title: "2021年CSSC小组第9次研讨会",
    author: "季展豪",
    create_date: "2021-04-14",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年4月14日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.管林涛</p><p>2.熊海涛</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 9th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>April 14, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Wentao Guan</p><p>2.Haitao Xiong</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    //term:'spring',
    year: 2021,
  },
  {
    id: 17,
    title: "2021年CSSC小组第8次研讨会",
    author: "季展豪",
    create_date: "2021-04-07",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年4月7日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.李宁</p><p>2.周文峰</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 8th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>April 7, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Ning Li</p><p>2.Wenfeng Zhou</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    //term:'spring',
    year: 2021,
  },
  {
    id: 16,
    title: "2021年CSSC小组第7次研讨会",
    author: "季展豪",
    create_date: "2021-03-31",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年3月31日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.檀佳佳</p><p>2.季展豪</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 7th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>March 31, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Jiajia Tan</p><p>2.Zhanhao Ji</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    //term:'spring',
    year: 2021,
  },
  {
    id: 15,
    title: "2021年CSSC小组第6次研讨会",
    author: "季展豪",
    create_date: "2021-03-24",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年3月24日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.舒文迪</p><p>2.刘娜利</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 6th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>March 24, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Wendi Shu</p><p>2.Nali Liu</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    //term:'spring',
    year: 2021,
  },
  {
    id: 14,
    title: "2021年CSSC小组第5次研讨会",
    author: "季展豪",
    create_date: "2021-03-17",
    summary: "报告主题：毕业生大论文汇报及专著讨论",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年3月18日，下午3：30</p><p><strong>报告地点：</strong></p><p>计算机楼A318</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>报告主题：</strong></p><p>1.毕业生大论文汇报及专著讨论</p>",
    title_en: "The 5th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Graduate thesis report and monograph discussion",
    content_en:
      "<p><strong>Report time:</strong></p><p>March 18, 2021, 3:30 pm</p><p><strong>Report location:</strong></p><p>Computer Building A318</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Theme:</strong></p><p>1. Graduate thesis report and monograph discussion</p>",
    top: false,
    //term:'spring',
    year: 2021,
  },
  {
    id: 13,
    title: "2021年CSSC小组第4次研讨会",
    author: "季展豪",
    create_date: "2021-03-08",
    summary: "报告主题：毕业论文题目及大纲讨论；专著修改讨论；其他事宜",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年3月3日，上午9：30</p><p><strong>报告地点：</strong></p><p>计算机楼A318</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>报告主题：</strong></p><p>1.毕业论文题目及大纲讨论（研三同学准备好word文档）</p><p>2.专著修改讨论</p><p>3.其他事宜</p><br/><p>注：研一同学有课程冲突可不参加</p>",
    title_en: "The 4th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Discussion on the title and outline of graduation thesis; discussion on the revision of monograph; other matters",
    content_en:
      "<p><strong>Report time:</strong></p><p>March 3, 2021, 9:30 am</p><p><strong>Report location:</strong></p><p>Computer Building A318</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Theme:</strong></p><p>1.Topic and outline discussion of graduation thesis(Grade 3 master prepares the word document)</p><p>2.Discussion on Revision of monograph</p><p>3.Other matters</p><br/><p>Note: Grade 1 master are not allowed to participate if they have course conflict</p>",
    top: false,
    //term:'spring',
    year: 2021,
  },
  {
    id: 12,
    title: "2021年CSSC小组第3次研讨会",
    author: "季展豪",
    create_date: "2021-01-22",
    summary:
      "报告主题：《Spatio-temporal Graph Convolutional Network》相关文献分享；《Temporal Multi-Graph Convolutional Network for Traffic Flow Prediction》文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年1月22日，上午10：00-11：35</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.王锦梦</p><p>2.张艳</p><p><strong>报告主题：</strong></p><p>1.《Spatio-temporal Graph Convolutional Network》相关文献分享</p><p>2.《Temporal Multi-Graph Convolutional Network for Traffic Flow Prediction》文献分享</p>",
    title_en: "The 3th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      'Report Subject: "Spatio- temporal Graph Convolutional Network" related literature sharing; Sharing paper about "Temporal Multi - Graph Convolutional Network for Traffic Flow Prediction".',
    content_en:
      '<p><strong>Report time:</strong></p><p>January 21, 2021, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.JinMeng Wang</p><p>2.Yan Zhang</p><p><strong>Theme:</strong></p><p>1."Spatio - temporal Graph Convolutional Network" related literature sharing.</p><p>2.Sharing paper about "Temporal Multi - Graph Convolutional Network for Traffic Flow Prediction"</p>',
    top: false,
    //term:'autumn',
    year: 2021,
  },
  {
    id: 11,
    title: "2021年CSSC小组第2次研讨会",
    author: "季展豪",
    create_date: "2021-01-15",
    summary: "报告主题：个人研究介绍；《基于时空数据的交通流预测》文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年1月15日，上午10：00-11：35</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.卞纪新</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.《基于时空数据的交通流预测》文献分享</p>",
    title_en: "The 2th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      'Report Subject: Personal research introduction; Sharing paper about "Traffic Flow Prediction Based on Temporal and Spatial Data".',
    content_en:
      '<p><strong>Report time:</strong></p><p>January 15, 2021, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Shen</p><p>2.Jixin Bian</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Share paper about "Traffic Flow Prediction Based on Temporal and Spatial Data"</p>',
    top: false,
    //term:'autumn',
    year: 2021,
  },
  {
    id: 10,
    title: "2021年CSSC小组第1次研讨会",
    author: "季展豪",
    create_date: "2021-01-08",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2021年1月8日，上午10：00-11：35</p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.陈洋</p><p>2.郦鹏飞</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 1th seminar of CSSC group in 2021",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>January 8, 2021, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Yang Chen</p><p>2.Pengfei Li</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    //term:'autumn',
    year: 2021,
  },
  {
    id: 9,
    title: "2020年CSSC小组第5次研讨会",
    author: "季展豪",
    create_date: "2020-12-25",
    summary: "报告主题：演化数据中异常检测的研究进展；对比自监督学习。",
    content:
      "<p><strong>报告时间：</strong></p><p>2020年12月25日，上午10：00-11：35 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.朱秉</p><p>2.李宁</p><p><strong>报告主题：</strong></p><p>1.演化数据中异常检测的研究进展</p><p>2.对比自监督学习</p>",
    title_en: "The 18th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: A Survey on Anomaly detection in Evolving Data;Contrastive Self-Supervised Learning.",
    content_en:
      "<p><strong>Report Time:</strong></p><p>December 25, 2020, 10:00-11:35 am</p><p><strong>Report Location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter:</strong></p><p>1.Bing Zhu</p><p>2.Ning Li</p><p><strong>Theme:</strong></p><p>1.A Survey on Anomaly detection in Evolving Data</p><p>2.Contrastive Self-Supervised Learning</p>",
    top: false,
    //term:'autumn',
    year: 2020,
  },
  {
    id: 8,
    title: "2020年CSSC小组第4次研讨会",
    author: "季展豪",
    create_date: "2020-12-17",
    summary:
      "报告主题：香港大学交换生经历分享；研究方向选择与论文写作技巧分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2020年12月17日，上午10：00-11：35 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>沈国江教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.韩笑</p><p>2.孔祥杰教授</p><p><strong>报告主题：</strong></p><p>1.香港大学交换生经历分享</p><p>2.研究方向选择与论文写作技巧分享</p>",
    title_en: "The 17th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Exchange student experience of the University of Hong Kong; Research direction selection and essay writing skills sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>December 17, 2020, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Guojiang Shen, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Xiao Han</p><p>2.Prof Xiangjie Kong</p><p><strong>Theme:</strong></p><p>1.Exchange student experience of the University of Hong Kong.</p><p>2.Research direction selection and essay writing skills sharing</p>",
    top: false,
    //term:'autumn',
    year: 2020,
  },
  {
    id: 7,
    title: "2020年CSSC小组第3次研讨会",
    author: "季展豪",
    create_date: "2020-12-11",
    summary: "报告主题：个人研究介绍；阅读文献分享。",
    content:
      "<p><strong>报告时间：</strong></p><p>2020年12月11日，上午10：00-11：35 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>孔祥杰教授、刘志教授</p><p><strong>汇报人：</strong></p><p>1.郭东岩教授</p><p>2.余凯峰</p><p><strong>报告主题：</strong></p><p>1.个人研究介绍</p><p>2.阅读文献分享</p>",
    title_en: "The 16th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Personal research introduction; Reading literature sharing.",
    content_en:
      "<p><strong>Report time:</strong></p><p>December 11, 2020, 10:00-11:35 am</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Prof. Xiangjie Kong, Prof. Zhi Liu</p><p><strong>Reporter :</strong></p><p>1.Dr. Dongyan Guo</p><p>2.Kaifeng Yu</p><p><strong>Theme:</strong></p><p>1.Personal research introduction.</p><p>2.Reading Literature Sharing</p>",
    top: false,
    //term:'autumn',
    year: 2020,
  },
  {
    id: 6,
    title: "2020年CSSC小组第2次研讨会",
    author: "季展豪",
    create_date: "2020-10-29",
    summary:
      "报告主题：对非均匀密度分布信息的进一步研究；基于时空轨迹的高效可疑人群检测。",
    content:
      "<p><strong>报告时间：</strong></p><p>2020年10月29日，下午13：30-15：00 </p><p><strong>报告地点：</strong></p><p>计算机楼A320</p><p><strong>主持人：</strong></p><p>赵振振</p><p><strong>汇报人：</strong></p><p>1.沈阳</p><p>2.卞纪新</p><p><strong>报告主题：</strong></p><p>1.对非均匀密度分布信息的进一步研究</p><p>2.基于时空轨迹的高效可疑人群检测</p>",
    title_en: "The 10th seminar of CSSC group in 2020",
    author_en: "Zhanhao Ji",
    summary_en:
      "Report Subject: Further research on non-uniform density distribution information; efficient suspicious crowd detection based on spatiotemporal trajectory.",
    content_en:
      "<p><strong>Report time:</strong></p><p>October 29, 2020 13:30-15:00 pm</p><p><strong>Report location:</strong></p><p>Computer Building A320</p><p><strong>Moderator:</strong></p><p>Zhenzhen Zhao</p><p><strong>Reporter :</strong></p><p>1.Yang Shen</p><p>2.Jixian Bian</p><p><strong>Theme:</strong></p><p>1.Making progress in information distribution of non-uniform density.</p><p>2.Efficient Suspected Infected Crowds Detection Based on Spatio-Temporal Trajectories</p>",
    top: false,
    //term:'autumn',
    year: 2020,
  },
  {
    id: 3,
    title: "2020年CSSC小组第1次研讨会",
    author: "朱秉",
    create_date: "2020-08-19",
    summary: "报告主题：基于神经网络、边缘计算的实时个人路线推荐",
    content:
      "<p><strong>报告时间：</strong></p><p>2020年8月19日，早上9：00-10：00 </p><p><strong>腾讯会议号：</strong></p><p>4799083819 </p><p><strong>报告地点：</strong></p><p>计算机楼D317</p><p><strong>主持人：</strong></p><p>赵振振</p><p><strong>汇报人：</strong></p><p>李宁</p><p><strong>报告主题：</strong></p><p>基于神经网络、边缘计算的实时个人路线推荐</p>",
    title_en: "The 1st seminar of CSSC Group in 2020",
    author_en: "Bing Zhu",
    summary_en:
      "Report Subject: Real-time personal route recommendation based on neural network and edge computing",
    content_en:
      "<p><strong>Report time:</strong></p><p>August 17, 2020 9:00-10:00 am</p><p><strong>Tencent Conference ID:</strong></p><p>4799083819</p><p><strong>Report location:</strong></p><p>Computer Building D317</p><p><strong>Moderator:</strong></p><p>Zhenzhen Zhao</p><p><strong>Reporter :</strong></p><p>Ning Li.</p><p><strong>Theme:</strong></p><p>Neural Networks、Edge Computing for Real Time Personalized Route Recommendation.</p>",
    top: false,
    //term:'autumn',
    year: 2020,
  },
];
