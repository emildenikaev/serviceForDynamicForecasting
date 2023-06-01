import { createRouter, createWebHistory } from "vue-router";
import lctMainPage from "../components/main-page/lct-main-page";
import lctAnalyticsPage from "../components/analytics-page/lct-analytics-page";
import lctDynamicsFlight from "../components/analytics-page/lct-dynamics-flight";
import lctSeasonalityDemand from "../components/analytics-page/lct-seasonality-demand";
import lctDeterminationDemand from "../components/analytics-page/lct-determination-demand";
import lctForecastingDemand from "../components/analytics-page/lct-forecasting-demand";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: lctMainPage,
  },
  {
    path: "/analytics",
    name: "analyticsPage",
    component: lctAnalyticsPage,
  },
  {
    path: "/analytics/dynamicsFlight",
    name: "dynamicsFlight",
    component: lctDynamicsFlight,
  },
  {
    path: "/analytics/seasonalityDemand",
    name: "seasonalityDemand",
    component: lctSeasonalityDemand,
  },
  {
    path: "/analytics/determinationDemand",
    name: "determinationDemand",
    component: lctDeterminationDemand,
  },
  {
    path: "/analytics/forecastingDemand",
    name: "forecastingDemand",
    component: lctForecastingDemand,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
