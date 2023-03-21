N=int(input("Enter the limit: "))
X=int(input("Enter the value of X : "))
sum=1
for i in range(1,N+1):
      sum=sum+X*i
print("sum of the series : ",sum)