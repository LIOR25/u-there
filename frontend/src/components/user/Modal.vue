<template>
  <section class="modal" v-if="showModal">
    <div id="modal" class="modal">
      <div class="overlay"></div>
      <div class="modal_content">
        <h2 class="modal-header">Your message</h2>
        <form @submit.prevent="sendMsg">
          <datepicker
            :clearButton="true"
            :inline="true"
            :openDate="date"
            @input="setType"
          ></datepicker>
          <!-- :format="customFormatter" -->
          <textarea rows="4" v-model="newMsg.txt" cols="40"></textarea>
          <!-- :newMsg="setType(isDate)" -->
          <button type="submit" class="send">Send</button>
        </form>
        <button @click="hide" title="Close" class="close_modal">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";
// import moment from 'vue-moment';
var moment = require("moment");
export default {
  created() {
    this.$store.dispatch("getLoggedUserId");
    this.$store.dispatch("loadUserChatRooms");
  },
  name: "modal",
  props: ["user", "loggedUser"],
  data() {
    return {
      showModal: false,
      newMsg: {
        txt: "",
        type: "txt",
        sentAt: "",
        addedBy: this.loggedUser._id,
        isRead: false
      },
      usersIds: [this.user._id, this.loggedUser._id]
    };
  },
  components: {
    Datepicker
  },
  methods: {
    setType($event) {
      if ($event !== null) {
        this.newMsg.type = "dateReq";
        this.newMsg.reqDetails = {
          suggested: $event,
          responseState: "pending"
        };
      } else {
        this.newMsg.type = "txt";
        this.newMsg.reqDetails = null;
      }
      console.log(this.newMsg.type);
      console.log(this.newMsg.reqDetails);
    },
    toggleAboutModal() {
      this.isModal = !this.isModal;
    },
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    async sendMsg() {
      this.newMsg.sentAt = Date.now();
      let addedMsg = { ...this.newMsg };
      let chatDetails = {
        addedMsg,
        usersIds: [this.user._id, this.loggedUser._id]
      };
      await this.$store.dispatch("createChatRoom", { chatDetails });
      this.hide();
    },
    isDate() {},
    // customFormatter($event) {
    //   return moment($event).format("MMMM Do YYYY");
    // }
  },
  computed: {
    date() {
      return this.$store.getters.date;
    }
  }
};
</script>

<style lang="scss">
// .modal {
//   padding-top: 120px;
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 990;
//   display: flex;
//   flex-direction: column;
// }
// .modal .overlay {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 995;
//   background: rgba(0, 0, 0, 0.85);
// }
// .modal .modal_content {
//   z-index: 999;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-height: 90%;
//   overflow: auto;
//   background: #fff;
//   box-sizing: border-box;
//   padding: 20px;
//   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
//   border-radius: 4px;
//   max-width: 520px;
// }
// .modal .modal_content > h2 {
//   font-size: 28px;
//   font-weight: 200;
//   margin: 20px 0 40px;
//   text-align: center;
// }
// .modal .modal_content .buttons_wrapper {
//   padding: 20px;
// }
// .modal .close_modal {
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   cursor: pointer;
//   font-size: 18px;
//   opacity: 0.5;
//   background: none;
//   border: none;
//   transition: opacity 0.2s ease;
// }
// .modal .close_modal:hover {
//   opacity: 0.9;
// }
// .show {
//   display: block;
// }

// .send {
//   cursor: pointer;
//   font-size: 1rem;
//   line-height: 1rem;
//   margin: 0;
//   padding: 0 2rem;
//   border-radius: 2.5rem;
//   border: none;
//   background: lightskyblue;
//   color: #fff;
//   font-weight: 600;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   -webkit-transition: background 0.14s ease;
//   transition: background 0.14s ease;
//   height: 3rem;
//   min-height: 3rem;
//   overflow: hidden;
// }

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
  display: block;

  cursor: pointer;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0 auto;
  padding: 0 2rem;
  border-radius: 4px;
  border: none;
  background: #209cee;
  color: #fff;
  font-weight: 600;
  text-align: center;
  // -webkit-user-select: none;
  // -moz-user-select: none;
  // -ms-user-select: none;
  // user-select: none;
  // -webkit-transition: background 0.14s ease;
  // transition: background 0.14s ease;
  height: 3rem;
  min-height: 3rem;
  overflow: hidden;
}

.modal-header {
  color: black;
}

// .vdp-datepicker__clear-button:enabled {
//   position: absolute;
//   left: -15px;
// }

// [class="vdp-datepicker__clear-button"] {
//   position: absolute;
//   left: -15px;
// }

.vdp-datepicker__clear-button {
  position: absolute;
  left: -15px;
}

.vdp-datepicker {
  color: black;
  margin-bottom: 10px;
}
</style>
