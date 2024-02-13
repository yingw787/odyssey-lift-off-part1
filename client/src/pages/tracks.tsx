import { useQuery } from "@apollo/client";

import { Layout } from "../components";
import { gql } from "../__generated__";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      author {
        id
        name
        photo
      }
      title
      thumbnail
      length
      modulesCount
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
    </Layout>
  );
};

export default Tracks;
