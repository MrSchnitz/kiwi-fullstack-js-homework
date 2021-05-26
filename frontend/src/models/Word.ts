export interface WordInterface {
    id: string;
    word: string;
}

export type WordType = WordInterface;

export const Word: WordType = {
    id: '',
    word: '',
};

export function isWordType(object: any): object is WordType {
    return 'word' in object;
}
