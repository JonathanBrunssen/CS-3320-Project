#import modules
import random
array = [[0,0,0],
         [0,0,0],
         [0,0,0],
         [0,0,0]]
values = [1,1,2,2,3,3,4,4,5,5,6,6]

#main starts here
for i in range(4):
    for j in range(3):
        item = random.choice(values)
        values.remove(item)
        array[i][j] = item
