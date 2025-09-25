import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchNotices } from "../../db";
import HREF from "../../db/hrefConstance";

export function NoticePage() {
  const { id } = useParams<{ id: string }>();

  const notices = fetchNotices();
  const currNo = id ? Number(id) : 1;
  const noticeIndex = notices.findIndex((val) => val.id === currNo);

  if (noticeIndex === -1) {
    return <></>;
  }

  const noticeCurr = notices[noticeIndex];
  const noticePrev =
    noticeIndex - 1 >= 0 ? notices[noticeIndex - 1] : undefined;
  const noticeNext =
    noticeIndex + 1 < notices.length ? notices[noticeIndex + 1] : undefined;

  const content = (
    <>
      {/* {noticeCurr.content.map((con, index) => {
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
      <div dangerouslySetInnerHTML={{ __html: noticeCurr.content }}></div>
    </>
  );

  const pagination = (
    <>
      <p>
        Previous:&nbsp;
        {noticePrev ? (
          <Link to={`${HREF.NOTICES_PAGE}/${noticePrev.id}`}>
            {noticePrev.title}
          </Link>
        ) : (
          "None"
        )}
      </p>
      <p>
        Next:&nbsp;
        {noticeNext ? (
          <Link to={`${HREF.NOTICES_PAGE}/${noticeNext.id}`}>
            {noticeNext.title}
          </Link>
        ) : (
          "None"
        )}
      </p>
    </>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Notice</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>
          &gt;
          <Link to={HREF.NOTICES}>Notice</Link>
          &gt;
          <Link to={`${HREF.NOTICES_PAGE}/${noticeCurr.id}`}>Content</Link>
        </div>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h3>{noticeCurr.title}</h3>
          <i>
            Time:&nbsp;{noticeCurr.create_date}&nbsp;&nbsp;Author:&nbsp;
            {noticeCurr.author}
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

export default NoticePage;
