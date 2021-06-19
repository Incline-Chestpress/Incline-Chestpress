<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/myPage" class="top">Top</router-link></li>
        <li><router-link to="/status" class="status">Status</router-link></li>
        <li><router-link to="/myPage" class="Setting">Setting</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}
/* ポジションfixed */
#nav a {
  font-weight: bold;
  color: #979797;
}

#nav a.router-link-exact-active {
  color: #bdbdbd;
}
ul {
  height: 100%;
  width: 200px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #000000;
}
li a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #000000;
}
li {
  text-align: center;
}
li:last-child {
  border-bottom: none;
}
li a.active {
  color: #ffffff;
  background-color: #da3c41;
}
/* マウスオーバー */
li a:hover:not(.active) {
  color: #ffffff;
  background-color: #bebebe;
}
</style>
