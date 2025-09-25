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
          <span className="PrevDisabled">First</span>
          <span className="PrevDisabled">Previous</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.RECENT_RESEARCH_MENU}/${1}`}>
            First
          </Link>
          <Link
            className="Prev"
            to={`${HREF.RECENT_RESEARCH_MENU}/${currPage - 1}`}
          >
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
          <Link
            className="Prev"
            to={`${HREF.RECENT_RESEARCH_MENU}/${currPage + 1}`}
          >
            Next
          </Link>
          <Link
            className="Prev"
            to={`${HREF.RECENT_RESEARCH_MENU}/${totalPage}`}
          >
            End
          </Link>
        </>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Recent Research</h3>
        <div className="dqwz fr">
          Current Position:
          <a href={HREF.INDEX}>Home</a>&gt;
          <a href={HREF.RECENT_RESEARCH}>Recent Research</a>
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
                Total {RRsCount} &nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
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
