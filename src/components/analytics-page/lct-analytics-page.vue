<template>
  <div class="ul-wrap">
    <ul>
      <div class="ul-wrap__list">
        <li>
          <div>
            <a href="#dynamicsFlight">
              <img src="../../assets/main-page/arrow.svg" alt="Авиарейсы" />
              Определение динамики бронирований рейса в разрезе классов
              бронирования по вылетевшим рейсам;
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#seasonalityDemand">
              <img src="../../assets/main-page/arrow.svg" alt="Авиарейсы" />

              Определение сезонности спроса по классам бронирования, по
              вылетевшим рейсам;
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#forecastingDemand">
              <img src="../../assets/main-page/arrow.svg" alt="Авиарейсы" />

              Прогнозирование спроса в разрезе классов бронирования для
              продаваемых рейсов.
            </a>
          </div>
        </li>
      </div>
      <!-- <div>
        <li>
          <div>
            <a href="#determinationDemand">
              <img src="../../assets/main-page/arrow.svg" alt="Авиарейсы" />

              Определение профилей спроса в разрезе классов бронирования, по
              вылетевшим рейсам;
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="#forecastingDemand">
              <img src="../../assets/main-page/arrow.svg" alt="Авиарейсы" />

              Прогнозирование спроса в разрезе классов бронирования для
              продаваемых рейсов.
            </a>
          </div>
        </li>
      </div> -->
    </ul>
  </div>

  <div class="lct-analytics-page">
    <h2 id="dynamicsFlight">
      Определение динамики бронирований рейса в разрезе классов бронирования по
      вылетевшим рейсам.
    </h2>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img
          src="../../assets/analytics-type/1.png"
          alt="Определение динамики бронирований"
          class="icon"
        />
      </div>
      <div class="wrapper info">
        <p>
          Реализован автоматизированный процесс расчета динамики бронирования по
          каждому пролетевшему рейсу в разрезе каждого класса. Результаты
          динамики бронирования представлены в виде графиков (линейные или
          гистограммы), есть возможность управления периодом просмотра динамики
          бронирования.
        </p>
        <router-link :to="{ name: 'dynamicsFlight' }">
          <a-button type="primary" class="btn">Динамика бронирования</a-button>
        </router-link>
      </div>
    </div>
    <h2 id="seasonalityDemand">
      Определение сезонности спроса по классам бронирования, по вылетевшим
      рейсам.
    </h2>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img
          src="../../assets/analytics-type/2.png"
          alt="Определение сезонности спроса"
          class="icon"
        />
      </div>
      <div class="wrapper info">
        <p>
          Реализован автоматизированный процесс расчета сезонности спроса
          бронирования по каждому пролетевшему рейсу в разрезе каждого класса.
          Результаты сезонности представлены в виде графиков (линейные или
          гистограммы). Реализована возможность управлять периодом просмотра
          сезонности бронирования.
        </p>
        <router-link :to="{ name: 'seasonalityDemand' }">
          <a-button type="primary" class="btn">Сезоны</a-button>
        </router-link>
      </div>
    </div>
    <!-- <h2 id="determinationDemand">
      Определение профилей спроса в разрезе классов бронирования, по вылетевшим
      рейсам. (2017-2019 год)
    </h2>
    <p class="p-fix">
      Определяет профиль спроса в зависимости от глубины прогнозирования для
      разных сегментированных пассажиров. Реализован автоматизированный процесс
      расчета профиля спроса в зависимости от глубины прогнозирования
      бронирования по каждому пролетевшему рейсу в разрезе каждого класса.
      Результаты профиля спроса представлены в виде графиков (линейные или
      гистограммы). Период бронирования 2017 – 2019 год
    </p>
    <div class="lct-analytics-page-info">
      <div class="wrapper">
        <img
          src="../../assets/analytics-type/3.png"
          alt="Определение профилей спроса в разрезе классов бронирования"
          class="icon"
        />
      </div>
      <div class="wrapper info">
        <ul>
          <h4>Реализованы возможности:</h4>
          <li>наложения графиков от различных профилей;</li>
          <li>
            спроса просмотра смешанного профиля спроса управления периодом;
          </li>
          <li>просмотра профиля спроса бронирования.</li>
        </ul>
        <router-link :to="{ name: 'determinationDemand' }">
          <a-button type="primary" class="btn">Профиль спроса</a-button>
        </router-link>
      </div>
    </div> -->
    <div class="h2-header"></div>
    <h2 id="forecastingDemand">
      Прогнозирование спроса в разрезе классов бронирования для продаваемых
      рейсов на 2020 год.
    </h2>

    <div class="lct-analytics-page-info lct-analytics-page-info-last">
      <div class="wrapper">
        <img src="../../assets/analytics-type/4.png" alt="ICON" class="icon" />
      </div>
      <div class="wrapper info">
        <p>
          Реализован автоматизированный процесс расчета прогнозного спроса
          бронирования по каждому продаваемому рейсу в разрезе каждого класса.
          Прогноз спроса рассчитывается для различной глубины прогнозирования
          спроса. Результаты представлены в виде графиков (линейные или
          гистограммы). Добавлена возможность управлять периодом просмотра
          прогноза спроса бронирования.
        </p>
        <router-link :to="{ name: 'forecastingDemand' }">
          <a-button type="primary" class="btn">Профиль спроса</a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "lct-analytics-page",
});
</script>

<style scoped lang="scss">
.ul-wrap {
  margin-bottom: 100px;
  margin-top: 50px;

  ul {
    list-style: none;
    display: flex;
    font-size: 1rem;
    font-size: 20px;
    justify-content: space-between;

    p {
      font-size: 16px;
    }

    h4 {
      margin-bottom: 0;
      padding-left: 10px;
    }
  }
  li {
    text-align: left;
    font-size: 16px;
    display: flex;
    align-items: center;
    max-width: 400px;
    margin-right: 50px;
    margin-top: 30px;

    a {
      color: black;
      display: flex;
    }

    img {
      margin-right: 20px;
    }
  }
}

.ul-wrap__list {
  display: flex;
}

img.icon {
  max-width: 600px;
}

h2 {
  font-size: 2rem;
  margin-top: 50px;
  max-width: 800px;
  margin-left: 150px;
}

p {
  position: relative;
  width: 100%;
  min-height: 1px;
  font-size: 1rem;
  padding-right: 30px;
  text-align: left;
}
.p-fix {
  max-width: 900px;
  margin-left: 50px;
}

.lct-analytics-page-info {
  display: flex;

  .btn {
    border-radius: 10px;
    background-color: #02458d;
    border-color: #02458d;
    display: flex;
    align-items: center;
    padding: 20px 20px;
    font-size: 20px;

    &-revert {
      border-radius: 10px;
      background: white;
      color: #02458d;
      border-color: white;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
  }

  ul {
    list-style: none;
    border-left: 10px solid #02458d;
    padding: 0;
    font-size: 1rem;
    font-size: 20px;
    text-align: left;

    h4 {
      margin-bottom: 0;
      padding-left: 10px;
    }

    li {
      padding: 10px;
      text-align: left;
      font-size: 16px;
    }
  }
}

.lct-analytics-page-info {
  margin-bottom: 150px;

  &-last {
    margin-bottom: 50px;
  }
}

*[id]:before {
  display: block;
  content: " ";
  margin-top: -75px;
  height: 75px;
  visibility: hidden;
}

@media (max-width: 1000px) {
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    width: 100%;
  }

  .lct-analytics-page-info {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 400px;
  }

  ul {
    flex-direction: column;
    img {
      width: 40px;
    }
  }
  h2 {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
