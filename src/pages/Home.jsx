import { useState } from 'react';
import Layout from "../components/Layout";
import img1 from "../../public/images/home/img-1.jpg";
import img2 from "../../public/images/home/img-2.jpg";
import img3 from "../../public/images/home/img-3.jpg";
import { Carousel } from "react-bootstrap";

export default function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Layout>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={img1} alt="" className="w-100 " />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p> vitae  libero, a.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="" className="w-100 " />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit consectetur </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="" className="w-100 " />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>                            magna, vel  consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Layout>
    )
}