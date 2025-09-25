import React from "react";
import yjjg_jpg from "@/images/web/yjjg.jpg";
import { Link } from "react-router-dom";
import { HREF } from "../../db";

export function YJJG() {
  return (
    <div className="yjjg fl">
      <div className="yjjg-title fl">
        <Link to={HREF.RECENT_RESEARCH}>
          <img src={yjjg_jpg} />
        </Link>
      </div>
      <div className="yjjg-list fl" id="demo">
        <div style={{ float: "left", width: "10000000px" }}>
          <div id="demo1" className="fl wid-auto">
            <ul>
              <li>
                <a
                  href="/downloadfile/2020/TBI2Flow%20Travel%20behavioral%20inertia%20based%20long-term%20taxi%20passenger%20flow%20prediction.pdf"
                  target="_blank"
                  download="TBI2Flow Travel behavioral inertia based long-term taxi passenger flow prediction"
                >
                  <img
                    src="/images/research/2020TBI2Flow.png"
                    width="100"
                    height="70"
                  />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2020/HUADHierarchical Urban Anomaly Detection Based on Spatio-Temporal Data.pdf"
                  target="_blank"
                  download="HUADHierarchical Urban Anomaly Detection Based on Spatio-Temporal Data"
                >
                  <img src="/images/research/p12.png" width="100" height="70" />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2020/Emergency warning messages dissemination in vehicular social networksA trust based scheme.pdf"
                  target="_blank"
                  download="Emergency warning messages dissemination in vehicular social networksA trust based scheme"
                >
                  <img
                    src="/images/research/2020Emergency.png"
                    width="100"
                    height="70"
                  />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2020/Vehicle Trajectory Clustering Based on Dynamic Representation Learning of Internet of Vehicles.pdf"
                  target="_blank"
                  download="Vehicle Trajectory Clustering Based on Dynamic Representation Learning of Internet of Vehicles"
                >
                  <img src="/images/research/p14.png" width="100" height="70" />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2019/Ranking Station Importance With Human Mobility Patterns Using Subway Network Datasets.pdf"
                  target="_blank"
                  download="Ranking Station Importance With Human Mobility Patterns Using Subway Network Datasets"
                >
                  <img src="/images/research/p6.png" width="100" height="70" />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2020/Hyperspectral Image Classification Using Mixed.pdf"
                  target="_blank"
                  download="Hyperspectral Image Classification Using Mixed"
                >
                  <img src="/images/research/p15.png" width="100" height="70" />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2020/A collective filtering based content transmission scheme in edge of vehicles.pdf"
                  target="_blank"
                  download="A collective filtering based content transmission scheme in edge of vehicles"
                >
                  <img src="/images/research/p16.png" width="100" height="70" />
                </a>
              </li>
              <li>
                <a
                  href="/downloadfile/2020/Totally asymmetric simple exclusion process on multiplex networks.pdf"
                  target="_blank"
                  download="Totally asymmetric simple exclusion process on multiplex networks"
                >
                  <img
                    src="/images/research/图片1.png"
                    width="100"
                    height="70"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div id="demo2" className="fl wid-auto"></div>
        </div>
      </div>
    </div>
  );
}
