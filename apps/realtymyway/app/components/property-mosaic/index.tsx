import { initializeApollo } from "../../../graphql/apollo-client";
import { PropertiesDocument } from "../../../graphql/generated";
import AsyncComponent from "../async-component";
import PropertyMosaicItem from "./property-mosaic-item";

const getProperties = async () => {
  const apolloClient = initializeApollo();

  const response = await apolloClient.query({
    query: PropertiesDocument,
    variables: {
      params: {
        location: "stevenson ranch, ca",
        home_type: "Houses",
      },
    },
  });

  return response.data.properties.props;
};

// dateSold:null
// propertyType:"SINGLE_FAMILY"
// lotAreaValue:7501.032
// address:"443 Euclid St, Santa Monica, CA 90402"
// imgSrc:"https://photos.zillowstatic.com/fp/fcb17e90b0a065b9e0a7eea321e24b40-p_e.jpg"
// price:4495000
// bedrooms:4
// longitude:-118.49976
// latitude:34.034992
// listingStatus:"FOR_SALE"
// zpid:"20477746"
// listingSubType:
// contingentListingType:null
// daysOnZillow:-1
// bathrooms:3
// livingArea:2683
// country:"USA"
// currency:"USD"
// lotAreaUnit:"sqft"
// hasImage:true

export const PropertyMosaic = AsyncComponent(async () => {
  const properties = await getProperties();
  const propertyList = properties.slice(0, 7);

  // console.log(propertyList[3]);

  return (
    <section className="my-4">
      <div className="">
        <div className="container">
          <h2 className="text-app-heading text-center text-4xl px-4 capitalize font-bold my-8">
            Properties For Sale in Los Angeles
          </h2>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-1">
          <PropertyMosaicItem
            property={propertyList[0]}
            colspan={"col-span-2"}
          />
          <PropertyMosaicItem
            property={propertyList[1]}
            aspect="aspect-square"
          />
          <PropertyMosaicItem
            property={propertyList[2]}
            aspect="aspect-square"
          />
          <PropertyMosaicItem property={propertyList[3]} colspan="col-span-2" />
        </div>
      </div>
    </section>
  );
});

export default PropertyMosaic;
