import gql from 'graphql-tag';

export const QUERY_MISSIONINFO = gql`
query Missions($id: String!) {
  mission(id: $id ) {
    mission_id
    manufacturers
    mission_name
    description
    website
    twitter
    wikipedia
  }
}`;