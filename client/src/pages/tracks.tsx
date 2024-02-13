import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__";

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
  return <Layout grid> </Layout>;
};

export default Tracks;
