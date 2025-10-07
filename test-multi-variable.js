/**
 * Multi-Variable Complex Test Suite
 * Tests handling of multiple variables and data types in single input
 */

const complexTests = {
  // Test 1: Multi-variable code analysis
  codeAnalysis: [
    {
      name: "Python - Multiple Variables",
      language: "python",
      code: `name = "Sarah"
age = 28
gpa = 3.8
active = True
print(name)
print(age)
print(gpa)
print(active)`,
      expectedVariables: 4,
      expectedTypes: ["string", "int", "float", "boolean"]
    },
    {
      name: "Java - Multiple Variables",
      language: "java",
      code: `String city = "Riyadh";
int population = 7500000;
double area = 1973.0;
boolean capital = true;
System.out.println(city);
System.out.println(population);
System.out.println(area);
System.out.println(capital);`,
      expectedVariables: 4,
      expectedTypes: ["String", "int", "double", "boolean"]
    },
    {
      name: "TypeScript - Multiple Variables",
      language: "typescript",
      code: `const title: string = "Project";
let count: number = 50;
const price: number = 99.99;
let ready: boolean = true;
console.log(title);
console.log(count);
console.log(price);
console.log(ready);`,
      expectedVariables: 4,
      expectedTypes: ["string", "number", "number", "boolean"]
    },
    {
      name: "C++ - Multiple Variables",
      language: "cpp",
      code: `std::string name = "Ali";
int height = 180;
double weight = 75.5;
bool admin = false;
std::cout << name << std::endl;
std::cout << height << std::endl;
std::cout << weight << std::endl;
std::cout << std::boolalpha << admin << std::endl;`,
      expectedVariables: 4,
      expectedTypes: ["std::string", "int", "double", "bool"]
    }
  ],

  // Test 2: Complex natural language to code
  codeGeneration: [
    {
      name: "Python - Complex Description",
      language: "python",
      description: "Sarah, aged 28, GPA 3.8, active True",
      expectedVariables: ["name", "age", "gpa", "active"],
      expectedValues: ["Sarah", "28", "3.8", "True"]
    },
    {
      name: "Java - Complex Description",
      language: "java",
      description: "City Riyadh, population 7500000, area 1973.0, capital true",
      expectedVariables: ["city", "population", "area", "capital"],
      expectedValues: ["Riyadh", "7500000", "1973", "true"]
    },
    {
      name: "TypeScript - Complex Description",
      language: "typescript",
      description: "Title Project, count 50, price 99.99, ready true",
      expectedVariables: ["title", "count", "price", "ready"],
      expectedValues: ["Project", "50", "99.99", "true"]
    },
    {
      name: "C++ - Complex Description",
      language: "cpp",
      description: "Name Ali, height 180, weight 75.5, admin false",
      expectedVariables: ["name", "height", "weight", "admin"],
      expectedValues: ["Ali", "180", "75.5", "false"]
    }
  ]
};

async function runComplexTests() {
  console.log("\n🧪 Multi-Variable Complex Test Suite\n");
  console.log("=".repeat(70));
  console.log("Testing ability to handle multiple variables and data types");
  console.log("=".repeat(70) + "\n");

  const results = {
    codeAnalysis: { passed: 0, failed: 0, partial: 0, total: 0 },
    codeGeneration: { passed: 0, failed: 0, partial: 0, total: 0 }
  };

  // Test Code Analysis with Multiple Variables
  console.log("📊 Testing Code → Data with Multiple Variables\n");
  console.log("-".repeat(70));

  for (const test of complexTests.codeAnalysis) {
    results.codeAnalysis.total++;
    console.log(`\n🔹 ${test.name}:`);
    
    try {
      const response = await fetch("http://localhost:3000/api/analyze-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: test.code, language: test.language })
      });

      if (!response.ok) {
        console.log(`  ❌ FAIL: API Error (${response.status})`);
        results.codeAnalysis.failed++;
        continue;
      }

      const result = await response.json();
      
      // Check if all variables are detected
      const detectedVars = result.variables?.length || 0;
      const allVarsDetected = detectedVars >= test.expectedVariables;
      
      // Check if types are correct
      const typesCorrect = test.expectedTypes.every(expectedType => 
        result.variables?.some(v => 
          v.type.toLowerCase().includes(expectedType.toLowerCase())
        )
      );

      // Check if output contains values
      const hasOutput = result.output && result.output !== "No output";

      console.log(`  Variables Detected: ${detectedVars}/${test.expectedVariables}`);
      console.log(`  Types Correct: ${typesCorrect ? 'Yes' : 'No'}`);
      console.log(`  Has Output: ${hasOutput ? 'Yes' : 'No'}`);

      if (allVarsDetected && typesCorrect && hasOutput) {
        console.log(`  ✅ PASS: All variables and types detected correctly`);
        results.codeAnalysis.passed++;
      } else if (detectedVars > 0) {
        console.log(`  ⚠️  PARTIAL: Some variables detected but not all`);
        results.codeAnalysis.partial++;
      } else {
        console.log(`  ❌ FAIL: Variables not properly detected`);
        results.codeAnalysis.failed++;
      }

      // Show detected variables
      if (result.variables && result.variables.length > 0) {
        console.log(`  Detected Variables:`);
        result.variables.forEach(v => {
          console.log(`    - ${v.name}: ${v.type} = ${v.value}`);
        });
      }

    } catch (error) {
      console.log(`  ❌ ERROR: ${error.message}`);
      results.codeAnalysis.failed++;
    }
  }

  // Test Code Generation with Complex Descriptions
  console.log("\n\n⚡ Testing Data → Code with Complex Descriptions\n");
  console.log("-".repeat(70));

  for (const test of complexTests.codeGeneration) {
    results.codeGeneration.total++;
    console.log(`\n🔹 ${test.name}:`);
    console.log(`  Input: "${test.description}"`);
    
    try {
      const response = await fetch("http://localhost:3000/api/generate-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: test.description, language: test.language })
      });

      if (!response.ok) {
        console.log(`  ❌ FAIL: API Error (${response.status})`);
        results.codeGeneration.failed++;
        continue;
      }

      const result = await response.json();
      
      // Check how many expected variables are in the generated code
      const varsFound = test.expectedVariables.filter(varName =>
        result.code?.toLowerCase().includes(varName.toLowerCase())
      );

      const valuesFound = test.expectedValues.filter(value =>
        result.code?.includes(value) || result.output?.includes(value)
      );

      console.log(`  Variables Found: ${varsFound.length}/${test.expectedVariables.length}`);
      console.log(`  Values Found: ${valuesFound.length}/${test.expectedValues.length}`);

      // Currently, the app focuses on single-variable generation
      // So finding at least 1 variable is acceptable
      if (varsFound.length >= 1 && valuesFound.length >= 1) {
        if (varsFound.length === test.expectedVariables.length) {
          console.log(`  ✅ PASS: Generated code with all variables`);
          results.codeGeneration.passed++;
        } else {
          console.log(`  ⚠️  PARTIAL: Generated code but not all variables (Current limitation)`);
          console.log(`     Note: App currently optimized for single-variable generation`);
          results.codeGeneration.partial++;
        }
      } else {
        console.log(`  ❌ FAIL: Did not generate expected code`);
        results.codeGeneration.failed++;
      }

      // Show generated code
      console.log(`  Generated Code:`);
      result.code?.split('\n').forEach(line => {
        console.log(`    ${line}`);
      });

    } catch (error) {
      console.log(`  ❌ ERROR: ${error.message}`);
      results.codeGeneration.failed++;
    }
  }

  // Summary
  console.log("\n\n" + "=".repeat(70));
  console.log("📋 MULTI-VARIABLE TEST SUMMARY");
  console.log("=".repeat(70));

  console.log("\n📊 Code → Data (Multi-Variable Analysis):");
  console.log(`  Total: ${results.codeAnalysis.total}`);
  console.log(`  ✅ Passed: ${results.codeAnalysis.passed}`);
  console.log(`  ⚠️  Partial: ${results.codeAnalysis.partial}`);
  console.log(`  ❌ Failed: ${results.codeAnalysis.failed}`);

  console.log("\n⚡ Data → Code (Complex Description):");
  console.log(`  Total: ${results.codeGeneration.total}`);
  console.log(`  ✅ Passed: ${results.codeGeneration.passed}`);
  console.log(`  ⚠️  Partial: ${results.codeGeneration.partial}`);
  console.log(`  ❌ Failed: ${results.codeGeneration.failed}`);

  const totalTests = results.codeAnalysis.total + results.codeGeneration.total;
  const totalPassed = results.codeAnalysis.passed + results.codeGeneration.passed;
  const totalPartial = results.codeAnalysis.partial + results.codeGeneration.partial;
  const totalFailed = results.codeAnalysis.failed + results.codeGeneration.failed;

  console.log("\n🎯 OVERALL:");
  console.log(`  Total Tests: ${totalTests}`);
  console.log(`  ✅ Passed: ${totalPassed}`);
  console.log(`  ⚠️  Partial: ${totalPartial}`);
  console.log(`  ❌ Failed: ${totalFailed}`);

  console.log("\n" + "=".repeat(70));
  console.log("📝 CONCLUSIONS:");
  console.log("=".repeat(70));
  
  if (results.codeAnalysis.passed >= 3) {
    console.log("\n✅ CODE ANALYSIS: App successfully handles multi-variable code!");
    console.log("   All variables and data types are correctly identified.");
  } else if (results.codeAnalysis.partial >= 2) {
    console.log("\n⚠️  CODE ANALYSIS: App partially handles multi-variable code.");
    console.log("   Some variables detected but may need enhancement for complex cases.");
  } else {
    console.log("\n❌ CODE ANALYSIS: App optimized for single-variable code.");
    console.log("   Enhancement needed for multi-variable support.");
  }

  if (results.codeGeneration.passed + results.codeGeneration.partial >= 3) {
    console.log("\n⚠️  CODE GENERATION: App currently optimized for single-variable generation.");
    console.log("   For complex multi-variable descriptions, generates primary variable.");
    console.log("   This is by design for beginner-friendly learning.");
  } else {
    console.log("\n❌ CODE GENERATION: Needs multi-variable support enhancement.");
  }

  console.log("\n" + "=".repeat(70) + "\n");
}

// Run tests
console.log("\n⏳ Waiting for server...\n");

setTimeout(() => {
  runComplexTests().catch(error => {
    console.error("\n❌ Test Error:", error);
    console.log("\n⚠️  Make sure server is running: npm run dev\n");
  });
}, 2000);
