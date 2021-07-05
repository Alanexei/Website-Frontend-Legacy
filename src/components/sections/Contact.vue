<template>

<section id="contact">
  <span class="section-divider-reversed">
    Contact Me
  </span>
  <div class="contact-container">
    <form @submit.prevent="submitForm" class="contact-form">
      <label for="fname">
        <i class="fas fa-signature"></i>
        Full Name
      </label>
      <input v-model="fullname" type="text" name="fname" id="fname" required>
      <label for="email">
        <i class="fas fa-envelope"></i>
        Email
      </label>
      <input v-model="email" type="text" name="email" id="email" required>
      <label for="reason">
        <i class="fas fa-question"></i>
        Reason
      </label>
      <div class="contact-form__reason-box">
        <span class="contact-form__reason-box__arrow">
          <i class="fas fa-angle-down"></i>
        </span>
        <select v-model="reason" name="reason" id="reason" required>
          <option value="Just to say hello!" selected>Just to say hello!</option>
          <option value="Business">Business</option>
          <option value="Social Media">Social Media</option>
        </select>
      </div>
      <label for="message">
        <i class="fas fa-pen"></i>
        Message
      </label>
      <textarea v-model="message" name="message" id="message" row="12" col="50" required></textarea>
      <input type="submit" value="Get in Touch" class="button button--pink-orange w-15 mt-2">
    </form>
  </div>
</section>

</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      fullname: '',
      email: '',
      reason: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      console.log(`Contact Form Submitted!\n${this.fullname} (${this.email}): [${this.reason}] ${this.message}`)
    }
  }
}

</script>