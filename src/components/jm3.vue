<template>
  <div class="container">
    <h2 class="subtitle _green">Задача 3</h2>
    <p class="text">
      На входе функции год (числом).
      Функция должна вернуть первую пятницу 13-е этого года в виде объекта Date.
    </p>
    <p class="text">
      <span class="_green">Пример:</span>
    </p>
    <p class="text">
      third(2019)
      <span class="_gray">// Fri Sep 13 2019 03:00:00 GMT+0300 (Moscow Standard Time)</span>
    </p>

    <h3 class="sub-subtitle _green">Решение:</h3>
    <p class="text">Введите год:</p>
    <input type="text" size="4" class="users-string" v-model="usersYear" />
    <p class="text">
      <span class="_green">Вы ввели:</span>
      " {{ usersYear }} "
    </p>

    <b-button
      variant="outline-primary"
      type="button"
      class="button"
      @click="onAnalysis"
    >Показать результат</b-button>

    <p class="text">
      <span class="_green">Первая ПТ 13-е:</span> "
      <span class="_red">{{ first13th }}</span>
 "
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm3",

  data() {
    return {
      usersYear: "2019",
      first13th: ""
    };
  },

  methods: {
    onAnalysis() {
      let usersDay = 0;
      for (let i = 0; i <= 11; i++) {
        let usersDate = new Date(this.usersYear, i, 13);
        usersDay = usersDate.getDay();
        this.first13th = usersDate;
        if (usersDay == 5) break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

%text-input {
  color: $color-second;
  font-size: 16px;
  font-weight: 400;
  line-height: 12px;
}

%input {
  height: 45px;
  border: 1px solid $color-second;
  background-color: $color-white;
  border-radius: 6px;
  padding: 10px;
}

.users-string {
  @extend %text-input;
  @extend %input;
}
.text {
  width: 700px;
  margin-bottom: 5px;
}

.sub-subtitle {
  margin-top: 15px;
}
._green {
  color: $color-green;
}
._red {
  color: $color-red;
}
._gray {
  color: $color-gray;
}
</style>