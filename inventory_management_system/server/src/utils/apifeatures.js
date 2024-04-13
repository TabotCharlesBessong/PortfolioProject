class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // searching feature of the products by name
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i", // meaning case sensitive
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  // searching feature of the products of the products by departments
  searchDept() {
    const keyword1 = this.queryStr.keyword1
      ? {
          department: {
            // search keyword for filters
            $regex: this.queryStr.keyword1,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword1 });
    return this;
  }

  // filter for categories
  filter() {
    const queryCopy = { ...this.queryStr };
    // removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);
    this.query = this.query.find(queryCopy);

    // filter for the price and rating
    // object to text
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    // convert to object
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  // pagination
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
