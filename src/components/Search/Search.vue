<template>
  <form>
    <input id='search-box' type='text' class='search-box' />
    <label for='search-box'><span class='search-icon'></span></label>
    <input type='submit' id='search-submit' />
  </form>
</template>

<script>
export default {
  name: 'StoreSearch'
}
</script>

<style scoped>
  .search-box {
    transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: rgb(235, 235, 235);
  }
  .search-box + label .search-icon {
    color: black
  }
  .search-box:hover {
    color: white;
    background: rgb(200, 200, 200);
    box-shadow: 0 0 0 5px #0156FF;
  }
  .search-box:hover + label .search-icon {
    color: white;
  }
  .search-box:focus {
    transition: width 0.6s cubic-bezier(0,1.22,.66,1.39), border-radius 0.6s, background 0.6s;
    border: none;
    outline: none;
    box-shadow: none;
    padding-left: 15px;
    cursor: text;
    width: 300px;
    border-radius: auto;
    background: rgb(235, 235, 235);
    color: black;
  }
  .search-box:focus + label .search-icon {
    color: black;
  }
  .search-box:not(:focus) {
    text-indent:-5000px;
  }
  #search-submit {
    position: relative;
    left: -5000px;
  }
  .search-icon {
    background: url('@/assets/search.svg');
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    left: -30px;
    top: 5px;
    cursor: pointer;
  }
</style>
