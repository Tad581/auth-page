<template>
  <div class="btn">
    <font-awesome-icon icon="fa-solid fa-plus" />Thêm bài viết
  </div>
</template>

<script>
export default {
  name: "PrimaryButton",
};
</script>

<style>
.btn, .btn:hover {
  background-color: var(--primary);
  color: var(--white);
}

.btn svg {
    margin-right: 5px;
}
</style>
