<template>
  <div class="lct-analytics-page">
    <div class="form">
      <a-form
        name="time_related_controls"
        :model="formState"
        v-bind="formItemLayout"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="selectDirection"
          :rules="[
            {
              required: true,
              message: 'Пожалуйста, выберите направление рейса',
            },
          ]"
          class="form-item"
        >
          <label for="selectDirection">Направление рейса:</label>
          <a-select
            v-model:value="formState.selectDirection"
            :show-arrow="false"
            @change="updateFilters"
          >
            <a-select-option v-for="item in DIRECTIONS.directions" :key="item">
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="flightNumbers"
          :rules="[
            { required: true, message: 'Пожалуйста, выберите номер рейса!' },
          ]"
          class="form-item"
        >
          <label for="flightNumbers">Номер рейса: </label>
          <a-select
            v-model:value="formState.flightNumbers"
            :show-arrow="false"
            @change="updateFilters"
          >
            <a-select-option
              v-for="item in FLIGHT_NUMBERS.flight_numbers"
              :key="item"
            >
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="selectScenarios"
          v-if="showScenarios"
          :rules="[
            {
              required: true,
              message: 'Пожалуйста, выберите сценарий',
            },
          ]"
          class="form-item"
        >
          <label for="selectScenarios">Сценарий:</label>
          <a-select
            v-model:value="formState.selectScenarios"
            :show-arrow="false"
            @change="updateFilters"
          >
            <a-select-option v-for="item in SCENARIOS.scenarios" :key="item">
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="flightDate"
          v-bind="config"
          v-if="showFlightDate"
          class="form-item"
        >
          <label for="flightDate">Дата полета:</label>
          <a-date-picker
            v-model:value="formState.flightDate"
            value-format="YYYY-MM-DD"
            :defaultPickerValue="pickerValue"
            :disabled-date="
              (date) => {
                const year = date.year();
                return year < toFlightDate || year > fromFlightDate;
              }
            "
            @change="updateFilters"
            placeholder=""
            class="ant-select"
          />
        </a-form-item>
        <a-form-item
          name="selectBookingClass"
          :rules="[
            {
              required: true,
              message: 'Пожалуйста, выберите класс бронирования!',
            },
          ]"
          class="form-item"
        >
          <label for="selectBookingClass">Класс бронирования:</label>
          <a-select
            v-model:value="formState.selectBookingClass"
            :mode="mode"
            :show-arrow="false"
            @change="handleSelectChange"
            class="ant-select"
          >
            <a-select-option
              v-for="item in BOOKING_CLASSES.booking_classes"
              :key="item"
            >
              {{ item }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          name="bookingPeriod"
          class="form-item"
          v-if="showFlightPeriod"
        >
          <label for="bookingPeriod">Количество месяцев от даты полета: </label>
          <a-input-number
            v-model:value="formData.bookingPeriod"
            :min="1"
            :max="12"
            @change="updateFilters"
            class="ant-picker ant-select"
          />
        </a-form-item>
        <a-form-item
          name="flightStart"
          v-bind="config"
          v-if="showFlightStart"
          class="form-item"
        >
          <label for="flightStart">Начальная дата:</label>
          <a-date-picker
            v-model:value="formState.flightStart"
            value-format="YYYY-MM-DD"
            :defaultPickerValue="pickerValue"
            :disabled-date="
              (date) => {
                const year = date.year();
                return year < toFlightDate || year > fromFlightDate;
              }
            "
            @change="updateFilters"
            placeholder=""
            class="ant-select"
          />
        </a-form-item>
        <a-form-item
          name="flightEnd"
          v-bind="config"
          v-if="showFlightEnd"
          class="form-item"
        >
          <label for="flightEnd">Конечная дата:</label>
          <a-date-picker
            v-model:value="formState.flightEnd"
            value-format="YYYY-MM-DD"
            :defaultPickerValue="formState.flightStart"
            :disabled-date="
              (date) => {
                const start = formState.flightStart;
                return (
                  start &&
                  (date.isBefore(start) || date.isAfter(toFlightDatePeriod))
                );
              }
            "
            @change="updateFilters"
            placeholder=""
            class="ant-select"
          />
        </a-form-item>
      </a-form>
    </div>
    <a-button type="primary" @click="requestGraph()" class="btn"
      >Анализировать</a-button
    >
    <router-link :to="{ name: 'analyticsPage' }">
      <a-button type="primary" class="btn">Назад</a-button>
    </router-link>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "lct-analytics-page",
  data() {
    return {
      query: [],
      formData: {
        bookingPeriod: 1,
      },
    };
  },
  props: {
    showFlightDate: {
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
    },
    toFlightDate: {
      type: Number,
      default: 2018,
    },
    fromFlightDate: {
      type: Number,
      default: 2019,
    },
    toFlightDatePeriod: {
      type: String,
      default: "2019-12-31",
    },
    pickerValue: {
      type: String,
      default: "2018-01-01",
    },
    mode: {
      type: String,
      default: "multiple",
    },
    showFlightPeriod: {
      type: Boolean,
      default: true,
    },
    showFlightStart: {
      type: Boolean,
      default: false,
    },
    showFlightEnd: {
      type: Boolean,
      default: false,
    },
    showScenarios: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions([
      "GET_DIRECTIONS_FROM_API",
      "GET_SCENARIOS_FROM_API",
      "GET_FLIGHT_NUMBERS_FROM_API",
      "GET_BOOKING_CLASSES_FROM_API",
      "GET_GRAPH_FROM_API",
    ]),
    requestGraph() {
      if (!this.GRAPH.length) {
        this.query.link = this.link;
        this.GET_GRAPH_FROM_API(this.query);
      }
    },
    handleSelectChange(value) {
      if (value.length > 3) {
        this.formState.selectBookingClass.splice(0, 1);
        this.formState.selectBookingClass = [...value];
      } else {
        this.formState.selectBookingClass = [...value];
      }
      this.updateFilters();
    },
    updateFilters() {
      if (this.formState.selectDirection) {
        this.query.direction = this.formState.selectDirection;
        if (!this.FLIGHT_NUMBERS.length) {
          this.GET_FLIGHT_NUMBERS_FROM_API(this.query.direction);
        }
      }

      if (this.formState.selectScenarios) {
        this.query.scenario = this.formState.selectScenarios;
      }

      if (this.formState.flightDate) {
        this.query.flight_date = this.formState.flightDate;
      }

      if (this.formState.flightEnd) {
        this.query.booking_end = this.formState.flightEnd;
      }

      if (this.formState.flightStart) {
        this.query.booking_start = this.formState.flightStart;
      }

      if (this.formState.selectBookingClass) {
        this.query.booking_class = this.formState.selectBookingClass;
      }

      if (this.formData.bookingPeriod) {
        this.query.booking_period = this.formData.bookingPeriod;
      }

      if (this.formState.flightNumbers) {
        this.query.flight_number = this.formState.flightNumbers;
      }
    },
  },
  setup() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const config = {
      rules: [
        {
          type: "string",
          required: true,
          message: "Пожалуйста, выберете дату полета!",
        },
      ],
    };
    const formState = reactive({
      "input-number": 3,
      "checkbox-group": ["A", "B"],
      rate: 3.5,
    });
    const onFinish = (values) => {
      console.log("Success:", values, formState);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
      config,
    };
  },
  computed: {
    ...mapGetters([
      "DIRECTIONS",
      "FLIGHT_NUMBERS",
      "BOOKING_CLASSES",
      "GRAPH",
      "SCENARIOS",
    ]),
  },

  mounted() {
    if (!this.DIRECTIONS.length) {
      this.GET_DIRECTIONS_FROM_API();
    }

    if (!this.SCENARIOS.length) {
      this.GET_SCENARIOS_FROM_API();
    }

    if (!this.BOOKING_CLASSES.length) {
      this.GET_BOOKING_CLASSES_FROM_API();
    }
  },
});
</script>

<style scoped lang="scss">
.ant-picker {
  width: 100%;
}

.lct-analytics-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn {
  margin-top: 15px;
  width: 20rem;
  border-radius: 10px;
  background-color: #02458d;
  border-color: #02458d;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  font-size: 16px;

  &-revert {
    border-radius: 10px;
    background: white;
    color: #02458d;
    border-color: white;
  }
}

.chart {
  width: 95%;
}

.form {
  &-part {
    display: flex;
    margin-left: 7rem;
    align-items: flex-end;
  }

  &-item {
    width: 20rem;
  }

  .ant-select {
    width: 20rem;
  }
}

label {
  display: flex;
  text-align: left;
  width: 20rem;
}

@media (max-width: 1000px) {
  .lct-analytics-page {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
}
</style>
