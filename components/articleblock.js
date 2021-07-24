import Link from "next/link";
export default function Articleblock(props) {
  return (
    <div className="article">
      <Link href="pages_minecraft/survivalmode">
        <a>
          <h1>{props.title}</h1>
        </a>
      </Link>
      <p>{props.excerpt}</p>
    </div>
  );
}
