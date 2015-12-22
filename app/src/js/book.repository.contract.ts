interface IBookRepository{
    getBooks():ng.IPromise<Array<Book>>;
}