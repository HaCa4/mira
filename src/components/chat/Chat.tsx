import { Button, ChatLine } from "@/components";
import ContentContainer from "../content-container/ContentContainer";
import { EColorOptions, EMessageVariants } from "@/utilities/types/componentTypes";

// ----------------------------------------------------------------------

const Chat = () => {
  return (
    <ContentContainer direction="column">
      <div>
        <ChatLine content="Patient: I have been feeling unwell for the past few days." variant={EMessageVariants.SENT} />
        <ChatLine content="Care Navigator: Can you describe your symptoms?" variant={EMessageVariants.RECEIVED} />
        <ChatLine content="Patient: I have a runny nose, sore throat, and mild fever." variant={EMessageVariants.SENT} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "max-content",
          gap: "1rem",
        }}
      >
        <input type="text" placeholder="Type a message" />
        <Button title="Send Message" variant="contained" color={EColorOptions.GRAY} onClick={() => console.log("send")} />
      </div>
    </ContentContainer>
  );
};

export default Chat;
