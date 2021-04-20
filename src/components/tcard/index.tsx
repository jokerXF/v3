import { defineComponent, PropType } from "vue";
import "./index.css";
export default defineComponent({
  name: "tcard",
  props: {
    countInfo: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="wrapper">
          <div>
            <div class="left">
              <img src="{props.countInfo.img1}" />
            </div>
            <div class="right">
              <p>{props.countInfo.title1}</p>
              <p class="font" style="{props.countInfo.styleObject}">
                {props.countInfo.count1}
              </p>
            </div>
          </div>
          <div>
            <div class="left">
              <img src="{props.countInfo.img2}" />
            </div>
            <div class="right">
              <p>{props.countInfo.title2}</p>
              <p class="font" style="{props.countInfo.styleObject}">
                {props.countInfo.count2}
              </p>
            </div>
          </div>
        </div>
      );
    };
  },
});
