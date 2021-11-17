import {
  GetNews,
  GetNewsResponse,
  GetNew,
  GetNewResponse
} from "./types";

const URL = "https://content.guardianapis.com/";
// Key should be private/secret coming from somewhere else.
const API_KEY = "efafeb6a-a729-4e69-af07-7e74896da5c1";

const getNews = async ({
  searchKey,
  orderBy,
  dateFrom,
  dateTo,
}: GetNews ): Promise<GetNewsResponse> => {

  let fetchUrl = `${URL}search?q=${searchKey}&api-key=${API_KEY}`;

  if (orderBy) {
    const formatterOrderBy = orderBy.toLocaleLowerCase().trim();
    fetchUrl += `&order-by=${formatterOrderBy}`;
  }

  if (dateFrom) fetchUrl += `&from-date=${dateFrom}`;
  if (dateTo) fetchUrl += `&to-date=${dateTo}`;

  return await fetch(fetchUrl)
  .then(async (response: Response) => {
    const data = await response.json();

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data.response;
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  });
};

const getNew = async ({
  id,
}: GetNew ): Promise<GetNewResponse> => {

  return await fetch(`${URL}${id}?show-blocks=all&api-key=${API_KEY}`)
  .then(async (response: Response) => {
    const data = await response.json();

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data.response;
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
  });
};

export { getNews, getNew };