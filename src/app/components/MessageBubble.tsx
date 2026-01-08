import { MarkdownMessage } from "./MarkdownMessage";

export function MessageBubble({
    role,
    text,
}: {
    role: "user" | "bot";
    text: string;
}) {
    return (
        <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[90%] rounded-xl px-4 py-3 text-sm ${role === "user"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
            >
                {role === "bot" ? (
                    <MarkdownMessage content={text} />
                ) : (
                    <p>{text}</p>
                )}
            </div>
        </div>
    );
}
