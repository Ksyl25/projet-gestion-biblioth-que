export class CreateAuthorDto {
  readonly author_name: string;
  readonly photo_url?: string;
  readonly biography?: string;
  readonly author_id?: Number;
}