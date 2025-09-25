import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HREF } from "../../db";

export function Nav() {
  const { pathname } = useLocation();

  const activeClass = "nav-current";
  const activeHref =
    pathname.replace(HREF.INDEX, "") === "" ||
    pathname.includes(HREF.NOTICES) ||
    pathname.includes(HREF.NEWS) ||
    pathname.includes(HREF.RECENT_RESEARCH)
      ? ""
      : pathname.includes(HREF.RESEARCH)
      ? "research"
      : pathname.includes(HREF.MEMBERS)
      ? "members"
      : pathname.includes(HREF.PUBLICATION)
      ? "publication"
      : pathname.includes(HREF.ABOUTUS)
      ? "about_us"
      :pathname.includes(HREF.SEMINAR)
      ? "seminar"
      : pathname.includes(HREF.OTHERS)
      ? "others"
      : undefined;

  return (
    <div className="nav fl">
      <ul>
        <li>
          <Link
            to={HREF.INDEX}
            title="主页"
            className={activeHref === "" ? activeClass : undefined}
          >
            主页
          </Link>
        </li>
        <li>
          <Link
            to={HREF.RESEARCH}
            title="研究组概况"
            className={activeHref === "research" ? activeClass : undefined}
          >
            研究组概况
          </Link>
        </li>
        <li>
          <Link
            to={HREF.MEMBERS}
            title="组内成员"
            className={activeHref === "members" ? activeClass : undefined}
          >
            组内成员
          </Link>
        </li>
        <li>
          <Link
            to={HREF.PUBLICATION}
            title="研究成果"
            className={activeHref === "publication" ? activeClass : undefined}
          >
            研究成果
          </Link>
        </li>
        <li>
          <Link
            to={HREF.SEMINAR}
            title="研讨会"
            className={activeHref === "seminar" ? activeClass : undefined}
          >
            研讨会
          </Link>
        </li>
        <li>
          <Link
            to={HREF.ABOUTUS}
            title="关于我们"
            className={activeHref === "about_us" ? activeClass : undefined}
          >
            关于我们
          </Link>
        </li>
        <li>
          <Link
            to={HREF.OTHERS}
            title="组内风采"
            className={activeHref === "others" ? activeClass : undefined}
          >
            组内风采
          </Link>
        </li>
      </ul>
    </div>
  );
}
