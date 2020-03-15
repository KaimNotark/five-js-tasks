<template>
  <div class="container">
    <h2 class="subtitle _green">Задача 4</h2>
    <p class="text">
      Функция принимает 2 массива с уникальными элементами.
      Функция должна возвращать число элементов, которые
      содержаться в обоих массивах.
    </p>
    <p class="text">
      <span class="_green">Пример:</span>
    </p>
    <p class="text">
      fourth(['Erlang', 'JavaScript'], ['Go', 'C++', 'Erlang']);
      <span class="_gray">// 1</span>
    </p>

    <h3 class="sub-subtitle _green">Решение:</h3>
    <p class="text">Введите слова в первый массив через пробел:</p>

    <input type="text" size="100" class="users-string" v-model="userArr1Str" @change="doFirstArray" />
    <p class="string">
      <span class="_green">Первый массив:</span>
      " {{ userArr1 }} "
    </p>
    <p class="text">Введите слова во второй массив через пробел:</p>

    <input
      type="text"
      size="100"
      class="users-string"
      v-model="userArr2Str"
      @change="doSecondArray"
    />
    <p class="string">
      <span class="_green">Второй массив:</span>
      " {{ userArr2 }} "
    </p>

    <br />
    <b-button
      variant="outline-primary"
      type="button"
      class="button"
      @click="onAnalysis"
    >Показать результат</b-button>

    <p class="text">
      <span class="_green">Количество совпадений:</span>
      "
      <span class="_red">{{ numberOfMatches }}</span>
      "
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm4",

  data() {
    return {
      userArr1: ["Erlang", "JavaScript", "Erlang", "Erlang", "Go", "Go", "ZZZ"],
      userArr2: ["Go", "C++", "Erlang", "C++", "C++", "C#", "YYY"],

      filteredArr1: [],
      filteredArr2: [],

      userArr1Str: "",
      userArr2Str: "",

      numberOfMatches: 0
    };
  },

  created() {
    this.userArr1Str = this.userArr1.join(" ");
    this.userArr2Str = this.userArr2.join(" ");
  },

  methods: {
    doFirstArray() {
      this.userArr1 = this.userArr1Str.split(" ");
    },
    doSecondArray() {
      this.userArr2 = this.userArr2Str.split(" ");
    },

    onAnalysis() {
      this.numberOfMatches = 0;

      //  deleting identical elements from arrays
      this.filterArray(this.userArr1, this.filteredArr1);
      this.filterArray(this.userArr2, this.filteredArr2);

      // searching for identical elements in arrays
      for (let i = 0; i < this.filteredArr1.length; i++) {
        let elemArr1 = this.filteredArr1[i];

        for (let n = 0; n < this.filteredArr2.length; n++) {
          let elemArr2 = this.filteredArr2[n];

          if (elemArr1 == elemArr2) this.numberOfMatches++;
        }
      }
    },

    //  deleting identical elements from an array
    filterArray(users, filtered) {
      let sorted = users.sort();
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1]) {
          filtered.push(sorted[i]);
        }
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