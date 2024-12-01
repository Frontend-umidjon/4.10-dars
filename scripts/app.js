// Student
export class Student {
    constructor(fname, lname, tel, adress) {
      this._fname = fname;
      this._lname = lname;
      this._tel = tel;
      this._adress = adress;
    }
  
    get fname() {
      return this._fname;
    }
  
    set fname(value) {
      this._fname = value;
    }
  
    get lname() {
      return this._lname;
    }
  
    set lname(value) {
      this._lname = value;
    }
  
    get tel() {
      return this._tel;
    }
  
    set tel(value) {
      this._tel = value;
    }
  
    get adress() {
      return this._adress;
    }
  
    set adress(value) {
      this._adress = value;
    }
  
    getFullName() {
      return `${this._fname} ${this._lname}`;
    }
  
    info() {
      return `${this.getFullName()} o'quvchining telefon raqami: ${this._tel} va manzili: ${this._adress}`;
    }
  }
  let student1 = new Student("John","Doe", "+998 99 999 99 99", "Tashkent");
  console.log(student1.getFullName());
  console.log(student1.info());
  
  // Teacher
  export class Teacher {
    constructor(fname, lname, salary, adress, level) {
      this._fname = fname;
      this._lname = lname;
      this._salary = salary;
      this._adress = adress;
      this._level = level;
    }
  
    get fname() {
      return this._fname;
    }
  
    set fname(value) {
      this._fname = value;
    }
  
    get lname() {
      return this._lname;
    }
  
    set lname(value) {
      this._lname = value;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(value) {
      this._salary = value;
    }
  
    get adress() {
      return this._adress;
    }
  
    set adress(value) {
      this._adress = value;
    }
  
    get level() {
      return this._level;
    }
  
    set level(value) {
      this._level = value;
    }
  
    getFullName() {
      return `${this._fname} ${this._lname}`;
    }
  
    info() {
      return `${this.getFullName()} o'qituvchi ${this._level} darajada ${this._salary} maosh oladi manzili: ${this._adress}`;
    }
  }

  let teacher1 = new Teacher("John","Doe", "500$", "Tashkent", "A");
  console.log(teacher1.getFullName());
  console.log(teacher1.info());
  
  // Group
  export class Group {
    constructor(name, room, level, studentCounts, teacher) {
      this._name = name;
      this._room = room;
      this._level = level;
      this._studentCounts = studentCounts;
      this._teacher = teacher;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get room() {
      return this._room;
    }
  
    set room(value) {
      this._room = value;
    }
  
    get level() {
      return this._level;
    }
  
    set level(value) {
      this._level = value;
    }
  
    get studentCounts() {
      return this._studentCounts;
    }
  
    set studentCounts(value) {
      this._studentCounts = value;
    }
  
    get teacher() {
      return this._teacher;
    }
  
    set teacher(value) {
      this._teacher = value;
    }
  
    fullInfo() {
      return `${this._name} guruh ${this._room} xonasi ${this._level} oy  o'quv o'quvchilar soni: ${this._studentCounts} o'qituvchi: ${this._teacher}`;
    }
  }
  
  let group1 = new Group("A", "A", "A", "A", "A");
  console.log(group1.fullInfo());
  // Payment
  export class Payment {
    constructor(from, to, amount, status) {
      this._from = from;
      this._to = to;
      this._amount = amount;
      this._date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      this._status = Boolean(status) ? "muvaffaqiyatli o'tqazildi" : "O'tkazish bekor qilindi";
    }
  
    get from() {
      return this._from;
    }
  
    set from(value) {
      this._from = value;
    }
  
    get to() {
      return this._to;
    }
  
    set to(value) {
      this._to = value;
    }
  
    get amount() {
      return this._amount;
    }
  
    set amount(value) {
      this._amount = value;
    }
  
    getStatus() {
      return `${this._from} dan ${this._to} ga  ${this._amount} miqdordagi pul  ${this._date} da ${this._status}`;
    }
  }

  let payment1 = new Payment("jamol", "jamshid", "100$", true);
  console.log(payment1.getStatus());


// Salary
export class Salary {
    constructor(to, amount, type, status) {
      this._to = to;
      this._amount = amount;
      this._type = type;
      this._date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      this._status = Boolean(status) ? "muvaffaqiyatli o'tqazildi" : "O'tkazish bekor qilindi";
    }
  
    get to() {
      return this._to;
    }
  
    set to(value) {
      this._to = value;
    }
  
    get amount() {
      return this._amount;
    }
  
    set amount(value) {
      this._amount = value;
    }
  
    get type() {
      return this._type;
    }
  
    set type(value) {
      this._type = value;
    }
  
    getInfo() {
      return `${this._to} ga ${this._amount} ${this._type} miqdordagi pul ${this._date} da ${this._status}`;
    }
  }
   let salary1 = new Salary("jamol", "100", "USD", true);
    console.log(salary1.getInfo());
  // Organization
  export class Organization {
    constructor(name, founder, address, employeeCount, roomCount) {
      this._name = name;
      this._founder = founder;
      this._address = address;
      this._employeeCount = employeeCount;
      this._roomCount = roomCount;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get founder() {
      return this._founder;
    }
  
    set founder(value) {
      this._founder = value;
    }
  
    get address() {
      return this._address;
    }
  
    set address(value) {
      this._address = value;
    }
  
    get employeeCount() {
      return this._employeeCount;
    }
  
    set employeeCount(value) {
      this._employeeCount = value;
    }
  
    get roomCount() {
      return this._roomCount;
    }
  
    set roomCount(value) {
      this._roomCount = value;
    }
  
    getInfo() {
      return `${this._name} organizatsiyasi ${this._founder} tashkilotchi ${this._address} manzilida joylashgan ${this._employeeCount} ishchisi bor va ${this._roomCount} xonasi bor`;
    }
  }
  let organization1 = new Organization("Najot Ta'lim", "Adhamjonov Temurbek", "Tashkent", "400", "150");
  console.log(organization1.getInfo());
  
  // Kurs
  export class Kurs {
    constructor(name, teacher, payment, room, duration) {
      this._name = name;
      this._teacher = teacher;
      this._payment = payment;
      this._room = room;
      this._duration = duration;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get teacher() {
      return this._teacher;
    }
  
    set teacher(value) {
      this._teacher = value;
    }
  
    get payment() {
      return this._payment;
    }
  
    set payment(value) {
      this._payment = value;
    }
  
    get room() {
      return this._room;
    }
  
    set room(value) {
      this._room = value;
    }
  
    get duration() {
      return this._duration;
    }
  
    set duration(value) {
      this._duration = value;
    }
  
    getFullInfo() {
      return `${this._name} kursi ${this._teacher} o'qituvchi Narxi:${this._payment} ${this._room} xonasi ${this._duration} oy davom etadi`;
    }
    
  }
  let kurs1 = new Kurs("React JS", "Boburmirzo Rosulov", "1_320_000 UZS", "SLACK", "8");
  console.log(kurs1.getFullInfo());
  
  // Room
  
  export class Room {
    constructor(name, tableCount, chairCount, projectorCount, whiteboardCount, boardCount, bigScreenCount) {
      this._name = name;
      this._tableCount = tableCount;
      this._chairCount = chairCount;
      this._projectorCount = projectorCount;
      this._whiteboardCount = whiteboardCount;
      this._boardCount = boardCount;
      this._bigScreenCount = bigScreenCount;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get tableCount() {
      return this._tableCount;
    }
  
    set tableCount(value) {
      this._tableCount = value;
    }
  
    get chairCount() {
      return this._chairCount;
    }
  
    set chairCount(value) {
      this._chairCount = value;
    }
  
    get projectorCount() {
      return this._projectorCount;
    }
  
    set projectorCount(value) {
      this._projectorCount = value;
    }
  
    get whiteboardCount() {
      return this._whiteboardCount;
    }
  
    set whiteboardCount(value) {
      this._whiteboardCount = value;
    }
  
    get boardCount() {
      return this._boardCount;
    }
  
    set boardCount(value) {
      this._boardCount = value;
    }
  
    get bigScreenCount() {
      return this._bigScreenCount;
    }
  
    set bigScreenCount(value) {
      this._bigScreenCount = value;
    }
  
    getFullInfo() {
      return `${this._name} xonasi ${this._tableCount} ta stol, ${this._chairCount} ta stul, ${this._projectorCount} ta proyektor, ${this._whiteboardCount} ta doska, ${this._boardCount} ta proyektor uchun doska, ${this._bigScreenCount} ta katta ekran`;
    }
  }
  
  const room1 = new Room("A", 10, 20, 3, 2, 1, 1);
  console.log(room1.getFullInfo());