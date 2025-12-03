import { WeatherForecastExtended } from "./weather-forecast-extended";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("weather-banner", WeatherForecastExtended);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "weather-banner",
  name: "Weather Banner",
  description: "Weather banner with time display and configurable subtitle",
});
