<template>
  <section class="io nx az reveal-from-bottom" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1200">
    <div class="tcontainern">
      <div class="iq rd ia">
        <div class="iu">
          <h3 class="sz" data-aos="zoom-in-down" data-aos-easing="ease-in-out" data-aos-duration="800">Ready To Bring Your Idea Alive? Send Us, We Discuss It!</h3>
        </div>
        <div class="cta-action">
          <form
            action="https://send.pageclip.co/M87iJWpeWVUPsZWqrvMW9iGLtToEMfYE"
            class="pageclip-form"
            method="post"
            name="contact-form"
          >
            <div class="tu">
              <label for="email" class="x se">Email</label>
              <input
                data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1200"
                v-model="email"
                id="newsletter"
                class="j"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <label for="email" class="x se">Email</label>
              <textarea
                data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1200"
                v-model="content"
                id="content"
                class="j ta"
                name="content"
                placeholder="Your Short Message, We'll Discuss Later"
              />
              <!-- <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                  fill="#376DF9"
                  fill-rule="nonzero"
                ></path>
              </svg> -->
              <div class="reveal-from-bottom" data-reveal-delay="450" data-aos="zoom-in-down" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <button type="submit" class="tbuttonn fbuttonl gbuttony">
                  SEND
                </button>
              </div>
            </div>
          </form>
            <h6>We'll send you back an email ASAP for the discussion.</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      content: "",
    };
  },
  methods: {
    sendMessage() {
      // const data = {email: this.email, content: this.content}
    },
  },
};
</script>
