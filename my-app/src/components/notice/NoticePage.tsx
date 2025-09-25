import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchNotices } from "../../db";
import HREF from "../../db/hrefConstance";

export function NoticePage() {
  const { id } = useParams<{ id: string }>();

  const notices:any = fetchNotices();
  const currNo = id ? Number(id) : 1;
  const noticeIndex = notices.findIndex((val: any) => val.id === currNo);

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
      <div dangerouslySetInnerHTML={{ __html: noticeCurr.content }}></div>
    </>
  );

  const pagination = (
    <>
      <p>
        前一篇：
        {noticePrev ? (
          <Link to={`${HREF.NOTICES_PAGE}/${noticePrev.id}`}>
            {noticePrev.title}
          </Link>
        ) : (
          "无"
        )}
      </p>
      <p>
        后一篇：
        {noticeNext ? (
          <Link to={`${HREF.NOTICES_PAGE}/${noticeNext.id}`}>
            {noticeNext.title}
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
        <h3>通知</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.NOTICES}>通知</Link>
          &gt;
          <Link to={`${HREF.NOTICES_PAGE}/${noticeCurr.id}`}>内容</Link>
        </div>
      </div>
      <div className="content fl">
        <div className="content-title fl">
          <h3>{noticeCurr.title}</h3>
          <i>
            时间：{noticeCurr.create_date}&nbsp;&nbsp;作者：{noticeCurr.author}
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
