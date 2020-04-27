const SlackMessage = require("../../Domain/SlackMessage")

class SlackMessengerService {

    repository;

    constructor(repository){
        this.repository = repository;
    }


    sendMessage(message){
        new SlackMessage(message.author, message.content).notify();
    }

}

module.exports = SlackMessengerService;