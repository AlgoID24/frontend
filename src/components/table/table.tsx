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
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    name: "Kitan Alli",
    fallback: "KA",
  },
  {
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    name: "Alex Brown",
    fallback: "AB",
  },
  {
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    name: "Chris Doe",
    fallback: "CD",
  },
  {
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    name: "Emily Fox",
    fallback: "EF",
  },
];

export function TableComponent() {
    const getStatus = (status: string) => {
        switch (status) {
            case 'Paid':
                return 'bg-green-100 text-green-800';
            case 'Unpaid':
                return 'bg-red-100 text-red-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800'
    }
}


  return (
    <Table className="space-y-6">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell>
              <AvatarDemo fallback={invoice.fallback} name={invoice.name} />
            </TableCell>
                <TableCell>
                    <span className={`px-2 py-2 rounded-lg text-sm font-semibold ${getStatus(invoice.paymentStatus)}`}>
                    {invoice.paymentStatus}
                    </span>
                </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
