// import axios from "axios";

// const fetchInstagramFeed = async (dispatch) => {
//   try {
//     let response = await axios.get(
//       'https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"33288525717","first":60,"after":null}'
//     );
//     setInstagramFeed(
//       response.data.data.user.edge_owner_to_timeline_media.edges
//     );
//   } catch (error) {
//     console.log("error");
//   }
// };


// export { fetchInstagramFeed };