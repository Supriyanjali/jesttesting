<template>
  <nav class="navbar">
    <div class="brand-title">Blogging Platform</div>
    <a href="#" class="toggle-button" @click="opens">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div class="navbar-links">
      <ul>
        <li><router-link :to="{ path: '/' }" exact>Blogs</router-link></li>
        <li>
          <router-link :to="{ path: '/add' }" exact>Add Blog</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script src="./js/Navbar.js"></script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: white;
}

.brand-title {
  font-size: 1.5rem;
  margin: 0.5rem;
}

.navbar-links {
  height: 100%;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  list-style: none;
}

.navbar-links li a {
  display: block;
  text-decoration: none;
  color: white;
  padding: 1rem;
}
.navbar-links li:hover {
  background-color: #555;
}
.router-link-active {
  background-color: #555;
}

.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button-open {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-button {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links ul li {
    text-align: center;
  }

  .navbar-links ul li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
  }
  .brand-title {
    font-size: 1.5rem;
    margin: auto;
    margin-top: 13px;
    margin-bottom: 13px;
  }
}
</style>
