import $ from 'jquery';
import { useState } from 'preact/hooks'

const fetchWeather = () => {
    console.log('hello')
    const [temp, setTemp] = useState(null) 
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=02adac3e6a991d9f737fa48145b6c2ae';

    const parser = (json) => {
        const temp_c = json['main']['temp'];

        setTemp(temp_c)
    }

    $.ajax({
        url: url,
        success: parser,
        error: (err) => {console.log('error message: ' + err)}
    })


    return (
        <div>
            <p>
                Temp: {temp}
            </p>
        </div>
    )
}

export default fetchWeather;