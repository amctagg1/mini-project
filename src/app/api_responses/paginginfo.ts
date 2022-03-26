export class PagingInfo {
    count: number;
    pages: number; // Since pages is already determined before the API response, I don't see a way to change 20 results per page to 5 results per page, to match the mockup
    next: string;
    prev: string;
}
