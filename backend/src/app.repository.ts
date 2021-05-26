import { EntityRepository, Repository } from 'typeorm';
import { Word } from './entities/word.entity';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Word)
export class T9Repository extends Repository<Word> {
  async getActualWords(wordSamples: string[]): Promise<Word[]> {
    const query = await this.createQueryBuilder('word');

    try {
      return await query
        .where('word.word IN (:...wordSamples)', { wordSamples: wordSamples })
        .getMany();
    } catch (e) {
      throw new NotFoundException('No words were found');
    }
  }
}
