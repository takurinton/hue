import fetch from 'node-fetch';

const HUE_ENDPOINT = `http://${process.env.HUE_ENDPOINT}`;
const HUE_USERNAME = process.env.HUE_USERNAME;

(async function () {
  const hue = await getHueLights();
  const lights = await hue.json();
  
  for (const light of Object.keys(lights)) {
    randomLight(light);
  }
})();

async function getHueLights () {
 return await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights`);
}

const getRandomHue = () => Math.floor(Math.random() * 65535);

async function randomLight (lightNumber) {
  while (true) {
    await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights/${lightNumber}/state`, {
      method: 'PUT',
      body: JSON.stringify({
         on: true,
         bri: 150,
         sat: 250,
         hue: getRandomHue(),
      }),
    });
  }
}

async function resetLight () {
  await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights/${lightNumber}/state`, {
    method: 'PUT',
    body: JSON.stringify({ on: false }),
  })
}


