import { fetchPaper, fetchPaperBefore, HREF } from "../../db";
import React from "react";
import { Link, useParams } from "react-router-dom";

function Paper() {
  const { year } = useParams<{ year: string }>();

  const firstYear = 2016;
  const finalYear = 2025;
  const showYearCount = 4;
  const yearBeforeDisplay = "Before";
  const yearBeforeHrefDisplay = "before";

  try {
    if (
      year &&
      year !== yearBeforeHrefDisplay &&
      (Number(year) < firstYear || Number(year) > finalYear)
    ) {
      return <></>;
    }
  } catch (e) {
    return <></>;
  }

  let yearDisplay: string;
  let yearHrefDisplay: string;
  let papers;
  if (year === yearBeforeHrefDisplay) {
    yearDisplay = yearBeforeDisplay;
    yearHrefDisplay = yearBeforeHrefDisplay;
    papers = fetchPaperBefore(finalYear - showYearCount);
  } else {
    const yearCurr = year ? year : finalYear;
    yearDisplay = `${yearCurr}`;
    yearHrefDisplay = `${yearCurr}`;
    papers = fetchPaper(Number(yearCurr));
  }

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>Rewards</h3>
        <div className="dqwz fr">
          Current Position:
          <Link to={HREF.INDEX}>Home</Link>&gt;
          <Link to={HREF.PUBLICATION}>Rewards</Link>&gt;
          <Link to={HREF.PUBLICATION_PAPER}>Paper</Link>&gt;
          <Link to={`${HREF.PUBLICATION_PAPER}/${yearHrefDisplay}`}>
            {yearDisplay}
          </Link>
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link to={HREF.PUBLICATION_PAPER} className="ej-current">
              Paper
            </Link>
          </li>
          <li>
            <Link to={HREF.PUBLICATION_PATENT}>Patent</Link>
          </li>
          <li>
            <Link to={HREF.PUBLICATION_AWARDED}>Awarded</Link>
          </li>
        </ul>
      </div>
      <div className="Publications fl">
        <div className="Publications-title fl">
          <ul>
          <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2025`}
                title="2025"
                className={
                  yearHrefDisplay === "2025" ? "Publications-current" : ""
                }
              >
                2025
              </Link>
            </li>
          <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2024`}
                title="2024"
                className={
                  yearHrefDisplay === "2024" ? "Publications-current" : ""
                }
              >
                2024
              </Link>
            </li>
          <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2023`}
                title="2023"
                className={
                  yearHrefDisplay === "2023" ? "Publications-current" : ""
                }
              >
                2023
              </Link>
            </li>
          <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2022`}
                title="2022"
                className={
                  yearHrefDisplay === "2022" ? "Publications-current" : ""
                }
              >
                2022
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2021`}
                title="2021"
                className={
                  yearHrefDisplay === "2021" ? "Publications-current" : ""
                }
              >
                2021
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2020`}
                title="2020"
                className={
                  yearHrefDisplay === "2020" ? "Publications-current" : ""
                }
              >
                2020
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/2019`}
                title="2019"
                className={
                  yearHrefDisplay === "2019" ? "Publications-current" : ""
                }
              >
                2019
              </Link>
            </li>
            <li>
              <Link
                to={`${HREF.PUBLICATION_PAPER}/before`}
                title={yearBeforeDisplay}
                className={
                  yearHrefDisplay === "before" ? "Publications-current" : ""
                }
              >
                {yearBeforeDisplay}
              </Link>
            </li>
          </ul>
        </div>
        <div className="Publications-con fl">
          {papers.map((paper, paparIndex) => {
            return (
              <p>
                <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                  {paparIndex + 1}. {paper.author}.
                  <strong>"{paper.title}"</strong>
                  <span style={{ fontStyle: "italic" }}>
                    {paper.publisher},
                  </span>
                  {paper.doi
                    ? paper.doi
                    : `${paper.version} (${paper.year}): ${paper.page}`}
                  .
                </span>
                &emsp;
                {paper.download ? (
                  <a
                    href={`/downloadfile/${paper.year}/${paper.filename}`}
                    target="_blank"
                    style={{
                      whiteSpace: "normal",
                      fontFamily: "tahoma",
                      fontSize: "16px",
                      textDecoration: "underline",
                    }}
                    download={paper.filename}
                  >
                    <span style={{ fontFamily: "tahoma", fontSize: "16px" }}>
                      PDF
                    </span>
                  </a>
                ) : null}
              </p>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export { Paper };
