// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import booking from "./module/bookingSchema";
// // import connectMongo from "../../utiles/connectMongo";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     console.log('im here');
//     const { name, email, mobile, guestes } = req.body;
//     const bookindData = new booking({
//       name,
//       email,
//       mobile,
//       guestes,
//     });
//     bookindData
//       .save()
//       .then(() => {
//         console.log("saved from back");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   // res.status(200).json({ name: 'John Doe' })
// }
