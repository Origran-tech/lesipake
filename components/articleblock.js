import Link from "next/link";
export default function Articleblock(props) {
  return (
    <div className="article">
      <Link href="#">
        <a>
          <h1>{props.article.title?.stringValue ?? ""}</h1>
        </a>
      </Link>
      <p>{props.article.description?.stringValue ?? ""}</p>
    </div>
  );
}
