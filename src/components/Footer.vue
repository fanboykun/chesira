<template>
  <footer class="rr">
    <div class="tcontainern">
      <div class="ri i_">
        <div class="rs h">
          <div class="ru">
            <div class="ra">
              <div class="nk ok">
                <a href="/"
                  ><img src="@/assets/logo.svg" alt="Neon" width="32" height="32"
                /></a>
              </div>
              <div class="footer-copyright">
                <!-- © 2020 Neon, all rights reserved -->
                2021 Chesira - Where the future goes brrrr
              </div>
            </div>
            <div class="ra">
              <div class="rf">Email Contact</div>
              <ul class="st on">
                <li>
                  <a href="mailto:developer@chesira.tech">developer@chesira.tech</a>
                </li>
                <li>
                  <a href="mailto:support@chesira.tech">support@chesira.tech</a>
                </li>
                <!-- <li>
                  <a href="#">Filler text can be very useful</a>
                </li>
                <li><a href="#">Be on design</a></li> -->
              </ul>
            </div>
            <div class="ra">
              <div class="rf">Address</div>
              <p>Jl. Sultan Serdang Desa Telaga Sari Kec. Tanjung Morawa, Deli Serdang. 20362</p>
              <!-- <ul class="st on">
                <li>
                  <a href="#">Consectetur adipiscing</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum is place</a>
                </li>
                <li><a href="#">Excepteur sint</a></li>
                <li>
                  <a href="#">Occaecat cupidatat</a>
                </li>
              </ul> -->
            </div>
            <div class="ra">
              <div class="rf">Note</div>
              <p>
                If you have questions, or need to know about us, we highly appreciate if you want to send us message via email or instagram (username below)
              </p>
            </div>
          </div>
        </div>
        <div class="ro rh az h">
          <nav class="rc">
            <ul class="st on">
              <li><a href="/about">About</a></li>
              <li><a href="mailto:developer@chesira.tech">Work With Us</a></li>
              <li><a href="mailto:support@chesira.tech">Need Support?</a></li>
            </ul>
          </nav>
          <div class="rl">
            <ul class="st">
              <li>
                <a href="https://www.instagram.com/chesira.tech" target="blank"
                      ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <g>
                          <circle cx="12.145" cy="3.892" r="1"></circle>
                          <path
                            d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                          ></path>
                          <path
                            d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"
                          ></path>
                        </g></svg
                    ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
    created() {
    console.log(this.$route.name); // path is /post
  }
};
</script>
