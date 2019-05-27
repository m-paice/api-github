/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Home
*/

import React, { Fragment, useState, useEffect } from 'react';

import axios from 'axios';

const Home = () => {
  const [data, setData] = useState();
  const [query, setQuery] = useState('react');
  const [url, setUrl] = useState('http://npmsearch.com/query?q=react');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);

        setData(response.data.results);
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setUrl(`http://npmsearch.com/query?q=${query}`)}
      > Buscar
      </button>

      {isError && <div>Opa, algo deu errado...</div>}

      {isLoading ? (
        <div>Carregando ...</div>
      ) : (
        <ul>
          {data
            ? data.map(value => (
              <ul key={value}> {`${value.name} - ${value.version}`} </ul>
            ))
            : <ul> Nenhum item </ul>}
        </ul>
      )}
    </Fragment>
  );
};

export default Home;
