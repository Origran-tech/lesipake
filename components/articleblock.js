import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Articleblock(props) {
  console.log(props);
  return (
    <div className="article">
      <h1>{props.article.title || "Champ vide"}</h1>
      <p className="articlep">{props.article.description || "Champ vide"}</p>
      <p>{props.article.pseudo || "Champ vide"}</p>
      <form action={`/articles/${props.article.title}`}>
        <button className="btn" type="submit">
          More
        </button>
      </form>
    </div>
  );
}
