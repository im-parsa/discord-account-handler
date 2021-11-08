const axios = require('axios'),
    Discord = require("discord.js-self"),
    { getRandomItem } = require("./utils.module"),
    { token, activity, presence } = require("./config.json");

let i = -1,
    data,
    client,
    config;


token.forEach((tokenV) =>
{
    i++;
    client = new Discord.Client();

    client.on("ready", () =>
    {
        console.log(`Logged in ${client.user.username}#${client.user.discriminator}`);

        client.user.setActivity(String(getRandomItem(activity)), {type: Number(Math.floor(Math.random() * 6))})

        client.user.setPresence(
            {
                status: getRandomItem(presence)
            });

        try
        {
            data = '';

            config =
                {
                    method: 'post',
                    url: `https://discordapp.com/api/v6/invites/${inviteCode}`,
                    headers:
                        {
                            'Authorization': process.env.token,
                            'Cookie': '__dcfduid=eb512138ff894201bb227ad3b570e4e1'
                        },
                    data
                };

            axios(config)
                .then(function (response)
                {
                    let result = response.data;
                    console.log(`I joined the **${result.guild.name} (${result.guild.id})** server.`);
                })
                .catch(function (error)
                {
                    console.log(error);
                });
        }
        catch (e)
        {
            console.log(e);
        }
    })

    client.login(tokenV);
})
