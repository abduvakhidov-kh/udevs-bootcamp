import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2} >
      <Pagination count={10} shape="rounded" color="primary" siblingCount={0} />
    </Stack>
  );
}
