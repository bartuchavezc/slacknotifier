class SlackMessage {
    author;
    content;

    constructor(author, content) {
        this.author = author;
        this.content = content;
    }

    get_author() {
        return this.author;
    }

    get_content() {
        return this.content;
    }

    notify(){
        console.log("message{ ", this.author, ": ",  this.content, " }");
    }

}

module.exports = SlackMessage;