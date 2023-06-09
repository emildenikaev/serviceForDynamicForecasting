import { createStore } from "vuex";

import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = { ...commonActions, ...apiRequests };

export default createStore({
  state: {
    graph: {
      data: {
        series: [
          {
            name: "Суммарное бронирование",
            type: "line",
            data: [0, 10, 19, 36, 44, 45, 50, 58],
          },
          {
            name: "Бронирование за день",
            type: "column",
            data: [1.1, 3, 4, 1, 4.1, 6.5, 4, 10],
          },
        ],
        chart_options: {
          chart: {
            height: 800,
            type: "line",
            stacked: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [6, 1, 3],
            curve: "straight",
          },
          colors: ["#f37b09", "#02458d"],
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },

          xaxis: {
            type: "datetime",
            categories: [
              "2018-02-09",
              "2018-02-10",
              "2018-02-11",
              "2018-02-12",
              "2018-02-13",
              "2018-02-14",
              "2018-02-15",
              "2018-02-16",
            ],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#f37b09",
              },
              labels: {
                style: {
                  colors: "#f37b09",
                },
              },
              tooltip: {
                enabled: true,
              },
            },
            {
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#02458d",
              },
              labels: {
                style: {
                  colors: "#02458d",
                },
              },
              tooltip: {
                enabled: true,
              },
            },
          ],
          tooltip: {
            enabled: true,
            shared: true,
            intersect: false,
            followCursor: true,
            marker: {
              show: false,
            },
            x: {
              format: "dd MMM yyyy",
            },
            fixed: {
              enabled: true,
              position: "topLeft",
              offsetY: 30,
              offsetX: 60,
            },
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40,
            fontSize: "17px",
          },
        },
      },
    },
    directions: [],
    flightNumbers: [],
    bookingClasses: [],
    scenarios: [],
  },
  mutations,
  actions,
  getters,
});
