# name=input("What is your name: ")
# print("Hello, " + name + "!")

while True:
  myName=input("What is your name? ")
  if myName.isalpha():
    print("Hello, " +myName+"!")
    break
  else:
    print("Letters only please!")

while True:
  num=input("Let's count from 1 to ")
  try:
    val=int(num)
    print("The number you entered is: ", val)
    break
  except ValueError:
    print("This is not a number. Please enter a valid number!")

# num=int(input("Let's count to: "))
# for x in range(num):
#   print(x+1)

def count():
  for x in range(1, val+1):
    print(x)
count()

print("By Even Numbers:")
def countEven():
  # for y in range(val):
  #   if y %2 == 0:
  #     yEven=(y+2)
  #     if yEven<=val:
  #       print(yEven)
  for y in range(1, val+1):
    if y %2 == 0:
      print(y, end=" ")
countEven()

print("\nBy Odd Numbers:")
def countOdd():
  for z in range(1, val+1):
    if z %2 != 0:
      print(z, end=" ")
countOdd()