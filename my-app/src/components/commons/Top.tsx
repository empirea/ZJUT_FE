import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import images_tb_jpg from "@/images/web/图标.jpg";

export function Top() {
  const { pathname } = useLocation();
  // const enPathname = "/en" + (pathname.replace("/", "") === "" ? "" : pathname);

  return (
    <div className="top fl">
      <div className="top fl">
      <div className="fl">
        <Link to="" title="CSSC" className="logo">
          <img src={images_tb_jpg} alt="" />
        </Link>
      </div>
      <div className="lang-position">
        <div className="lang-btn">
          <Link to={`/en`} id="lang">
            <i>EN</i>
          </Link>
        </div>
      </div>
    </div>
  </div>
    
  );
}
