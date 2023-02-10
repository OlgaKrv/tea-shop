<template>
  <div id="app" class="project_wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar_content">
            <div class="logo">Tea shop</div>
            <ul class="navbar_list">
              <li class="navbar_item">
                <a class="navbar_link">Меню</a>
              </li>
              <li class="navbar_item">
                <a class="navbar_link">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <div class="wrapper_content">Same text</div>
    <!-- <footer></footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
