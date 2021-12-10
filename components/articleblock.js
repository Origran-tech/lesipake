import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Articleblock(props) {
  console.log(props);
  return (
    <div className="article">
      <h1>{props.article.title || "Champ vide"}</h1>
      <p className="articlep">{props.article.content || "Champ vide"}</p>
      <p>{props.article.creator || "Champ vide"}</p>
      <Link href={`/articles/${props.article.id}`}><a>
        <div className="btn">More</div></a>
      </Link>
    </div>
  );
}
