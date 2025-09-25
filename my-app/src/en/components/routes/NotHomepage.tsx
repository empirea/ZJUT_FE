import React from "react";
import { Route, Switch } from "react-router-dom";

import { Footer } from "../commons/Footer";
import { Nav } from "../commons/Nav";
import { Notice } from "../commons/Notice";
import { Top } from "../commons/Top";

import "@/css/pageNo.css";
import * as HREF from "../../db/hrefConstance";
import { NoticeMenu } from "../notice/NoticeMenu";
import { NoticePage } from "../notice/NoticePage";
import { NewsMenu } from "../news/NewsMenu";
import { NewsPage } from "../news/NewsPage";
import { RRMenu } from "../recent_research/RRMenu";
import { Direction } from "../research/Direction";
import { Platform } from "../research/Platform";
import { Foundation } from "../research/Foundation";
import { Members } from "../members/Members";
import { Paper } from "../publication/Paper";
import { Patent } from "../publication/Patent";
import { Awarded } from "../publication/Awarded";
import { AboutUs } from "../about/About";
import { Recreation } from "../others/Recreation";
import { OthersLink } from "../others/OthersLink";
import Menu_2021 from "../seminar/Menu_2021";
import Menu_2020 from "../seminar/Menu_2020";
import Menu_2022 from "../seminar/Menu_2022";
import Menu_2023 from "../seminar/Menu_2023";
import SeminarPage from "../seminar/SeminarPage";
import Menu_2024 from "../seminar/Menu_2024";
import Menu_2025 from "../seminar/Menu_2025";

function NotHomepage() {
  return (
    <div className="wid1050">
      <Top />
      <Nav />
      <div className="sy-left fl">
        <Notice />
      </div>
      <div className="sy-right fl">
        <Switch>
          <Route exact path={HREF.NOTICES} component={NoticeMenu} />
          <Route path={HREF.NOTICES_MENU + "/:id?"} component={NoticeMenu} />
          <Route path={HREF.NOTICES_PAGE + "/:id"} component={NoticePage} />

          <Route exact path={HREF.NEWS} component={NewsMenu} />
          <Route path={HREF.NEWS_MENU + "/:id?"} component={NewsMenu} />
          <Route path={HREF.NEWS_PAGE + "/:id"} component={NewsPage} />

          <Route exact path={HREF.RECENT_RESEARCH} component={RRMenu} />
          <Route
            path={HREF.RECENT_RESEARCH_MENU + "/:id?"}
            component={RRMenu}
          />

          <Route exact path={HREF.RESEARCH} component={Direction} />
          <Route exact path={HREF.RESEARCH_DIRECTION} component={Direction} />
          <Route
            exact
            path={HREF.RESEARCH_DIRECTION_PART + "/:id?"}
            component={Direction}
          />
          <Route path={HREF.RESEARCH_PLATFORM} component={Platform} />
          <Route path={HREF.RESEARCH_FOUNDATION} component={Foundation} />

          <Route exact path={HREF.MEMBERS} component={Members} />
          <Route path={HREF.MEMBERS + "/:title?/:id?"} component={Members} />

          <Route exact path={HREF.PUBLICATION} component={Paper} />
          <Route path={HREF.PUBLICATION_PAPER + "/:year?"} component={Paper} />
          <Route path={HREF.PUBLICATION_PATENT} component={Patent} />
          <Route path={HREF.PUBLICATION_AWARDED} component={Awarded} />

          <Route exact path={HREF.ABOUTUS} component={AboutUs} />

          <Route exact path={HREF.OTHERS} component={Recreation} />
          <Route exact path={HREF.OTHERS_RECREATION} component={Recreation} />
          <Route exact path={HREF.OTHERS_LINK} component={OthersLink} />
          <Route exact path={HREF.SEMINAR_2025} component={Menu_2025} />
          <Route exact path={HREF.SEMINAR_2025+"/:index?"} component={Menu_2025} />
          <Route exact path={HREF.SEMINAR} component={Menu_2023} />
          <Route exact path={HREF.SEMINAR_2024} component={Menu_2024} />
          <Route exact path={HREF.SEMINAR_2024+"/:index?"} component={Menu_2024} />

          <Route exact path={HREF.SEMINAR} component={Menu_2023} />
          <Route exact path={HREF.SEMINAR_2023} component={Menu_2023} />
          <Route exact path={HREF.SEMINAR_2023+"/:index?"} component={Menu_2023} />
          <Route exact path={HREF.SEMINAR_2022} component={Menu_2022} />
          <Route exact path={HREF.SEMINAR_2022+"/:index?"} component={Menu_2022} />
          <Route exact path={HREF.SEMINAR_2021} component={Menu_2021} />
          <Route exact path={HREF.SEMINAR_2021+"/:index?"} component={Menu_2021} />
          <Route exact path={HREF.SEMINAR_2020} component={Menu_2020} />
          <Route exact path={HREF.SEMINAR_2020+"/:index?"} component={Menu_2020} />
          <Route exact path={HREF.SEMINAR_PAGE + "/:id?"} component={SeminarPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export { NotHomepage };
