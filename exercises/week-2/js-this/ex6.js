const coffeeShop = {
  beans: 40,
  money: 40,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 5},
    doubleShot: {beanRequirement: 15, price: 5},
    frenchPress: {beanRequirement: 12, price: 5}
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
      alert("Sorry, we don't make ${drinkType}")
      return
    } 
    
    let beanRequirement = this.drinkRequirements[drinkType].beanRequirement

    if (beanRequirement >= this.beans) {
        alert("Sorry, we're all out of beans!")
        return
    }

    this.beans -= beanRequirement
    this.money += this.drinkRequirements[drinkType].price
  },

  buyBeans: function (numBeans) {
    this.beans += numBeans
    this.money -= numBeans % 10
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"