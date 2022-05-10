export const alertSender = (alertCode, alertMessage) => {
  switch (alertCode) {
    case "auth/invalid":
      return {
        alertType: "error",
        alertMsg: alertMessage,
      }

    default:
      return {
        alertType: "error",
        alertMsg: "Test",
      }
  }
}
