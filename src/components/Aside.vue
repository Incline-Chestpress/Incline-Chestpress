<template>
  <div class="aside">
    <link
      href="https://fonts.googleapis.com/css?family=Acme"
      rel="stylesheet"
    />
    <ul class="menu">
      <li><router-link to="/myPage" class="link top">Top</router-link></li>
      <li>
        <router-link to="/status" class="link status">Status</router-link>
      </li>
      <li>
        <router-link to="/line" class="link line-setting"
          >Line Setting</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style>
.aside {
  font-family: acme;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 180px;
  height: 100%;
  background: black;
  font-size: 18px;
  /* color: white; */
}
.menu {
  list-style: none;
  padding: 0;
  margin: auto;
  margin-top: 80px;
}
.menu li {
  /* margin-bottom: 50px; */
  padding: 20px 0;
  transition: 1s;
}
.menu li:hover {
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 25px;
}

/* #nav {
  padding: 30px;
} */
/* ポジションfixed */
/* #nav a {
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
} */
/* マウスオーバー */
/* li a:hover:not(.active) {
  color: #ffffff;
  background-color: #bebebe;
} */
</style>
