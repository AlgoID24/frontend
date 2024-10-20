import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Button() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue className="bg-gray-300" placeholder="Last month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time</SelectLabel>
          <SelectItem value="apple">Last year</SelectItem>
          <SelectItem value="banana">Last day</SelectItem>
          <SelectItem value="banana">Last month</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
