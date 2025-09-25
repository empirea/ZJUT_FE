import React from "react";
import { Link, useParams } from "react-router-dom";
import { HREF, fetchRecentResearch } from "../../db";

function RRMenu() {
  const { id } = useParams<{ id: string }>();
  const perPage = 5;

  const allRR = fetchRecentResearch();
  const allRRCount = allRR.length;
  const totalPage = Math.ceil(allRRCount / perPage);
  if (id && (Number(id) < 1 || Number(id) > totalPage)) {
    return <></>;
  }
  const currPage = id ? Number(id) : 1;
  const offset = (currPage - 1) * perPage;
  const RRs = allRR.slice(offset, offset + perPage);
  const RRsCount = RRs.length;

  const pagination = (
    <div>
      {currPage === 1 ? (
        <>
          <span className="PrevDisabled">首页</span>
          <span className="PrevDisabled">前一页</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.RECENT_RESEARCH_MENU}/${1}`}>
            首页
          </Link>
          <Link
            className="Prev"
            to={`${HREF.RECENT_RESEARCH_MENU}/${currPage - 1}`}
          >
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
          <Link
            className="Prev"
            to={`${HREF.RECENT_RESEARCH_MENU}/${currPage + 1}`}
          >
            后一页
          </Link>
          <Link
            className="Prev"
            to={`${HREF.RECENT_RESEARCH_MENU}/${totalPage}`}
          >
            尾页
          </Link>
        </>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>最近研究</h3>
        <div className="dqwz fr">
          当前位置：
          <a href={HREF.INDEX}>主页</a>&gt;
          <a href={HREF.RECENT_RESEARCH}>最近研究</a>
        </div>
      </div>
      <div className="list fl">
        <ul>
          {RRs.map((rr, rrIndex) => (
            <li id={`line_u5_${rrIndex}`}>
              <a
                href={`/downloadfile/${rr.year}/${rr.filename}`}
                target="_blank"
                title={rr.title}
                style={{ fontWeight: "bold", color: "#fa0505" }}
                download={rr.filename}
              >
                <div className="list-txt fl">
                  <h3 style={{ height: "auto" }}>{rr.title}</h3>
                  <p>{rr.author}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <table cellSpacing="0" className="pageNo" width="100%" cellPadding="1">
          <tbody>
            <tr>
              <td align="left" width="1%">
                共 {RRsCount} 条&nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
              </td>
              <td align="left">{pagination}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export { RRMenu };
