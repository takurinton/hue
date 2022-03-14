import fetch from 'node-fetch';

const HUE_ENDPOINT = `http://${process.env.HUE_ENDPOINT}`;
const HUE_USERNAME = process.env.HUE_USERNAME;

const lights = [3, 4, 5, 6];

async function resetLight () {
  for (const light of lights) {
    await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights/${light}/state`, {
      method: 'PUT',
      body: JSON.stringify({ on: false }),
    })
  }
}

resetLight();
