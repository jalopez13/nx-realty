// import axios from 'axios';

export const resolvers = {
  Query: {
    getListings() {
      return async function () {
        //   const options = {
        //     method: 'GET',
        //     params: { location: 'santa monica, ca', home_type: 'Houses' },
        //     headers: {
        //       'X-RapidAPI-Key':
        //         'a21abb7e7bmsh0d55e64e40b4e87p18b205jsn63780c446bb4',
        //       'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
        //     },
        //   };

        //   try {
        //     const { data } = await axios.get(
        //       'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch'
        //     );
        //   } catch (error) {
        //     console.log(error);
        //   }

        //   return data;
        //
        return {};
      };
    },
  },
  // Mutation: {},
};
