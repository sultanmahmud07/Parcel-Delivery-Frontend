import { ParcelList } from "@/components/modules/Sender/ParcelList"
import { Button } from "@/components/ui/button"
import { IoCodeDownload } from "react-icons/io5"
import { Link } from "react-router"


const Parcels = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Parcels</h1>
        <Link to="/sender/parcel/create">
          <Button variant="default" size="sm">
            <IoCodeDownload /> New Parcel
          </Button>
        </Link>
      </div>
      <ParcelList></ParcelList>
    </div>
  )
}

export default Parcels