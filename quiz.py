import json
from random import shuffle


class Quiz:
    def __init__(self, questions):
        self._questions = questions

    def start(self, random_order=True):
        if random_order:
            shuffle(self._questions)
        self._serve_ordered()
        print('Quiz complete!')

    def _serve_ordered(self):
        total_questions = len(self._questions)
        current_question = 1
        for question in self._questions:
            question.serve(current_question, total_questions)
            current_question += 1


class Question:
    def __init__(self, question, page, answer):
        self._question = self._parse_input(question)
        self._page = page
        self._answer = self._parse_input(answer)

    def get_question(self):
        return self._question

    def get_page(self):
        return self._page

    def get_answer(self):
        return self._answer

    def _parse_input(self, input):
        return input.replace('\\n', '\n')

    def serve(self, question_number, total_questions):
        if question_number is not None and total_questions is not None:
            print('Question ' + str(question_number) + ' of ' + str(total_questions))
        input(self._question)
        print('\n' + self._answer)
        print('Page reference: ' + str(self._page), end='')
        print(' Press any key to view the next question' if question_number < total_questions else '')
        print('\n\n')


def load(path='questions.json'):
    return Quiz(_load_questions(path))


def _load_questions(path):
    file = open(path, 'r')
    questions = json.loads(file.read())
    compiled_questions = []
    for question in questions['questions']:
        compiled_questions.append(Question(question['question'], question['page'], question['answer']))
    return compiled_questions


if __name__ == '__main__':
    load().start()
