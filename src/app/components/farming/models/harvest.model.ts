export class HarvestModel {
  constructor(
    public fieldId : string,
    public cultureId : string,
    public date: Date,
    public quantity: number,
    public quality?: string,
    public workers?: [any]    
  ) { }
}

