function task_1(){
    window.onload = () => {
        class WeatherDisplay {
            constructor(cityTitle) {
                this.fetchWeather(cityTitle).then(json => {
                    this.parseWeather(json)
                    this.render(`Temperature: ${this.temp}C, Humidity: ${this.humidity}%`)
                })
            }

            async fetchWeather(cityTitle) {
                const res = await fetch(`https://wttr.in/${cityTitle}?format=j2`).catch(err => {
                    this.render(err.message)
                })
                return await res.json()
            }

            parseWeather(json) {
                this.temp = json.current_condition[0].temp_C
                this.humidity = json.current_condition[0].humidity
            }

            render(content) {
                const weatherContainer = document.getElementById('weather-container')
                weatherContainer.innerText = content
            }
        }

        document.getElementById('search-button').addEventListener('click', () => {
            const cityTitle = document.getElementById('city-input').value
            new WeatherDisplay(cityTitle)
        })
    }
}
export default task_1