<template>
  <div class="container">
    <h2 class="subtitle">Задача 1</h2>
    <p class="text">
      Функция first() принимает строку, содержащую буквы и цифры
      В строке нужно удалить все повторяющиеся подряд цифры
      Повторяющиеся буквы оставляем без изменений
      <br />first("abcd111"); // "abcd1"
      <br />first("aaaa22122bbbb"); // "aaaa212bbbb"
      <br />first("a8n64m33xxx000x0"); // "a8n64m3xxx0x0"
    </p>
    <h3 class="sub-subtitle">Решение:</h3>
    <p class="text">Введите строку:</p>
    <input type="text" size="50" class="users-string" v-model="originalString" />
    <p class="string">
      <span class="_green">Вы ввели:</span>
      " {{ originalString }} "
    </p>
    <b-button
      variant="outline-primary"
      type="button"
      class="button"
      @click="onAnalysis"
    >Выдать решение</b-button>
    <p class="string">
      <span class="_green">Результат:</span>
      " {{ finalString }} "
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm1",

  data() {
    return {
      originalString: "aaaa22122bbbbYZ",
      finalString: "",
      lengthOfString: 0
    };
  },

  methods: {
    onAnalysis() {
      this.finalString = "";
      this.lengthOfString = this.originalString.length;
      // console.log("JM1--onAnalysis - lengthOfString= " + this.lengthOfString);

      for (let i = 0; i < this.lengthOfString; i++) {
        if (parseInt(this.originalString[i])) {
          if (!parseInt(this.originalString[i + 1])) {
            this.finalString += this.originalString[i];
          } else {
            if (
              !(
                parseInt(this.originalString[i]) ==
                parseInt(this.originalString[i + 1])
              )
            )
              this.finalString += this.originalString[i];
          }
        } else {
          this.finalString += this.originalString[i];
        }
        // console.log("JM1--onAnalysis - i= " + i);
      }
      // console.log("JM1--onAnalysis - finalString= " + this.finalString);
    }
  }
};
</script>

<style lang="scss" scoped>
._green {
  color: green;
}
</style>