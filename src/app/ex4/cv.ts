
export class Cv {
  id :number=123;
  name:string = 'chaima';
  firstname:string = 'raach';
  age:number =23;
  CIN:number = 1231;
  job:string = 'student';
  path:string= 'assets/images/rotating_card_profile.png';

  constructor(id : number, name: string , firstname: string , age: number , CIN: number , job: string , path: string ) {
      this.id=id ;
      this.name = name ;
      this.firstname = firstname;
      this.age = age;
      this.CIN = CIN;
      this.job = job;
      this.path = path;

  }
}