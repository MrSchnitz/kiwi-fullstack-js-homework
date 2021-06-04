import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const mockService = () => ({
  getCartesianProduct: jest.fn(),
});

describe('AppController', () => {
  let appController: AppController;
  let appService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useFactory: mockService }],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get(AppService);
  });

  describe('getSuggestedWords', () => {
    it('should return suggested t9 words', async () => {
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

      appService.getCartesianProduct.mockResolvedValue(result);

      expect(await appController.getSuggestedWords('23')).toBe(result);
    });
  });
});
