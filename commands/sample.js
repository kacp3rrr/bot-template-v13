// TO USE THIS AS A TEMPLATE, SIMPLY REMOVE THE CONTENT IN LINE 10 AND EDIT THE CONFIG DETAILS

module.exports = {
    config: {
        name: 'sample',
        description: 'This is a sample command',
        usage: `!sample`,
    },
    async run(bot, message, args) {
        message.channel.send(`Hello, ${(message.author.username)}`)
    }
}