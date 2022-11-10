<template>
    <button
        :aria-disabled="disabled || working"
        class="button-regular"
        :class="{
            'disabled': disabled,
            'high-impact': isHighImpact,
            'low-impact': isLowImpact,
            'medium-impact': isMediumImpact
        }"
        type="button"
        @click.prevent="click($event)"
    >
        <slot>
            <div>
                {{ title }}
            </div>
        </slot>
     </button>
 </template>

 <script setup lang="ts">
    import { computed, defineEmits, defineProps, withDefaults } from "vue";

    import { useImpact } from "./useImpact";

    import type { Impact } from "./types";

    const impacts = ["low" as const, "high" as const, "medium" as const];

    interface Props {
        disabled?: boolean;
        impact: Impact;
        title: string;
    }

    const props = withDefaults(defineProps<Props>(), {
        impact: "low"
    });

    const emits = defineEmits<{
        (e: "click", value: Event): void
    }>();

    const working = false;

    const impact = computed(() => props.impact);
    const { isHighImpact, isLowImpact, isMediumImpact } = useImpact(impact);

    function click(event: Event) {
        event.preventDefault();
        emits("click", event);
    }

         /*export default {
         props: {
             disabled: Boolean,
             impact: {
                 default: "high",
                 type: String,
                 validator: value => ["high", "low", "medium"].includes(value)
             },
             onClick: Function,
             title: {
                 type: String,
                 default: ""
             }
         },
         data() {
             return {
                 working: false
             };
         },
         computed: {
             isHighImpact() {
                 return this.impact === "high";
             },
             isLowImpact() {
                 return this.impact === "low";
             },
             isMediumImpact() {
                 return this.impact === "medium";
             }
         },
         methods: {
             async click(e) {
                 if (this.disabled || this.working) { return; }
                 this.working = true;
                 await this.onClick(e);
                 this.working = false;
             }
         }
     };*/
 </script>

 <style>
 .button-regular {
   position: relative;
   overflow: hidden;
   font-size: 13px;
   font-weight: 600;
   line-height: 20px;
   text-align: center;
   text-transform: uppercase;
   border-width: 0;
   border-radius: 8px;
   cursor: pointer;
 }
 .button-regular.high-impact {
     color: #fff;
     background-color: #2567f4;
 }
 .button-regular.high-impact:hover {
     background-color: #1848af;
 }
 .button-regular.high-impact.disabled {
     color: #82889a;
     background-color: #f3f3f9;
 }
 .button-regular.medium-impact {
     color: #2567f4;
     background-color: #eef3fe;
 }
 .button-regular.medium-impact:hover {
     background-color: #d3e1fd;
 }
 .button-regular.medium-impact.disabled {
     color: #82889a;
     background-color: #f3f3f9;
 }
 .button-regular.low-impact {
     color: #2567f4;
     background-color: transparent;
 }
 .button-regular.low-impact:hover {
     background-color: #d3e1fd;
 }
 .button-regular.low-impact.disabled {
     color: #82889a;
     background-color: transparent;
 }
 .button-regular.disabled {
   cursor: default;
 }
 .button-regular:focus {
   outline-style: none;
   outline-color: transparent;
 }
 .button-regular > div {
   position: relative;
   padding: 8px;
 }
 .button-regular.button-upload {
   display: inline-block;
   padding: 1px 6px;
 }
 .button-regular.button-max-width {
   width: 100%;
 }

 </style>