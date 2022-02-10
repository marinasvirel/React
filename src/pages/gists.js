import { useState, useCallback, useEffect } from "react";
import { API_URL_PUBLIC } from "../contants/endpoints";


const Gists = () => {
  const [gists, setGists] = useState([]);

  useEffect(() => {
    fetch(API_URL_PUBLIC)
      .then((response) => {
        if (!response.ok){
          throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
      })
      .then((result) => setGists(result))
      .catch((err) => console.log(err));
  }, []);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
    []
  );

  return <ul>{gists.map(renderGist)}</ul>;
};

export default Gists;