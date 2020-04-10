import connection from "../../database";

export interface IBook {
  title: string;
  author: string;
  publisher: string;
}

const BookSchema = new connection.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  publisher: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = connection.model("Book", BookSchema);

export default Book;
