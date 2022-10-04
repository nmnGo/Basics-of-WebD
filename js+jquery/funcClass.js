function houseKeeper(Exp, Name, Specs) {
    this.Exp = Exp;
    this.Name = Name;
    this.Specs = Specs;
}

var houseKeeper1 = new houseKeeper(9, "mary", ["bedroom", "LOBBY"]);

console.log(houseKeeper1.Name);