/*
1.'number' + 23 + 32;
'number' + 23 = 'number23';
'number23'+32 = 'number2332';
Answer: 'number2332';

2.41 + 1 + 'number';
41+1 = 42;
42 + 'number' = '42number';
Answer: '42number';

3.null + 1;
object have null value + 1 = 1;
Answer: 1;

4.'five' + + 'two';
'five' + NaN (is not a valid number) = 'fiveNaN';
Answer: 'fiveNaN';

5. 2 && 7;
Answer:7;
If all operands were true, the last one is returned;

6. +'40' + +'2';
+'40' + +'2' = 42;
Answer: 42;
The unary operator + has higher precedence, so +'40' and +'2' will be evaluated as a positive integer value of 40 and 2, which equals 42;

7.'10' - 5 === 6;
Answer: false;
False because comparing 2 different data types;

8.true + false
Answer: 1
Because 1+0=1;

9.'4px' - 3;
Answer:NaN
Impossible arithmetic operation;

10.'4' - 3;
Answer: 1.
Because '4' operand is converted to a number;

11. '2' + 3 ** 2;
3**2 (exponentiation)=3*3 = 9;
'2'+9 = '29';
Answer: '29';

12. 12 / '6';
Answer: 2;
'6' operand is transformed into numbers;

13. 23 + 42 + 'number';
23+42 = 65;
65+'number' = '65number';
Answer: '65number';

14.'10' + (5 === 6);
'10' + false = '10false';
Answer: '10false';

15. 'number' + 15 + 3;
'number' +15 = 'number15';
'number15' + 3 = 'number153';

16. undefined + 1; 
Undefined is not being converted to anything; 
1 (Number) and undefined;
The result of Number + undefined is not a number or NaN;
Answer: NaN

17.'true' == true;
Answer: false;
If one of the oprends is a boolean and other is not, boolean is converter to number 0 or 1. so 1 == 'true' is false;

18.false == 'false'
First false is converted to a number, which gives:
0 == 'false'
Answer: false;

19.null == '';
null != 0;
Answer: false;

20. 3 ** (9 / 3);
3**3=27;
Answer: 27;

21. !!'false' == !!'true';
Boolean("false") //==true;
!"false";  // == false;
!!"false";  // == true;
From left to the right, first value is true;
Answer: true.

22. 0 || '0' && 1;
0 ||'0' its Boolean('0') == true (find the first true value);
'0' && 1 == 1 (&& if the first operand is true returns the second);
Answer: 1;

23. 1<2<3;
Because 1 < 2 evaluates as true which is less than 3;
Answer: true;

24. 'foo'+ + +'bar';
'foo' + NaN (is not a valid number) = 'fooNaN';
Answer: 'fooNaN';

25. 3 ** 2 / 3;
3**2 = 9;
9/3 = 3;
Answer:3;

26. 1 < 2 > 3;
1<2=true;
1>3=false;
Answer: false;

27.(+null == false) < 1;
+null == false //==true;
true<1 // ==false;
Answer: false;

28. false && true || true;
false && true // == false;
false || true // ==true
Answer:true;

29.false && (true || true);
true || true //==true;
false && true //==false;
Answer:false;

30. (+null == false) < 1 ** 5;
+null == false //==true;
true<1 // ==false;
false ** 5 = 0 ** 5 = 0;
Answer:0;

*/

