class Traveler {
    constructor(name, gender) {
        this.name = name
        this.food = 1
        this.isHealthy = true
        this.gender = gender
    }

    hunt() {
        
       return this.food = this.food + 2
    }
    eat() {
        if(this.food > 1) {
            this.food = this.food -1
            
            return
        }
   
        if(this.food === 1) {
            this.food = this.food - 1
            
            return
        }

        if(this.food === 0) {
            this.isHealthy = false
            return
        }
    }

} 