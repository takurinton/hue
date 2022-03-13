import fetch from 'node-fetch';

const HUE_ENDPOINT = `http://${process.env.HUE_ENDPOINT}`;
const HUE_USERNAME = process.env.HUE_USERNAME;

(async function () {
  const hue = await getHueLights();
  const lights = await hue.json();
  console.log(lights);
})();

async function getHueLights () {
 return await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights`);
}
