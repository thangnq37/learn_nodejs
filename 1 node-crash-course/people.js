
class People {
    constructor(name, yearOld) {
        this.name = name;
        this.yearOld = yearOld;
    }
    get(){
        return {name: this.name, ages: this.yearOld};
    }
}

class ListPeople{
    
    constructor(){
        this.peoples = [];
        this.CreateListPeople();
    }
    CreateListPeople(){
        let ar = [];
        const name = ['khoai', 'lang', 'thang', 'dang', 'o', 'dalat'];
        for (const n of name) {
            let people = new People(n, 10);
            ar.push(people);
        }
        this.peoples = [... ar];
    }
    getPeople(){
        return this.peoples;
    }
    add(p){
        this.peoples = [...this.peoples, p];
    }
}
module.exports = {
    ListPeople,
    People
};