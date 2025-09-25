import { fetchNews } from "../../db";
import React from "react";
import { Link, useParams } from "react-router-dom";
import HREF from "../../db/hrefConstance";

export function NewsPage() {
  const { id } = useParams<{ id: string }>();

  const newsList = fetchNews();
  const currNo = id ? Number(id) : 1;
  const newsIndex = newsList.findIndex((val) => val.id === currNo);

  if (newsIndex === -1) {
    return <></>;
  }

  const newsCurr = newsList[newsIndex];
  const newsPrev = newsIndex - 1 >= 0 ? newsList[newsIndex - 1] : undefined;
  const newsNext =
    newsIndex + 1 < newsList.length ? newsList[newsIndex + 1] : undefined;

  const content = (
    <>
      <div dangerouslySetInnerHTML={{ __html: newsCurr.content }}></div>
    </>
  );


  const pagination = (
    <>
      <p>
        前一篇：
        {newsPrev ? (
          <Link to={`${HREF.NEWS_PAGE}/${newsPrev.id}`}>
            {newsPrev.title}
          </Link>
        ) : (
          "无"
        )}
      </p>
      <p>
        后一篇：
        {newsNext ? (
          <Link to={`${HREF.NEWS_PAGE}/${newsNext.id}`}>
            {newsNext.title}
          </Link>
        ) : (
          "无"
        )}
      </p>
    </>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>新闻</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.NEWS}>新闻</Link>
          &gt;
          <Link to={`${HREF.NEWS_PAGE}/${newsCurr.id}`}>内容</Link>
        </div>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h3>{newsCurr.title}</h3>
          <i>
            时间：{newsCurr.create_date}&nbsp;&nbsp;作者：{newsCurr.author}
          </i>
        </div>
        <div className="content-con fl" id="vsb_content">
          <div className="WordSection1">{content}</div>
        </div>
        <div className="sxt fl">{pagination}</div>
      </div>
    </React.Fragment>
  );
}

export default NewsPage;
