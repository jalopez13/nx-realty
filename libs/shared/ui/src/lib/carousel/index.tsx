import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICarousel {}

const images = [
  {
    id: 1,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 2,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 3,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 4,
    title: '$849,000 ',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 5,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 6,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 7,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 8,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 9,
    title: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
  {
    id: 10,
    ttitle: '$849,000',
    type: 'Single-Family Home',
    src: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg',
    bed: '6',
    bath: '6.5+',
    sqft: '6,820',
    address: '25514 Oka Savannah Ct Valencia, CA91381',
  },
];

// const carouselWrapper =
//   'flex overflow-x-auto gap-4 h-[300px] snap-x snap-mandatory';

// const carouselContent = 'shrink-0 snap-center';

// const carouselImage = 'object-cover h-96 w-full';

// const carouselTitle = 'text-2xl font-bold';

export const Carousel = (props: ICarousel) => {
  // useEffect(() => {
  //   const sliderContainer = document.getElementById('slider-container');
  //   const slider = document.getElementById('slider');
  //   const cards = slider?.getElementsByTagName('li');

  //   const numberToShow = 6;
  //   const sliderContainerWidth = sliderContainer?.clientWidth;
  //   const cardWidth = sliderContainerWidth
  //     ? sliderContainerWidth / numberToShow
  //     : 0;

  //   if (slider && cards) {
  //     slider.style.width = cards.length * cardWidth + 'px';

  //     for (let index = 0; index < cards.length; index++) {
  //       const card = cards[index];
  //       card.style.width = cardWidth + 'px';
  //     }
  //   }
  // }, []);

  const Prev = () => {
    console.log('Prev');
  };

  const Next = () => {
    console.log('Next');
  };

  return (
    <div>
      {/* <div>
        <h2 className="text-2xl font-bold">
          New Listings in Stevenson Ranch, CA
        </h2>
        <a href="/">View All 3 New Listings</a>
      </div> */}

      <div className="flex px-4 mt-4">
        <div className="w-2/12 flex items-center" onClick={Prev}>
          <div className="w-full text-right">
            <button className="p-1 rounded-full bg-white border border-gray-100 mr-5 shadow-lg">
              <IoArrowBackCircle className="w-10 h-10 text-brand" />
            </button>
          </div>
        </div>

        <div id="" className="w-10/12 overflow-hidden">
          <ul id="slider" className="flex w-full">
            {images.map(
              ({ id, title, type, src, bed, bath, sqft, address }) => (
                <li key={id} className="min-w-[300px] p-2">
                  <div className="shadow-md rounded-lg h-full">
                    <img
                      src={src}
                      alt={title}
                      title={title}
                      className="h-50 w-full object-cover rounded-t shadow"
                    />
                    <div className="p-6 dark:bg-brand-light dark:text-gray-800">
                      <div className="flex items-center mb-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        <div className="text-sm text-gray-500">{type}</div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-700 mb-2">
                        {title}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <div>
                          <strong>{bed}</strong> bed
                        </div>
                        <div>
                          <strong>{bath}</strong> bath
                        </div>
                        <div>
                          <strong>{sqft}</strong> sqft
                        </div>
                      </div>
                      <div className="flex items-center py-4 space-x-4">
                        {address}
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="w-2/12 flex items-center" onClick={Next}>
          <div className="w-full">
            <button className="p-1 rounded-full bg-white border border-gray-100 ml-5 shadow-lg">
              <IoArrowForwardCircle className="w-10 h-10 text-brand" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
