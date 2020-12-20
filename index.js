const Discord = require('discord.js');  
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

client.once('ready', () => {
	console.log('Listo!');
});
client.on('ready', () => {
	console.log('I am ready!');
  });
  client.on('message', message => {
	// If the message is "how to embed"
	if (message.content === '!softban') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
	  const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('ACCCIONES QUE GENERAN COOLDOWN')
		// Set the color of the embed
		.setColor(0xff0000)
		// Set the main content of the embed
		.setDescription('-Captura un pokemon, incluido meltan. \n -Arrojar o Accidentalmente dejar caer una pokebola en alguna parte de la pantalla de captura. \n -Usar una baya, combatir en un gimnasio, dejar un pokémon en un gimnasio, y girar una pokeparada. \n-Terminar una incursion e intentar ya sea darle una baya o intentar atrapar al jefe de la incursion.');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  client.on('message', message => {
	// If the message is "how to embed"
	if (message.content === '!no softban') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
	  const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('ACCCIONES QUE NO GENERAN COOLDOWN')
		// Set the color of the embed
		.setColor(0xff0000)
		// Set the main content of the embed
		.setDescription('-Teletransportate en general. Puedes teletrasportarte tanto como quieras, solo no hagas nada de la lista de arriba. \n -Dar clic a un pokémon, sin hacer nada despues (Shiny check) \n -Eclosionar huevos y tomar fotos. \n -Evolucionar y mejorar al pokemon. \n 	-Usar un objeto en pokemon o recibir recompensas de investigacion. \n 	-Capturar un pokémon de investigacion o Smargle, o pokemon que salgan de fotos. \n -Intercambiar, batallas PVP, mandar regalos, poner un modulo en una pokeparada. \n -Cambiar de una aplicacion modificada a una legal para comprar pokecoins y regresar.');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  client.on('message', message => {
	// If the message is "how to embed"
	if (message.content === '!sb 1km') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
	  const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Cooldown 1km')
		// Set the color of the embed
		.setColor(0xff0000)
		// Set the main content of the embed
		.setDescription('30 segundos');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  client.on('message', message => {
	// If the message is "how to embed"
	if (message.content === '!cooldown') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
	  const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('TIEMPO DE ESPERA')
		// Set the color of the embed
		.setColor(0xff0000)
		// Set the main content of the embed
		.setDescription('1km - 30 segundos \n 5km - 2 minutos \n 10km - 6 minutos \n 25 km - 11 minutos \n 30km - 14 minutos \n 65km - 22 minutos \n 100km - 35 minutos \n 250km - 45 minutos \n 500km - 1 hora \n 750km - 1 hora 15 minutos \n 1000km - 1 hora 30 minutos \n 1500km - 2 horas ');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  client.on('message', message => {
	// If the message is "how to embed"
	if (message.content === '!help') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
	  const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('TIEMPO DE ESPERA')
		// Set the color of the embed
		.setColor(0xff0000)
		// Set the main content of the embed
		.setDescription('1km - 30 segundos \n 5km - 2 minutos \n 10km - 6 minutos \n 25 km - 11 minutos \n 30km - 14 minutos \n 65km - 22 minutos \n 100km - 35 minutos \n 250km - 45 minutos \n 500km - 1 hora \n 750km - 1 hora 15 minutos \n 1000km - 1 hora 30 minutos \n 1500km - 2 horas ');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  
  client.on('message', message => {
	// If the message is "what is my avatar"
	if (message.content === '!avatar') {
	  // Send the user's avatar URL
	  message.reply(message.author.displayAvatarURL());
	}
  });
client.on('message', message => {
	if (message.content === '!nueva zelanda') {
		message.channel.send('-41.28023,174.7685');
	}
});

client.on('message', message => {
	if (message.content === '!correo') {
		message.channel.send('https://correotemporal.org/');
	}
});
client.on('message', message => {
	if (message.content === '!correo') {
		message.channel.send('https://tempmail.youdabomb.social/');
	}
});
client.on('message', message => {
if (message.content === '!correo') {
	message.channel.send('https://generator.email/inbox1/');
}
});
client.on('message', message => {
	if (message.content === '!itunes') {
		message.channel.send('https://www.apple.com/itunes/download/win64/');
	}
});
client.on('message', message => {
	if (message.content === '!itunes') {
		message.channel.send('https://www.apple.com/itunes/download/win32/');
	}
});
client.on('message', message => {
	if (message.content === '!pgsharp') {
		message.channel.send('Pgsharp \n https://www.pgsharp.com/download');
	}
});
client.on('message', message => {
	if (message.content === '!pgsharp') {
		message.channel.send('Pgsharp Link Alterno \n https://mega.nz/file/tyRWXLhB#auwqj8Jn4dfIKQ93gnHky4qDXDI-7yjUmmh57BH1oYg');
	}
});
client.on('message', message => {
	if (message.content === '!ipogoipa') {
		message.channel.send('Version 1.8.7 \n https://ipogo.app/download/ipogo-1.8.7.ipa');
	}
});
client.on('message', message => {
	if (message.content === '!ipogoipa') {
		message.channel.send('Checa si hay alguna nueva \n https://ipogo.app/');
	}
});
client.on('message', message => {
	if (message.content === '!pgsharp') {
		message.channel.send('Pgsharp Version Gratis beta \n https://dl.pgsharp.com/pgs1.10.0.apk');
	}
});
client.on('message', message => {
	if (message.content === '!nz') {
		message.channel.send('-41.28023,174.7685');
	}
});
client.on('message', message => {
	if (message.content === '!tokio') {
		message.channel.send('35.69513,139.8242');
	}
});
client.on('message', message => {
	if (message.content === '!kiribati') {
		message.channel.send('1.987149,-157.477137');
	}
});
client.on('message', message => {
	if (message.content === '!busan') {
		message.channel.send('35.153960,129.059570');
	}
});
client.on('message', message => {
	if (message.content === '!taipei') {
		message.channel.send('25.04447723,121.5296484');
	}
});
client.on('message', message => {
	if (message.content === '!singapur') {
		message.channel.send('1.292435,103.847606');
	}
});
client.on('message', message => {
	if (message.content === '!sri lanka') {
		message.channel.send('6.915617,79.863336');
	}
});
client.on('message', message => {
	if (message.content === '!dubai') {
		message.channel.send('25.077497,55.133673');
	}
});
client.on('message', message => {
	if (message.content === '!sevilla') {
		message.channel.send('37.377148,-5.987055');
	}
});
client.on('message', message => {
	if (message.content === '!zaragoza') {
		message.channel.send('41.661545,-0.894701');
	}
});
client.on('message', message => {
	if (message.content === '!budapest') {
		message.channel.send('47.529875,19.051542');
	}
});
client.on('message', message => {
	if (message.content === '!ibirabuera') {
		message.channel.send('-23.586269,-46.655914');
	}
});
client.on('message', message => {
	if (message.content === '!mexico') {
		message.channel.send('19.419725,-99.189285');
	}
});
client.on('message', message => {
	if (message.content === '!mexico') {
		message.channel.send('19.435975,-99.143801');
	}
});
client.on('message', message => {
	if (message.content === '!central park') {
		message.channel.send('40.7828647, -73.9653551');
	}
});
client.on('message', message => {
	if (message.content === '!pier 39') {
		message.channel.send('37.808823,-122.409739');
	}
});
client.on('message', message => {
	if (message.content === '!honolulu') {
		message.channel.send('21.3069444, -157.8583333');
	}
});
client.on('message', message => {
	if (message.content === '!estados unidos') {
		message.channel.send('21.3069444, -157.8583333');
	}
});
client.on('message', message => {
	if (message.content === '!estados unidos') {
		message.channel.send('37.808823,-122.409739');
	}
});
client.on('message', message => {
	if (message.content === '!estados unidos') {
		message.channel.send('40.7828647, -73.9653551');
	}
});
client.on('message', message => {
	if (message.content === '!samoa americana') {
		message.channel.send('-14.2768,-170.6821');
	}
});
client.on('message', message => {
	if (message.content === '!hotspot ayuda') {
        message.channel.send('para nido         !nido (pokemon)');
        message.channel.send('para coordenadas  !pais');
}});

client.on('message', message => {    if (message.content === '!aron') {  message.channel.send('aron   ✨\n  🇺🇸 • 41.904985,-87.701640   '); }});
client.on('message', message => {    if (message.content === '!aron') {  message.channel.send('aron   ✨\n  🇧🇬 • 42.902586, 23.786187   '); }});
client.on('message', message => {    if (message.content === '!aron') {  message.channel.send('aron   ✨\n  🇺🇸 • 37.768416,-122.48272   '); }});
client.on('message', message => {    if (message.content === '!bulbasaur') {  message.channel.send('bulbasaur   ✨\n  🇦🇺 • -33.908556,150.98094   '); }});
client.on('message', message => {    if (message.content === '!bulbasaur') {  message.channel.send('bulbasaur   ✨\n  🇬🇧 • 51.506400, -0.156700   '); }});
client.on('message', message => {    if (message.content === '!bulbasaur') {  message.channel.send('bulbasaur   ✨\n  🇺🇸 • 42.354465,-71.071382    '); }});
client.on('message', message => {    if (message.content === '!buneary') {  message.channel.send('buneary   ✨\n  🇨🇦 • 49.219910,-123.18707   '); }});
client.on('message', message => {    if (message.content === '!buneary') {  message.channel.send('buneary   \n  🇺🇸 • 37.048493,-76.484994   '); }});
client.on('message', message => {    if (message.content === '!buneary') {  message.channel.send('buneary   \n  🇫🇷 • 48.806341, 2.115065    '); }});
client.on('message', message => {    if (message.content === '!charmander') {  message.channel.send('charmander    \n  🇦🇹 • 48.183052,16.312686   '); }});
client.on('message', message => {    if (message.content === '!charmander') {  message.channel.send('charmander    ✨\n  🇳🇿 • -36.897892,174.78525   '); }});
client.on('message', message => {    if (message.content === '!charmander') {  message.channel.send('charmander    ✨\n  🇯🇵 • 36.461184,139.80872   '); }});
client.on('message', message => {    if (message.content === '!chimchar') {  message.channel.send('chimchar   ✨\n  🇸🇬 • 1.270811,103.819086    '); }});
client.on('message', message => {    if (message.content === '!chimchar') {  message.channel.send('chimchar   ✨\n  🇬🇷 • 38.042739, 23.745332   '); }});
client.on('message', message => {    if (message.content === '!chimchar') {  message.channel.send('chimchar   ✨\n  🇧🇷 • -20.452300,-54.570700   '); }});
client.on('message', message => {    if (message.content === '!chinchou') {  message.channel.send('chinchou   ✨\n  🇺🇸 • 38.640337,-90.284690   '); }});
client.on('message', message => {    if (message.content === '!chinchou') {  message.channel.send('chinchou   ✨\n  🇦🇺 • -33.842426,151.17362   '); }});
client.on('message', message => {    if (message.content === '!chinchou') {  message.channel.send('chinchou   ✨\n  🇸🇬 • 1.444837,103.781257     '); }});
client.on('message', message => {    if (message.content === '!clefairy') {  message.channel.send('clefairy   ✨\n  🇺🇸 • 41.937700,-87.636600   '); }});
client.on('message', message => {    if (message.content === '!clefairy') {  message.channel.send('clefairy   ✨\n  🇫🇷 • 50.641601,3.040339   '); }});
client.on('message', message => {    if (message.content === '!clefairy') {  message.channel.send('clefairy   ✨\n  🇯🇵 • 37.881400,139.061400    '); }});
client.on('message', message => {    if (message.content === '!drilbur') {  message.channel.send('drilbur   \n  🇪🇸 • 41.360126,2.160900   '); }});
client.on('message', message => {    if (message.content === '!drilbur') {  message.channel.send('drilbur   \n  🇮🇱 • 32.185752,34.852674   '); }});
client.on('message', message => {    if (message.content === '!drilbur') {  message.channel.send('drilbur   \n  🇺🇸 • 38.550610,-90.415587     '); }});
client.on('message', message => {    if (message.content === '!eevee') {  message.channel.send('eevee    ✨\n  🇧🇬 • 43.207778,27.931631   '); }});
client.on('message', message => {    if (message.content === '!eevee') {  message.channel.send('eevee    ✨\n  🇨🇦 • 45.559152,-73.561793   '); }});
client.on('message', message => {    if (message.content === '!eevee') {  message.channel.send('eevee    ✨\n  🇯🇵 • 35.896161,139.938661   '); }});
client.on('message', message => {    if (message.content === '!machop') {  message.channel.send('machop   ✨\n  🇫🇮  • 60.218918,25.005725   '); }});
client.on('message', message => {    if (message.content === '!machop') {  message.channel.send('machop   ✨\n  🇯🇵 • 35.670812,139.692684   '); }});
client.on('message', message => {    if (message.content === '!machop') {  message.channel.send('machop   ✨\n  🇦🇷 • -34.635784,-58.443241    '); }});
client.on('message', message => {    if (message.content === '!makuhita') {  message.channel.send('makuhita   ✨\n  🇯🇵 • 34.649248,135.510650   '); }});
client.on('message', message => {    if (message.content === '!makuhita') {  message.channel.send('makuhita   ✨\n  🇺🇸 • 44.022128,-88.516676   '); }});
client.on('message', message => {    if (message.content === '!makuhita') {  message.channel.send('makuhita   ✨\n  🇺🇸 • 33.519330,-79.099402     '); }});
client.on('message', message => {    if (message.content === '!misdreavus') {  message.channel.send('misdreavus   ✨\n  🇮🇳 • 26.855017,80.979800   '); }});
client.on('message', message => {    if (message.content === '!misdreavus') {  message.channel.send('misdreavus   ✨\n  🇺🇸 • 44.782500,-93.148400    '); }});
client.on('message', message => {    if (message.content === '!misdreavus') {  message.channel.send('misdreavus   ✨\n  🇧🇷 •  -18.908623,-48.234035   '); }});
client.on('message', message => {    if (message.content === '!mudkip') {  message.channel.send('mudkip   ✨\n  🇩🇪 • 52.401110,13.028341   '); }});
client.on('message', message => {    if (message.content === '!mudkip') {  message.channel.send('mudkip   ✨\n  🇵🇱 • 52.230328,20.950918   '); }});
client.on('message', message => {    if (message.content === '!mudkip') {  message.channel.send('mudkip   ✨\n  🇰🇷 • 37.550420,126.99245    '); }});
client.on('message', message => {    if (message.content === '!phanpy') {  message.channel.send('phanpy   \n  🇯🇵 • 34.682831,135.53204   '); }});
client.on('message', message => {    if (message.content === '!phanpy') {  message.channel.send('phanpy   \n  🇲🇽 • 19.422322,-99.189111   '); }});
client.on('message', message => {    if (message.content === '!phanpy') {  message.channel.send('phanpy   \n  🇪🇦 • 41.359500, 2.155800    '); }});
client.on('message', message => {    if (message.content === '!pikachu') {  message.channel.send('pikachu   ✨\n  🇷🇴 • 44.404300,26.109900   '); }});
client.on('message', message => {    if (message.content === '!pikachu') {  message.channel.send('pikachu   ✨\n  🇺🇸 • 33.705694,-118.00562   '); }});
client.on('message', message => {    if (message.content === '!pikachu') {  message.channel.send('pikachu   ✨\n  🇬🇧 • 55.850135, -4.237167    '); }});
client.on('message', message => {    if (message.content === '!piplup') {  message.channel.send('piplup   ✨\n  🇷🇺 • 55.832835,37.627084   '); }});
client.on('message', message => {    if (message.content === '!piplup') {  message.channel.send('piplup   ✨\n  🇺🇸  • 40.662391,-73.969818   '); }});
client.on('message', message => {    if (message.content === '!piplup') {  message.channel.send('piplup   ✨\n  🇮🇹  • 41.913823,12.485985    '); }});
client.on('message', message => {    if (message.content === '!poliwag') {  message.channel.send('poliwag   ✨\n  🇳🇿 • -36.862200,174.773500   '); }});
client.on('message', message => {    if (message.content === '!poliwag') {  message.channel.send('poliwag   ✨\n  🇭🇺 • 47.516437,19.076843   '); }});
client.on('message', message => {    if (message.content === '!poliwag') {  message.channel.send('poliwag   ✨\n  🇧🇾 • 52.092275,23.674803    '); }});
client.on('message', message => {    if (message.content === '!poochyena') {  message.channel.send('poochyena   ✨\n  🇺🇸 • 36.867189,-119.785121   '); }});
client.on('message', message => {    if (message.content === '!poochyena') {  message.channel.send('poochyena   ✨\n  🇯🇵 • 35.917900,139.631600   '); }});
client.on('message', message => {    if (message.content === '!poochyena ') {  message.channel.send('poochyena   ✨\n  🇬🇷 • 37.969173,23.719569    '); }});
client.on('message', message => {    if (message.content === '!skarmory') {  message.channel.send('skarmory    ✨\n  🇭🇺 • 47.526654,19.050192   '); }});
client.on('message', message => {    if (message.content === '!skarmory') {  message.channel.send('skarmory    ✨\n  🇨🇳 • 41.849709,123.420628   '); }});
client.on('message', message => {    if (message.content === '!skarmory') {  message.channel.send('skarmory    ✨\n  🇯🇵 • 35.788723,139.869913   '); }});
client.on('message', message => {    if (message.content === '!snover') {  message.channel.send('snover   ✨\n  🇪🇸 • 40.418606, -3.680835   '); }});
client.on('message', message => {    if (message.content === '!snover') {  message.channel.send('snover   ✨\n  🇯🇵 • 35.096687,137.217157   '); }});
client.on('message', message => {    if (message.content === '!snover') {  message.channel.send('snover   ✨\n  🇰🇷 • 35.841289,128.558390    '); }});
client.on('message', message => {    if (message.content === '!spheal') {  message.channel.send('spheal   \n  🇷🇴 • 44.432688, 26.089431   '); }});
client.on('message', message => {    if (message.content === '!spheal') {  message.channel.send('spheal   \n  🇨🇳 • 43.819328,125.330172   '); }});
client.on('message', message => {    if (message.content === '!spheal') {  message.channel.send('spheal   \n  🇨🇦 • 44.012386,-79.457137    '); }});
client.on('message', message => {    if (message.content === '!squirtle') {  message.channel.send('squirtle    ✨\n  🇯🇵 • 35.371473,137.028478   '); }});
client.on('message', message => {    if (message.content === '!squirtle') {  message.channel.send('squirtle    ✨\n  🇦🇺 •  -33.868284,151.21531   '); }});
client.on('message', message => {    if (message.content === '!squirtle') {  message.channel.send('squirtle    ✨\n  🇪🇨 • -2.102159, -79.900975   '); }});
client.on('message', message => {    if (message.content === '!stantler') {  message.channel.send('stantler   ✨\n  🇺🇲 • 43.495400,-87.794100   '); }});
client.on('message', message => {    if (message.content === '!stantler') {  message.channel.send('stantler   ✨\n  🇳🇱 • 35.347900,136.988000   '); }});
client.on('message', message => {    if (message.content === '!stantler') {  message.channel.send('stantler   ✨\n  🇯🇵 • 34.682915,135.847332    '); }});
client.on('message', message => {    if (message.content === '!swinub') {  message.channel.send('swinub   ✨\n  🇨🇦 • 43.647038,-79.464099   '); }});
client.on('message', message => {    if (message.content === '!swinub') {  message.channel.send('swinub   ✨\n  🇯🇵 • 35.623400,139.662900   '); }});
client.on('message', message => {    if (message.content === '!swinub') {  message.channel.send('swinub   ✨\n  🇺🇸 • 39.876215, -75.670789    '); }});
client.on('message', message => {    if (message.content === '!tentacool') {  message.channel.send('tentacool   ✨\n  🇯🇵 • 34.821658,135.691173   '); }});
client.on('message', message => {    if (message.content === '!tentacool') {  message.channel.send('tentacool   ✨\n  🇰🇿 • 51.123182, 71.461446   '); }});
client.on('message', message => {    if (message.content === '!tentacool') {  message.channel.send('tentacool   ✨\n  🇵🇱 • 52.217384, 21.033898    '); }});
client.on('message', message => {    if (message.content === '!torchic') {  message.channel.send('torchic   ✨\n  🇬🇧 • 54.515612,-1.560058   '); }});
client.on('message', message => {    if (message.content === '!torchic') {  message.channel.send('torchic   ✨\n  🇯🇵 • 35.641294,139.862897   '); }});
client.on('message', message => {    if (message.content === '!torchic') {  message.channel.send('torchic   ✨\n  🇧🇩 • 23.816741,90.348030    '); }});
client.on('message', message => {    if (message.content === '!treecko') {  message.channel.send('treecko   ✨\n  🇹🇭 • 17.018131,99.703762   '); }});
client.on('message', message => {    if (message.content === '!treecko') {  message.channel.send('treecko   ✨\n  🇳🇱 • 39.789689,-89.685628   '); }});
client.on('message', message => {    if (message.content === '!treecko') {  message.channel.send('treecko   ✨\n  🇨🇦 • 43.720400,-79.358100   '); }});
client.on('message', message => {    if (message.content === '!turtwig') {  message.channel.send('turtwig   ✨\n  🇺🇸 • 29.719660,-95.391730   '); }});
client.on('message', message => {    if (message.content === '!turtwig') {  message.channel.send('turtwig   ✨\n  🇺🇸 • 29.758845,-95.450352   '); }});
client.on('message', message => {    if (message.content === '!turtwig') {  message.channel.send('turtwig   ✨\n  🇯🇵 • 35.173019,137.090352   '); }});

client.on('message', message => {
	if (message.content === '!ipogo') {
		message.channel.send('https://youtu.be/KP6BHUKKTvE');
		message.channel.send('https://youtu.be/l05fylu_Ado');
		message.channel.send('https://youtu.be/n616UKHLXN4');
		message.channel.send('https://youtu.be/QZD-ejHpuEE');
}});
client.on('message', message => {
	if (message.content === '!3utools') {
		message.channel.send('https://youtu.be/KP6BHUKKTvE');
}});
client.on('message', message => {
	if (message.content === '!sideloadly') {
		message.channel.send('https://youtu.be/l05fylu_Ado');
}});
client.on('message', message => {
	if (message.content === '!rickpactor') {
		message.channel.send('https://youtu.be/n616UKHLXN4');
}});
client.on('message', message => {
	if (message.content === '!rickpactor') {
		message.channel.send('https://youtu.be/QZD-ejHpuEE');
}});		


client.on('message', message => {
	if (message.content === '!licencias') {
		message.channel.send('https://youtu.be/jUTqRZc0cNg');
		message.channel.send('https://youtu.be/NCalU2p5EcQ');
		message.channel.send('https://youtu.be/PM1tbbQKJm4');
}});
client.on('message', message => {
	if (message.content === '!home') {
		message.channel.send('https://youtu.be/Ih-C6JGM6fw');
}});
client.on('message', message => {
	if (message.content === '!cd1') {
		message.channel.send(':one::earth_africa: País :flag_ki: Kiribati :flag_ki:\n \n:flag_cr: 15:00 | :flag_gt: 15:00 | :flag_sv: 15:00\n:flag_mx: 15:00 | :flag_pe: 16:00 | :flag_pa: 16:00\n:flag_ec: 16:00 | :flag_ve: 17:00 | :flag_bo: 17:00\n:flag_cu: 17:00 | :flag_do: 17:00 | :flag_pr: 17:00\n:flag_py: 17:00 | :flag_cl: 18:00 | :flag_br: 18:00 \n :flag_ar: 18:00 | :flag_uy: 18:00 | :flag_es: 23:00 \n \n 1.987149,-157.477137 \n\n 2.006672,-157.487830');
}});
client.on('message', message => {
	if (message.content === '!cd2') {
		message.channel.send('\n:two::earth_africa: País :flag_nz: Nueva Zelanda :flag_nz: \n\n :flag_cr: 17:00 | :flag_gt: 17:00 | :flag_sv: 17:00 \n :flag_mx: 16:00 | :flag_pe: 18:00 | :flag_pa: 18:00 \n :flag_ec: 18:00 | :flag_ve: 19:00 | :flag_bo: 19:00 \n :flag_cu: 19:00 | :flag_do: 19:00 | :flag_pr: 19:00 \n :flag_py: 20:00 | :flag_cl:20:00 | :flag_br: 20:00 \n :flag_ar: 20:00 | :flag_uy: 20:00 | :flag_es: 01:00 \n \n :beginner:Botanic Garden :flag_nz: \n -41.28023,174.7685');
}});
client.on('message', message => {
	if (message.content === '!cd3') {
		message.channel.send('\n:three::earth_africa: País :flag_jp: Japón / Korea :flag_kr:\n\n :flag_cr: 20:00 | :flag_gt: 20:00 | :flag_sv: 20:00 \n :flag_mx: 20:00 | :flag_pe: 21:00 | :flag_pa: 21:00 \n :flag_ec: 21:00 | :flag_ve: 22:00 | :flag_bo: 22:00 \n :flag_cu: 22:00 | :flag_do: 22:00 | :flag_pr: 22:00 \n :flag_py: 22:00 | :flag_cl: 23:00 | :flag_br: 23:00 \n :flag_ar: 23:00 | :flag_uy: 23:00 | :flag_es: 04:00 \n \n :beginner:Japón Tokio :flag_jp:  \n 35.69513,139.8242 \n\n :beginner:Busan :flag_kr: \n 35.153960,129.059570');
}});
client.on('message', message => {
	if (message.content === '!cd4') {
		message.channel.send('\n:four::earth_africa: País :flag_tw: Taiwan / Singapur :flag_sg: \n\n :flag_cr: 21:00 | :flag_gt: 21:00 | :flag_sv: 21:00 \n :flag_mx: 21:00 | :flag_pe: 22:00 | :flag_pa: 22:00 \n :flag_ec: 22:00 | :flag_ve: 23:00 | :flag_bo: 23:00 \n :flag_cu: 23:00 | :flag_do: 23:00 | :flag_pr: 23:00 \n :flag_py: 23:00 | :flag_cl: 00:00 | :flag_br: 00:00 \n :flag_ar: 00:00 | :flag_uy: 00:00 | :flag_es: 05:00 \n \n :beginner:Taipei :flag_tw:  \n 25.04447723,121.5296484 \n \n :beginner:Singapur :flag_sg: \n 1.292435,103.847606');
}});
client.on('message', message => {
	if (message.content === '!cd5') {
		message.channel.send('\n:five::earth_africa: País :flag_lk: Sri Lanka :flag_lk:\n\n :flag_cr: 23:30 | :flag_gt: 23:30 | :flag_sv: 23:30\n :flag_mx: 11:30 | :flag_pe: 00:30 | :flag_pa: 00:30 \n :flag_ec: 00:30 | :flag_ve: 01:30 | :flag_bo: 01:30 \n :flag_cu: 01:30 | :flag_do: 01:30 | :flag_pr: 01:30 \n :flag_py: 01:30 | :flag_cl: 02:30 | :flag_br: 02:30  \n :flag_ar: 02:30 | :flag_uy: 02:30 | :flag_es: 07:30 \n \n :beginner:Colombo 00700, Sri Lanka  \n 6.915617,79.863336');
}});
client.on('message', message => {
	if (message.content === '!cd6') {
		message.channel.send('\n:six::earth_africa: Emiratos Árabes Unidos :flag_ae: \n\n :flag_cr: 01:00 | :flag_gt: 01:00 | :flag_sv: 01:00 \n :flag_mx: 01:00 | :flag_pe: 02:00 | :flag_pa: 02:00 \n :flag_ec: 02:00 | :flag_ve: 03:00 | :flag_bo: 03:00 \n :flag_cu: 03:00 | :flag_do: 03:00 | :flag_pr: 03:00 \n :flag_py: 03:00 | :flag_cl: 04:00 | :flag_br: 04:00 \n :flag_ar: 04:00 | :flag_uy: 04:00 | :flag_es: 09:00 \n \n :beginner:Dubái \n 25.077497,55.133673');
}});
client.on('message', message => {
	if (message.content === '!cd7') {
		message.channel.send('\n :seven::earth_africa: País :flag_es: España / Hungría :flag_hu:  \n \n :flag_cr: 03:00 | :flag_gt: 03:00 | :flag_sv: 03:00 \n :flag_mx: 04:00 | :flag_pe: 04:00 | :flag_pa: 04:00 \n :flag_ec: 04:00 | :flag_ve: 05:00 | :flag_bo: 05:00 \n :flag_cu: 05:00 | :flag_do: 05:00 | :flag_pr: 05:00 \n :flag_py: 05:00 | :flag_cl:06:00 | :flag_br: 06:00 \n  :flag_ar: 06:00 | :flag_uy: 06:00 | :flag_es: 11:00 \n \n :beginner:Sevilla :flag_es: \n 37.377148,-5.987055 \n\n :beginner:Zaragoza:flag_es: \n 41.661545,-0.894701 \n\n Beginner:Budapest :flag_hu: \n 47.529875,19.051542');
}});
client.on('message', message => {
	if (message.content === '!cd8') {
		message.channel.send('\n :eight::earth_africa: País :flag_br: Brasil :flag_br: \n\n :flag_cr: 08:00 | :flag_gt: 08:00 | :flag_sv: 08:00 \n :flag_mx: 08:00 | :flag_pe: 09:00 | :flag_pa: 09:00 \n :flag_ec: 09:00 | :flag_ve: 10:00 | :flag_bo: 10:00 \n :flag_cu: 10:00 | :flag_do: 10:00 | :flag_pr: 10:00 \n :flag_py: 10:00 | :flag_cl: 11:00 | :flag_br: 11:00 \n :flag_ar: 11:00 | :flag_uy: 11:00 | :flag_es: 16:00 \n\n :beginner: Ibirabuera Park :flag_br: \n -23.586269,-46.655914 \n\n :beginner:Cementerio de Consolación :flag_br: \n -23.550165,-46.655415');
}});
client.on('message', message => {
	if (message.content === '!cd9') {
		message.channel.send('\n :nine::earth_africa: País :flag_mx: México :flag_mx: \n\n :flag_cr: 10:00 | :flag_gt: 10:00 | :flag_sv: 10:00 \n :flag_mx: 11:00 | :flag_pe: 11:00 | :flag_pa: 11:00 \n :flag_ec: 11:00 | :flag_ve: 12:00 | :flag_bo: 12:00 \n :flag_cu: 12:00 | :flag_do: 12:00 | :flag_pr: 12:00 \n :flag_py: 12:00 | :flag_cl: 13:00 | :flag_br: 13:00 \n :flag_ar: 13:00 | :flag_uy: 13:00 | :flag_es: 18:00 \n\n :beginner:Chapultepec :flag_mx: \n 19.419725,-99.189285 \n\n :beginner:Alameda Central :flag_mx: \n 19.435975,-99.143801');
}});
client.on('message', message => {
	if (message.content === '!cd10') {
		message.channel.send('\n:one::zero::earth_africa: País :flag_us: USA :flag_us: \n\n :flag_cr: 11:00 | :flag_gt: 11:00 | :flag_sv: 11:00 \n :flag_mx: 12:00 | :flag_pe: 12:00 | :flag_pa: 12:00 \n :flag_ec: 12:00 | :flag_ve: 13:00 | :flag_bo: 13:00 \n :flag_cu: 13:00 | :flag_do: 13:00 | :flag_pr: 13:00 \n :flag_py: 13:00 | :flag_cl: 14:00 | :flag_br: 14:00 \n  :flag_ar: 14:00 | :flag_uy: 14:00 | :flag_es: 19:00 \n\n :beginner:Central Park Manhattan :flag_us: \n 40.7828647, -73.9653551');
}});
client.on('message', message => {
	if (message.content === '!cd11') {
		message.channel.send('\n :one::one::earth_africa: País :flag_us: USA :flag_us: \n\n :flag_cr: 12:00 | :flag_gt: 12:00 | :flag_sv: 12:00 \n :flag_mx: 13:00 | :flag_pe: 13:00 | :flag_pa: 13:00 \n :flag_ec: 13:00 | :flag_ve: 14:00 | :flag_bo: 14:00 \n :flag_cu: 14:00 | :flag_do: 14:00 | :flag_pr: 14:00 \n :flag_py: 14:00 | :flag_cl: 15:00 | :flag_br: 15:00 \n :flag_ar: 15:00 | :flag_uy: 15:00 | :flag_es: 20:00 \n\n :beginner:Pier39 San Francisco :flag_us: \n 37.808823,-122.409739');
}});
client.on('message', message => {
	if (message.content === '!cd12') {
		message.channel.send('\n :one::two::earth_africa: País :flag_us: USA Hawái :flag_us: \n\n :flag_cr: 15:00 | :flag_gt: 15:00 | :flag_sv: 15:00 \n :flag_mx: 15:00 | :flag_pe: 16:00 | :flag_pa: 16:00 \n :flag_ec: 16:00 | :flag_ve: 17:00 | :flag_bo: 17:00 \n :flag_cu: 17:00 | :flag_do: 17:00 | :flag_pr: 17:00 :flag_py: 17:00 | :flag_cl: 18:00 | :flag_br: 18:00 \n :flag_ar: 18:00 | :flag_uy: 18:00 | :flag_es: 23:00 \n \n :beginner:Honolulu Hawái :flag_us: \n 21.3069444, -157.8583333');
}});
client.on('message', message => {
	if (message.content === '!nieve') {
		message.channel.send('ALASKA \n 61.217290, -149.888764 \n :snowman2:  Podría estar con clima nieve :snowman2: ');
}});
client.on('message', message => {
	if (message.content === '!nieve') {
		message.channel.send('COPENHAGUE\n 55.67273,12.59121 \n:snowman2:  Podría estar con clima nieve :snowman2: ');
}});
client.on('message', message => {
	if (message.content === '!nieve') {
		message.channel.send('Suecia \n 59.533541,18.068387 \n:snowman2:  Podría estar con clima nieve :snowman2: ');
}});
client.on('message', message => {
	if (message.content === '!nieve') {
		message.channel.send('Toronto \n 43.661832,-79.386346 \n :snowman2:  Podría estar con clima nieve :snowman2: ');
}});
client.on('message', message => {
	if (message.content === '!nieve') {
		message.channel.send('Salsburgo \n47.7632400,13.0654320 \n :snowman2:  Podría estar con clima nieve :snowman2: ');
}});
client.on('message', message => {
	if (message.content === `!server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}});
client.on('message', message => {
	if (message.content === `!user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}});
client.login ('Nzc3NzQyODM2MzUwNTgyNzg1.X7H3dQ.hr-MOSJX5kRzjsYBpS4JMCxA66I');
