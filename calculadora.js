		function Calculator(num){
			return {
				// condition ? value if true : value if false
				answer : num ? num : 0,
				equals : function() {
					return this.answer
				},
				sumar : function(num) {
					this.answer += num ? num : 1
					return this
				},
				restar : function(num) {
					this.answer -= num ? num : 1
					return this
				},
				multiplicar : function(num) {
					this.answer *= num ? num : 1
					return this
				},
				dividir : function(num) {
					this.answer /= num ? num : 1
					return this
				},
			}
		}
			
		var calc = new Calculator()
		console.log("-- CALCULADORA JAVASCRIPT --")