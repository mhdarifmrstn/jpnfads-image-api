export interface Kanji {
  kanji: string;
  meaning: string;
  level: number;
  kana: string;
  onYomi: string;
  kunYomi: string;
  examples: KanjiExample[];
}

export interface KanjiExample {
  kanji: string;
  meaning: string;
  kana: string;
  level: number;
}
