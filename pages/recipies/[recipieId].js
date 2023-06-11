import BlogHeader from "@/components/BlogHeader";
import classes from "./recipieId.module.css";
import { getIngredients, getNutritionFacts } from "../../helpers/apiFetch";
import Head from "next/head";
import Footer from "@/components/general/Footer";
import { getApiConnect } from "../../helpers/apiFetch";
const BlogDetail = (props) => {
  const { extendedIngredients } = props;
  if (!props.nutritionFactsObj) {
    return <p className={classes.loading}>Loading nutrition Facts ...</p>;
  }
  if (!extendedIngredients) {
    return <p className={classes.loading}>Loading Ingredients ...</p>;
  }
  const { calories, carbs, fat, protein } = props.nutritionFactsObj;
  return (
    <>
      <Head>
        <title>Moon Resturant</title>
        <meta name="Moon Resturant" content="*" />
      </Head>
      <BlogHeader />
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Keto Birthday Cake</h1>
        </div>
        <div className={classes.details}>
          <div className={classes.imageContainer}>
            <img src="https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_960_720.jpg" />
          </div>
          <div className={classes.detailsText}>
            <div className={classes.ingredients}>
              <h1>Ingredients</h1>
              {/* {console.log(extendedIngredients)} */}
              <ul>
                {extendedIngredients.map((ingredients) => (
                  <li key={ingredients.id}>{ingredients.original}</li>
                ))}
              </ul>
            </div>
            <div className={classes.nutritionFacts}>
              <p>{`calories: ${calories} | carbs: ${carbs} | fat: ${fat} | protein: ${protein}`}</p>
            </div>
            <div className={classes.notes}>Notes</div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const Ingredients = await getIngredients(params.recipieId);
  const nutritionFacts = await getNutritionFacts(params.recipieId);
  return {
    props: {
      extendedIngredients: Ingredients.extendedIngredients,
      nutritionFactsObj: nutritionFacts,
    },
    revalidate: 3,
  };
}

export async function getStaticPaths() {
  const apiConnect = await getApiConnect();
  const recipies = [apiConnect.results];
  const recxxx = recipies[0].map((recipie) => {
    {
      params: {
        recipieId: recipie.id;
      }
    }
  });

  console.log("hixxxxxxxxxxxxxxxxxxxxxi", recipies[0]);

  return {
    paths: [
      { params: { recipieId: "782585" } },
      { params: { recipieId: "716426" } },
      { params: { recipieId: "715497" } },
      { params: { recipieId: "715415" } },
      { params: { recipieId: "716406" } },
      { params: { recipieId: "614387" } },
      { params: { recipieId: "715446" } },
      { params: { recipieId: "782601" } },
      { params: { recipieId: "795751" } },
      { params: { recipieId: "766453" } },
    ],

    fallback: true,
  };
}
export default BlogDetail;
