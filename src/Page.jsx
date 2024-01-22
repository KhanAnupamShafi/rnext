import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context";

import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
    const { weatherData, error, loading } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return WinterImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        console.log(bgImage);
        setClimateImage(bgImage);
    }, [weatherData.climate]);

    return (
        <>
            {loading.state ? (
                <div>
                    <p>{loading.message}</p>
                </div>
            ) : (
                <div
                    style={{ backgroundImage: `url('${climateImage}')` }}
                    className={`bg-no-repeat bg-cover h-screen grid place-items-center`}
                >
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            )}
        </>
    );
}
