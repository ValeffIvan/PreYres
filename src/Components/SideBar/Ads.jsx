import publicidad1 from '../../assets/Ads/publicidad1.jpg';
import publicidad2 from '../../assets/Ads/publicidad2.jpg';

const Ads = () => {
  return (
    <div className="hidden sm:fixed sm:top-0 sm:right-0 sm:z-40 sm:w-64 sm:h-screen lg:block md:block sm:bg-white sm:border-l sm:border-r sm:bg-gray-800 sm:border-gray-700 ">
      
      <img src={publicidad1} alt="Your image alt text" />
      <img src={publicidad2} alt="Your image alt text" />

    </div>
  );
};

export default Ads;