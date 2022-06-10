import { SliderBox } from "react-native-image-slider-box";

const MyCarousel = ({ images, ...props }) => {
  return (
    <SliderBox
      images={images}
      onCurrentImagePressed={(index) => {}}
      currentImageEmitter={(index) => {}}
      {...props}
    />
  );
};

export default MyCarousel;
