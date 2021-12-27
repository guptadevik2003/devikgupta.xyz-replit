async function bodyLoad() {
    await sleep(2468)
    window.open('https://discord.com/api/oauth2/authorize?client_id=919212093444616203&permissions=1240674462839&scope=bot%20applications.commands', '_blank')
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
