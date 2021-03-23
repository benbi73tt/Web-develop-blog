import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/first.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import fourth from '../assets/fourth.jpg';

export default class carouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="slider"
                        src={first}
                        alt="First"
                        
                    />
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Тур "Португальские каникулы" из Санкт-Петербурга Soleans
</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="slider"
                        src={second}
                        alt="First"
                    />
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Походы в горы: горные походы 2021 с Клубом Приключений
</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="slider"
                        src={third}
                        alt="First"
                    />
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Купить тур в горы просто — выбери интересное направление и отправь заявку организатору. Цена указана за одного человека. Приятного отдыха и ярких впечатлений!
</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="slider"
                        src={fourth}
                        alt="First"
                        
                    />
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Тур "Выходные в лесу". В тур 1 дня входит прогулка по Ивдельскому лесу, реке, скалам, пещерам (пикник на берегу по ... Фото и видео из наших туров. Тур "Выходные в лесу".
</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="slider"
                        src={first}
                        alt="First"
                    />
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Тур "Португальские каникулы" из Санкт-Петербурга Soleans
</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
