# Comprehensive Test Suite - Code Learning Simulator

## Overview
This document contains comprehensive test cases for validating both core functions:
1. **Code → Data** (Code Analysis)
2. **Data → Code** (Code Generation)

Testing all 4 languages × all data types = 32+ test cases

---

## Test Cases: Code → Data (Analysis)

### Python Tests

#### Test 1.1: Integer Variable
**Input:**
```python
age = 25
print(age)
```
**Expected Output:**
- Summary: "Defines age=25 and prints it"
- Variables: [{name: "age", type: "int", value: "25"}]
- Steps: ["Line 1: Define variable 'age' with value 25", "Line 2: Print the value of 'age'"]
- Output: "25"

#### Test 1.2: String Variable
**Input:**
```python
name = "Sarah"
print(name)
```
**Expected Output:**
- Summary: "Defines name=Sarah and prints it"
- Variables: [{name: "name", type: "string", value: "Sarah"}]
- Steps: ["Line 1: Define variable 'name' with value Sarah", "Line 2: Print the value of 'name'"]
- Output: "Sarah"

#### Test 1.3: Float Variable
**Input:**
```python
gpa = 3.8
print(gpa)
```
**Expected Output:**
- Summary: "Defines gpa=3.8 and prints it"
- Variables: [{name: "gpa", type: "float", value: "3.8"}]
- Steps: ["Line 1: Define variable 'gpa' with value 3.8", "Line 2: Print the value of 'gpa'"]
- Output: "3.8"

#### Test 1.4: Boolean Variable
**Input:**
```python
is_active = True
print(is_active)
```
**Expected Output:**
- Summary: "Defines is_active=True and prints it"
- Variables: [{name: "is_active", type: "boolean", value: "True"}]
- Steps: ["Line 1: Define variable 'is_active' with value True", "Line 2: Print the value of 'is_active'"]
- Output: "True"

---

### Java Tests

#### Test 2.1: Integer Variable
**Input:**
```java
int count = 50;
System.out.println(count);
```
**Expected Output:**
- Summary: "Defines count=50 and prints it"
- Variables: [{name: "count", type: "int", value: "50"}]
- Steps: ["Line 1: Define variable 'count' with value 50", "Line 2: Print the value of 'count'"]
- Output: "50"

#### Test 2.2: String Variable
**Input:**
```java
String city = "Riyadh";
System.out.println(city);
```
**Expected Output:**
- Summary: "Defines city=Riyadh and prints it"
- Variables: [{name: "city", type: "String", value: "Riyadh"}]
- Steps: ["Line 1: Define variable 'city' with value Riyadh", "Line 2: Print the value of 'city'"]
- Output: "Riyadh"

#### Test 2.3: Double Variable
**Input:**
```java
double pi = 3.14;
System.out.println(pi);
```
**Expected Output:**
- Summary: "Defines pi=3.14 and prints it"
- Variables: [{name: "pi", type: "double", value: "3.14"}]
- Steps: ["Line 1: Define variable 'pi' with value 3.14", "Line 2: Print the value of 'pi'"]
- Output: "3.14"

#### Test 2.4: Boolean Variable
**Input:**
```java
boolean vip = true;
System.out.println(vip);
```
**Expected Output:**
- Summary: "Defines vip=true and prints it"
- Variables: [{name: "vip", type: "boolean", value: "true"}]
- Steps: ["Line 1: Define variable 'vip' with value true", "Line 2: Print the value of 'vip'"]
- Output: "true"

---

### TypeScript Tests

#### Test 3.1: Number Variable (Integer)
**Input:**
```typescript
let counter: number = 7;
console.log(counter);
```
**Expected Output:**
- Summary: "Defines counter=7 and prints it"
- Variables: [{name: "counter", type: "number", value: "7"}]
- Steps: ["Line 1: Define variable 'counter' with value 7", "Line 2: Print the value of 'counter'"]
- Output: "7"

#### Test 3.2: String Variable
**Input:**
```typescript
const title: string = "Report";
console.log(title);
```
**Expected Output:**
- Summary: "Defines title=Report and prints it"
- Variables: [{name: "title", type: "string", value: "Report"}]
- Steps: ["Line 1: Define variable 'title' with value Report", "Line 2: Print the value of 'title'"]
- Output: "Report"

#### Test 3.3: Number Variable (Decimal)
**Input:**
```typescript
const price: number = 19.99;
console.log(price);
```
**Expected Output:**
- Summary: "Defines price=19.99 and prints it"
- Variables: [{name: "price", type: "number", value: "19.99"}]
- Steps: ["Line 1: Define variable 'price' with value 19.99", "Line 2: Print the value of 'price'"]
- Output: "19.99"

#### Test 3.4: Boolean Variable
**Input:**
```typescript
let isReady: boolean = true;
console.log(isReady);
```
**Expected Output:**
- Summary: "Defines isReady=true and prints it"
- Variables: [{name: "isReady", type: "boolean", value: "true"}]
- Steps: ["Line 1: Define variable 'isReady' with value true", "Line 2: Print the value of 'isReady'"]
- Output: "true"

---

### C++ Tests

#### Test 4.1: Integer Variable
**Input:**
```cpp
int speed = 120;
std::cout << speed << std::endl;
```
**Expected Output:**
- Summary: "Defines speed=120 and prints it"
- Variables: [{name: "speed", type: "int", value: "120"}]
- Steps: ["Line 1: Define variable 'speed' with value 120", "Line 2: Print the value of 'speed'"]
- Output: "120"

#### Test 4.2: String Variable
**Input:**
```cpp
std::string name = "Ali";
std::cout << name << std::endl;
```
**Expected Output:**
- Summary: "Defines name=Ali and prints it"
- Variables: [{name: "name", type: "std::string", value: "Ali"}]
- Steps: ["Line 1: Define variable 'name' with value Ali", "Line 2: Print the value of 'name'"]
- Output: "Ali"

#### Test 4.3: Double Variable
**Input:**
```cpp
double temp = 36.6;
std::cout << temp << std::endl;
```
**Expected Output:**
- Summary: "Defines temp=36.6 and prints it"
- Variables: [{name: "temp", type: "double", value: "36.6"}]
- Steps: ["Line 1: Define variable 'temp' with value 36.6", "Line 2: Print the value of 'temp'"]
- Output: "36.6"

#### Test 4.4: Boolean Variable
**Input:**
```cpp
bool loggedIn = false;
std::cout << std::boolalpha << loggedIn << std::endl;
```
**Expected Output:**
- Summary: "Defines loggedIn=false and prints it"
- Variables: [{name: "loggedIn", type: "bool", value: "false"}]
- Steps: ["Line 1: Define variable 'loggedIn' with value false", "Line 2: Print the value of 'loggedIn'"]
- Output: "false"

---

## Test Cases: Data → Code (Generation)

### Python Generation Tests

#### Test 5.1: Name (String)
**Input:** "My name is Sarah"
**Expected Output:**
```python
name = "Sarah"
print(name)
```
**Output:** "Sarah"

#### Test 5.2: Age (Integer)
**Input:** "I am 30 years old"
**Expected Output:**
```python
age = 30
print(age)
```
**Output:** "30"

#### Test 5.3: GPA (Float)
**Input:** "The GPA is 4.2"
**Expected Output:**
```python
gpa = 4.2
print(gpa)
```
**Output:** "4.2"

#### Test 5.4: Status (Boolean)
**Input:** "The user is active true"
**Expected Output:**
```python
isActive = True
print(isActive)
```
**Output:** "True"

---

### Java Generation Tests

#### Test 6.1: City (String)
**Input:** "My city is Riyadh"
**Expected Output:**
```java
String city = "Riyadh";
System.out.println(city);
```
**Output:** "Riyadh"

#### Test 6.2: Temperature (Double)
**Input:** "The temperature is 22.5"
**Expected Output:**
```java
double temperature = 22.5;
System.out.println(temperature);
```
**Output:** "22.5"

#### Test 6.3: Score (Integer)
**Input:** "My score is 95"
**Expected Output:**
```java
int score = 95;
System.out.println(score);
```
**Output:** "95"

#### Test 6.4: Access (Boolean)
**Input:** "Access granted is false"
**Expected Output:**
```java
boolean hasAccess = false;
System.out.println(hasAccess);
```
**Output:** "false"

---

### TypeScript Generation Tests

#### Test 7.1: Count (Integer)
**Input:** "The count is 50"
**Expected Output:**
```typescript
const count: number = 50;
console.log(count);
```
**Output:** "50"

#### Test 7.2: Price (Decimal)
**Input:** "The price is 12.75"
**Expected Output:**
```typescript
const price: number = 12.75;
console.log(price);
```
**Output:** "12.75"

#### Test 7.3: Title (String)
**Input:** "The title is Book"
**Expected Output:**
```typescript
const title: string = "Book";
console.log(title);
```
**Output:** "Book"

#### Test 7.4: Status (Boolean)
**Input:** "The status is true"
**Expected Output:**
```typescript
let status: boolean = true;
console.log(status);
```
**Output:** "true"

---

### C++ Generation Tests

#### Test 8.1: Height (Integer)
**Input:** "The height is 180"
**Expected Output:**
```cpp
int height = 180;
std::cout << height << std::endl;
```
**Output:** "180"

#### Test 8.2: Weight (Double)
**Input:** "The weight is 72.5"
**Expected Output:**
```cpp
double weight = 72.5;
std::cout << weight << std::endl;
```
**Output:** "72.5"

#### Test 8.3: Name (String)
**Input:** "The name is Omar"
**Expected Output:**
```cpp
std::string name = "Omar";
std::cout << name << std::endl;
```
**Output:** "Omar"

#### Test 8.4: Admin Status (Boolean)
**Input:** "Is admin true"
**Expected Output:**
```cpp
bool isAdmin = true;
std::cout << std::boolalpha << isAdmin << std::endl;
```
**Output:** "true"

---

## Edge Cases & Advanced Tests

### Multi-Line Code
**Test:** Python with multiple variables
```python
x = 10
y = 20
print(x)
print(y)
```

### Mixed Types
**Test:** Java with different types
```java
int age = 25;
String name = "Ali";
double gpa = 3.8;
```

### Arabic Text Support
**Test:** "اسمي أحمد" → Should generate code with Arabic string

---

## Validation Checklist

### Code → Data Function
- [ ] Python: int, string, float, boolean ✓
- [ ] Java: int, double, String, boolean ✓
- [ ] TypeScript: number (int), number (decimal), string, boolean ✓
- [ ] C++: int, double, std::string, bool ✓

### Data → Code Function
- [ ] Python generation from natural language ✓
- [ ] Java generation from natural language ✓
- [ ] TypeScript generation from natural language ✓
- [ ] C++ generation from natural language ✓

### Cross-Reference with Appendix
- [ ] Variable patterns match appendix examples
- [ ] Output format matches appendix specifications
- [ ] Data types correctly identified per language
- [ ] Syntax follows language conventions

---

## Success Criteria

✅ **Pass:** Function correctly identifies/generates code
❌ **Fail:** Function produces incorrect output
⚠️ **Partial:** Function works but with minor formatting issues

### Expected Pass Rate
- **Target:** 95%+ pass rate across all test cases
- **Acceptable:** 90%+ with documented limitations
- **Concerning:** <90% indicates need for improvement

---

## Test Execution

Run each test case:
1. Input the test code/description
2. Click "Run"
3. Compare output with expected results
4. Document any discrepancies
5. Report findings

---

## Notes

- All tests based on appendix reference data
- Tests cover fundamental use cases
- Advanced features (loops, conditionals) not included
- Focus on single-variable declarations
- Output validation is critical
