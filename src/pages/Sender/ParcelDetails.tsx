import { useGetParcelDetailsQuery } from "@/redux/features/parcel/parcel.api";
import { useParams } from "react-router";

const ParcelDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetParcelDetailsQuery(id);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    console.log(data)
  return (
    <div>ParcelDetails for : {data.data[0].type}</div>
  )
}

export default ParcelDetails