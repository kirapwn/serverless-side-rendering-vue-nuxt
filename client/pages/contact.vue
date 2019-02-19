<template>
<div>
  <h2>Contact page</h2>
  <div>
    Form here...
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: `Contact Dog`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `You are contact hello 👋`
        }
      ]
    };
  }
};
</script>
