import { Button } from "@mui/material";
import { Box } from "@mui/system";

function ToastError() {
  return (
    <Box>
      test
      <Button variant="contained">Hello World</Button>;
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </Box>
    // <Stack sx={{ width: "100%" }} spacing={2}>
    //   <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    //   <Alert
    //     action={
    //       <Button color="inherit" size="small">
    //         UNDO
    //       </Button>
    //     }
    //   >
    //     This is a success alert — check it out!
    //   </Alert>
    // </Stack>
  );
}

export default ToastError;
