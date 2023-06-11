import BlogHeader from "@/components/BlogHeader";
import Head from "next/head";
import Link from "next/link";
import { getApiConnect } from "../../helpers/apiFetch";
import classes from "./recipies.module.css";
import Footer from "@/components/general/Footer";
const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Our Recipies</title>
        <meta name="Moon Resturant" content="*" />
      </Head>
      <BlogHeader />
      <div className={classes.blogContainer}>
        {/* {console.log(props.recipies)} */}
        <h1>Latest From Food Blog</h1>
        {props.recipies[0].map((recipie) => (
          <div className={classes.blog}>
            <div className={classes.imageContainer}>
              <img src={recipie.image} />
            </div>
            <div className={classes.detailsContainer}>
              <h1>{recipie.title}</h1>
              <Link href={`/recipies/${recipie.id}`}>
                <button className={classes.readArticle}>
                  Read The Article
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export async function getStaticProps() {
  const apiConnect = await getApiConnect();
  console.log(apiConnect, "pagessss");
  return {
    props: {
      recipies: [apiConnect.results],
    },
  };
}

export default Blog;
