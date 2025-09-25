import { HREF, fetchNotices } from "../../db";
import React from "react";
import { Link, useParams } from "react-router-dom";

export function NoticeMenu() {
  const { id } = useParams<{ id: string }>();
  const perPage = 5;

  const allNotices = fetchNotices();
  const allNoticesCount = allNotices.length;
  const totalPage = Math.ceil(allNoticesCount / perPage);
  if (id && (Number(id) < 1 || Number(id) > totalPage)) {
    return <></>;
  }
  const currPage = id ? Number(id) : 1;
  const offset = (currPage - 1) * perPage;
  const notices = allNotices.slice(offset, offset + perPage);
  const noticesCount = notices.length;

  const lis = notices.map((notice, index) => {
    return (
      <li id={`line_u5_${index}`} key={index}>
        <Link to={`${HREF.NOTICES_PAGE}/${notice.id}`} title={notice.title}>
          <div className="list-txt fl">
            <h3>{notice.title}</h3>
            <p>{notice.summary}</p>
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
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/1`}>
            First
          </Link>
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/${currPage - 1}`}>
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
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/${currPage + 1}`}>
            Next
          </Link>
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/${totalPage}`}>
            End
          </Link>
        </>
      )}
    </div>
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
        </div>
      </div>
      <div className="list fl">
        <ul>{lis}</ul>
        <table cellSpacing="0" className="pageNo" width="100%" cellPadding="1">
          <tbody>
            <tr>
              <td align="left" width="1%">
                Total {noticesCount} &nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
              </td>
              <td align="left">{pagination}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default NoticeMenu;
