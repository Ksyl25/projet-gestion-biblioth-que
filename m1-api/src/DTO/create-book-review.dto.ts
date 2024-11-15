export class CreateBookReviewDto {
  readonly review_text: string;
  readonly rating: number;
  readonly review_date: string;
  readonly book_id: number;
}