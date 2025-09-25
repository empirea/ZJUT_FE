import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import images_tb_jpg from '@/images/web_en/图标.jpg'
import { HREF } from "@/en/db";

export function Top() {
  const { pathname } = useLocation();
  const pathnameTmp = pathname.replace(/\/en/, '');
  const cnPathname = pathnameTmp === '' ? '/' : pathnameTmp;

  return (
    <div className="top fl">
      <div className="top fl">
        <div className="fl">
          <Link to={`${HREF.INDEX}`} title="CSSC" className="logo">
            <img src={images_tb_jpg} alt="" />
          </Link>
        </div>
        <div className="lang-position">
          <div className="lang-btn">
            <Link to={`/`} id="lang">
              <i>CN</i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

