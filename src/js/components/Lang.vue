<template>
  <div class="lang">
    <ul class="lang__list">
      <li
        v-for="(t, langName) in I18N.messages"
        class="lang__item"
        :key="langName"
      >
        <input
          :id="'input-' + langName"
          v-model="I18N.locale"
          type="radio"
          :value="langName"
          class="lang__input"
          @change="setLangAttr"
        >
        <label
          :for="'input-' + langName"
          class="lang__label"
        >{{ langName }}</label>
      </li>
    </ul>
  </div>
</template>
<script>
import I18N from '../multilang';

export default {
  data() {
    return {
      I18N
    };
  },
  methods: {
    setLangAttr() {
      document.documentElement.setAttribute('lang', this.I18N.locale);
    }
  }
};

</script>
<style lang="sass">
@import "../../css/_variables"


.lang
  $this: &
  &:focus-within
    outline: 3px dotted $focus
  &__
    &input
      position: absolute
      z-index: -9999
      height: 1px
      width: 1px
      overflow: hidden
      opacity: 0
      &:checked + #{$this}__label
        border-color: #ccc
        color: #ccc
        background-color: #f5f5f5
    &label
      cursor: pointer
      color: #cccccc
      border: 1px solid $black
      color: $black
      width: 31px
      height: 25px
      text-align: center
      display: block
      line-height: 25px
      background-color: transparent
    &list
      display: flex
      align-items: center
      width: 60px
</style>
