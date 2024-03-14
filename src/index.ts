import { REST, Routes } from 'discord.js';
import dotenv from "dotenv";
import { env } from './env/env';

dotenv.config()
const CLIENT_ID = env.DISCORD_CLIENT_ID;
export const TOKEN = env.DISCORD_TOKEN

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

const exeCommands = async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
}

exeCommands()