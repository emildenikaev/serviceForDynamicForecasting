<template>
  <div class="lct-main-page">
    <section class="lct-main-page__predict section-with-icons">
      <div class="lct-main-page__predict-info">
        <h3>
          РЕКОМЕНДАТЕЛЬНЫЙ СЕРВИС ДИНАМИЧЕСКОГО ПРОГНОЗИРОВАНИЯ СПРОСА НА
          АВИАРЕЙСЫ
        </h3>
        <p>
          Анализирует данные и предсказывает спрос на авиабилеты для оптимизации
          бизнеса.
        </p>
        <router-link :to="{ name: 'analyticsPage' }">
          <a-button type="primary" class="btn btn-analytic">Перейти</a-button>
        </router-link>
      </div>
      <div class="lct-main-page__predict-photos">
        <div class="outer">
          <img
            src="../../assets/main-page/plane.jpg"
            alt="Авиакомпания"
            class="img"
          />
          <img
            src="../../assets/main-page/column.jpg"
            alt="Аналитика авиарейсов"
            class="img inner inner-bs"
          />
        </div>
      </div>
    </section>
    <section class="lct-main-page__predict">
      <div class="list-wrapper">
        <h1>Решает следующие задачи:</h1>
        <ul class="list-wrapper__task">
          <li>
            <div>
              <div class="img-wrap">
                <div class="icon-numbers">1</div>
                <p>
                  Определение динамики бронирований рейса в разрезе классов
                  бронирования по вылетевшим рейсам;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap">
                <div class="icon-numbers">2</div>
                <p>
                  Определение сезонности спроса по классам бронирования, по
                  вылетевшим рейсам;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap">
                <div class="icon-numbers">3</div>
                <p>
                  Определение профилей спроса в разрезе классов бронирования, по
                  вылетевшим рейсам;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap">
                <div class="icon-numbers">4</div>
                <p>
                  Прогнозирование спроса в разрезе классов бронирования для
                  продаваемых рейсов.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="lct-main-page__predict section-with-icons">
      <div
        class="lct-main-page__predict-photos lct-main-page__predict-photos-last"
      >
        <img
          src="../../assets/main-page/windowPlane.jpg"
          alt="Купить билет на самолет"
          class="img"
        />
      </div>
      <div class="lct-main-page__predict-info">
        <h3>
          Умный сервис для оптимизации доходов авиакомпаний: прогноз спроса и
          управление продажами
        </h3>
        <p>
          Сервис для прогнозирования спроса на авиарейсы, учитывающий динамику
          бронирования, сезонность и внешние факторы. Система управления
          доходами предназначена для увеличения доходов авиакомпании от продажи
          услуг пассажирских перевозок с использованием технологии определения
          оптимальных объемов продаж по классам бронирования
        </p>
      </div>
    </section>
    <section class="lct-main-page__predict lct-info">
      <div class="service-info">
        <div>
          <h1 class="service-info-header">АКТУАЛЬНОСТЬ ЗАДАЧИ</h1>
          <p>
            Автоматизированный автоматический процесс прогнозирования спроса
            авиаперевозки в разрезе классов бронирования должен увеличить
            эффективность процесса управления оптимизацией ценообразования
            услуги авиационной перевозки. Процесс прогнозирования спроса
            является составной частью целевого процесса управления доходами
            авиакомпании от оказания услуг авиаперевозок. Процесс
            прогнозирования спроса авиаперевозки входит составной частью в
            систему управления доходами.
          </p>
        </div>
      </div>
      <div class="service-analytics inner-bs">
        <p class="service-analytics-header">
          Система управления доходами предназначена для увеличения доходов
          авиакомпании от продажи услуг пассажирских перевозок с использованием
          технологии определения оптимальных объемов продаж по классам
          бронирования
        </p>
      </div>
    </section>

    <section class="lct-main-page__predict lct-last-section">
      <div class="list-wrapper">
        <h1>Преимущества сервиса:</h1>
        <ul>
          <li>
            <div>
              <div class="img-wrap img-wrap-icons">
                <img
                  src="../../assets/main-page/tochnost.png"
                  alt="Авиарейсы"
                />
                <h4>Точность прогноза</h4>
              </div>
              <p>
                Увеличение точности прогнозирования спроса на авиарейсы, что
                позволяет более эффективно управлять заполненностью рейсов и
                оптимизировать расписание полетов;
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap img-wrap-icons">
                <img src="../../assets/main-page/zatrat.png" alt="Авиарейсы" />
                <h4>Снижение затрат</h4>
              </div>
              <p>
                Снижение затрат на маркетинг и рекламу благодаря более точной
                оценке потребностей клиентов;
              </p>
            </div>
          </li>
          <li>
            <div>
              <div class="img-wrap img-wrap-icons">
                <img src="../../assets/main-page/adapt.png" alt="Авиарейсы" />
                <h4>Адаптируемость</h4>
              </div>
              <p>
                Предоставление возможности быстро адаптироваться к изменениям в
                спросе, таким как сезонные колебания или неожиданные события
                (например, пандемия).
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <img
      class="finish-img"
      src="../../assets/main-page/dzet.png"
      alt="Самолеты Аэрофлот"
    />
  </div>
</template>

<script>
export default {
  name: "lct-main-page",
};
</script>

<style scoped lang="scss">
.lct-info {
  display: flex;
  flex-direction: column;
}

.inner-bs {
  box-shadow: 0px 15px 15px 3px rgba(0, 0, 0, 0.3);
}

section {
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .outer {
    position: relative;
  }

  .img {
    width: 400px;
    border-radius: 50px;
  }

  .inner {
    position: absolute;
    top: 250px;
    right: 250px;
    width: 250px;
    height: 250px;

    &-left {
      position: absolute;
      top: 250px;
      left: 250px;
      width: 250px;
      height: 250px;
    }
  }

  .service-info {
    display: flex;
    border-radius: 30px;
    background: #02458d;
    color: white;
    padding: 50px 180px 250px 200px;
    font-size: 30px;
    text-align: left;

    &-header {
      color: white;
      font-size: 60px;
    }
  }

  .service-analytics {
    padding: 40px 80px;
    border-radius: 30px;
    border: 4px solid white;
    background: #f6f8fe;
    margin: -210px 100px 50px 100px;

    &-header {
      font-size: 18px;
      text-align: left;
      color: #02458d;
      line-height: 1;
      margin: 0;
    }
  }
}

section.section-with-icons {
  margin-bottom: 150px;
}

h1 {
  font-size: 40px;
  margin-bottom: 10px;
  text-align: left;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

p {
  font-size: 18px;
  margin-bottom: 6px 0;
}

.icon-numbers {
  font-size: 40px;
  padding: 0px 20px;
  color: white;
  background: #02458d;
  margin-left: 0px;
  margin-bottom: 15px;
  border-radius: 50%;
}

.list-wrapper {
  ul {
    margin-top: 20px;
    padding-left: 16px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__task {
    align-items: center;
  }

  li {
    margin: 30px 0;
    display: flex;
    margin-right: 50px;
    font-size: 18px;
    align-items: center;

    p {
      max-width: 350px;
    }

    h4 {
      padding-left: 0;
      margin-bottom: 5px;
    }

    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .img-wrap {
      margin-bottom: 5px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      h4 {
        padding-left: 0;
        margin-bottom: 0px;
      }

      p {
        margin-bottom: 0;
      }

      &-icons {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        img {
          width: 80px;
          height: 80px;
          margin-left: 0px;
          margin-bottom: 15px;
        }
      }
    }
  }
}

section.lct-last {
  h2 {
    font-size: 30px;
  }
}

.lct-main-page {
  &__predict {
    &-info {
      max-width: 550px;
      text-align: left;
    }
  }
}

.btn {
  border-radius: 10px;
  background-color: #02458d;
  border-color: #02458d;
  margin-top: 25px;
}

.btn-revert {
  border-radius: 10px;
  background: white;
  color: #02458d;
  border-color: white;
  border: 1px solid #02458d;
}

.btn-analytic {
  display: flex;
  align-items: center;
  padding: 30px 36px;
  font-size: 24px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-size: 20px;

  p {
    font-size: 16px;
  }

  h4 {
    margin-bottom: 0;
    padding-left: 10px;
  }

  li {
    text-align: left;
    font-size: 16px;
  }
}

section.lct-last-section {
  margin-bottom: 0;
}

.finish-img {
  max-width: 600px;
}

@media (max-width: 1000px) {
  section {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    margin-bottom: 40px;

    .service-info {
      max-width: 350px;
      padding: 25px 36px 25px 25px;
      font-size: 12px;
      &-header {
        font-size: 20px;
      }
    }

    .img {
      width: 350px;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
  }

  section.section-with-icons {
    margin-bottom: 40px;
  }

  .lct-main-page__predict-photos {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .lct-main-page__predict-photos-last {
    margin-top: 0;
  }

  #triangle-right {
    display: none;
  }

  .inner-bs {
    display: none;
  }

  .finish-img {
    max-width: 350px;
  }

  section.lct-last {
    margin-bottom: 40px;
  }

  .btn {
    margin-bottom: 20px;
  }
}
</style>
