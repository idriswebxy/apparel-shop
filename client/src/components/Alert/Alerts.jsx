import React, { useEffect } from "react"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import { alertSender } from "../../utils/alertSender"

const successAlert = (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  </div>
)

const errorAlert = (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
    </Stack>
  </div>
)

const warningAlert = (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
    </Stack>
  </div>
)

const infoAlert = (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
    </Stack>
  </div>
)

export { successAlert, errorAlert, warningAlert, infoAlert }
