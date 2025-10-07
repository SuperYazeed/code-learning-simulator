/**
 * Automated Test Suite for Code Learning Simulator
 * Tests both Code → Data and Data → Code functions
 * Across all 4 languages and data types
 */

const testCases = {
  codeAnalysis: {
    python: [
      {
        name: "Python Integer",
        code: "age = 25\nprint(age)",
        expected: {
          hasVariable: "age",
          hasType: "int",
          hasValue: "25",
          hasOutput: "25"
        }
      },
      {
        name: "Python String",
        code: 'name = "Sarah"\nprint(name)',
        expected: {
          hasVariable: "name",
          hasType: "string",
          hasValue: "Sarah",
          hasOutput: "Sarah"
        }
      },
      {
        name: "Python Float",
        code: "gpa = 3.8\nprint(gpa)",
        expected: {
          hasVariable: "gpa",
          hasType: "float",
          hasValue: "3.8",
          hasOutput: "3.8"
        }
      },
      {
        name: "Python Boolean",
        code: "is_active = True\nprint(is_active)",
        expected: {
          hasVariable: "is_active",
          hasType: "boolean",
          hasValue: "True",
          hasOutput: "True"
        }
      }
    ],
    java: [
      {
        name: "Java Integer",
        code: "int count = 50;\nSystem.out.println(count);",
        expected: {
          hasVariable: "count",
          hasType: "int",
          hasValue: "50",
          hasOutput: "50"
        }
      },
      {
        name: "Java String",
        code: 'String city = "Riyadh";\nSystem.out.println(city);',
        expected: {
          hasVariable: "city",
          hasType: "String",
          hasValue: "Riyadh",
          hasOutput: "Riyadh"
        }
      },
      {
        name: "Java Double",
        code: "double pi = 3.14;\nSystem.out.println(pi);",
        expected: {
          hasVariable: "pi",
          hasType: "double",
          hasValue: "3.14",
          hasOutput: "3.14"
        }
      },
      {
        name: "Java Boolean",
        code: "boolean vip = true;\nSystem.out.println(vip);",
        expected: {
          hasVariable: "vip",
          hasType: "boolean",
          hasValue: "true",
          hasOutput: "true"
        }
      }
    ],
    typescript: [
      {
        name: "TypeScript Number (Int)",
        code: "let counter: number = 7;\nconsole.log(counter);",
        expected: {
          hasVariable: "counter",
          hasType: "number",
          hasValue: "7",
          hasOutput: "7"
        }
      },
      {
        name: "TypeScript String",
        code: 'const title: string = "Report";\nconsole.log(title);',
        expected: {
          hasVariable: "title",
          hasType: "string",
          hasValue: "Report",
          hasOutput: "Report"
        }
      },
      {
        name: "TypeScript Number (Decimal)",
        code: "const price: number = 19.99;\nconsole.log(price);",
        expected: {
          hasVariable: "price",
          hasType: "number",
          hasValue: "19.99",
          hasOutput: "19.99"
        }
      },
      {
        name: "TypeScript Boolean",
        code: "let isReady: boolean = true;\nconsole.log(isReady);",
        expected: {
          hasVariable: "isReady",
          hasType: "boolean",
          hasValue: "true",
          hasOutput: "true"
        }
      }
    ],
    cpp: [
      {
        name: "C++ Integer",
        code: "int speed = 120;\nstd::cout << speed << std::endl;",
        expected: {
          hasVariable: "speed",
          hasType: "int",
          hasValue: "120",
          hasOutput: "120"
        }
      },
      {
        name: "C++ String",
        code: 'std::string name = "Ali";\nstd::cout << name << std::endl;',
        expected: {
          hasVariable: "name",
          hasType: "std::string",
          hasValue: "Ali",
          hasOutput: "Ali"
        }
      },
      {
        name: "C++ Double",
        code: "double temp = 36.6;\nstd::cout << temp << std::endl;",
        expected: {
          hasVariable: "temp",
          hasType: "double",
          hasValue: "36.6",
          hasOutput: "36.6"
        }
      },
      {
        name: "C++ Boolean",
        code: "bool loggedIn = false;\nstd::cout << std::boolalpha << loggedIn << std::endl;",
        expected: {
          hasVariable: "loggedIn",
          hasType: "bool",
          hasValue: "false",
          hasOutput: "false"
        }
      }
    ]
  },
  codeGeneration: {
    python: [
      { name: "Python Name", input: "My name is Sarah", expectedVar: "name", expectedValue: "Sarah" },
      { name: "Python Age", input: "I am 30 years old", expectedVar: "age", expectedValue: "30" },
      { name: "Python GPA", input: "The GPA is 4.2", expectedVar: "gpa", expectedValue: "4.2" },
      { name: "Python Status", input: "The user is active true", expectedVar: "isActive", expectedValue: "True" }
    ],
    java: [
      { name: "Java City", input: "My city is Riyadh", expectedVar: "city", expectedValue: "Riyadh" },
      { name: "Java Temperature", input: "The temperature is 22.5", expectedVar: "temperature", expectedValue: "22.5" },
      { name: "Java Score", input: "My score is 95", expectedVar: "score", expectedValue: "95" },
      { name: "Java Access", input: "Access granted is false", expectedVar: "hasAccess", expectedValue: "false" }
    ],
    typescript: [
      { name: "TypeScript Count", input: "The count is 50", expectedVar: "count", expectedValue: "50" },
      { name: "TypeScript Price", input: "The price is 12.75", expectedVar: "price", expectedValue: "12.75" },
      { name: "TypeScript Title", input: "The title is Book", expectedVar: "title", expectedValue: "Book" },
      { name: "TypeScript Status", input: "The status is true", expectedVar: "status", expectedValue: "true" }
    ],
    cpp: [
      { name: "C++ Height", input: "The height is 180", expectedVar: "height", expectedValue: "180" },
      { name: "C++ Weight", input: "The weight is 72.5", expectedVar: "weight", expectedValue: "72.5" },
      { name: "C++ Name", input: "The name is Omar", expectedVar: "name", expectedValue: "Omar" },
      { name: "C++ Admin", input: "Is admin true", expectedVar: "isAdmin", expectedValue: "true" }
    ]
  }
};

// Test runner
async function runTests() {
  console.log("🧪 Starting Comprehensive Test Suite for Code Learning Simulator\n");
  console.log("=".repeat(70));
  
  const results = {
    codeAnalysis: { passed: 0, failed: 0, total: 0 },
    codeGeneration: { passed: 0, failed: 0, total: 0 }
  };

  // Test Code → Data (Analysis)
  console.log("\n📊 Testing Code → Data (Analysis Function)\n");
  console.log("-".repeat(70));

  for (const [language, tests] of Object.entries(testCases.codeAnalysis)) {
    console.log(`\n🔹 ${language.toUpperCase()} Tests:`);
    
    for (const test of tests) {
      results.codeAnalysis.total++;
      
      try {
        const response = await fetch("http://localhost:3000/api/analyze-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: test.code, language })
        });

        if (!response.ok) {
          console.log(`  ❌ ${test.name}: API Error (${response.status})`);
          results.codeAnalysis.failed++;
          continue;
        }

        const result = await response.json();
        
        // Validate results
        const hasVariable = result.variables?.some(v => v.name === test.expected.hasVariable);
        const hasCorrectType = result.variables?.some(v => 
          v.name === test.expected.hasVariable && 
          v.type.toLowerCase().includes(test.expected.hasType.toLowerCase())
        );
        const hasCorrectValue = result.variables?.some(v => 
          v.name === test.expected.hasVariable && 
          v.value === test.expected.hasValue
        );
        const hasCorrectOutput = result.output?.includes(test.expected.hasOutput);

        if (hasVariable && hasCorrectType && hasCorrectValue && hasCorrectOutput) {
          console.log(`  ✅ ${test.name}: PASS`);
          results.codeAnalysis.passed++;
        } else {
          console.log(`  ⚠️  ${test.name}: PARTIAL`);
          if (!hasVariable) console.log(`     - Variable '${test.expected.hasVariable}' not found`);
          if (!hasCorrectType) console.log(`     - Expected type '${test.expected.hasType}'`);
          if (!hasCorrectValue) console.log(`     - Expected value '${test.expected.hasValue}'`);
          if (!hasCorrectOutput) console.log(`     - Expected output '${test.expected.hasOutput}'`);
          results.codeAnalysis.failed++;
        }
      } catch (error) {
        console.log(`  ❌ ${test.name}: ERROR - ${error.message}`);
        results.codeAnalysis.failed++;
      }
    }
  }

  // Test Data → Code (Generation)
  console.log("\n\n⚡ Testing Data → Code (Generation Function)\n");
  console.log("-".repeat(70));

  for (const [language, tests] of Object.entries(testCases.codeGeneration)) {
    console.log(`\n🔹 ${language.toUpperCase()} Tests:`);
    
    for (const test of tests) {
      results.codeGeneration.total++;
      
      try {
        const response = await fetch("http://localhost:3000/api/generate-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: test.input, language })
        });

        if (!response.ok) {
          console.log(`  ❌ ${test.name}: API Error (${response.status})`);
          results.codeGeneration.failed++;
          continue;
        }

        const result = await response.json();
        
        // Validate results
        const hasExpectedVar = result.code?.toLowerCase().includes(test.expectedVar.toLowerCase());
        const hasExpectedValue = result.code?.includes(test.expectedValue) || 
                                  result.output?.includes(test.expectedValue);

        if (hasExpectedVar && hasExpectedValue) {
          console.log(`  ✅ ${test.name}: PASS`);
          results.codeGeneration.passed++;
        } else {
          console.log(`  ⚠️  ${test.name}: PARTIAL`);
          if (!hasExpectedVar) console.log(`     - Expected variable '${test.expectedVar}'`);
          if (!hasExpectedValue) console.log(`     - Expected value '${test.expectedValue}'`);
          results.codeGeneration.failed++;
        }
      } catch (error) {
        console.log(`  ❌ ${test.name}: ERROR - ${error.message}`);
        results.codeGeneration.failed++;
      }
    }
  }

  // Summary
  console.log("\n\n" + "=".repeat(70));
  console.log("📋 TEST SUMMARY");
  console.log("=".repeat(70));
  
  console.log("\n📊 Code → Data (Analysis):");
  console.log(`  Total: ${results.codeAnalysis.total}`);
  console.log(`  ✅ Passed: ${results.codeAnalysis.passed}`);
  console.log(`  ❌ Failed: ${results.codeAnalysis.failed}`);
  console.log(`  📈 Success Rate: ${((results.codeAnalysis.passed / results.codeAnalysis.total) * 100).toFixed(1)}%`);

  console.log("\n⚡ Data → Code (Generation):");
  console.log(`  Total: ${results.codeGeneration.total}`);
  console.log(`  ✅ Passed: ${results.codeGeneration.passed}`);
  console.log(`  ❌ Failed: ${results.codeGeneration.failed}`);
  console.log(`  📈 Success Rate: ${((results.codeGeneration.passed / results.codeGeneration.total) * 100).toFixed(1)}%`);

  const totalTests = results.codeAnalysis.total + results.codeGeneration.total;
  const totalPassed = results.codeAnalysis.passed + results.codeGeneration.passed;
  const totalFailed = results.codeAnalysis.failed + results.codeGeneration.failed;

  console.log("\n🎯 OVERALL:");
  console.log(`  Total Tests: ${totalTests}`);
  console.log(`  ✅ Passed: ${totalPassed}`);
  console.log(`  ❌ Failed: ${totalFailed}`);
  console.log(`  📈 Overall Success Rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%`);

  const overallRate = (totalPassed / totalTests) * 100;
  console.log("\n" + "=".repeat(70));
  if (overallRate >= 95) {
    console.log("🎉 EXCELLENT! App functionality is working perfectly!");
  } else if (overallRate >= 90) {
    console.log("✅ GOOD! App functionality is acceptable with minor issues.");
  } else if (overallRate >= 80) {
    console.log("⚠️  ACCEPTABLE! Some functionality needs improvement.");
  } else {
    console.log("❌ NEEDS WORK! Significant functionality issues detected.");
  }
  console.log("=".repeat(70) + "\n");
}

// Run tests
console.log("\n⏳ Waiting for server to be ready...\n");

setTimeout(() => {
  runTests().catch(error => {
    console.error("\n❌ Test Suite Error:", error);
    console.log("\n⚠️  Make sure the development server is running:");
    console.log("   npm run dev\n");
  });
}, 2000);
