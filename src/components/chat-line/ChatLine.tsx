import { ChatLineProps, EMessageVariants } from "@/utilities/types/componentTypes";

// ----------------------------------------------------------------------

const ChatLine = ({ content, variant }: ChatLineProps) => {
  return (
    <div
      style={{
        padding: "8px 16px",
        borderRadius: "0.3rem",
        marginBottom: "0.5rem",
        fontSize: "1.15rem",
        backgroundColor: variant === EMessageVariants.SENT ? "#e9f7fe" : "#f8f9fa",
        color: "black",
      }}
    >
      {content}
    </div>
  );
};

export default ChatLine;
