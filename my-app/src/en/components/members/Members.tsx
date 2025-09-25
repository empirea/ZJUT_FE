import React from "react";
import { HREF, fetchMembers } from "../../db";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

function Members() {
  const { title: titleTmp, id } = useParams<{ title: string; id: string }>();
  const { push } = useHistory();

  const perPage = 10;
  const title: any = titleTmp ?? "faculty";
  const allMembers = fetchMembers(title);
  const allMembersCount = allMembers.length;
  if (allMembersCount === 0) {
    return <></>;
  }
  const totalPage = Math.ceil(allMembersCount / perPage);
  if (id && (Number(id) < 1 || Number(id) > totalPage)) {
    return <></>;
  }
  const currPage = id ? Number(id) : 1;
  const offset = (currPage - 1) * perPage;
  const members = allMembers.slice(offset, offset + perPage);
  const membersCount = members.length;

  const hrefPrefix =
    title === "faculty"
      ? HREF.MEMBERS_FACULTY
      : title === "phd"
      ? HREF.MEMBERS_PHD
      : title === "master"
      ? HREF.MEMBERS_MASTER
      : title === "undergraduate"
      ? HREF.MEMBERS_UNDERGRADUATE
      : title === "alumni"
      ? HREF.MEMBERS_ALUMNS
      : "";
  const titleDisplay =
    title === "faculty"
      ? "Faculty"
      : title === "phd"
      ? "PhD Students"
      : title === "master"
      ? "MS Students"
      : title === "undergraduate"
      ? "Undergraduates"
      : title === "alumni"
      ? "Alumni"
      : "";

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>{titleDisplay}</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>
          &gt;
          <Link to={HREF.MEMBERS}>Members</Link>
          &gt;
          <Link to={hrefPrefix}>{titleDisplay}</Link>
        </div>
      </div>
      <div className="cy fl">
        <div className="cy-title fl">
          <ul>
            <li>
              <Link
                to={HREF.MEMBERS_FACULTY}
                className={title === "faculty" ? "ej-current" : ""}
              >
                Faculty
              </Link>
            </li>
            <li>
              <Link
                to={HREF.MEMBERS_PHD}
                className={title === "phd" ? "ej-current" : ""}
              >
                PhD Students
              </Link>
            </li>
            <li>
              <Link
                to={HREF.MEMBERS_MASTER}
                className={title === "master" ? "ej-current" : ""}
              >
                MS Students
              </Link>
            </li>
            <li>
              <Link
                to={HREF.MEMBERS_UNDERGRADUATE}
                className={title === "undergraduate" ? "ej-current" : ""}
              >
                Undergraduates
              </Link>
            </li>
            <li>
              <Link
                to={HREF.MEMBERS_ALUMNS}
                className={title === "alumni" ? "ej-current" : ""}
              >
                Alumni
              </Link>
            </li>
          </ul>
        </div>
        <div className="cy-con fl">
          <table width="100%" className="cy-list">
            <tbody>
              <tr>
                <th style={{ width: 90 }} align="left"></th>
                <th style={{ width: 140 }} align="left">
                  Name/Title
                </th>
                <th style={{ width: 215 }} align="left">
                  Contact Information
                </th>
                <th style={{ width: 160 }} align="left">
                  Specialties
                </th>
              </tr>
              {members.map((member, memberIndex) => {
                return (
                  <tr key={member.photoSrc} id={`line_u6_${memberIndex}`}>
                    <td>
                      <img src={member.photoSrc} />
                    </td>
                    <td>
                      <a
                        href={member.homepageUrl ?? undefined}
                        target="_blank"
                        title={`${member.name} (${member.titleDisplay[0]})`}
                      >
                        {member.name}
                        <br />
                        {member.titleDisplay.map((t, i) => (
                          <>
                            {t}
                            {member.titleDisplay.length - 1 === i ? null : (
                              <br />
                            )}
                          </>
                        ))}
                      </a>
                    </td>
                    <td>
                      <strong>{member.email}</strong>
                    </td>
                    <td>
                      <strong>
                        {member.directions.map((d, i) => (
                          <>
                            {d}
                            {member.directions.length - 1 === i ? null : <br />}
                          </>
                        ))}
                      </strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <table cellSpacing="0" className="pageNo" width="100%" cellPadding="1">
          <tbody>
            <tr>
              <td align="left" width="1%">
                Total {membersCount} &nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
              </td>
              <td align="left">
                {currPage === 1 ? (
                  <React.Fragment>
                    <span className="PrevDisabled">First</span>
                    <span className="PrevDisabled">Previous</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Link className="PrevDisabled" to={`${hrefPrefix}/1`}>
                      First
                    </Link>
                    <Link
                      className="PrevDisabled"
                      to={`${hrefPrefix}/${currPage - 1}`}
                    >
                      Previous
                    </Link>
                  </React.Fragment>
                )}
                {currPage === totalPage ? (
                  <React.Fragment>
                    <span className="NextDisabled">Next</span>
                    <span className="NextDisabled">End</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Link
                      className="NextDisabled"
                      to={`${hrefPrefix}/${currPage + 1}`}
                    >
                      Next
                    </Link>
                    <Link
                      className="NextDisabled"
                      to={`${hrefPrefix}/${totalPage}`}
                    >
                      End
                    </Link>
                  </React.Fragment>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export { Members };
