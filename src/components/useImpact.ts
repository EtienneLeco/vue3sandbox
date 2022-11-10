import { computed, ComputedRef } from "vue";

import { Impact } from "./types";

export function useImpact(impact: ComputedRef<Impact>) {
  return {
    isHighImpact: computed(() => impact.value === "high"),
  	isLowImpact: computed(() => impact.value === "low"),
  	isMediumImpact: computed(() => impact.value === "medium")
  };
}