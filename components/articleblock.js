import Link from "next/link";
export default function Articleblock(props) {
  console.log(props)
  return (
    <div className="article">
      <Link href={`/articles/${props.article.title}`}>
        <a>
          <h1>{props.article.title || "Champ vide"}</h1>
        </a>
      </Link>
      <p className="articlep">{props.article.description || "Champ vide"}</p>
      <p>{props.article.pseudo || "Champ vide"}</p>
    </div>
  );
}
