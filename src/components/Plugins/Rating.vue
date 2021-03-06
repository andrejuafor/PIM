<template>
  <component :is="tag" @mouseleave="clearRating">
    <mdb-popover
      v-for="(rating, i) in ratings"
      :key="i"
      trigger="click"
      :options="{placement: 'top'}"
      :disabled="!feedback"
      :close="closePopover"
    >
      <span slot="header">{{rating.feedback}}</span>
      <span
        slot="body"
      >
        <mdb-textarea v-model="feedbackMessage" :rows="1"/>
        <mdb-btn size="sm" color="primary" @click="submitFeedback">Submit!</mdb-btn>
        <mdb-btn size="sm" flat @click="forceClosePopover">Close</mdb-btn>
      </span> 

      <mdb-tooltip slot="reference" trigger="hover" :options="{placement: 'top'}">
        <span slot="tip">{{rating.feedback}}</span>
        <mdb-icon
          slot="reference"
          :icon="(i <= active) || i <= rateValue ? ratings[active].icon : icon"
          :class="(i <= active) || i <= rateValue ? ratings[active].iconActiveClass : iconClass"
          class="p-1 rating-icon"
          :fas="(i <= active) || i <= rateValue ? ratings[active].fas : fas"
          :far="(i <= active) || i <= rateValue ? ratings[active].far : far"
          :fab="(i <= active) || i <= rateValue ? ratings[active].fab : fab"
          :ref="i"
          @mouseover.native="updateRating(i)"
          @click.native="rate(i)"
        ></mdb-icon>
      </mdb-tooltip>
      <!-- </span> -->
    </mdb-popover>
  </component>
</template>

<script>
// import classNames from "classnames";
import { mdbIcon } from "../Content/Fa";
import { mdbTooltip } from "../Advanced/Tooltip";
import { mdbPopover } from "../Advanced/Popover";
import { mdbTextarea } from "../Forms/MdTextarea";
import { mdbBtn } from "../Components/Button";

const Rating = {
  components: {
    mdbIcon,
    mdbTooltip,
    mdbPopover,
    mdbTextarea,
    mdbBtn
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    feedback: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "star"
    },
    iconClass: {
      type: String,
      default: "grey-text"
    },
    iconActiveClass: {
      type: String,
      default: "yellow-text"
    },
    value: Number,
    far: Boolean,
    fab: Boolean,
    fas: Boolean,
    activeFar: Boolean,
    activeFab: Boolean,
    activeFas: Boolean,
    options: {
      type: Array,
      default: () => {
        return [
          {
            feedback: "Very bad"
          },
          {
            feedback: "Poor"
          },
          {
            feedback: "OK"
          },
          {
            feedback: "Good"
          },
          {
            feedback: "Excellent"
          }
        ];
      }
    }
  },
  data() {
    return {
      ratings: [],
      active: -1,
      rateValue: -1,
      showModal: false,
      closePopover: null,
      feedbackMessage: ''
    };
  },
  methods: {
    updateRating(i) {
      this.active = i;
    },
    clearRating() {
      this.active = this.rateValue > -1 ? this.rateValue : -1;
    },
    rate(index) {
      this.$emit("input", index + 1);
      this.rateValue = index;
    },
    forceClosePopover() {
      this.closePopover = true;
      setTimeout(() => {
        this.closePopover = false;
      });
    },
    submitFeedback() {
      if (this.feedbackMessage !== '') {
        this.$emit('submit', this.feedbackMessage);
        this.forceClosePopover();
      }
      this.feedbackMessage = '';
    }
  },
  mounted() {
    this.ratings = this.options.map(rating => {
      let icon = rating.icon || this.icon;
      let iconActiveClass = rating.iconActiveClass || this.iconActiveClass;
      let far = rating.far || this.activeFar;
      let fab = rating.fab || this.activeFab;
      let fas = rating.fas || this.activeFas;
      let feedback = rating.feedback || "";
      return { icon, iconActiveClass, far, fab, fas, feedback };
    });
    
    if (this.value) {
      this.rateValue = this.value - 1;
      this.active = this.value - 1;
    }
  },
  watch: {
    value (val) {
      this.rateValue = val - 1;
      this.active = val - 1;
    }
  }
};

export default Rating;
export { Rating as mdbRating };
</script>

<style scoped>
.rating-icon {
  transition: all 0.2s linear;
  cursor: pointer;
}
</style>
