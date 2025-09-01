import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableFooter,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"
import { useGetParcelBySenderQuery } from "@/redux/features/parcel/parcel.api";
import { IParcel } from "@/types/parcel.type";

export function ParcelList() {
      const { data, isLoading } = useGetParcelBySenderQuery(undefined);
      console.log(data)
      if (isLoading) {
            return <div>Loading...</div>;
      }
      return (
            <Table>
                  <TableCaption>A list of your recent parcels.</TableCaption>
                  <TableHeader>
                        <TableRow>
                              <TableHead className="w-[100px]">parcel</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Method</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                  </TableHeader>
                  <TableBody>
                        {data.map((parcel: IParcel) => (
                              <TableRow key={parcel.type}>
                                    <TableCell className="font-medium">{parcel.weight}</TableCell>
                                    <TableCell>{parcel.address}</TableCell>
                                    <TableCell>{parcel.fee}</TableCell>
                                    <TableCell className="text-right">{parcel.deliveryDate}</TableCell>
                              </TableRow>
                        ))}
                  </TableBody>
                  <TableFooter>
                        <TableRow>
                              <TableCell colSpan={3}>Total</TableCell>
                              <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                  </TableFooter>
            </Table>
      )
}
