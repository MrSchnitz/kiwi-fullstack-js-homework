import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { T9Repository } from './app.repository';

const mockRepository = () => ({
  getActualWords: jest.fn(),
});

describe('AppService', () => {
  let appService: AppService;
  let t9Repository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: T9Repository, useFactory: mockRepository },
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
    t9Repository = app.get(T9Repository);
  });

  describe('getCartesianProduct', () => {
    it('should return cartesian product with t9 words', async () => {
      const result: any[] = [
        { id: 3393, word: 'ad' },
        { id: 4749, word: 'ae' },
        { id: 5263, word: 'af' },
        { id: 29323, word: 'bd' },
        { id: 29346, word: 'be' },
        { id: 33064, word: 'bf' },
        { id: 50295, word: 'cd' },
        { id: 50299, word: 'ce' },
        { id: 51811, word: 'cf' },
      ];

      t9Repository.getActualWords.mockResolvedValue(result);

      expect(await appService.getCartesianProduct('23')).toBe(result);
    });
  });
});
