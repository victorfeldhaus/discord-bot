import { Client, GatewayIntentBits } from 'discord.js';
import { TOKEN } from '.';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(TOKEN);