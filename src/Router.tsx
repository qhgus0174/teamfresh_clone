import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "@routes/Main";

import timfInfo from "@routes/company/timf/timfInfo";
import partnerInfo from "@routes/company/partner/partnerInfo";
import customerInfo from "@routes/company/customer/customerInfo";
import timfMap from "@routes/company/map/timfMap";

import TS from "@routes/business/ts/TS";
import LF from "@routes/business/lf/LF";
import FU from "@routes/business/fu/FU";
import GR from "@routes/business/gr/GR";

import noticeList from "@routes/notice/notice/noticeList";
import employmentList from "@routes/notice/employment/employmentList";
import serviceInfo from "@routes/notice/serviceinfo/serviceinfo";

import pressReleaseList from "@routes/pressrelease/pressReleaseList";

import earlyDeliverySearch from "@routes/delivery/earlyDeliverySearch";

import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter basename="teamfresh_clone">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/company/timf/timfInfo" component={timfInfo} />
        <Route
          exact
          path="/company/partner/partnerInfo"
          component={partnerInfo}
        />
        <Route
          exact
          path="/company/customer/customerInfo"
          component={customerInfo}
        />
        <Route exact path="/company/map/timfMap" component={timfMap} />

        <Route exact path="/business/ts/TS" component={TS} />
        <Route exact path="/business/lf/LF" component={LF} />
        <Route exact path="/business/fu/FU" component={FU} />
        <Route exact path="/business/gr/GR" component={GR} />

        <Route exact path="/notice/notice/noticeList" component={noticeList} />
        <Route
          exact
          path="/notice/employment/employmentList"
          component={employmentList}
        />
        <Route
          exact
          path="/notice/serviceinfo/serviceInfo"
          component={serviceInfo}
        />

        <Route
          exact
          path="/pressrelease/pressReleaseList"
          component={pressReleaseList}
        />

        <Route
          exact
          path="/delivery/earlyDeliverySearch"
          component={earlyDeliverySearch}
        />

        <Route component={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
