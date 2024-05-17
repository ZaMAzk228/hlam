let salaryObj = {
    Nik: 1000000,
    Oleg: 100000,  
    Andy: 500000,
    Alex: 400000,
    sum: function(){
        return this.Nik + this.Oleg + this.Andy + this.Alex
    },

    middle: function(){
        return (this.Nik + this.Oleg + this.Andy + this.Alex) / 4
    },

    min: function() { 
        return 
     }, 
}

console.log(salaryObj)
console.log(salaryObj.sum())
console.log(salaryObj.middle())
console.log(salaryObj.min()); 
