import GoogleBooksApiOptions from "@apptypes/googleBooksApiOptions";

function searchInfoIsEqual(left: GoogleBooksApiOptions, right: GoogleBooksApiOptions): boolean {
  return left.category === right.category && left.orderBy === right.orderBy && left.search === right.search;
}

export default searchInfoIsEqual;
