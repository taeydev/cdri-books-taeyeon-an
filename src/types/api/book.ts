export interface KakaoBookDocument {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translator: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}

export interface KakaoBookSearchResponse {
  documents: KakaoBookDocument[];
  meta: {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
  };
}
