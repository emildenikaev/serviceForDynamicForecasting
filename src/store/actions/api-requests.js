import axios from "axios";

export default {
  GET_GRAPH_FROM_API({ commit }, graphParams) {
    return axios(
      `http://46.243.227.152:8000/api/v1/calculation/${graphParams.link}?direction=${graphParams.direction}&flight_number=${graphParams.flight_number}&scenario=${graphParams.scenario}&flight_date=${graphParams.flight_date}&booking_class=${graphParams.booking_class}&booking_period=${graphParams.booking_period}&booking_start=${graphParams.booking_start}&booking_end=${graphParams.booking_end}`,
      {
        method: "GET",
      }
    )
      .then((graph) => {
        if (graph.data.status === 400) {
          alert(
            `Ошибка ${graph.status.response.status}: ${graph.status.response.data.error}`
          );
        }
        commit("SET_GRAPH_TO_STATE", graph.data);
        return graph;
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          alert("Ошибка: Некорректные данные или данных нет.");
        } else {
          alert("Произошла непредвиденная ошибка");
        }
      });
  },
  GET_DIRECTIONS_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/directions/", {
      method: "GET",
    })
      .then((directions) => {
        commit("SET_DIRECTIONS_TO_STATE", directions.data);
        return directions;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_SCENARIOS_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/scenarios/", {
      method: "GET",
    })
      .then((scenarios) => {
        commit("SET_SCENARIOS_TO_STATE", scenarios.data);
        return scenarios;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_FLIGHT_NUMBERS_FROM_API({ commit }, params) {
    return axios(
      `http://46.243.227.152:8000/api/v1/filters/flight_numbers/?direction=${params}`,
      {
        method: "GET",
      }
    )
      .then((flightNumbers) => {
        commit("SET_FLIGHT_NUMBERS_TO_STATE", flightNumbers.data);
        return flightNumbers;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_BOOKING_CLASSES_FROM_API({ commit }) {
    return axios("http://46.243.227.152:8000/api/v1/filters/booking_classes", {
      method: "GET",
    })
      .then((bookingClasses) => {
        commit("SET_BOOKING_CLASSES_TO_STATE", bookingClasses.data);
        return bookingClasses;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
