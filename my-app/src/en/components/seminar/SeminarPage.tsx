import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSeminars } from "../../db";
import HREF from "../../db/hrefConstance";

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
      <div dangerouslySetInnerHTML={{ __html: seminorCurr.content_en }}></div>
    </>
  );

  const pagination = (
    <>
      <p>
        Prev:
        {seminorPrev ? (
          <Link to={`${HREF.SEMINAR_PAGE}/${seminorPrev.id}`}>
            {seminorPrev.title_en}
          </Link>
        ) : (
          "null"
        )}
      </p>
      <p>
        Next:
        {seminorNext ? (
          <Link to={`${HREF.SEMINAR_PAGE}/${seminorNext.id}`}>
            {seminorNext.title_en}
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
        <h3>Seminar</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>
          &gt;
          <Link to={HREF.SEMINAR}>Semianr</Link>
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
          <h3>{seminorCurr.title_en}</h3>
          <i>
            time: {seminorCurr.create_date}&nbsp;&nbsp;author: {seminorCurr.author_en}
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
