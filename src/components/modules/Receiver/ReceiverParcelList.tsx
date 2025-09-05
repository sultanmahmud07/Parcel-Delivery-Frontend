import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { Button } from "@/components/ui/button";
import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table";
import {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationLink,
      PaginationNext,
      PaginationPrevious,
} from "@/components/ui/pagination";
import { EyeIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useDeliveryParcelByReceiverMutation, useGetParcelByReceiverQuery } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/parcel.type";
import { Link } from "react-router";
import { formatDate } from "@/utils/getDateFormater";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IApiError } from "@/types";
import Loader from "@/pages/Spinner";


export default function ReceiverParcelList() {
      const [currentPage, setCurrentPage] = useState(1);
      const [limit] = useState(10);
      const [searchTerm, setSearchTerm] = useState("")
      const [sortOrder, setSortOrder] = useState("")
      const { data, isLoading } = useGetParcelByReceiverQuery({ page: currentPage, limit, searchTerm, sort: sortOrder });
      const [deliveryParcelByReceiver] = useDeliveryParcelByReceiverMutation();
      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value)
      }

      const handleSortChange = (value: string) => {
            setSortOrder(value)
      }
      const handleRemoveParcel = async (parcelId: string) => {
               const toastId = toast.loading("Updating...");
            try {
                  const res = await deliveryParcelByReceiver(parcelId).unwrap();
                  if (res.success) {
                        toast.dismiss(toastId);
                        toast.success("Parcel Devlivery successfully");
                  }
            } catch (err) {
                  console.error(err);
                  toast.dismiss(toastId);
                  const error = err as IApiError;
                  toast.error(`${error.data.message}`);
            }
      };
      const totalPage = data?.meta?.totalPage || 1;
      // console.log(data)


      return (
            <div className="w-full ">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
                        <h1 className="text-2xl font-bold">All Parcels</h1>
                        <Input
                              className="w-full md:w-sm"
                              type="text"
                              placeholder="Search here.."
                              value={searchTerm}
                              onChange={handleSearchChange}
                        />
                        <Select onValueChange={handleSortChange} value={sortOrder}>
                              <SelectTrigger className="md:w-[180px]">
                                    <SelectValue placeholder="Select a list order" />
                              </SelectTrigger>
                              <SelectContent>
                                    <SelectGroup>
                                          <SelectLabel>Order By</SelectLabel>
                                          <SelectItem value="createdAt">Ascending</SelectItem>
                                          <SelectItem value="-createdAt">Descending</SelectItem>
                                    </SelectGroup>
                              </SelectContent>
                        </Select>
                  </div>
                  <Table>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="">Type</TableHead>
                                    <TableHead>Weight</TableHead>
                                    <TableHead>Deu Amount</TableHead>
                                    <TableHead>Delivery Date</TableHead>
                                    <TableHead className="">Tracking Id</TableHead>
                                    <TableHead className="">Status</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                              </TableRow>
                        </TableHeader>
                        {
                              isLoading ?
                                    <Loader></Loader>
                                    :
                                    <TableBody>
                                          {data?.map((parcel: IParcel) => (
                                                <TableRow key={parcel._id}>
                                                      <TableCell className="font-medium">{parcel.type}</TableCell>
                                                      <TableCell className="font-medium">{parcel.weight}</TableCell>
                                                      <TableCell>{parcel.fee || 0}</TableCell>
                                                      <TableCell className="">{formatDate(parcel.deliveryDate)}</TableCell>
                                                      <TableCell>{parcel.trackingId}</TableCell>
                                                      <TableCell className={`${parcel.status == "DELIVERED" && "text-green-600 font-bold"} ${parcel.status == "CANCELED" && "text-red-600 font-bold"} ${parcel.status == "REQUESTED" && "text-yellow-600 font-bold"} `}>{parcel.status}</TableCell>
                                                      <TableCell className="flex items-center gap-2">
                                                            <Link className="w-full cursor-pointer" to={`/receiver/parcel/${parcel._id}`}>
                                                                  <Button size="sm">
                                                                        <EyeIcon />
                                                                  </Button>
                                                            </Link>
                                                            <DeleteConfirmation
                                                                  onConfirm={() => handleRemoveParcel(parcel._id)}
                                                            >
                                                                  <Button disabled={parcel.status == "DELIVERED"} size="sm">
                                                                        DELIVERED
                                                                  </Button>
                                                            </DeleteConfirmation>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                    </TableBody>
                        }
                  </Table>
                  {totalPage > 1 && (
                        <div className="flex justify-end mt-4">
                              <div>
                                    <Pagination>
                                          <PaginationContent>
                                                <PaginationItem>
                                                      <PaginationPrevious
                                                            onClick={() => setCurrentPage((prev) => prev - 1)}
                                                            className={
                                                                  currentPage === 1
                                                                        ? "pointer-events-none opacity-50"
                                                                        : "cursor-pointer"
                                                            }
                                                      />
                                                </PaginationItem>
                                                {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                                                      (page) => (
                                                            <PaginationItem
                                                                  key={page}
                                                                  onClick={() => setCurrentPage(page)}
                                                            >
                                                                  <PaginationLink className="cursor-pointer" isActive={currentPage === page}>
                                                                        {page}
                                                                  </PaginationLink>
                                                            </PaginationItem>
                                                      )
                                                )}
                                                <PaginationItem>
                                                      <PaginationNext
                                                            onClick={() => setCurrentPage((prev) => prev + 1)}
                                                            className={
                                                                  currentPage === totalPage
                                                                        ? "pointer-events-none opacity-50"
                                                                        : "cursor-pointer"
                                                            }
                                                      />
                                                </PaginationItem>
                                          </PaginationContent>
                                    </Pagination>
                              </div>
                        </div>
                  )}
            </div>
      );
}
