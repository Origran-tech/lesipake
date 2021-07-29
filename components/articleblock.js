import Link from "next/link";
export default function Articleblock(props) {
  return (
    <div className="article">
      <Link href="#">
        <a>
          <h1>{props.article.title || "Champ vide"}</h1>
        </a>
      </Link>
      <p>{props.article.description || "Champ vide"}</p>
      <p>{props.article.pseudo || "Champ vide"}</p>
    </div>
  );
}
