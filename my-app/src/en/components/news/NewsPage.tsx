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
      {/* {newsCurr.content.map((con, index) => {
        if (con.type === "img") {
          return (
            <p key={index}>
              <img src={con.src} />
            </p>
          );
        } else if (con.type === "heading") {
          return (
            <p key={index}>
              <strong>
                <span dangerouslySetInnerHTML={{ __html: con.text }}></span>
              </strong>
            </p>
          );
        } else if (con.type === "text") {
          return (
            <p key={index} dangerouslySetInnerHTML={{ __html: con.text }}></p>
          );
        } else if (con.type === "blankLine") {
          return <br key={index} />;
        }
      })} */}
      <div dangerouslySetInnerHTML={{ __html: newsCurr.content }}></div>
    </>
  );

  const pagination = (
    <>
      <p>
        Previous:&nbsp;
        {newsPrev ? (
          <Link to={`${HREF.NEWS_PAGE}/${newsPrev.id}`}>{newsPrev.title}</Link>
        ) : (
          "None"
        )}
      </p>
      <p>
        Next:&nbsp;
        {newsNext ? (
          <Link to={`${HREF.NEWS_PAGE}/${newsNext.id}`}>{newsNext.title}</Link>
        ) : (
          "None"
        )}
      </p>
    </>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>News</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>
          &gt;
          <Link to={HREF.NEWS}>News</Link>
          &gt;
          <Link to={`${HREF.NEWS_PAGE}/${newsCurr.id}`}>Content</Link>
        </div>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h3>{newsCurr.title}</h3>
          <i>
            Time:&nbsp;{newsCurr.create_date}&nbsp;&nbsp;Author:&nbsp;
            {newsCurr.author}
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
