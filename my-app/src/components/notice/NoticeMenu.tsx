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
          <span className="PrevDisabled">首页</span>
          <span className="PrevDisabled">前一页</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/1`}>
            首页
          </Link>
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/${currPage - 1}`}>
            前一页
          </Link>
        </>
      )}
      {currPage === totalPage ? (
        <>
          <span className="NextDisabled">后一页</span>
          <span className="NextDisabled">尾页</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/${currPage + 1}`}>
            后一页
          </Link>
          <Link className="Prev" to={`${HREF.NOTICES_MENU}/${totalPage}`}>
            尾页
          </Link>
        </>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>通知</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.NOTICES}>通知</Link>
        </div>
      </div>
      <div className="list fl">
        <ul>{lis}</ul>
        <table cellSpacing="0" className="pageNo" width="100%" cellPadding="1">
          <tbody>
            <tr>
              <td align="left" width="1%">
                共 {noticesCount} 条&nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
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
