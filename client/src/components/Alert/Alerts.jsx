import React, { useEffect } from "react"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import { alertSender } from "../../utils/alertSender"

//TODO fix alert

const successAlert = () => (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  </div>
)

const errorAlert = (status) => (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        onClose={setTimeout(() => {}, 2000)}
        variant="filled"
        severity="error"
      >
        {status}
      </Alert>
    </Stack>
  </div>
)

const WarningAlert = (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
    </Stack>
  </div>
)

const InfoAlert = (
  <div>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
    </Stack>
  </div>
)

export { successAlert, errorAlert, WarningAlert, InfoAlert }
