<template>
  <main>
    <div class="grid grid--banner">
      <div class="grid__item">
        <carousel
          :items="1"
          :dots="true"
          :loop="true"
          :nav-container="'js-nav'"
        >
          <a
            href="#"
            class="article article--large"
          >
            <img
              src="../../img/new1.jpg"
              alt=""
              class="article__img"
            >
            <span class="article__info">
              <span class="article__wrap">
                <span class="article__category">|  Design+Lifestyle  |  Smart Living  |</span>
                <span class="article__title lines-limit">Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</span>
                <span class="article__descr lines-limit">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia sed do eiusmod tempor incididunt ut  dolor in reprehenderit in</span>
              </span>
            </span>
          </a>
          <a
            href="#"
            class="article article--large"
          >
            <img
              src="../../img/new2.jpg"
              alt=""
              class="article__img"
            >
            <span class="article__info">
              <span class="article__wrap">
                <span class="article__category">|  Design+Lifestyle  |  Smart Living  |</span>
                <span class="article__title lines-limit">Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</span>
                <span class="article__descr lines-limit">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia sed do eiusmod tempor incididunt ut  dolor in reprehenderit in</span>
              </span>
            </span>
          </a>
          <a
            href="#"
            class="article article--large"
          >
            <img
              src="../../img/new3.jpg"
              alt=""
              class="article__img"
            >
            <span class="article__info">
              <span class="article__wrap">
                <span class="article__category">|  Design+Lifestyle  |  Smart Living  |</span>
                <span class="article__title lines-limit">Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</span>
                <span class="article__descr lines-limit">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia sed do eiusmod tempor incididunt ut  dolor in reprehenderit in</span>
              </span>
            </span>
          </a>
        </carousel>
      </div>
      <div class="grid__item">
        <div class="side">
          <div class="side__title">
            {{ $t('title') }}
          </div>
          <div class="side__text">
            {{ $t('text') }}
          </div>
          <a
            href="#"
            class="button"
          >{{ $t('button1') }}</a>
          <a
            href="#"
            class="button"
          >{{ $t('button2') }}</a>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="grid__item">
        <a
          href="#"
          class="article"
        >
          <img
            src="../../img/new2.jpg"
            alt=""
            class="article__img"
          >
          <span class="article__info">
            <span class="article__wrap">
              <span class="article__category">|  Design+Lifestyle  |  Smart Living  |</span>
              <span class="article__title lines-limit">Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</span>
              <span class="article__descr lines-limit">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia sed do eiusmod tempor incididunt ut  dolor in reprehenderit in</span>
            </span>
          </span>
        </a>
      </div>
      <div class="grid__item">
        <a
          href="#"
          class="article"
        >
          <img
            src="../../img/new3.jpg"
            alt=""
            class="article__img"
          >
          <span class="article__info">
            <span class="article__wrap">
              <span class="article__category">|  Design+Lifestyle  |  Smart Living  |</span>
              <span class="article__title lines-limit">Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</span>
              <span class="article__descr lines-limit">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia  sed do eiusmod tempor incididunt ut  dolor in reprehenderit in</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from 'vue-owl-carousel';

export default {
  components: {
    Carousel
  }
};
</script>

<style lang="sass">
@import "../../css/_variables"

.grid
  width: 100%
  display: grid
  grid-template-columns: repeat(2, 50%)
  grid-gap: 2px
  margin-bottom: 2px
  @media screen and (max-width: 768px)
    display: block
  &--
    &banner
      grid-template-columns: 75% 25%
      @media screen and (max-width: 1160px)
        grid-template-columns: repeat(2, 50%)
      @media screen and (max-width: 860px)
        display: block

  &__
    &item
.article
  $this: &
  width: 100%
  position: relative
  background-color: $dark
  overflow: hidden
  display: block
  padding-top: 66.7%
  height: 0
  &--
    &large
      padding-top: 44.5%
      @media screen and (max-width: 1160px)
        padding-top: 66.7%

  &:hover
    #{$this}__info
      background-color: rgba($text, .7)
  &__
    &img
      height: 100%
      width: 100%
      position: absolute
      top: 0
      left: 0
      object-fit: cover
      object-position: 50%
    &info
      color: #fff
      position: absolute
      z-index: 1
      top: 0
      left: 0
      height: 100%
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      padding: 30px 50px
      background-color: rgba($text, .4)
      transition: background-color $time $tFunc
    &wrap
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      max-width: 443px
      text-align: center
    &category
      font-size: 14px
      text-transform: uppercase
    &title
      display: block
      margin: 35px 0
      font-weight: 600
      --fz: 24px
      --lh: 1.2
      --max-lines: 2
      @media screen and (max-width: 768px)
        margin: 15px 0
    &descr
      font-size: 14px
      line-height:
      --fz: 14px
      --lh: 1.65
      --max-lines: 2
.lines-limit
  font-size: var(--fz)
  line-height: var(--lh)
  -webkit-line-clamp: var(--max-lines)
  max-height: calc((var(--fz) * var(--lh)) * var(--max-lines))
  display: -webkit-box
  -webkit-box-orient: vertical
  overflow: hidden
.owl-dots
  position: absolute
  width: 100%
  bottom: 20px
  left: 0
  z-index: 9
.owl-dot
  margin: 0 12px
  span
    margin: 0 !important
    height: 4px !important
    width: 4px !important
    background-color: $light !important
    opacity: .5 !important
    border-radius: 0 !important
  &.active
    span
      opacity: 1 !important
.side
  background-color: $text
  width: 100%
  height: 100%
  padding: 35px 35px 20px
  color: $light
  line-height: 1.5
  &__
    &title
      font-size: 22px
      margin-bottom: 30px
      @media screen and (max-width: 1160px)
        margin-bottom: 15px
    &text
      font-size: 14px
      margin-bottom: 25px
      @media screen and (max-width: 1160px)
        margin-bottom: 15px
.button
  color: $light
  font-size: 12px
  text-transform: uppercase
  letter-spacing: 0.12px
  padding: 7px 5px
  width: 152px
  text-align: center
  border: 1px solid $light
  display: block
  margin-bottom: 9px
  &:hover
    background-color: $light
    color: $text
</style>
