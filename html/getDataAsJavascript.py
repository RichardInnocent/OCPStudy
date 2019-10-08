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
    purified_text = text.replace('"', '\\"').replace('<', '&lt;').replace('>', '&gt;')
    return parse_code(purified_text)


def parse_code(text):
    formatted_text = ''
    in_code_block = False
    consecutive_backticks = 0
    for letter_index in range(0, len(text)):
        if text[letter_index] == '`':
            consecutive_backticks += 1
        else:
            if consecutive_backticks == 1 or consecutive_backticks == 3:
                in_code_block = not in_code_block
                formatted_text += '<code>' if in_code_block else '</code>'

            if text[letter_index] == '\n':
                formatted_text += '</code><br /><code>' if in_code_block else '<br />'
            else:
                formatted_text += text[letter_index]
            consecutive_backticks = 0

    return formatted_text + "</code>" if in_code_block else formatted_text


def write(text):
    output.write(text)


if __name__ == '__main__':
    write('// Do not edit. Please edit the questions.json file instead\n\n')
    write('var questions = [\n')
    for i in range(0, len(questions) - 1):
        write_question(questions[i], ',')
    write_question(questions[len(questions) - 1])
    write('];')

    output.close()
