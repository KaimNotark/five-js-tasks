<template>
  <div class="container">
    <h2 class="subtitle _green">Задача 2</h2>
    <p class="text">
      На входе функции строка со словами, разделенными пробелом.
      Нужно вернуть строку, где остались только те слова, которые встречаются в строке 2 или более раз (только повторяющиеся).
      Порядок должен сохранятся согласно первому найденному слову (см пример).
      Если повторющихся слов нет - возвращается пустая строка.
    </p>
    <p class="text">
      <span class="_green">Пример:</span>
    </p>
    <p class="text">var srt = 'alpha beta beta gamma gamma gamma delta beta beta delta';</p>
    <p class="text">
      second(str);
      <span class="_gray">// 'beta gamma delta'</span>
    </p>

    <h3 class="sub-subtitle _green">Решение:</h3>
    <p class="text">Введите строку:</p>
    <input type="text" size="100" class="users-string" v-model="originalString" />
    <p class="string">
      <span class="_green">Вы ввели:</span>
      " {{ originalString }} "
    </p>

    <b-button
      variant="outline-primary"
      type="button"
      class="button"
      @click="onAnalysis"
    >Показать результат</b-button>

    <p class="text">
      <span class="_green">Результат:</span>
      "
      <span class="_red">{{ finalString }}</span> "
    </p>

    <hr />
  </div>
</template>

<script>
export default {
  name: "jm2",

  data() {
    return {
      originalString: "alpha beta beta gamma gamma gamma delta beta beta delta",
      finalString: "",
      lengthOfString: 0,

      allWordsInString: [],
      repeatedWord: []
    };
  },

  methods: {
    onAnalysis() {
      this.allWordsInString = this.originalString.split(" ");

      let isDuble = false;

      for (let i = 0; i < this.allWordsInString.length; i++) {
        isDuble = false;
        let currentWord = this.allWordsInString[i];

        if (!(currentWord == "")) {
          for (let n = i + 1; n < this.allWordsInString.length; n++) {
            let nextWord = this.allWordsInString[n];

            if (currentWord == nextWord) {
              if (!isDuble) this.repeatedWord.push(nextWord);
              isDuble = true;
              this.allWordsInString[n] = "";
            }
          }
        }
      }

      this.finalString = this.repeatedWord.join(" ");
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