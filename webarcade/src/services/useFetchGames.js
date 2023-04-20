import { useEffect, useState } from "react";

export const useFetchGames = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/api/warcade/v1/games/").then((response) =>
      response.json().then((json) => setListaJuegos(json))
    );
  }, []);

  return { listaJuegos };
};
