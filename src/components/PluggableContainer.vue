<script setup lang="ts">
    import { computed, inject, onMounted, ref } from "vue";

    import type { Plugin, PluginId } from "../types";

    const props = defineProps<{
        anchor: PluginId;
        context?: any;
    }>();

    const getPlugin = inject('getPlugin') as (pluginId: PluginId) => Plugin | null;

    const pluginContainerRef = ref<HTMLDivElement | null>(null);

    const plugin = computed(() => {
        return getPlugin(props.anchor);
    });

    onMounted(() => {
        if (! plugin.value) { return; }

        plugin.value.render(pluginContainerRef.value!, props.context || {});
    });
</script>

<template>
    <div class="pluggable-container">
        <div
            v-if="!! plugin"
            ref="pluginContainerRef"
        ></div>
        <slot v-else></slot>
    </div>
</template>

<style scoped>
    .pluggable-container {
        border-style: dotted;
        border-color: red;
    }
</style>