import React from "react";
import { fetchNews, HREF } from "../../db";
import { Link } from "react-router-dom";

export function XWDT() {
  const news = fetchNews({ limit: 8 });
  const lis = news.map((row, rowIndex) => {
    const a = (
      <Link
        to={`${HREF.NEWS_PAGE}/${row.id}`}
        target="_blank"
        title={row.title}
        className={row.top ? "xw-top" : ""}
      >
        {row.title}
      </Link>
    );
    const dateList = row.create_date.split("-");
    const i = <i>{`[${dateList[1]}-${dateList[2]}]`}</i>;
    return (
      <li>
        {a}
        {i}
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="xwdt fl">
        <div className="xwdt-title fl">
          <h3>新闻</h3>
          <Link className="more1" to={HREF.NEWS}>
            更多&gt;&gt;
          </Link>
        </div>
        <div className="xwdt-list fl">
          <ul>{lis}</ul>
        </div>
      </div>
    </React.Fragment>
  );
}
