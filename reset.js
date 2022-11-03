import { HUE_ENDPOINT, HUE_USERNAME } from "./constants.js";

const lights = [3, 4, 5, 6];

async function resetLight() {
  for (const light of lights) {
    await fetch(`${HUE_ENDPOINT}/api/${HUE_USERNAME}/lights/${light}/state`, {
      method: "PUT",
      body: JSON.stringify({ on: false }),
    });
  }
}

resetLight();
