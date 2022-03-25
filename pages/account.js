import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Home = () => {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <p>Oui</p>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired()
export default Home