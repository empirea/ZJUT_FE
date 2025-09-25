import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchNews } from "../../db";
import HREF from "../../db/hrefConstance";

function NewsMenu() {
  const { id } = useParams<{ id: string }>();
  const perPage = 5;

  const allNews = fetchNews();
  const allNewsCount = allNews.length;
  const totalPage = Math.ceil(allNewsCount / perPage);
  if (id && (Number(id) < 1 || Number(id) > totalPage)) {
    return <></>;
  }
  const currPage = id ? Number(id) : 1;
  const offset = (currPage - 1) * perPage;
  const news = allNews.slice(offset, offset + perPage);
  const newsCount = news.length;

  const lis = news.map((_new, index) => {
    return (
      <li id={`line_u5_${index}`} key={index}>
        <Link to={`${HREF.NEWS_PAGE}/${_new.id}`} title={_new.title}>
          <div className="list-txt fl">
            <h3>{_new.title}</h3>
            <p>{_new.summary}</p>
          </div>
        </Link>
      </li>
    );
  });

  const pagination = (
    <div>
      {currPage === 1 ? (
        <>
          <span className="PrevDisabled">First</span>
          <span className="PrevDisabled">Previous</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.NEWS_MENU}/${1}`}>
            First
          </Link>
          <Link className="Prev" to={`${HREF.NEWS_MENU}/${currPage - 1}`}>
            Previous
          </Link>
        </>
      )}
      {currPage === totalPage ? (
        <>
          <span className="NextDisabled">Next</span>
          <span className="NextDisabled">End</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.NEWS_MENU}/${currPage + 1}`}>
            Next
          </Link>
          <Link className="Prev" to={`${HREF.NEWS_MENU}/${totalPage}`}>
            End
          </Link>
        </>
      )}
    </div>
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
        </div>
      </div>
      <div className="list fl">
        <ul>{lis}</ul>
        <table cellSpacing="0" className="pageNo" width="100%" cellPadding="1">
          <tbody>
            <tr>
              <td align="left" width="1%">
                Total {newsCount} &nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
              </td>
              <td align="left">{pagination}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export { NewsMenu };
