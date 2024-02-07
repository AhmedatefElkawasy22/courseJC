// let data = {
//   meta: {
//     totalPages: 13,
//   },
//   data: [
//     {
//       type: "articles",
//       id: "3",
//       attributes: {
//         title: "JSON:API paints my bikeshed!",
//         body: "The shortest article. Ever.",
//         created: "2015-05-22T14:56:29.000Z",
//         updated: "2015-05-22T14:56:28.000Z",
//       },
//     },
//     {
//       type: "articles",
//       id: "3",
//       attributes: {
//         title: "JSON:API paints my bikeshed!",
//         body: "The shortest article. Ever.",
//         created: "2015-05-22T14:56:29.000Z",
//         updated: "2015-05-22T14:56:28.000Z",
//       },
//     },
//     {
//       type: "articles",
//       id: "3",
//       attributes: {
//         title: "JSON:API paints my bikeshed!",
//         body: "The shortest article. Ever.",
//         created: "2015-05-22T14:56:29.000Z",
//         updated: "2015-05-22T14:56:28.000Z",
//       },
//     },
//     {
//       type: "articles",
//       id: "3",
//       attributes: {
//         title: "JSON:API paints my bikeshed!",
//         body: "The shortest article. Ever.",
//         created: "2015-05-22T14:56:29.000Z",
//         updated: "2015-05-22T14:56:28.000Z",
//       },
//     },
//     {
//       type: "articles",
//       id: "3",
//       attributes: {
//         title: "JSON:API paints my bikeshed!",
//         body: "The shortest article. Ever.",
//         created: "2015-05-22T14:56:29.000Z",
//         updated: "2015-05-22T14:56:28.000Z",
//       },
//     },
//   ],
//   links: {
//     self: "http://example.com/articles?page[number]=3&page[size]=1",
//     first: "http://example.com/articles?page[number]=1&page[size]=1",
//     prev: "http://example.com/articles?page[number]=2&page[size]=1",
//     next: "http://example.com/articles?page[number]=4&page[size]=1",
//     last: "http://example.com/articles?page[number]=13&page[size]=1",
//   },
// };

// // get totalPages
// console.log(data["meta"]["totalPages"]);
// // show self & first beside each other
// console.log(data["links"]["self"], " ", data["links"]["first"]);
// // get the title of the data before the last one
// console.log(data["data"][data["data"].length - 2]["attributes"]["title"]);
// // check if totalPages is equal to data length
// if (data["data"].length != data["meta"]["totalPages"]) {
//   console.log("nValid Data");
// }
// // check if post id is less than 3 and type is articles
// if (data["data"][data["data"].length - 2]["id"] < 3) {
//   if (data["data"][data["data"].length - 2]["type"] == "articles")
//     console.log("Pinned Article");
// }

// let grade = 70;
// if (grade >= 0 && grade < 50) {
//   console.log("Failed");
// } else if (grade >= 50 && grade < 65) {
//   console.log("Accepted");
// } else if (grade >= 65 && grade < 75) {
//   console.log("Good");
// } else if (grade >= 75 && grade < 85) {
//   console.log("Very Good");
// } else if (grade >= 85) {
//   console.log("Excellent");
// }
//---------------------------------------------------------------------------------------

//task 1
let grade = 75;
if (grade < 50) {
  console.log("Failed");
} else if (grade < 65) {
  console.log("Accepted");
} else if (grade < 75) {
  console.log("Good");
} else if (grade < 85) {
  console.log("Very Good");
} else if (grade <= 100) {
  console.log("Excellent");
}

//task 2

let option = "juice";
if (option == "juice") {
  console.log("No problem");
} else {
  let Standing_or_sitting = "standing";
  if (Standing_or_sitting == "standing") {
    console.log("No problem");
  } else {
    let women_or_man = "man";
    if (women_or_man == "man") console.log("No problem");
    else {
      let like_or_not = "not";
      if (like_or_not == "not") console.log("No problem");
      else {
        let engagement_or_not = "not";
        if (engagement_or_not == "not") console.log("No problem");
        else {
          let Marriage_or_not = "not";
          if (Marriage_or_not == "not") console.log("No problem");
          else {
            let children_or_not = "not";
            if (children_or_not == "not") console.log("No problem");
            else {
              let boy_or_Girl = "Girl";
              if (boy_or_Girl == "Girl") console.log("No problem");
              else {
                let Goodboy_or_not = "good boy";
                if (Goodboy_or_not == "good boy") console.log("No problem");
                else {
                  let stole_or_not = "not";
                  if (stole_or_not == "not") console.log("no problem");
                  else {
                    console.log("ohhhhhhhhhhhhhhhhh, i need juice");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
