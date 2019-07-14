<template>
  <section class="modal" v-if="showModal">
    <div id="modal" class="modal">
      <div class="overlay"></div>
      <div class="modal_content">
        <h2>Your message</h2>
        <textarea rows="4" cols="50"></textarea>
        <button class="send" @click="send">Send</button>
        <button @click="hide" title="Close" class="close_modal">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      showModal: false
    };
  },
  components: {},
  methods: {
    toggleAboutModal() {
      this.isModal = !this.isModal;
    },

    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.modal {
  padding-top: 120px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  display: flex;
  flex-direction: column;
}
.modal .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(0, 0, 0, 0.85);
}
.modal .modal_content {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  max-width: 520px;
}
.modal .modal_content > h2 {
  font-size: 28px;
  font-weight: 200;
  margin: 20px 0 40px;
  text-align: center;
}
.modal .modal_content .buttons_wrapper {
  padding: 20px;
}
.modal .close_modal {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
}
.modal .close_modal:hover {
  opacity: 0.9;
}
.show {
  display: block;
}

.send {
  cursor: pointer;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
  padding: 0 2rem;
  border-radius: 2.5rem;
  border: none;
  background: lightskyblue;
  color: #fff;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background 0.14s ease;
  transition: background 0.14s ease;
  height: 3rem;
  min-height: 3rem;
  overflow: hidden;
}
</style>
