import React from "react";
import { Top } from "../commons/Top";
import { Nav } from "../commons/Nav";
import { FlexSlider } from "./FlexSlider";
import { YJJG } from "./YJJG";
import { Notice } from "../commons/Notice";
import { XWDT } from "./XWDT";
import { DLCG } from "./DLCG";
import { Footer } from "../commons/Footer";

import "@/js/jquery-1.7.2.min";
import "@/js/jquery.flexslider-min";
import { flexSliderStart } from "@/js/index.flexSlider";

function Homepage() {
  React.useEffect(() => {
    flexSliderStart();
  }, []);

  return (
    <div className="wid1050">
      <Top />
      <Nav />
      <FlexSlider />
      <YJJG />
      <div className="sy-left fl">
        <Notice />
        {/* <div className="sy-left-menu f1">
          <img src={lfrs_jpg} />
        </div>
        // 整个页面卡顿原因
      <div style="margin: 20px 0px;">
        <script
          type="text/javascript"
          id="clustrmaps"
          src="//cdn.clustrmaps.com/map_v2.js?d=Z1lwJRmG2bIQNQmRERVgnIEGmYzR58bmD3Fi31Vgz6Q&cl=ffffff&w=a"
        ></script>
      </div> */}
      </div>
      <div className="sy-right fl">
        <XWDT />
        <DLCG />
      </div>
      <Footer />
    </div>
  );
}

export { Homepage };
