import axios from 'axios';

enum daysOn {
  ONE = "1",
  SEVEN = "7",
  FOURTEEN = "14",
  THIRTY = "30",
  NINTY = "90",
  SIX_MONTHS = "6m",
  TWELVE_MONTHS = "12m",
  TWENTYFOUR_MONTHS = "24m"
}

enum soldInLast {
  ONE = "1",
  SEVEN = "7",
  FOURTEEN = "14",
  THIRTY = "30",
  NINTY = "90",
  SIX_MONTHS = "6m",
  TWELVE_MONTHS = "12m",
  TWENTYFOUR_MONTHS = "24m"
}

const Axios = (
  params: {
    location: string,
    page?: number,
    status_type?: string,
    home_type?: string,
    sort?: string,
    minPrice?: number,
    maxPrice?: number,
    rentMinPrice?: number,
    rentMaxPrice?: number,
    bathsMin?: number,
    bathsMax?: number,
    bedsMin?: number,
    bedsMax?: number,
    sqftMin?: number,
    sqftMax?: number,
    buildYearMin?: number,
    buildYearMax?: number,
    daysOn?: daysOn,
    soldInLast?: soldInLast,
    isBasementFinished?: number,
    isBasementUnfinished?: number,
    isPendingUnderContract?: number,
    isComingSoon?: number,
    otherListings?: number,
    isNewConstruction?: number,
    keywords?: string
  }
) =>
  axios.create({
    baseURL: `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch`,
    timeout: 1000,
    params: { ...params },
    headers: {
      'X-RapidAPI-Key': 'a21abb7e7bmsh0d55e64e40b4e87p18b205jsn63780c446bb4',
      'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
    },
  });

export default Axios;
