import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeaderCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <div className = "myCarousel">
                <img src="https://goldsgym.in/uploads/slider/compress-Double%20up%201%20web%20banner-01.jpg" alt="react1" />
            </div>
            <div className = "myCarousel">
                <img src="https://goldsgym.in/uploads/slider/compress-GGFI%20Short%20course%20March%20Web%20banner-01.jpg" alt="react1" />
            </div>
            <div className = "myCarousel">
                <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="frontend" />
            </div>
            <div className = "myCarousel">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="backend"/>
            </div>
            <div className = "myCarousel">
                <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?w=1000&h=562&crop=1&quality=86&strip=all" alt="ds" />
            </div>
        </Carousel>
    )
}

export default HeaderCarousel
