import { Container, Box } from "@mui/material";
import ButtonBack from "../components/button/ButtonBack";
import DriverChat from "../components/privatechat/DriverChat";
import InputChat from "../components/privatechat/InputChat";
import UserCard from "../components/privatechat/UserCard";
import UserChat from "../components/privatechat/UserChat";

function ChatPage() {
  return (
    <Container className="bg-[#FEFEFF]">
      <ButtonBack />
      <UserCard
        name="I-Here-TUU"
        src="https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/32/2019/01/49949680_519372558558364_2070976338994397184_n-e1547451146329.jpg"
      />
      <Box className="flex flex-col gap-5 py-3 mt-5 h-[64vh] overflow-auto">
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="GU mai ork" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="Ork pai GU ja ao rai dak" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="GU mai ork" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="Ork pai GU ja ao rai dak" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="GU mai ork" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="Ork pai GU ja ao rai dak" />
      </Box>
      <InputChat />
    </Container>
  );
}

export default ChatPage;
