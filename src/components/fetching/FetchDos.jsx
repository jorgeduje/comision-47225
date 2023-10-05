
import { useFetch } from "../../utils/hooks/useFetch";

export const FetchDos = () => {
  let {data, isLoading, errorMessage} = useFetch("https://jsonplaceholder.typicode.com/albums", []);
  console.log(data)

  return <div>
    {
      isLoading ? <h1>Cargando....</h1> : <h2>Ya cargo</h2>
    }
    {
      errorMessage && <h2>{errorMessage}</h2>
    }
  </div>;
};
