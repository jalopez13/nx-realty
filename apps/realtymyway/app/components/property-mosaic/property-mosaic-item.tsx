import Image from "next/image";

const formatPrice = (num: number) =>
  new Intl.NumberFormat(`en-US`, {
    currency: `USD`,
    style: "currency",
    maximumSignificantDigits: 2,
  }).format(num);

const removeHyphen = (str: string) => str.replace(/-/g, "");

type PropertyItem = {
  propertyType: string;
  lotAreaValue: number;
  address: string;
  imgSrc: string;
  price: number;
  bedrooms: number;
  longitude:number;
  latitude: number;
  listingStatus: string;
  zpid: string
  daysOnZillow: number;
  bathrooms: number;
  livingArea: number;
  country: string;
  currency: string;
  lotAreaUnit: string;
  hasImage: boolean;
}

interface PropertyMosaicItem {
  property: PropertyItem;
  colspan?: string;
  aspect?: string;
}

const PropertyMosaicItem = ({property, colspan = 'col-span-1', aspect = 'aspect-video'}: PropertyMosaicItem) => {

  const {
    zpid,
    imgSrc,
    price,
    propertyType,
    address,
    bedrooms,
    bathrooms,
    lotAreaUnit
  } = property;


  return (
    <div
      key={zpid}
      className={`${colspan} bg-app-white rounded border border-slate-200 cursor-pointer`}
    >
      <div className={`${aspect} relative object-cover w-full h-full  hover:shadow-xl hover:scale-110 hover:z-20 transition-transform duration-500 ease-in-out `}>
        <Image src={imgSrc} alt="property photo" fill />

        <div
          className="absolute w-full bottom-0 text-white py-2 px-6 overflow-hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <h2 className="text-4xl font-semibold mb-4">{formatPrice(price)}</h2>

          <span className="absolute z-50 top-4 right-4 bg-app-accent text-xs p-2 rounded">
            {removeHyphen(propertyType)}
          </span>

          <p>{address}</p>

          <ul className="flex flex-row space-x-4 font-light">
            <li>
              {bedrooms}
              <strong>bds</strong>
            </li>

            <li>
              {bathrooms}
              <strong>ba</strong>
            </li>

            <li>
              {lotAreaUnit}
              <strong>sqft</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyMosaicItem;
