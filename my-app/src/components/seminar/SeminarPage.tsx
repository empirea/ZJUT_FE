import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSeminars } from "../../db";
import HREF from "../../db/hrefConstance";
import { useRouteMatch } from "react-router-dom";

export function SeminarPage() {
  const {id} = useParams<{id: string }>();
  const seminars = fetchSeminars();
  const currNo = id ? Number(id) : 1;
  const seminarIndex = seminars.findIndex((val) => val.id === currNo);
  const year = seminars[seminarIndex].year

  if (seminarIndex === -1) {
    return <></>;
  }

  const seminorCurr = seminars[seminarIndex];
  const seminorPrev =
  seminarIndex - 1 >= 0 ? seminars[seminarIndex - 1] : undefined;
  const seminorNext =
  seminarIndex + 1 < seminars.length ? seminars[seminarIndex + 1] : undefined;

  const content = (
    <>
      <div dangerouslySetInnerHTML={{ __html: seminorCurr.content }}></div>
    </>
  );

  const pagination = (
    <>
      <p>
        前一页：
        {seminorPrev ? (
          <Link to={`${HREF.SEMINAR_PAGE}/${seminorPrev.id}`}>
            {seminorPrev.title}
          </Link>
        ) : (
          "null"
        )}
      </p>
      <p>
        后一页：
        {seminorNext ? (
          <Link to={`${HREF.SEMINAR_PAGE}/${seminorNext.id}`}>
            {seminorNext.title}
          </Link>
        ) : (
          "null"
        )}
      </p>
    </>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>研讨会</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.SEMINAR}>研讨会</Link>
          &gt;
          <Link to={`${HREF.SEMINAR_PAGE}/${seminorCurr.id}`}>{year}</Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={`${HREF.SEMINAR_2025}`} className={year===2025 ? "ej-current":undefined}>
              2025
            </Link>
          </li>
          <li>
            <Link to={`${HREF.SEMINAR_2024}`} className={year===2024 ? "ej-current":undefined}>
              2024
            </Link>
          </li>
          <li>
            <Link to={`${HREF.SEMINAR_2023}`} className={year===2023 ? "ej-current":undefined}>
              2023
            </Link>
          </li>
          <li>
            <Link to={`${HREF.SEMINAR_2022}`} className={year===2022 ? "ej-current":undefined}>
              2022
            </Link>
          </li>
          <li>
            <Link to={`${HREF.SEMINAR_2021}`} className={year===2021 ? "ej-current":undefined}>
              2021
            </Link>
          </li>
          <li>
            <Link to={`${HREF.SEMINAR_2020}`} className={year===2020 ? "ej-current":undefined}>
              2020
            </Link>
          </li>
        </ul>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h3>{seminorCurr.title}</h3>
          <i>
            时间: {seminorCurr.create_date}&nbsp;&nbsp;作者: {seminorCurr.author}
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


export default SeminarPage;
