// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `bienvenido a mi portfolio! estos son todos los comandos disponibles:
\n${c}\n
[tab]: completar.
[flecha arriba - flecha abajo] últimos comandos escritos.
[ctrl+l]/clear: limpiar terminal.\n
ingresa 'sumfetch' para ver un resumen.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'abriendo repo de github ...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `hola! soy lisandro. 
bienvenido a mi sitio!
más sobre mi:
'sumfetch' - resumen corto.
'cv' - mi último cv.
'readme' - el readme de mi github.`;
};

export const curriculum = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'abriendo cv...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Abriendo mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Abriendo github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Abriendo linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `/`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `no hay plata para más directorios...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://youtu.be/RfiQYRn7fBg?si=mhcwf6rA9PhFjGxx&t=11', '_blank'); // ...I'm sorry
  return `ah, ah, ah... you didn't say the magic word! `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠶⢤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣠⡴⠞⠳⠶⠦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠋⠀⠀⠀⠀⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀⠉⠳⣦⡀⠀⠀⠀⠀⠀⠀⣤⡾⠿⣷⠀⠀⠀⢠⡞⠁⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠀⣤⠤⠼⢤⡿⠃⠀⠼⠟⠻⠿⡤⠛⠀⠀⠀⠀⣠⣼⣤⣀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢸⡇⠀⠀⣴⠖⠒⢶⡦⠀⠀⠀⠁⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠁⠀⠠⠀⠀⠻⣦⣄⣹⡄⠀⢹⡄⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢸⡄⠀⠀⡏⣠⡾⢻⠇⠠⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠙⢿⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢸⡄⠀⠘⢷⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⣾⠄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠠⠜⢧⡀⠀⠀⠀⠀⠀
  ⠀⠀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀
  ⢀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⡆⠀⠀⠀⢀⣀⠀⠀⠀⠀⣿⣿⣿⡆⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⢀⠙⣧⠀⠀
  ⣼⡍⠀⣀⡀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠐⠄⠛⠿⠛⠁⠀⠀⠰⠏⠙⠷⠀⠀⠀⠈⠉⠉⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠶⣼⡇⠀
  ⣿⣷⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠁⠀⠀⠀⢰⣀⠘⣇⠀
  ⣿⠀⢀⡴⠲⠀⠀⠀⠀⠀⠒⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡟⠀
  ⠹⣞⠋⢀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠇⣰⠇⠀⠀
  ⠀⠻⣄⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀
  ⠀⠀⠙⠷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠋⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠈⠙⣷⠶⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⢹⡆⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣤⡴⠖⠶⣄⠀
  ⠀⠀⠀⠀⠀⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⢸⡆
  ⠀⠀⠀⣴⠞⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠇⠀⠀⣠⡿⠀
  ⠀⠀⠀⢿⡀⠀⢿⡀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⣠⡟⣀⣴⡾⠛⢈⠀
  ⠀⠀⠀⠐⠛⠶⣤⣽⣶⣄⠀⠀⠀⠸⣇⡀⠀⠀⠤⠴⣿⠀⠀⠀⠀⠀⢸⡶⠶⠀⠀⢀⣿⠐⠀⣀⣀⣠⣤⠾⠛⠛⠋⡁⠀⠀⠀⠀
  ⠀⠀⠀⠐⠀⠀⠤⠄⠈⠉⠛⠛⠶⠶⢿⣄⠀⠄⠀⣠⣧⣤⣤⣤⡤⠶⠾⣇⠀⠀⢐⣽⠟⠛⢛⠉⠍⠁⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠙⡷⠖⣟⣋      ⠀⠀⠀⠈⠛⠛⠋⠥⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  
bienvenido a mi portfolio
ingresa 'help' para ver los comandos disponibles.
ingresa 'sumfetch' para ver un resumen.
`;
};
