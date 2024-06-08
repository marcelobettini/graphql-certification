import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        length
        title
      }
      description
    }
  }
`;

const Track = () => {
  const { trackId = "" } = useParams();
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
export default Track;
