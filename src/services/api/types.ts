// Get all news Types
export interface GetNews {
  searchKey: string;
  orderBy?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface GetNewsResult {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: Date;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface GetNewsResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: GetNewsResult[];
}

// export interface GetNewsResponse {
//   response: NewsResponse;
// }


// Get single new Types
export interface GetNew {
  id: string;
}

export interface TypeData {
  aspectRatio: string;
  width: number;
  height: number;
  isMaster?: boolean;
}

export interface Asset {
  type: string;
  mimeType: string;
  file: string;
  typeData: TypeData;
}

export interface ImageTypeData {
  caption: string;
  displayCredit: boolean;
  credit: string;
  source: string;
  photographer: string;
  alt: string;
  mediaId: string;
  mediaApiUri: string;
  suppliersReference: string;
  imageType: string;
}

export interface Element {
  type: string;
  assets: Asset[];
  imageTypeData: ImageTypeData;
}

export interface Main {
  id: string;
  bodyHtml: string;
  bodyTextSummary: string;
  published: boolean;
  createdDate: Date;
  firstPublishedDate: Date;
  publishedDate: Date;
  lastModifiedDate: Date;
  elements: Element[];
}

export interface Body {
  id: string;
  bodyHtml: string;
  bodyTextSummary: string;
  published: boolean;
  createdDate: Date;
  firstPublishedDate: Date;
  publishedDate: Date;
  lastModifiedDate: Date;
}

export interface Blocks {
  main: Main;
  body: Body[];
  totalBodyBlocks: number;
}

export interface GetNewResult extends GetNewsResult {
  blocks: Blocks;
}

export interface GetNewResponse {
  status: string;
  userTier: string;
  total: number;
  content: GetNewResult;
}