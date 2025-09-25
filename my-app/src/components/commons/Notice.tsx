import React from "react";
import { Link } from "react-router-dom";
import { HREF, fetchNotices } from "../../db";
import tzgg_jpg from "@/images/web/tzgg.jpg";

export function Notice() {
  const limit = 5;
  const notices = fetchNotices({ limit });

  const lis = notices.map((notice, index) => {
    const a = (
      <Link
        to={`${HREF.NOTICES_PAGE}/${notice.id}`}
        target="_blank"
        title={notice.title}
        className={notice.top ? "tz-top" : ""}
      >
        {notice.title}
      </Link>
    );

    // date format = YYYY-MM-DD
    const dateList = notice.create_date.split("-");
    const span = <span className='notice_data_font'>{`[${dateList[0]}-${dateList[1]}-${dateList[2]}]`}</span>;

    return (
      <li>
        {a}
        {span}
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="tzgg fl">
        <img src={tzgg_jpg} />
      </div>
      <div id="notice" className="tzgg-con fl">
        <ul>{lis}</ul>
        <Link className="more" to={HREF.NOTICES}>
          更多&gt;&gt;
        </Link>
      </div>
    </React.Fragment>
  );
}
