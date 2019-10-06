import json
import os

dirname = os.path.dirname(__file__)
filepath = dirname + '/../questions.json'
jsonData = json.load(open(filepath))
questions = jsonData['questions']

output = open('../data.js', 'w')


def write_question(question, end_char=''):
    write('  {\n')
    write('    question: "' + purify_text(question.get('question')) + '",\n')
    if question.get('page') is not None:
        write('    page: ' + str(question.get('page')) + ',\n')
    write('    answer: "' + purify_text(question.get('answer')) + '"\n')
    write('  }' + end_char + '\n')


def purify_text(text):
    in_code_block = False
    for line in text.splitlines():
        if in_code_block:
            if '```' in line[2:]:
                in_code_block = False
        else:
            if line.startswith('```'):
                in_code_block = True

    return text.replace('\n', '\\n' if in_code_block else '<br />').replace('"', '\\"')


def write(text):
    output.write(text)


if __name__ == '__main__':
    write('// Do not edit. Please edit the questions.json file instead\n\n')
    write('var questions = [\n')
    for i in range(0, len(questions)-1):
        write_question(questions[i], ',')
    write_question(questions[len(questions) - 1])
    write('];')

    output.close()
