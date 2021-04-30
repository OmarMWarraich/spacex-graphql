// Graph QL imports
import gql from 'graphql-tag';

// Total Launches Query
export const QUERY_LAUNCH = gql`
    query Launches{
        launches {
        flight_number
        mission_name
        launch_success
        launch_year
        links{
            flickr_images
            mission_patch_small
      }
      upcoming
    }
  }
`;

// Specific Launch Query 

export const QUERY_LAUNCH_DETAILS = gql`
    query LaunchInfo($id: String) {
        launch(id: $id){
            mission_name
            flight_number
            details
            launch_date_local
            launch_site {
                site_name
            }
            launch_success
            upcoming
            launch_year
            links {
                flickr_images
                mission_patch_small
                video_link
            }
            rocket {
                rocket_name
            }
            ships
        }
    }
`;