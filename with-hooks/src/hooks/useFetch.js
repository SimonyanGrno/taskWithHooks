import { useState, useEffect, useContext } from 'react';

import { baseURL } from '@/utils';
import { PostsContext } from '@/contexts/postsContext';

export default function() {
  const [isLoading, setIsloading] = useState(false);
  const [path, setPath] = useState('');
  const [options, setOptions] = useState({});
  const [type, setType] = useState('');
  const [, dispatch] = useContext(PostsContext);

  const doFetch = (typeProp, pathProp, optionsProp) => {
    setType(typeProp);
    setPath(pathProp);
    setOptions(optionsProp);
    setIsloading(true);
  };

  useEffect(() => {
    async function fetchData() {
      if (!isLoading) return;

      const res = await fetch(baseURL + path, options);
      const json = await res.json();

      dispatch({
        type,
        payload: json,
      });
      setIsloading(false);
    }

    fetchData();
  }, [isLoading, options, path, type, dispatch]);

  return [isLoading, doFetch];
}
