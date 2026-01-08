import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownMessage({ content }: { content: string }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ children }) => (
                    <h1 className="mb-2 text-base font-semibold">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="mb-2 text-sm font-semibold">{children}</h2>
                ),
                p: ({ children }) => (
                    <p className="mb-2 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className="mb-2 list-disc pl-4">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="mb-2 list-decimal pl-4">{children}</ol>
                ),
                li: ({ children }) => <li className="mb-1">{children}</li>,
                strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                ),
                a: ({ href, children }) => (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        {children}
                    </a>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
