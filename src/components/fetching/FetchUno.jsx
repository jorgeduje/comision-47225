
import { useFetch } from "../../utils/hooks/useFetch"

export const FetchUno = () => {

    let {data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users", [])
    console.log(data)

  return (
    <div>FetchUno</div>
  )
}
