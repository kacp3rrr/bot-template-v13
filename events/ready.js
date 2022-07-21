module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        console.log(`${bot.user.username} is online`);
        bot.user.setPresence({ activities: [{ name: 'Online'}] });
        // Input anything else you want the bot to do when it goes online below
    }
}
