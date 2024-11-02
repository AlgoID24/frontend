import { AvatarDemo } from "@/components/avatar/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    paymentStatus: "Success",
    totalAmount: "$250.00",
    date: "13-Feb-2024",
    paymentMethod: "MasterCard",
    name: "Kitan Alli",
    fallback: "KA",
  },
  {
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    date: "13-Feb-2024",
    paymentMethod: "VisaCard",
    name: "Alex Brown",
    fallback: "AB",
  },
  {
    paymentStatus: "Rejected",
    totalAmount: "$350.00",
    date: "13-Feb-2024",
    paymentMethod: "Paypal",
    name: "Chris Doe",
    fallback: "CD",
  },
  {
    paymentStatus: "Success",
    totalAmount: "$450.00",
    date: "13-Feb-2024",
    paymentMethod: "MasterCard",
    name: "Emily Fox",
    fallback: "EF",
  },
];

export function TransactionTable() {
  const getStatus = (status: string) => {
    switch (status) {
      case "MasterCard":
        return "text-green-500";
      case "Paypal":
        return "text-red-500";
      case "VisaCard":
        return "text-purple-500";
      case "Success":
        return "bg-purple-200 text-purple-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Table className="space-y-6">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Card</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell>
              <AvatarDemo fallback={invoice.fallback} name={invoice.name} />
            </TableCell>
            <TableCell className="text-right">{invoice.date}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-2 rounded-lg text-sm font-semibold ${getStatus(
                  invoice.paymentMethod
                )}`}
              >
                {invoice.paymentMethod}
              </span>
            </TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>

            <TableCell>
              <span
                className={`px-2 py-2 rounded-lg text-sm font-semibold ${getStatus(
                  invoice.paymentStatus
                )}`}
              >
                {invoice.paymentStatus}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
