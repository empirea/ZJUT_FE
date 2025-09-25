import React from "react";
import { HREF } from "../../db";
import { Link } from "react-router-dom";

function Patent() {
  return (
    <React.Fragment>
      <div className="local fl">
        <h3>研究成果</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.PUBLICATION}>研究成果</Link>
          &gt;
          <Link to={HREF.PUBLICATION_PATENT}>专利</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.PUBLICATION_PAPER}>论文</Link>
          </li>
          <li>
            <Link to={HREF.PUBLICATION_PATENT} className="ej-current">
              专利
            </Link>
          </li>
          <li>
            <Link to={HREF.PUBLICATION_AWARDED}>奖项</Link>
          </li>
        </ul>
      </div>
      <div className="Publications fl">
        <div className="Publications-con fl">
          <div id="vsb_content_1946_u51">
            <div id="vsb_content">
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  <strong>发明专利(已授权)：</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>朱李楠、鲍寅威、孔祥杰、许敏皓、朱柘潮 </strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; 一种基于网格标记方案的属性情感四元组抽取方法，
                  <strong>专利号</strong>：CN116451679A
                  <strong>授权公告日</strong>：2023年7月18日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、闻琳燕、夏锋、张晨薇、刘晓钟</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于表示学习和竞争理论的学者推荐及合作预测方法，
                  <strong>专利号</strong>：201810853249.5
                  <strong>授权公告日</strong>：2020年10月27日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、夏锋、付振寰、郭昊尘、王进忠</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于LDA模型的地铁站点功能挖掘方法，
                  <strong>专利号</strong>：201710817833.0
                  <strong>授权公告日</strong>：2020年7月14日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、李梦琳、夏锋、赵高兴、刘程程</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于多源城市数据的出行共现现象可视化分析方法，
                  <strong>专利号</strong>：201710820085.1
                  <strong>授权公告日</strong>：2020年5月7日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、田恺琦、李梦琳、刘晓腾、万良田、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于线路候选集的地铁接驳巴士线路规划方法，
                  <strong>专利号</strong>：201711234971.2
                  <strong>授权公告日</strong>：2020年4月20日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  •<strong>孔祥杰、李梦琳、付振寰、郑超凡、惠煌、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于乘客出行多维特征的共享巴士站点客流预测方法，
                  <strong>专利号</strong>：201711233503.3
                  <strong>授权公告日</strong>：2019年8月9日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>夏锋、白晓梅、宁兆龙、刘号真、孔祥杰</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于学术大数据的期刊影响力评估方法
                  <strong>专利号</strong>：201610874338.9
                  <strong>授权公告日</strong>：2018年7月6日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、李梦琳、杨卓、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于出租车轨迹数据的交通出行共现现象的可视化分析方法
                  <strong>专利号</strong>：201611137603.1
                  <strong>授权公告日</strong>：2018年7月6日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、夏锋、高志强、惠煌、廉莲</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于浮动车数据的私家车出行数据集生成方法
                  <strong>专利号</strong>: 201510508865.3
                  <strong>授权公告日</strong>：2018年4月10日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、夏锋、王进忠、付振寰、李昱霖</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于doc2vec的地铁站点功能挖掘方法
                  <strong>专利号</strong>: 201710822006.0
                  <strong>授权公告日</strong>：2018年2月16日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、宋茜萌、杨卓、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于局部异常因子的城市交通拥堵路段检测方法
                  <strong>专利号</strong>：201610125269.1
                  <strong>授权公告日</strong>：2017年11月10日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、郭琳琳、王进忠、王猛、刘宇泽、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于忠实乘客的多特征地铁乘车人数预测方法
                  <strong>专利号</strong>：201710273014.4
                  <strong>授权公告日</strong>：2017年8月18日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、张君、刘鑫童、周金梦、宁兆龙、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; 一种基于学术异构网络的学者影响力评估方法
                  <strong>专利号</strong>：201611242445.6
                  <strong>授权公告日</strong>：2017年5月31日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>冯斌、姚晗、孔祥杰</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于车流量密度的VANET稀疏连通问题解决方法
                  <strong>专利号</strong>：201510274296.0
                  <strong>授权公告日</strong>：2017年3月22日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>夏锋、牛亚男、孔祥杰</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于神经网络的教学资源个性化推荐方法
                  <strong>专利号</strong>：201310217037.5
                  <strong>授权公告日</strong>：2017年3月1日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>许真珍、夏锋、孔祥杰、徐秀娟、杨宗伟</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;基于Flex技术的AUV设计流程可视化建模方法
                  <strong>专利号</strong>：201410206634.2
                  <strong>授权公告日</strong>：2017年1月18日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、王馨爽、杨卓、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于地铁数据进行站点聚类的可视化方法
                  <strong>专利号</strong>：201610638506.4
                  <strong>授权公告日</strong>：2017年1月4日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、余煊年、夏锋、宁兆龙、杨秋源、卢国旭</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种数据驱动的公共交通导向型城市区域划分与挖掘方法
                  <strong>专利号</strong>：201610494378.0
                  <strong>授权公告日</strong>：2016年12月7日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、宋秀苗、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于目标文本的计算文本相似度的方法
                  <strong>专利号</strong>：201310105450.2
                  <strong>授权公告日</strong>：2015年12月23日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>夏锋、程睿、孔祥杰</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于OpenXML的docx文档创建和修改方法
                  <strong>专利号</strong>：201310280580.X
                  <strong>授权公告日</strong>：2015年11月11日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  •
                  <strong>
                    徐洪峰、谭伟丽、夏锋、周红媚、廉莲、孔祥杰、马春飞、耿现彩、何龙、邹红杰
                  </strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;面向活跃相位的干道协调信号控制方案的过渡方法
                  <strong>专利号</strong>： 201210375667.0
                  <strong>授权公告日</strong>：2014年12月14日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>谢宜生、沈国江、孔祥杰、徐颖燕</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;车载雷达测距测速仪
                  <strong>专利号</strong>：200910100672.9
                  <strong>授权公告日</strong>：2011年11月30日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>沈国江、孔祥杰</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种具有公交优先的城市路网交通流智能协调控制方法
                  <strong>专利号</strong>：200910100396.6
                  <strong>授权公告日</strong>：2011年01月19日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>沈国江、孔祥杰</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种短时交通流智能组合预测方法
                  <strong>专利号</strong>：200910100395.1
                  <strong>授权公告日</strong>：2010年9月29日
                </span>
              </p>
              {/* <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  <strong>发明专利(受理中)：</strong>
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  •<strong>孔祥杰、郭琳琳、王进忠、王猛、刘宇泽、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于忠实乘客的多特征地铁乘车人数预测方法
                  <strong>申请号</strong>：201710273014.4
                  <strong>申请日</strong>：2017年4月26日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  •<strong>孔祥杰、田恺琦、李梦琳、刘晓腾、万良田、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于线路候选集的地铁接驳巴士线路规划方法
                  <strong>申请号</strong>：201711234971.2
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、夏锋、王进忠、付振寰、李昱霖</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于doc2vec的地铁站点功能挖掘方法，
                  <strong>申请号</strong>：201710822006.0
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、夏锋、付振寰、郭昊尘、王进忠</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于LDA模型的地铁站点功能挖掘方法，
                  <strong>申请号</strong>：201710817833.0
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  •<strong>孔祥杰，张君，刘鑫童，周金梦，宁兆龙，夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于学术异构网络的学者影响力评估方法，
                  <strong>申请号</strong>：201611242445.6
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  •<strong>孔祥杰；余煊年；夏锋；宁兆龙；杨秋源；卢国旭</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种数据驱动的公共交通导向型城市区域划分与挖掘方法
                  <strong>申请号</strong>：201610494378.0
                  <strong>申请日</strong>：2016年6月29日
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  • <strong>孔祥杰、王馨爽、杨卓、夏锋</strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;一种基于地铁数据进行站点聚类的可视化方法
                  <strong>申请号</strong>：201610638506.4
                  <strong>申请日</strong>：2016年8月8日
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Patent };
