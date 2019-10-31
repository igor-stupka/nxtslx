<template>
  <header class="header">
    <div class="header__container">
      <a
        href="/"
        class="header__logo"
      >
        <img
          src="../../img/logo.svg"
          alt=""
          class="header__logo-img"
        >
        <span class="header__logo-subtitle">Inform. Connect. Inspire.</span>
      </a>
      <nav class="header__nav">
        <div class="header__level">
          <ul class="header__nav-general">
            <li class="header__nav-item">
              <a
                href="#"
                class="header__nav-link"
              >{{ $t('about') }}</a>
            </li>
            <li class="header__nav-item">
              <a
                href="#"
                class="header__nav-link"
              >{{ $t('editing') }}</a>
            </li>
          </ul>

          <lang />
        </div>
        <div class="header__level">
          <button class="header__search">
            <img
              src="../../img/lens.svg"
              alt=""
            >
          </button>
          <ul class="header__menu">
            <li class="header__menu-item">
              <a
                href="#"
                class="header__menu-link"
              >{{ $t('design') }}</a>
            </li>
            <li class="header__menu-item">
              <a
                href="#"
                class="header__menu-link"
              >{{ $t('trends') }}</a>
            </li>
            <li class="header__menu-item">
              <a
                href="#"
                class="header__menu-link"
              >{{ $t('info') }}</a>
            </li>
            <li class="header__menu-item">
              <a
                href="#"
                class="header__menu-link"
              >{{ $t('smart') }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import Lang from './Lang';

export default {
  components: {
    Lang
  }
};

</script>
<style lang="sass">
@import "../../css/_variables"

.header
  $this: &
  padding: 18px 35px
  @media screen and (max-width: 768px)
    padding: 15px
    position: relative
  &__
    &container
      display: grid
      grid-template-columns: 170px auto
      grid-gap: 0 5px
      @media screen and (max-width: 768px)
        display: block
    &logo
      text-align: center
      padding-top: 20px

    &logo-img
      margin: 0 auto
      display: block
    &logo-subtitle
      display: block
      margin-top: 12px
      color: $text
      font-size: 14px
      letter-spacing: 0.49px
      @media screen and (max-width: 768px)
        margin-bottom: 15px
    &level
      width: 100%
      display: flex
      align-items: center
      justify-content: flex-end
      @media screen and (max-width: 768px)
        justify-content: center
      & + #{$this}__level
        margin-top: 35px
        @media screen and (max-width: 1160px)
          margin-top: 15px


    &nav-general
      margin-right: 19px
      display: flex
    &nav-item
      & + #{$this}__nav-item
        margin-left: 25px
    &nav-link
      color: $dark
      font-size: 14px
      &:hover
        text-decoration: underline
    &menu
      display: flex
      align-items: center
      @media screen and (max-width: 535px)
        display: grid
        grid-template-columns: 1fr 1fr
        grid-gap: 5px 15px

    &menu-link
      color: $dark
      font-size: 16px
      text-transform: uppercase
      letter-spacing: 0.08px
      padding: 0 30px
      border-left: 1px solid $dark
      &:hover
        text-decoration: underline
      @media screen and (max-width: 1160px)
        padding: 0 10px
        font-size: 13px
      @media screen and (max-width: 535px)
        padding: 0
        border: none
    &search
      margin-right: 25px
      cursor: pointer
      @media screen and (max-width: 768px)
        position: absolute
        top: 16px
        right: 15px
        margin: 0
</style>
