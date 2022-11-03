import { HUE_ENDPOINT, HUE_USERNAME } from "./constants.js";

(async function () {
  const hue = await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights`);
  const lights = await hue.json();

  Promise.all(Object.keys(lights).map(randomLight));
})();

async function randomLight(lightNumber) {
  while (true) {
    await fetch(
      `${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights/${lightNumber}/state`,
      {
        method: "PUT",
        body: JSON.stringify({
          on: true,
          bri: 150,
          sat: 250,
          hue: Math.floor(Math.random() * 65535),
        }),
      }
    );
  }
}
