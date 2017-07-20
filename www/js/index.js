var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // initialize VUE
        this.setupVue();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    setupVue: function() {
        var vm = new Vue({
            el: "#vue-instance",
            data: {
                randomWord: '',
                words: [
                    'formidable',
                    'gracious',
                    'daft',
                    'mundane',
                    'onomatopoeia'
                ]
            },
            methods: {
                getRandomWord: function() {
                    var randomIndex = Math.floor(Math.random() * this.words.length);
                    this.randomWord = this.words[randomIndex];
                }
            }
        });
    }
};

app.initialize();