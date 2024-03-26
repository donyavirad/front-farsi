"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Content = async (props) => {
    const data = props.content;
    const blocks = data.blocks;
    console.log(blocks);
    let htmlData = [];

    blocks.map((item) => {
        console.log(item);
        switch (item.type) {
            case "paragraph":
                htmlData.push(<p dangerouslySetInnerHTML={{
                    __html: item.data.text
                }}></p>);
                break;
            case "header":
                const level = item.data.level;
                switch (level) {
                    case 2:
                        htmlData.push(<h2>{item.data.text}</h2>);
                        break;
                    case 3:
                        htmlData.push(<h3>{item.data.text}</h3>);
                        break;
                    case 4:
                        htmlData.push(<h4>{item.data.text}</h4>);
                        break;
                }
                break;
            case "list":
                const items = item.data.items;
                const list = (
                    <ul>
                        {items.map((li, key) => (
                            <li key={key}>{li}</li>
                        ))}
                    </ul>
                );
                htmlData.push(list);
                break;
            case "code":
                htmlData.push(
                    <SyntaxHighlighter language="javascript" style={docco} >
                        {item.data.code}
                    </SyntaxHighlighter>
                );
                break;
            case "image":
                htmlData.push(<img className="w-full rounded-lg" src={item.data.file.url} alt={item.data.caption} />);
                break
        }
    });

    return <div className="space-y-2 mb-4">{htmlData}</div>;
};

export default Content;
