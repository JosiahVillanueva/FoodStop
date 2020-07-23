export class StoreOpenningHours { 
  storeOpenningHoursId: number;
  id: number;
  day: number;
  open: string;
  close: string;

  constructor(storeOpenningHoursId: number, id:number, day:number, open:string, close:string) {
    this.storeOpenningHoursId = storeOpenningHoursId;
    this.id = id;
    this.day = day;
    this.open = open;
    this.close = close;
  }
}