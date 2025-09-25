import React from "react";
import { Link } from "react-router-dom";
import { HREF, fetchRecentResearch } from "../../db";

export function DLCG() {
  const RRs = fetchRecentResearch({ limit: 2 });
  const lis = RRs.map((research, index) => {
    return (
      <li key={index}>
        <a
          href={`/downloadfile/${research.year}/${research.filename}`}
          target="_blank"
          title={research.title}
        >
          <div className="dlcg-pic fl">
            <img src={research.imgSrc} />
          </div>
          <div className="dlcg-txt fl">
            <h3>{research.title}</h3>
            <p>{research.author}</p>
          </div>
        </a>
      </li>
    );
  });

  return (
    <div className="dlcg fl">
      <div className="xwdt-title fl">
        <h3>Recent Research</h3>
        <Link className="more1" to={HREF.RECENT_RESEARCH}>
          More&gt;&gt;
        </Link>
      </div>
      <div className="dlcg-list fl">
        <ul>{lis}</ul>
      </div>
    </div>
  );
}
