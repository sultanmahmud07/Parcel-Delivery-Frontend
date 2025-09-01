import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { Button } from "@/components/ui/button";
import {
      Table,
      TableBody,
      TableCaption,
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
import {
      useRemoveTourTypeMutation,
} from "@/redux/features/Tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/parcel.type";

export default function ParcelList() {
      const [currentPage, setCurrentPage] = useState(1);
      const [limit] = useState(5);

      const { data } = useGetAllParcelsQuery({ page: currentPage, limit });
      const [removeTourType] = useRemoveTourTypeMutation();

      const handleRemoveTourType = async (tourId: string) => {
            const toastId = toast.loading("Removing...");
            try {
                  const res = await removeTourType(tourId).unwrap();

                  if (res.success) {
                        toast.success("Removed", { id: toastId });
                  }
            } catch (err) {
                  console.error(err);
            }
      };

      const totalPage = data?.meta?.totalPage || 1;
      console.log(data)
      //* Total page 2 => [0, 0]

      return (
            <div className="w-full ">
                  <Table>
                        <TableCaption>A list of your recent parcels.</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Type</TableHead>
                                    <TableHead>Weight</TableHead>
                                    <TableHead>Delivery Date</TableHead>
                                    <TableHead>Tracking Id</TableHead>
                                    <TableHead className="text-right">Address</TableHead>
                                    <TableHead className="text-right">Status</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {data?.data.map((parcel: IParcel) => (
                                    <TableRow key={parcel._id}>
                                          <TableCell className="font-medium">{parcel.type}</TableCell>
                                          <TableCell className="font-medium">{parcel.weight}</TableCell>
                                          <TableCell className="text-right">{parcel.deliveryDate}</TableCell>
                                          <TableCell>{parcel.trackingId}</TableCell>
                                          <TableCell>{parcel.address}</TableCell>
                                          <TableCell>  
                                                 <DeleteConfirmation
                                                            onConfirm={() => handleRemoveTourType(parcel._id)}
                                                      >
                                                            <Button size="sm">
                                                                  <Trash2 />
                                                            </Button>
                                                      </DeleteConfirmation></TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
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
                                                                  <PaginationLink isActive={currentPage === page}>
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
