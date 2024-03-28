"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
const Content = async (props) => {
    const data = props.content;
    const blocks = data.blocks;
    let htmlData = [];

    blocks.map((item) => {
        switch (item.type) {
            case "paragraph":
                htmlData.push(
                    <p
                        className="text-lg"
                        key={item.id}
                        dangerouslySetInnerHTML={{
                            __html: item.data.text,
                        }}
                    ></p>
                );
                break;
            case "header":
                const level = item.data.level;
                switch (level) {
                    case 2:
                        htmlData.push(
                            <h2 key={item.id} className="text-2xl font-bold">
                                {item.data.text}
                            </h2>
                        );
                        break;
                    case 3:
                        htmlData.push(
                            <h3 key={item.id} className="text-xl font-bold">
                                {item.data.text}
                            </h3>
                        );
                        break;
                    case 4:
                        htmlData.push(
                            <h4 key={item.id} className="text-xl font-bold">
                                {item.data.text}
                            </h4>
                        );
                        break;
                }
                break;
            case "list":
                const items = item.data.items;
                const list = (
                    <ul key={item.id} className="list-disc pr-4">
                        {items.map((li, key) => (
                            <li key={key}>{li}</li>
                        ))}
                    </ul>
                );
                htmlData.push(list);
                break;
            case "code":
                htmlData.push(
                    <SyntaxHighlighter key={item.id} language="javascript" style={docco} customStyle={{ direction: "ltr", padding: "16px 32px", borderRadius: "8px" }}>
                        {item.data.code}
                    </SyntaxHighlighter>
                );
                break;
            case "image":
                htmlData.push(<Image width={800} height={500} key={item.id} className="w-full rounded-lg" src={item.data.file.url} alt={item.data.caption} />);
                break;
        }
    });

    return <div className="space-y-4 mb-4">{htmlData}</div>;
};

export default Content;
