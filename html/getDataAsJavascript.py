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
    text = text.replace('"', '\\"')
    purified_text = ''

    in_code_block = False
    lines = text.splitlines()
    for line_index in range(0, len(lines)-1):
        if in_code_block:
            if '```' in lines[line_index][2:]:
                in_code_block = False
        else:
            if lines[line_index].startswith('```') and '```' not in lines[line_index][2:]:
                in_code_block = True
        purified_text += lines[line_index] + ('  \\n' if in_code_block else '<br />')
    return purified_text + lines[len(lines)-1]


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
