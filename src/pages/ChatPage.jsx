import { Container, Box } from "@mui/material";
import ButtonBack from "../components/button/ButtonBack";

function ChatPage() {
  return (
    <Container>
      <ButtonBack />
      <Box className="mt-28">
        <Box className="ml-5 py-5 font-bold text-3xl">Payment Method</Box>
        <Box className="flex flex-col justify-center items-center gap-5"></Box>
      </Box>
    </Container>
  );
}

export default ChatPage;
