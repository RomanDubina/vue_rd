<template>

  <form @submit.prevent>
    <div class="mb-3" v-for="(item, i) in info">
      <label class="form-label">{{item.label}}</label>
      <div class="input__wrap">
        <fa v-if="item.activated" :icon="item.valid ? 'check-circle' : 'exclamation-circle'" class="input__wrap-icon" :class="item.valid ?  'text-success' : 'text-danger'"/>
        <input type="text" class="form-control" :id="item.name" :value="item.value" @input="onInput($event.target.value, i)">
      </div>

    </div>
    <submit-button>Отправить</submit-button>
  </form>
</template>

<script>

import SubmitButton from "@/components/UI/SubmitButton";
export  default {
  components: {SubmitButton},

  created() {
    this.info.forEach((item) => {
      (item.activated = false), (item.valid = false)
    });
  },
  data: () => ({

    info: [
      {
        label: 'Имя',
        name: 'first_name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        label: 'Фамилия',
        name: 'last_name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        label: 'Телефон',
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/
      },
      {
        label: 'Ваш емайл:',
        name: 'Email',
        value: '',
        pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
      },

    ]
  }),
  methods: {
    onInput(value, i) {
      console.log(value, i);
      this.info[i].value = value.trim();
      this.info[i].valid = this.info[i].pattern.test(value);
      this.info[i].activated = true;
    }
  },
}
</script>

<style lang="scss">
.input__wrap{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;
  .form-control{
    width: 80%;
  }
  &-icon{
    font-size: 24px;
  }
}

</style>