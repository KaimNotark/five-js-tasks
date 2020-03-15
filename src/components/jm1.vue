<template>
  <div class="container">
    <h2 class="subtitle _green">Задача 1</h2>
    <p class="text">
      Функция first() принимает строку, содержащую буквы и цифры.
      В строке нужно удалить все повторяющиеся подряд цифры.
      Повторяющиеся буквы оставляем без изменений.
    </p>
    <p class="text">
      <span class="_green">Пример:</span>
    </p>
    <ul class="list">
      <li class="item">
        first("abcd111");
        <span class="_gray">// "abcd1"</span>
      </li>
      <li class="item">
        first("aaaa22122bbbb");
        <span class="_gray">// "aaaa212bbbb"</span>
      </li>
      <li class="item">
        first("a8n64m33xxx000x0");
        <span class="_gray">// "a8n64m3xxx0x0"</span>
      </li>
    </ul>

    <h3 class="sub-subtitle _green">Решение:</h3>
    <p class="text">Введите строку:</p>
    <input type="text" size="50" class="users-string" v-model="originalString" />
    <p class="text">
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
        if (parseInt(this.originalString[i], 10) >= 0) {
          // console.log(i + "- " + parseInt(this.originalString[i], 10));

          if (!(parseInt(this.originalString[i + 1], 10) >= 0)) {
            this.finalString += this.originalString[i];
          } else {
            if (
              !(
                parseInt(this.originalString[i], 10) ==
                parseInt(this.originalString[i + 1], 10)
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