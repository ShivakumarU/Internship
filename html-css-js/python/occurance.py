string_input=input("enter any word:")
d={}
for i in string_input:
      if i in d:
            d[i]+=1
      else:
            d[i]=1
print(str(d))


