import { Alert } from "@mui/material";

export default function CustomErrorMessage({ err }) {
  return err && <Alert severity="error">{err}</Alert>;
}
