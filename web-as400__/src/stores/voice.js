

import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'
import { ref } from "vue";


export const voiceStore = defineStore("voice", {
    state: () => {
        return {
            transcript: ref(''),
            isRecording: ref(false),
            Recognition: ref(null),
            sr: ref(null)
        };
    },
    getters: {
        //   getUserPref: (state) => state.userPref,

    },
    actions: {

        setVoice(val) {
            this.Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
            this.sr = new this.Recognition()

            this.sr.continuous = true
            this.sr.interimResults = true

            this.sr.onstart = () => {
                console.log("start recognition")
                this.isRecording = true
            }

            this.sr.onend = () => {
                console.log("end recognition")
                this.isRecording = false
            }

            this.sr.onresult = (evt) => {
                const t = Array.from(evt.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')
                

                this.transcript = t

            }
        },
        toggleMic(val) {
            if (this.isRecording) {
                 this.transcript = ref('')
                this.sr.stop()
            }
            else {
                                 this.transcript = ref('')
                                 this.sr.start()
                                }


        },
        cleanTranscript(val) {
            if (this.isRecording) {
                
                this.sr.stop()
            }
            else if (!this.isRecording)
            this.sr.start()
        }

    }
});