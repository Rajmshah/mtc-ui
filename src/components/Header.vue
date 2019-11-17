<template>
  <div class="">
    <nav id="navbar" class="navbar">
      <div id="mainnav" class="trapezoid lime pullUp">
        <a href="#">Home</a>
        <a href="#" class="expandHome">About</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainnav").style.borderBottom =
          "100px solid rgba(0,0,0,0.5)";
      } else {
        document.getElementById("mainnav").style.borderBottom =
          "100px solid black";
      }
      prevScrollpos = currentScrollPos;
    };
  }
};
</script>

<style lang="scss">
.trapezoid {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  border: 80px solid rgba(0, 0, 0, 0);
  border-top: 0 solid;
  border-bottom: 100px solid rgba(1, 1, 1, 0.4);
  -webkit-border-radius: 20px 20px 0 0;
  border-radius: 20px 20px 0 0;
  font: normal 100% / normal Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.7);
  -o-text-overflow: clip;
  text-overflow: clip;
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
  margin-top: -72px;
  width: 700px;
  position: relative;
  transition: all 0.7s ease;
  padding-left: 7%;
}

.trapezoid a {
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
}

.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  //   display:flex;
  overflow: hidden;
  justify-content: center;
  height: 100px;
  z-index: 2;
}

div.pullUp a:before {
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  bottom: 0px;
  content: "";
  background: #fff;
  opacity: 0.3;
  transition: all 0.3s;
}

div.pullUp a:hover:before {
  height: 100%;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 25px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all 0.5s ease;
  margin: 5px;
}
</style>
