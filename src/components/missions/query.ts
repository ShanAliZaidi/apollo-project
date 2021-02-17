import gql from 'graphql-tag';

export const QUERY_MISSIONS = gql`
  query MissionsInfo {
        missions {
            mission_id
            manufacturers
            mission_name
        }
      }
       
`;