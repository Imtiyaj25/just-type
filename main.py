import random
Wordbank=['wait', 'guilt', 'mobility', 'action', 'enter', 'awesome', 'better', 'over', 'again']
while True:
    printed=random.choice(Wordbank)
    print(printed)
    type1=str(input())
    if type1==printed:
        continue
    if type1=='exit':
        break
    else:
        print("Try again!")