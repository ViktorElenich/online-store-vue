<template>
  <footer>
    <div class='subscribe__block'>
      <div class='subscribe__block-text'>
        <h2>Sign Up To Our Newsletter.</h2>
        <p>Be the first to hear about the latest offers.</p>
      </div>
      <div class='subscribe__block-form'>
        <input type='text' />
        <button type='submit'>Subscribe</button>
      </div>
    </div>
    <div class='information__block'>
      <div class='information__block-links'>
        <h3>Information</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>
      </div>
      <div class='information__block-address'>
        <h3>Address</h3>
        <p>Address: 1234 Street Address City Address, 1234</p>
        <div>Phones: <a href='tel:+10012345678'>(00) 1234 5678</a></div>
        <p>We are open:</p>
        <p>Monday-Thursday: 9:00 AM - 5:30 PM</p>
        <p>Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 11:00 AM - 5:00 PM</p>
        <div>E-mail: <a href='email:shop@email.com'>shop@email.com</a></div>
      </div>
    </div>
    <hr>
    <div class='social__payments'>
      <div class='social__block'>
        <i class='pi pi-facebook' style="font-size: 1.2rem; margin-right: 15px" />
        <i class='pi pi-instagram' style="font-size: 1.2rem" />
      </div>
      <div class='payment__block'>
        <ul>
          <li><img src="@/assets/paypal.png" alt="paypal"></li>
          <li><img src="@/assets/visa.png" alt="visa"></li>
          <li><img src="@/assets/maestro.png" alt="maestro"></li>
          <li><img src="@/assets/discover.png" alt="discover"></li>
          <li><img src="@/assets/american-express.png" alt="american-express"></li>
        </ul>
      </div>
      <p>Copyright © <span>{{new Date().getFullYear()}}</span></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterStore'
}
</script>

<style scoped>
footer {
  width: 100%;
  background: #020203;
  height: 450px;
  padding: 10px 40px;
}
.subscribe__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.subscribe__block-text {
  color: white;
}
.subscribe__block-text h2 {
  font-weight: 500;
  font-size: 2rem;
}
.subscribe__block-text p {
  font-weight: 300;
  font-size: 0.8rem;
}
.subscribe__block-form {
  display: flex;
  gap: 15px;
}
.subscribe__block-form input {
  width: 290px;
  height: 40px;
  padding: 10px;
  background: #000000;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  outline: none;
  color: #FFFFFF;
}
.subscribe__block-form button {
  width: 120px;
  height: 40px;
  border-radius: 50px;
  outline: none;
  border: none;
  background: #0156FF;
  cursor: pointer;
  color: #FFFFFF;
}
.information__block {
  display: flex;
  justify-content: space-between;
  color: #FFFFFF;
  margin-top: 25px;
}
h3 {
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
}
.information__block-links a {
  font-weight: 400;
  font-size: 13px;
  color: #FFFFFF;
  opacity: 0.8;
  transition: opacity 0.3s;
}
.information__block-links a:hover {
  opacity: 1;
}
.information__block-address {
  font-weight: 400;
  font-size: 13px;
}
hr {
  margin: 15px 0;
  opacity: 0.5;
}
.social__payments {
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
}
.payment__block ul {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
