const axios = require("axios");
const fs = require("fs");

const fetchInitialBooks = async () => {
  try {
    const categories = [
      "fiction",
      "history",
      "science",
      "romance",
      "biography",
    ]; // Add more categories as needed
    const initialBooks = {};

    for (const category of categories) {
      const response = await axios.get(
        `http://openlibrary.org/subjects/${category}.json?limit=10`
      );

      initialBooks[category] = response.data.works.map((work) => {
        const book = {
          key: work.cover_edition_key,
          title: work.title,
          cover_i: work.cover_id,
          author_name: work.authors?.map((author) => author.name),
          first_publish_year: work.first_publish_year,
        };
        return book;
      });
    }

    const data = JSON.stringify(initialBooks, null, 2);
    fs.writeFileSync("initialBooks.json", data);
    console.log("Initial books data fetched and saved.");
  } catch (error) {
    console.error("Error fetching initial books:", error.message);
  }
};

fetchInitialBooks();
