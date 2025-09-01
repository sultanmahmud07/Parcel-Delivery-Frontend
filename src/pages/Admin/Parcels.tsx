import ParcelList from "@/components/modules/Admin/Parcel/ParcelList"
import { Button } from "@/components/ui/button"
import { IoCodeDownload } from "react-icons/io5"
import { Link } from "react-router"

const Parcels = () => {
  return (
    <div>
       <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Parcels</h1>
        <Link to="/admin/analytics">
          <Button variant="default" size="sm">
            <IoCodeDownload />Back to Dashboard
          </Button>
        </Link>
      </div>
      <ParcelList />
    </div>
  )
}

export default Parcels