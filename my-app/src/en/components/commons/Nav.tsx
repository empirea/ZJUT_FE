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
      : pathname.includes(HREF.SEMINAR)
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
            title="Home"
            className={activeHref === "" ? activeClass : undefined}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={HREF.RESEARCH}
            title="Research"
            className={activeHref === "research" ? activeClass : undefined}
          >
            Research
          </Link>
        </li>
        <li>
          <Link
            to={HREF.MEMBERS}
            title="Members"
            className={activeHref === "members" ? activeClass : undefined}
          >
            Members
          </Link>
        </li>
        <li>
          <Link
            to={HREF.PUBLICATION}
            title="Publication"
            className={activeHref === "publication" ? activeClass : undefined}
          >
            Rewards
          </Link>
        </li>
        <li>
          <Link
            to={HREF.SEMINAR}
            title="Seminar"
            className={activeHref === "seminar" ? activeClass : undefined}
          >
            Seminars
          </Link>
        </li>
        <li>
          <Link
            to={HREF.ABOUTUS}
            title="About Us"
            className={activeHref === "about_us" ? activeClass : undefined}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to={HREF.OTHERS}
            title="Others"
            className={activeHref === "others" ? activeClass : undefined}
          >
            Trends
          </Link>
        </li>
      </ul>
    </div>
  );
}
