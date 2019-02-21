export default {
  changeCity (state, city) {
    // state储存着公用数据
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
