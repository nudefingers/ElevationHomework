//write your code here to make the tests pass
class Document {
    constructor(name) {
        this.EmployeeName = name
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(office) {
        for (let index = 1; index <= 10; index++) {
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name
        this.employees = []
    }

    hireEmployee(name) {
        this.employees.push(new Employee(name))
    }

    askEmployeesToWork(office) {
        this.employees.forEach((emploee) => {
            emploee.work(office)
        })
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }

    clean() {
        console.log(`Clean`)
    }

}

class Office {
    constructor(name) {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name))
    }

    hireManager(name) {
        this.managers.push(new Manager(name))
    }

    startWorkDay(name) {
        this.managers.forEach((manager) => {
            manager.askEmployeesToWork(this)
        })

        this.cleaners.forEach((cleaner) => {
            cleaner.clean()
        })
    }
}

