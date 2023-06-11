export async function bookingPost(name, email, mobile, guestes) {
  fetch("/api/booking", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      mobile,
      guestes,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    // console.log("SAVED from front");
  });
}
