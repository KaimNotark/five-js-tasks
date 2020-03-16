<template>
  <div class="container">
    <h2 class="subtitle _green">Задача 5</h2>
    <p class="text">
      Функция принимает строку с числами, раздененными пробелом.
      Нужно вернуть строку с максимальным и минимальным числом.
    </p>
    <p class="text">
      <span class="_green">Пример:</span>
    </p>

    <ul class="list">
      <li class="item">
        fifth("1 2 3 4 5");
        <span class="_gray">// "5 1"</span>
      </li>
      <li class="item">
        fifth("1 2 -3 4 5");
        <span class="_gray">// "5 -3"</span>
      </li>
      <li class="item">
        fifth("1 9 3 4 -5");
        <span class="_gray">// "9 -5"</span>
      </li>
    </ul>

    <h3 class="sub-subtitle _green">Решение:</h3>
    <p class="text">Введите числа через пробел:</p>
    <input type="text" size="80" class="users-string" v-model="stringOfNumbers" />
    <p class="text">
      <span class="_green">Вы ввели:</span>
      " {{ stringOfNumbers }} "
    </p>

    <br />
    <b-button
      variant="outline-primary"
      type="button"
      class="button"
      @click="onAnalysis"
    >Показать результат</b-button>

    <p class="text">
      <span class="_green">Максимальное и минимальное числа:</span>
      "
      <span class="_red">{{ stringMaxMin }}</span>
      "
    </p>

  </div>
</template>

<script>
export default {
  name: "jm5",

  data() {
    return {
      stringOfNumbers: "1 9 3 4 -5",
      stringMaxMin: "",

      arrayOfNumbers: [],
      sortedArray: [],
      maxMin: [] // maxMin[0]=MAX, maxMin[1]=MIN
    };
  },

  methods: {
    onAnalysis() {
      this.arrayOfNumbers = this.stringOfNumbers.split(" ");

      this.sortedArray = this.arrayOfNumbers;
      this.sortedArray.sort((a, b) => a - b);

      this.maxMin[0] = this.sortedArray[this.sortedArray.length - 1];
      this.maxMin[1] = this.sortedArray[0];

      this.stringMaxMin = this.maxMin.join(" ");
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