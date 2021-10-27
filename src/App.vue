<template>
  <div class="container">
    <div class="col-sm-4">
<!--      <font-awesome-icon icon="user-secret" />-->
      <register-form></register-form>
    </div>
  </div>


</template>

<script>

import RegisterForm from "@/components/RegisterForm";
export  default {
  components: {RegisterForm}
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Balthazar';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/balthazar-v10-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
  url('./assets/fonts/balthazar-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./assets/fonts/balthazar-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
  url('./assets/fonts/balthazar-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
  url('./assets/fonts/balthazar-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
  url('./assets/fonts/balthazar-v10-latin-regular.svg#Balthazar') format('svg'); /* Legacy iOS */
}
</style>
