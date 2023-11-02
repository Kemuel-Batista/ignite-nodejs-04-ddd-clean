/* eslint-disable @typescript-eslint/no-empty-function */
import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

describe('Create Question Use Case', () => {
  it('should be able to create a question', async () => {
    const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

    const { question } = await createQuestion.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteudo da pergunta',
    })

    expect(question.content).toBeTruthy()
  })
})
