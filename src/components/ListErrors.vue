<template v-show="errors">
  <ul class="error-messages">
    <li v-for="(value, key) in errors" :key="key">
      <span v-text="key" />
      <span v-for="err in value" :key="err" v-text="err" />
    </li>
  </ul>
</template>

<script>
/**
 * Description: Define error component.
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */
export default {
  name: "RwvListErorrs",
  props: {
    errors: { type: Object, required: true }
  }
};
</script>
